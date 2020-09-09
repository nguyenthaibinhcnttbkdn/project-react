import React from "react";
import * as actions from './../actions/index';
import {connect} from 'react-redux';

class Product extends React.Component {
  onAddToCart = () => {
    let {product} = this.props;
    this.props.actAddToCart(product, 1);
  }
  render() {
    let { product } = this.props;
    return (
      <div className="col-lg-4 col-md-8 col-sm-8 col-10 mb-md-4 mb-sm-4 mb-4">
        <div className="card-detail">
          <img
            src={product.image}
            className="img-mobile"
          />
          <p className="name-mobile">{product.name}</p>
          <hr className="divide mt-4" />
          <p className="cost ml-3">
            Giá: <span>{product.price}</span>
          </p>
          <button 
          type="button" 
          className="btn btn-primary btn-buy"
          onClick={this.onAddToCart}
          >
            Mua Hàng
          </button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    actAddToCart: (product, quantity) => {
      dispatch(actions.actAddToCart(product, quantity))
    }
  }
}
export default connect(null, mapDispatchToProps)(Product);
