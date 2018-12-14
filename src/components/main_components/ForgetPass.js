import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { connect } from 'react-redux';
import { forgetPassword } from '../../actions/page_access';
import { Link } from 'react-router-dom';
class SignUp extends Component {
  state = {
    userEmail: '',
    errors: null
  };

  forgetPassword = () => {
    const { userEmail } = this.state;
    if (userEmail === '') {
      this.setState({ errors: { userEmail: 'Email is required' } });
      return;
    }
    let forgetPassUser = {
      userEmail: userEmail
    };
    this.props.forgetPassword(forgetPassUser, this.props.history);
    this.setState({ errors: {} });
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
                Please enter your Email
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

            <Button
              className="mt-3 ml-2"
              color="primary"
              onClick={this.forgetPassword}
            >
              send
            </Button>
            <Link to="/" className="float-right mt-3 mr-2">
              back
            </Link>
          </Form>

          {!this.props.forgetPassFailedMessage == '' ? (
            <div className="invalid-feedback d-block">
              {this.props.forgetPassFailedMessage}{' '}
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.reducer1.loggedIn,
  forgetPassFailedMessage: state.reducer1.forgetPassFailedMessage
});

export default connect(
  mapStateToProps,
  { forgetPassword }
)(SignUp);
