import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { connect } from 'react-redux';
import { logIn } from '../../actions/page_access';
import { Link } from 'react-router-dom';
class Login extends Component {
  state = {
    userEmail: '',
    password: ''
  };

  logIn = () => {
    let loginUser = {
      userEmail: this.state.userEmail,
      password: this.state.password
    };
    this.setState({
      message: 'please wait ...'
    });
    this.props.logIn(loginUser, this.props.history);
  };

  onChangeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div className="mt-5 row justify-content-center">
        <div>
          <div className="col-12 ">
            <h1 className="text-center">Users List</h1>
          </div>
          <Form className="border p-3 rounded">
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
              <Label for="userEmail" className="mr-sm-2">
                User name:
              </Label>
              <Input
                type="email"
                name="userEmail"
                id="email"
                placeholder="example@example.com"
                autoComplete="true"
                onChange={this.onChangeHandler}
              />
            </FormGroup>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
              <Label for="password" className="mr-sm-2">
                Password:
              </Label>
              <Input
                type="password"
                name="password"
                id="password"
                placeholder="********"
                autoComplete="true"
                onChange={this.onChangeHandler}
              />
            </FormGroup>
            <div>
              <Link to="/forgetpassword" className="pt-5">
                forget password
              </Link>
            </div>

            <div className="mt-3">
              <Link to="/signup">Singup</Link>
              <Button
                className="ml-2 mt-0 float-right"
                color="primary"
                onClick={this.logIn}
              >
                Login
              </Button>
            </div>
          </Form>
          {!this.props.failedMessage == '' ? (
            <div className="invalid-feedback d-block mt-2">
              {this.props.failedMessage}{' '}
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.reducer1.loggedIn,
  failedMessage: state.reducer1.failedMessage
});

export default connect(
  mapStateToProps,
  { logIn }
)(Login);