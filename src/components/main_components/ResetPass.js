import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { connect } from 'react-redux';
import { resetPassword } from '../../actions/page_access';
import { Link } from 'react-router-dom';
class ResetPass extends Component {
  state = {
    activationKey: '',
    password: '',
    confirmPass: '',
    errors: null
  };
  constructor() {
    super();
    this.state.activationKey = window.location.href.split('q=')[1];
  }

  resetPass = () => {
    const { password, confirmPass } = this.state;

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
    if (password === '' || confirmPass === '') {
      return;
    } else {
      if (this.state.password === this.state.confirmPass) {
        let resetPassEmail = {
          activationKey: this.state.activationKey,
          password: this.state.password
        };

        this.props.resetPassword(resetPassEmail, this.props.history);
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
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
              <Label for="password" className="mr-sm-2">
                Enter new password:
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

            <Button
              className="mt-3 ml-2"
              color="primary"
              onClick={this.resetPass}
            >
              submit
            </Button>
            <Link to="/" className="float-right mt-3 mr-2">
              back
            </Link>
          </Form>

          {!this.props.signUpFailedMessage == '' ? (
            <div className="invalid-feedback d-block">
              {this.props.signUpFailedMessage}{' '}
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.reducer1.loggedIn,
  signUpFailedMessage: state.reducer1.signUpFailedMessage
});

export default connect(
  mapStateToProps,
  { resetPassword }
)(ResetPass);
