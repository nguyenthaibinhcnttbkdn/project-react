import React from "react";
import Header from "./components/Header";
import CartList from "./components/CartList";
import Total from "./components/Total";
import Footer from "./components/Footer";
import ProductsContainer from "./containers/ProductsContainer";
import CartsContainer from "./containers/CartsContainer";
import Cart from "./components/Cart";
import { connect } from "react-redux";
class App extends React.Component {
  render() {
    let { carts } = this.props;
    return (
      <div>
        <Header />
        <main>
          <section className="title">
            <h1>Danh Mục Sản Phẩm</h1>
          </section>
          <ProductsContainer />
          <CartsContainer />
          {carts.length > 0 ? <Total /> : ""}
          {/* Total */}
        </main>
        <Footer />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    carts: state.carts,
  };
};
export default connect(mapStateToProps, null)(App);
