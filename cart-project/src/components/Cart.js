import React from "react";

class Cart extends React.Component {
  render() {
    let { cart } = this.props;
    return (
      <div>
        <hr />
        <div className="row">
          <div className="col-lg-2 col-md-2 col-sm-2 cart-sm">
            <img
              src={cart.property.image}
              className="img-cart"
            />
          </div>
          <div className="col-lg-2 col-md-2 col-sm-2 col-3">
            {cart.property.name}
          </div>
          <div className="col-lg-2 col-md-2 col-sm-2 col-3">
            {cart.property.price}
          </div>
          <div className="col-lg-2 col-md-2 col-sm-2 col-2">
            <p className="amount">{cart.quantity}</p>
            <button type="button" className="btn-add mr-2">
              +
            </button>
            <button type="button" className="btn-lower">
              -
            </button>
          </div>
          <div className="col-lg-2 col-md-2 col-sm-2 col-2">Tổng cộng</div>
          <div className="col-lg-2 col-md-2 col-sm-2 col-2">
            <button className="btn btn-danger align-btn">Hủy</button>
          </div>
        </div>
        <hr />
      </div>
    );
  }
}

export default Cart;
