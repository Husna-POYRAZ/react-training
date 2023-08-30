import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import CartSummary from "./CartSummary";

function Navi(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="xl">
        <NavbarBrand href="/">Nortwind App</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
                GitHub
              </NavLink>
            </NavItem>
          </Nav>
          <Nav>
            <NavLink href="/user-form">User</NavLink>
          </Nav>
          <Nav>
            <NavLink href="/user-register">User Info</NavLink>
          </Nav>
          <CartSummary
            cart={props.cart}
            removeFromCart={props.removeFromCart}
          />
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navi;
