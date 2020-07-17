import React from 'react';

import './LoginButton.scss';
import {Button} from "react-bootstrap";

function LoginButton(props) {
  // TODO: повесить обработчик логин события
  return (
    <Button
      variant="outline-primary"
      onClick={() => {}}>
      { props.isLoggedIn ? 'Logout' : 'Login'}
    </Button>
  );
}

export default LoginButton;
