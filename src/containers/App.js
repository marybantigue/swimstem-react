import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '../store';
import { BrowserRouter as Router } from 'react-router-dom';
import Topnav from './Topnav';
import Main from './Main';

import { SideNav, SideNavItem, Button } from 'react-materialize';
// import { setAuthorizationToken, setCurrentUser } from "../store/actions/auth";
// import jwtDecode from "jwt-decode";

const store = configureStore();

// if (localStorage.jwtToken) {
//   setAuthorizationToken(localStorage.jwtToken);
//   // prevent someone from manually tampering with the key of jwtToken in localStorage
//   try {
//     store.dispatch(setCurrentUser(jwtDecode(localStorage.jwtToken)));
//   } catch (e) {
//     store.dispatch(setCurrentUser({}));
//   }
// }

const App = () => (
  <Provider store={store}>
    <Router>
      <div className="onboarding">
        <Topnav />

        <SideNav
          // trigger={<Button>SIDE NAV DEMO</Button>}
          isfixed="true"
          isopen="true"
          options={
            {
              // closeOnClick: true,
            }
          }
        >
          <SideNavItem
            userView
            user={{
              background: 'img/office.jpg',
              image: 'img/yuna.jpg',
              name: 'John Doe',
              email: 'jdandturk@gmail.com'
            }}
          />
          <SideNavItem href="#!icon" icon="cloud">
            First Link With Icon
          </SideNavItem>
          <SideNavItem href="#!second">Second Link</SideNavItem>
          <SideNavItem divider />
          <SideNavItem subheader>Subheader</SideNavItem>
          <SideNavItem waves href="#!third">
            Third Link With Waves
          </SideNavItem>
        </SideNav>
        <Main />
      </div>
    </Router>
  </Provider>
);

export default App;
