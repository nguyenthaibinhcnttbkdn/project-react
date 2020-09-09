import React from "react";
import Header from "./components/Header";
import CartList from "./components/CartList";
import Total from "./components/Total";
import Footer from "./components/Footer";
import ProductsContainer from "./containers/ProductsContainer";
import CartsContainer from "./containers/CartsContainer";
import Cart from "./components/Cart";
class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <main>
          <section className="title">
            <h1>Danh Mục Sản Phẩm</h1>
          </section>
          <ProductsContainer />
          <CartsContainer />
          <Total />
          {/* Total */}
        </main>
        <Footer />
      </div>
    );
  }
}
export default App;
