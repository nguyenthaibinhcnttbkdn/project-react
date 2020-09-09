import React from "react";
import Cart from "./Cart";
class CartList extends React.Component {
  render() {
    let {children} = this.props;
    return (
      <div>
        <section className="cart">
          <div className="container">
            <div className="row">
              <div className="col-lg-2 col-md-2 col-sm-2" />
              <div className="col-lg-2 col-md-2 col-sm-2 col-3 text-cart">
                Sản Phẩm
              </div>
              <div className="col-lg-2 col-md-2 col-sm-2 col-3 text-cart">
                Giá
              </div>
              <div className="col-lg-2 col-md-2 col-sm-2 col-2 text-cart">
                Số Lượng
              </div>
              <div className="col-lg-4 col-md-2 col-sm-2 col-2 text-cart">
                Tổng cộng
              </div>
            </div>
          </div>
          {children}
        </section>
      </div>
    );
  }
}

export default CartList;
