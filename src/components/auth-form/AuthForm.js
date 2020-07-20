import React from "react";

import
{
  Form,
  Button
} from 'react-bootstrap'

import './AuthForm.scss';

function AuthForm(props) {

  return (
    <Form id="auth-form">
        <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
      <Form.Group>
        {/*<Form.Label>Email address</Form.Label>*/}
        <Form.Control type="email"
                      placeholder="Email address"
                      required=""
                      autoFocus="" />
      </Form.Group>

      <Form.Group>
        {/*<Form.Label>Password</Form.Label>*/}
        <Form.Control type="email"
                      placeholder="Password"
                      required="" />
      </Form.Group>
      <Form.Check
        type="checkbox"
        id="checkbox-remember-me"
        label="Remember me"
        className="mb-2"
      />
        <Button variant="primary" className="btn-block"
                type="submit">
          Sign in
        </Button>
    </Form>
  )
}

export default AuthForm;
