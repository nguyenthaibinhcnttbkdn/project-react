import React from "react";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import CartList from "./components/CartList";
import Total from "./components/Total";
import Footer from "./components/Footer";
import ProductsContainer from './containers/ProductsContainer';
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
          <CartList />
          <Total />
          {/* Total */}
        </main>
        <Footer />
      </div>
    );
  }
}
export default App;
