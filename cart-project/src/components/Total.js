import React from "react";
import { connect } from "react-redux";
class Total extends React.Component {

  render() {
    let {carts} = this.props;
    console.log(carts);
    let totalAmount = 0;
    carts.forEach((elm) => {
      totalAmount += elm.quantity*elm.property.price;
    })
    console.log(totalAmount);
    return (
      <div>
        <section className="total">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-6 col-6" />
              <div className="col-lg-2 col-md-2 col-sm-2 col-2">
                <p className="total-amount">Tổng Tiền</p>
              </div>
              <div className="col-lg-4 col-md-2 col-sm-2 col-2">
                <span>{totalAmount} VND</span>
              </div>
            </div>
          </div>
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
export default connect(mapStateToProps, null)(Total);
