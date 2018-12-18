import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table } from 'reactstrap';
import User from './User';
import {
  loadUsers,
  deleteUser,
  updateUser,
  openUpdateModal
} from '../../actions/actions';
import UpdateModal from './UpdateModal';
class Users extends Component {
  componentDidMount() {
    if (this.props.loggedIn && !this.props.users) {
      this.props.loadUsers();
    }
  }
  updateUser = newUser => {
    this.props.updateUser(newUser);
    this.props.history.push('./users');
  };

  deleteUser = userId => {
    this.props.deleteUser(userId);
  };

  render() {
    return (
      <div>
        {this.props.loggedIn && (
          <Table hover>
            <thead>
              <tr>
                <th>User Name</th>
                <th>Email</th>
                <th>City</th>
                <th>
                  <span className="float-right">Action</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {this.props.users &&
                this.props.users.map(user => {
                  return (
                    <User
                      id={user._id}
                      key={user._id}
                      userName={user.username}
                      email={user.email}
                      city={user.city}
                      openUpdateModalHandler={this.props.openUpdateModal.bind(
                        this,
                        user._id
                      )}
                      deleteUserHandler={this.deleteUser}
                    />
                  );
                })}
            </tbody>
          </Table>
        )}
        <UpdateModal updateUserHandler={this.updateUser} />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  users: state.reducer1.users,
  loggedIn: state.reducer1.loggedIn
});

export default connect(
  mapStateToProps,
  { loadUsers, deleteUser, updateUser, openUpdateModal }
)(Users);
