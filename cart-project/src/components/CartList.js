import React from "react";
import Cart from "./Cart";
import { connect } from "react-redux";
class CartList extends React.Component {
  render() {
    let { children } = this.props;
    let { carts } = this.props;
    console.log(carts);
    return (
      <div>
        <section className="cart">
          <div className="container">
            <div className="row">
              <div className="col-lg-2 col-md-2 col-sm-2" />
              <div className="col-lg-2 col-md-2 col-sm-2 col-3 text-cart">
                {carts.length > 0 ? "Sản Phẩm" : ""}
              </div>
              <div className="col-lg-2 col-md-2 col-sm-2 col-3 text-cart">
                {carts.length > 0 ? "Giá" : ""}
              </div>
              <div className="col-lg-2 col-md-2 col-sm-2 col-2 text-cart">
                {carts.length > 0 ? "Số Lượng" : ""}
              </div>
              <div className="col-lg-4 col-md-2 col-sm-2 col-2 text-cart">
                {carts.length > 0 ? "Tổng Cộng" : ""}
              </div>
            </div>
          </div>
          {children}
        </section>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    carts: state.carts,
  };
};
export default connect(mapStateToProps, null)(CartList);
