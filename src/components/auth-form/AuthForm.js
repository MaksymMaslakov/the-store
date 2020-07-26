import React, {useContext, useState} from "react";
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { authUser } from '../../redux/actions'
import TheStoreContext from "../the-store-context";

import {  Form, Button, Spinner } from 'react-bootstrap'

import './AuthForm.scss';

function AuthForm(props) {
  const storeService = useContext(TheStoreContext)

  const { error, isFetching } = props;
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [action, setAction] = useState('SIGN_UP')

  const isFormFill = ((email.length !== 0) && (password.length !== 0))

  const submitHandler = (event) => {
    event.preventDefault();

    const form = event.currentTarget;

    console.log("Submited")
    if (form.checkValidity() === false) {
      event.stopPropagation();

      console.log('form is not correct')
    }else{
      console.log('form is  correct')
      props.authUser(storeService, email, password, action)
    }
  }

  return (
    <Form id="auth-form"  onSubmit={submitHandler}>
      <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
      <Form.Group>
        <Form.Control type="email"
                      placeholder="Email address"
                      required
                      autoFocus=""
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}/>
      </Form.Group>

      <Form.Group>
        <Form.Control type="password"
                      placeholder="Password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}/>
      </Form.Group>
      <Form.Group>
        <Button variant="primary" className="btn-block"
                type="submit"
                onClick={() => setAction('SIGN_IN')}
                disabled={!isFormFill}>
          Sign in
        </Button>
        <Button variant="warning" className="btn-block"
                type="submit"
                onClick={() => setAction('SIGN_UP')}
                disabled={!isFormFill}>
          Sign up
        </Button>
      </Form.Group>
      {isFetching && <Spinner animation="border" size="sm"/>}
      {error && <p>{error.message}</p>}
    </Form>
  )
}

const mapStateToProps = ({user}) => {
  return {
    ...user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    authUser: authUser(dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(
                  withRouter(AuthForm));
