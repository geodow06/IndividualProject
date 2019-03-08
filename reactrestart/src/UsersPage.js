import React, { Component } from 'react';
import AddUser from './AddUser.js';
import GetAllUsers from './GetAllUsers.js';
class UsersPage extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {/* <AddUser /> */}
        <GetAllUsers />
      </div>
    );
  }
}

export default UsersPage;