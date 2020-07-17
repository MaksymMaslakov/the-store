import React from 'react';

import { Nav, DropdownButton, Dropdown } from 'react-bootstrap';

import './UserInfo.scss';

function UserInfo(props) {
  const { picture, name } = props.user

  return (
    <Nav id="user-info" className=" d-flex align-items-center">
      <div className="user-picture">
        <img src={ picture } alt="avatar"/>
      </div>
      <DropdownButton id="dropdown-basic-button" title={ name }>
        <Dropdown.Item href="#" onClick={ () => {}}>Logout</Dropdown.Item>
      </DropdownButton>
    </Nav>
  );
}

export default UserInfo;
