import firebase from 'firebase';
import firebaseui from 'firebaseui';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AuthForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      username: '',
      password: ''
    };
  }

  render() {
    const { email, username, password, profileImageUrl } = this.state;
    const {
      signUp,
      heading,
      buttonText,
      errors,
      history,
      removeError
    } = this.props;

    var ui = new firebaseui.auth.AuthUI(firebase.auth());
    ui.start('#firebaseui-auth-container', {
      signInOptions: [firebase.auth.EmailAuthProvider.PROVIDER_ID]
      // Other config options...
    });

    history.listen(() => {
      removeError();
    });

    return <div id="firebaseui-auth-container" />;
  }
}

export default AuthForm;
