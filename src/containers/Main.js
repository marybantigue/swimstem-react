import React from 'react';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
// import Team from "../components/Team";
// import AuthForm from "../components/AuthForm";
// import { authUser } from "../store/actions/auth";
// import { removeError } from "../store/actions/errors";
// import withAuth from "../hocs/withAuth";
import TeamForm from '../containers/TeamForm';
import AuthForm from '../components/AuthForm';

const Main = props => {
  const { authUser, errors, removeError, currentUser } = props;
  return (
    <main>
      <div className="container">
        <Switch>
          <Route
            path="/team"
            // component={withAuth(TeamForm)}
            render={props => <TeamForm {...props} />}
          />
          <Route
            path="/login"
            // component={withAuth(TeamForm)}
            render={props => <AuthForm {...props} />}
          />
          {/* <Route
          exact
          path="/"
          render={props => <Homepage currentUser={currentUser} {...props} />}
        />
        <Route
          exact
          path="/signin"
          render={props => {
            return (
              <AuthForm
                removeError={removeError}
                errors={errors}
                onAuth={authUser}
                buttonText="Log in"
                heading="Welcome Back."
                {...props}
              />
            );
          }}
        />
        <Route
          exact
          path="/signup"
          render={props => {
            return (
              <AuthForm
                removeError={removeError}
                errors={errors}
                onAuth={authUser}
                signUp
                buttonText="Sign me up!"
                heading="Join Warbler today."
                {...props}
              />
            );
          }}
        />
        <Route
          path="/users/:id/messages/new"
          component={withAuth(MessageForm)}
        /> */}
        </Switch>
      </div>
    </main>
  );
};

// function mapStateToProps(state) {
//   return {
//     currentUser: state.currentUser,
//     errors: state.errors
//   };
// }

// export default withRouter(
//   connect(mapStateToProps, { authUser, removeError })(Main)
// );

export default Main;
