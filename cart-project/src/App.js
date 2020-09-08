import React from "react";

class App extends React.Component {
  render() {
    return (
      <div>
        <header>
          <nav className="d-flex justify-content-between bg-dark">
            <div className="left-nav d-flex">
              <p className="text-home ml-4">Home</p>
            </div>
            <div className="right-nav d-flex">
              <p className="text-account mr-4">Login</p>
            </div>
          </nav>
        </header>
        <main>
          <section className="title">
            <h1>Danh Mục Sản Phẩm</h1>
          </section>
          <section className="product-list mt-4">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-4 col-md-8 col-sm-8 col-10 mb-md-4 mb-sm-4 mb-4">
                  <div className="card-detail">
                    <img src="img/iphone-7-plus.jpg" className="img-mobile" />
                    <p className="name-mobile">Iphone 7 Plus</p>
                    <hr className="divide mt-4" />
                    <p className="cost ml-3">
                      Giá: <span />
                    </p>
                    <button type="button" className="btn btn-primary btn-buy">
                      Mua Hàng
                    </button>
                  </div>
                </div>
                <div className="col-lg-4 col-md-8 col-sm-8 col-10 mb-md-4 mb-sm-4 mb-4">
                  <div className="card-detail">
                    <img
                      src="img/samsung-galaxy-s6.jpg"
                      className="img-mobile"
                    />
                    <p className="name-mobile">Sam Sung Galaxy S6</p>
                    <hr className="divide mt-4" />
                    <p className="cost ml-3">
                      Giá: <span />
                    </p>
                    <button type="button" className="btn btn-primary btn-buy">
                      Mua Hàng
                    </button>
                  </div>
                </div>
                <div className="col-lg-4 col-md-8 col-sm-8 col-10 mb-md-4 mb-sm-4 mb-4">
                  <div className="card-detail">
                    <img
                      src="img/oppo-f1s-hero-400x460-400x460.png"
                      className="img-mobile"
                    />
                    <p className="name-mobile">Oppo F1S</p>
                    <hr className="divide mt-4" />
                    <p className="cost ml-3">
                      Giá: <span />
                    </p>
                    <button type="button" className="btn btn-primary btn-buy">
                      Mua Hàng
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="cart">
            <div className="container">
              <div className="row">
                <div className="col-lg-2 col-md-2 col-sm-2" />
                <div className="col-lg-2 col-md-2 col-sm-2 col-3 text-cart">
                  Sản Phẩm
                </div>
                <div className="col-lg-2 col-md-2 col-sm-2 col-3 text-cart">
                  Giá
                </div>
                <div className="col-lg-2 col-md-2 col-sm-2 col-2 text-cart">
                  Số Lượng
                </div>
                <div className="col-lg-4 col-md-2 col-sm-2 col-2 text-cart">
                  Tổng cộng
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-lg-2 col-md-2 col-sm-2 cart-sm">
                  <img src="img/iphone-7-plus.jpg" className="img-cart" />
                </div>
                <div className="col-lg-2 col-md-2 col-sm-2 col-3">
                  Iphone 7 Plus
                </div>
                <div className="col-lg-2 col-md-2 col-sm-2 col-3">7000000</div>
                <div className="col-lg-2 col-md-2 col-sm-2 col-2">
                  <p className="amount">1</p>
                  <button type="button" className="btn-add mr-2">
                    +
                  </button>
                  <button type="button" className="btn-lower">
                    -
                  </button>
                </div>
                <div className="col-lg-2 col-md-2 col-sm-2 col-2">
                  Tổng cộng
                </div>
                <div className="col-lg-2 col-md-2 col-sm-2 col-2">
                  <button className="btn btn-danger align-btn">Hủy</button>
                </div>
              </div>
              <hr />
            </div>
          </section>
          <section className="total">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6" />
                <div className="col-lg-4 col-md-4 col-sm-4">
                  <p className="total-amount">Tổng Tiền</p>
                </div>
              </div>
            </div>
          </section>
        </main>
        <footer className="bg-dark footer"></footer>
      </div>
    );
  }
}
export default App;
