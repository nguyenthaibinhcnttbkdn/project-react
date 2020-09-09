import React from "react";
import {connect} from 'react-redux';
import * as actions from './../actions/index';
class Cart extends React.Component {
  onPlusOne = () => {
    this.props.actPlusOne(this.props.cart.property.id);
  }
  onSubOne = () => {
    this.props.actSubOne(this.props.cart.property.id);
  }
  render() {
    let { cart } = this.props;
    return (
      <div className="container">
        <hr />
        <div className="row">
          <div className="col-lg-2 col-md-2 col-sm-2 cart-sm">
            <img src={cart.property.image} className="img-cart" />
          </div>
          <div className="col-lg-2 col-md-2 col-sm-2 col-3">
            {cart.property.name}
          </div>
          <div className="col-lg-2 col-md-2 col-sm-2 col-3">
            {cart.property.price}
          </div>
          <div className="col-lg-2 col-md-2 col-sm-2 col-2">
            <p className="amount">{cart.quantity}</p>
            <button 
            onClick={this.onPlusOne}
            type="button" 
            className="btn-add mr-2">
              +
            </button>
            <button 
            onClick={this.onSubOne}
            type="button" 
            className="btn-lower">
              -
            </button>
          </div>
          <div className="col-lg-2 col-md-2 col-sm-2 col-2">{cart.property.price * cart.quantity} VND</div>
          <div className="col-lg-2 col-md-2 col-sm-2 col-2">
            <button className="btn btn-danger align-btn">Hủy</button>
          </div>
        </div>
        <hr />
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    actPlusOne: (id) => {
      dispatch(actions.actPlusOne(id))
    },
    actSubOne: (id) => {
      dispatch(actions.actSubOne(id))
    }
  }
}
export default connect(null, mapDispatchToProps)(Cart);
