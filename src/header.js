import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import { Link } from 'react-router-dom';


const NavBar = (props) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => setIsOpen(!isOpen);
  
    return (
      <div>
        <Navbar color="primary" dark expand="md">
          <NavbarBrand href="/">LMS</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mx-auto" navbar>
              <NavItem>
                <NavLink>Students</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Teachers
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem tag={Link} to="/">
                    Add Marks
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem tag={Link} to="/viewmarks">
                    View Marks
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem  tag={Link} to="/updatemarks" >
                    Update Marks
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem  tag={Link} to="/deletemarks"> 
                    Delete Marks
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
  
  export default NavBar