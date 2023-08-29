import React, { Component } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Badge,
  Nav,
  NavLink,
} from "reactstrap";

export default class CartSummary extends Component {
  renderSummary() {
    // return JSX
    return (
      <UncontrolledDropdown>
        <DropdownToggle nav caret>
          Your Cart
        </DropdownToggle>
        <DropdownMenu>
          {this.props.cart.map((cartItem) => (
            <DropdownItem key={cartItem.product.id}>
              <Badge
                color="danger"
                onClick={() => this.props.removeFromCart(cartItem.product)}
              >
                x
              </Badge>
              {cartItem.product.productName}
              <Badge color="success">{cartItem.quantity}</Badge>
            </DropdownItem>
          ))}
          <DropdownItem divider />
          <DropdownItem>
            {/* /cart linkine git */}
            <Link to="cart">Go to Cart</Link>
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    );
  }

  renderEmptyCard() {
    return (
      <Nav>
        <NavLink>Empty Cart</NavLink>
      </Nav>
    );
  }

  render() {
    return (
      <div>
        {/* sepet dolu mu boş mu? */}
        {this.props.cart.length > 0
          ? this.renderSummary()
          : this.renderEmptyCard()}
      </div>
    );
  }
}
