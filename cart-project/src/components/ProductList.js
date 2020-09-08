import React from "react";
import Product from "./Product";
class ProductList extends React.Component {
  render() {
    return (
      <div>
        <section className="product-list mt-4">
          <div className="container">
            <div className="row justify-content-center">
              {this.props.children}
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default ProductList;
