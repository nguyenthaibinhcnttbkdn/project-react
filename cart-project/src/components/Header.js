import React from "react";

class Header extends React.Component {
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
      </div>
    );
  }
}

export default Header;
