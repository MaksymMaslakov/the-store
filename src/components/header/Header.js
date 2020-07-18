import React from 'react';

import UserInfo from "./user-info";
import LoginButton from "../login-button";
import { Navbar } from 'react-bootstrap'

import './Header.scss';
import img from '../../some-img.jpg'

const user = {
  isLoggedIn: true,
  picture: img,
  name: 'Peter'
}

const { isLoggedIn } = user;

function Header() {
  return (
    <Navbar bg="dark" variant="dark" className="justify-content-between">
      <Navbar.Brand href="#home">TheStore</Navbar.Brand>
      <div>
        {
          isLoggedIn
            ? <UserInfo user={ user } />
            : <LoginButton isLoggedIn={ isLoggedIn } />
        }
      </div>
    </Navbar>
  );
}

export default Header;
