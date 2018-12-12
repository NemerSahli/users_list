// import React from 'react';
import { Link } from 'react-router-dom';
// const Header = props => {
//   return (
//     <div className="navbar navbar-expand-sm navbar-dark alert-info mb-3 bg py-0">
//       <div className="container">
//         <div className="navbar-brand text-dark">Users List</div>
//       </div>
//       <div>
//         <ul className="navbar-nav mr-auto">
//           <li>
//             <Link to="users" className="navbar-brand text-dark">
//               <i className="fas fa-home"> </i> Home |
//             </Link>
//           </li>
//           <li>
//             <Link to="/adduser" className="navbar-brand text-dark ml-3">
//               <i className="fas fa-user-plus"> </i>Add User |
//             </Link>
//           </li>
//           <li>
//             <Link to="/about" className="navbar-brand text-dark  ml-2">
//               <i className="fas fa-book" /> About |
//             </Link>
//           </li>
//           <li>
//             <i className="">
//               <Link
//                 to="/"
//                 style={{ cursor: 'pointer' }}
//                 onClick={props.logOutHandler}
//                 className="navbar-brand text-dark"
//               >
//                 <i className="far fa-arrow-alt-circle-right" />
//               </Link>
//             </i>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };

//export default Header;

import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from 'reactstrap';

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/users" className="hoverme">
            Users List
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem className="hoverme">
                <Link to="users" className="navbar-brand text-dark">
                  <i className="fas fa-home" /> Home
                </Link>
              </NavItem>

              <NavItem className="hoverme">
                <Link to="/adduser" className="navbar-brand text-dark ml-3">
                  <i className="fas fa-user-plus" /> Add User
                </Link>
              </NavItem>

              <NavItem className="hoverme">
                <Link to="/about" className="navbar-brand text-dark  ml-2">
                  <i className="fas fa-book" /> About
                </Link>
              </NavItem>

              <NavItem className="hoverme text-center">
                <Link
                  to="/"
                  style={{ cursor: 'pointer' }}
                  onClick={this.props.logOutHandler}
                  className="navbar-brand text-dark"
                >
                  <i className="far fa-arrow-alt-circle-right" />
                </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
