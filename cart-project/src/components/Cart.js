import React from "react";

class Cart extends React.Component {
  render() {
    return (
      <div>
        <hr />
        <div className="row">
          <div className="col-lg-2 col-md-2 col-sm-2 cart-sm">
            <img
              src="/template-card/img/iphone-7-plus.jpg"
              className="img-cart"
            />
          </div>
          <div className="col-lg-2 col-md-2 col-sm-2 col-3">Iphone 7 Plus</div>
          <div className="col-lg-2 col-md-2 col-sm-2 col-3">7000000</div>
          <div className="col-lg-2 col-md-2 col-sm-2 col-2">
            <p className="amount">1</p>
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
