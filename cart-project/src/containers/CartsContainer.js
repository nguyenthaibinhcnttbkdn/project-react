import React from "react";
import { connect } from "react-redux";
import CartList from "./../components/CartList";
import Cart from "./../components/Cart";
import * as actions from './../actions/index';
class CartsContainer extends React.Component {
  render() {
    let { carts } = this.props;
    return <CartList>{this.showCartItem(carts)}</CartList>;
  }
  showCartItem = (carts) => {
    let result = null;
    if (carts.length > 0) {
      result = carts.map((cart, index) => {
        return <Cart key={index} cart={cart} />;
      });
    }
    return result;
  };
}
const mapStateToProps = (state) => {
  return {
    carts: state.carts,
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    actAddToCart: (product, quantity) => {
        dispatch(actions.actAddToCart(product,quantity))
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CartsContainer);
