import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { connect } from 'react-redux';
import { signUp } from '../../actions/page_access';
import { Link } from 'react-router-dom';
class SignUp extends Component {
  state = {
    userEmail: '',
    password: '',
    confirmPass: '',
    errors: null
  };

  signUp = () => {
    const { userEmail, password, confirmPass } = this.state;
    if (userEmail === '') {
      this.setState({ errors: { userEmail: 'Email is required' } });
      return;
    }

    if (password === '') {
      this.setState({ errors: { password: 'Password is required' } });
      return;
    }
    if (confirmPass === '') {
      this.setState({
        errors: { confirmPass: 'Confirm password is required' }
      });
      return;
    }
    if (userEmail === '' || password === '' || confirmPass === '') {
      return;
    } else {
      if (this.state.password === this.state.confirmPass) {
        let signUpUser = {
          userEmail: this.state.userEmail,
          password: this.state.password
        };

        this.props.signUp(signUpUser, this.props.history);
        this.setState({ errors: {} });
      } else {
        this.setState({ errors: { confirmPass: 'wrong confirmation' } });
      }
    }
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
            <h5 className="ml-2">Fill your information:</h5>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
              <Label for="userEmail" className="mr-sm-2">
                Email:
              </Label>
              <Input
                type="email"
                name="userEmail"
                id="email"
                placeholder="example@example.com"
                autoComplete="true"
                onChange={this.onChangeHandler}
              />
              {this.state.errors && (
                <div className="invalid-feedback d-block">
                  {' '}
                  {this.state.errors.userEmail}{' '}
                </div>
              )}
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
              {this.state.errors && (
                <div className="invalid-feedback d-block">
                  {' '}
                  {this.state.errors.password}{' '}
                </div>
              )}
            </FormGroup>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
              <Label for="password" className="mr-sm-2">
                Confirm Password:
              </Label>
              <Input
                type="password"
                name="confirmPass"
                id="confirmPass"
                placeholder="********"
                autoComplete="true"
                onChange={this.onChangeHandler}
              />
              {this.state.errors && (
                <div className="invalid-feedback d-block">
                  {' '}
                  {this.state.errors.confirmPass}{' '}
                </div>
              )}
            </FormGroup>

            <Button className="mt-3 ml-2" color="primary" onClick={this.signUp}>
              Signup
            </Button>
            <Link to="/" className="float-right mt-3 mr-2">
              back
            </Link>
          </Form>

          {!this.props.failedMessage == '' ? (
            <div className="invalid-feedback d-block">
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
// const mapDispatchToProps = dispatch => ({
//   logIn: () => dispatch({ type: 'LOGIN' }),
//   logOut: () => dispatch({ type: 'LOGOUT' })
// });

export default connect(
  mapStateToProps,
  { signUp }
)(SignUp);
