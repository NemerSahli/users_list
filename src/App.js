import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';
import Users from './components/main_components/Users';
import Login from './components/main_components/Login';
import AddUser from './components/main_components/AddUser';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from './components/layout/Header';
import { logOut } from './actions/page_access';
import SignUp from './components/main_components/SignUp';
import SingUpSuccessful from './components/pages/SingUpSuccessful';
import ForgetPass from './components/main_components/ForgetPass';

class App extends Component {
  routeToLogOut = () => {
    this.props.logOut();
  };
  render() {
    return (
      <Router>
        <div>
          {this.props.loggedIn ? (
            <Header logOutHandler={this.routeToLogOut} />
          ) : null}
          <div className="container">
            <Switch>
              <Route exact path="/" component={Login} />
              <Route exact path="/signup" component={SignUp} />
              <Route exact path="/forgetpass" component={ForgetPass} />
              <Route
                exact
                path="/signupsuccessful"
                component={SingUpSuccessful}
              />
              {this.props.loggedIn ? (
                <div>
                  <Route path="/adduser" component={AddUser} />
                  <Route path="/users" component={Users} />
                  <Route path="/about" component={About} />
                </div>
              ) : null}
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}
const mapStateToProps = state => ({
  loggedIn: state.reducer1.loggedIn
});
export default connect(
  mapStateToProps,
  { logOut }
)(App);
