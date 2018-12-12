import React, { Component } from 'react';
import TextInputGroup from '../layout/TextInputGroup';
import { connect } from 'react-redux';
import { addUser } from '../../actions/actions';

class AddUser extends Component {
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
      const newUser = {
        username: name,
        email: email,
        city: city
      };

      this.props.addUser(newUser);
      event.currentTarget.reset();
      this.setState({ errors: {} });
      this.props.history.push('/users');
    }
  };

  render() {
    return (
      <div className="container border border-default p-3 rounded">
        <form onSubmit={this.handleSubmit.bind(this, 'some data')}>
          <TextInputGroup
            labelFor="name"
            label="User Name:"
            type="text"
            placeholder="Enter user name"
            name="name"
            error={this.state.errors.name}
            className={this.state.succes}
          />

          <TextInputGroup
            labelFor="email"
            label="Email:"
            type="email"
            placeholder="Enter email"
            name="email"
            error={this.state.errors.email}
          />

          <TextInputGroup
            labelFor="city"
            label="City:"
            type="text"
            placeholder="Berlin"
            name="city"
            error={this.state.errors.city}
          />

          <button type="submit" className="btn btn-primary">
            Add Contanct
          </button>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { addUser }
)(AddUser);
