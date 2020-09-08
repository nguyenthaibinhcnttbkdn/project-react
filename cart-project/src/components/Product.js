import React from "react";

class Product extends React.Component {
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
          <button type="button" className="btn btn-primary btn-buy">
            Mua Hàng
          </button>
        </div>
      </div>
    );
  }
}

export default Product;
