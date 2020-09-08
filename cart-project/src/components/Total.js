import React from "react";

class Total extends React.Component {
  render() {
    return (
      <div>
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
      </div>
    );
  }
}

export default Total;
