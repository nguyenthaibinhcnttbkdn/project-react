import React from "react";
import { connect } from "react-redux";
import ProductList from "./../components/ProductList";
import Product from "./../components/Product";
class ProductsContainer extends React.Component {

    showProducts(products) {
        let result = null;
        if(products.length > 0) {
            result = products.map((product, index) => {
                return (
                    <Product
                        key={index}
                        product={product}
                    />
                )
            })
        }
        return result;
    }
  render() {
    let { products } = this.props;
    return(
        <ProductList>
            {this.showProducts(products)}
        </ProductList>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};
export default connect(mapStateToProps, null)(ProductsContainer);
