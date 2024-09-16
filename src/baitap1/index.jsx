// Cấu trúc của 1 component

import React, { Component } from "react";
import Header from "./header";
import Nav from "./nav";
import Content from "./content";
import Footer from "./footer";

// Phím tắt rcc

class BaiTap1 extends Component {
  // render là method của class component dùng để hiển thị giao diện
  render() {
    return (
      <div>
        <Header />
        <div className="main">
          <Nav />
          <Content />
        </div>
        <Footer />
      </div>
    );
  }
}

export default BaiTap1;
