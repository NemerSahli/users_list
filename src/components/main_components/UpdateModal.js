import React, { Component } from 'react';
import TextInputGroup from './TextInputGroup';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { connect } from 'react-redux';
class UpdateModal extends Component {
  state = {
    errors: {}
  };

  handleSubmit = (value, event) => {
    event.preventDefault();
    let name = event.currentTarget.name.value;
    let email = event.currentTarget.email.value;
    let city = event.currentTarget.city.value;

    if (name === '') {
      this.setState({ errors: { name: 'Name is required' } });
      return;
    }
    if (email === '') {
      this.setState({ errors: { email: 'Email is required' } });
      return;
    }
    if (city === '') {
      this.setState({ errors: { city: 'city is required' } });
      return;
    }
    if (name === '' || email === '' || city === '') {
      return;
    } else {
      const newUserData = {
        _id: this.props.currentUser._id,
        username: name,
        city: city,
        email: email
      };
      event.currentTarget.reset();
      this.props.updateUserHandler(newUserData);
      this.setState({ errors: {} });
    }
  };
  render() {
    return (
      <div>
        <Modal
          isOpen={this.props.modalOpen}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.props.closeUpdateModal}>
            Modal title
          </ModalHeader>
          <ModalBody>
            <div className="container border border-default p-3 rounded">
              <form onSubmit={this.handleSubmit.bind(this, 'some data')}>
                <TextInputGroup
                  labelFor="name"
                  label="User Name:"
                  type="text"
                  placeholder="Enter user name"
                  name="name"
                  error={this.state.errors.name}
                  defaultValue={this.props.currentUser.username}
                />

                <TextInputGroup
                  labelFor="email"
                  label="Email:"
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  error={this.state.errors.email}
                  defaultValue={this.props.currentUser.email}
                />

                <TextInputGroup
                  labelFor="city"
                  label="City:"
                  type="text"
                  placeholder="Berlin"
                  name="city"
                  error={this.state.errors.city}
                  defaultValue={this.props.currentUser.city}
                />

                <Button type="submit" className="btn btn-primary">
                  Update User
                </Button>
              </form>
            </div>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  currentUser: state.reducer1.currentUser,
  modalOpen: state.reducer1.modalOpen
});
const mapDispatchToProps = dispatch => ({
  closeUpdateModal: () => dispatch({ type: 'CLOSE_UPDATE_MODAL' })
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UpdateModal);
