import React, { useContext } from 'react';
import { connect } from 'react-redux'
import { logoutUser } from '../../redux/actions'
import TheStoreContext from "../the-store-context";

import { Link } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'

import './Header.scss';

function Header({isLoggedIn, logout}) {
  const storeService = useContext(TheStoreContext)

  return (
    <Navbar id="header" className="justify-content-between">
      <Navbar.Brand>
        <Link to='/'>
          TheStore
        </Link>
      </Navbar.Brand>
      {isLoggedIn
        && <Nav.Link onClick={() => logout(storeService)}>
          Logout
        </Nav.Link>
      }
    </Navbar>
  );
}
const mapStateToProps = ({ user }) => {
  return {
    isLoggedIn: user.isLoggedIn
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: (service) => dispatch(logoutUser(service))
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Header);
