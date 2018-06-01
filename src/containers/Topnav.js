import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { Navbar, NavItem } from 'react-materialize';
// import { logout } from "../store/actions/auth";
// import Logo from "../images/warbler-logo.png";

class Topnav extends Component {
  render() {
    return (
      // <nav className="navbar navbar-expand">
      //   <div className="container-fluid">
      //     <div className="navbar-header">
      //       <Link to="/" className="navbar-brand">
      //         Swimstem
      //       </Link>
      //     </div>
      //   </div>
      // </nav>
      <Navbar brand="Swimstem" right />
    );
  }
}

// function mapStateToProps(state) {
//   return {
//     currentUser: state.currentUser
//   };
// }

// export default connect(mapStateToProps, { logout })(Navbar);

export default Topnav;
