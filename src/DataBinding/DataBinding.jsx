import React, { Component } from "react";

export default class DataBinding extends Component {
  description = "Anh Nhân tuyệt cú mèo đang học Data Binding";
  renderButton = () => {
    return <button>Đấm em đi</button>;
  };
  render() {
    let title = "Em chào Anh Nhân Đẹp Trai";
    let imgSrc =
      "https://www.thepoetmagazine.org/wp-content/uploads/2024/04/bat-ki-hay-bat-ky.jpg";
    // let renderButton = () => {
    //   return <button>Đấm em đi</button>;
    // };
    return (
      <div>
        <h2>DataBinding</h2>
        <h3>{title}</h3>
        <h4>{this.description}</h4>
        {this.renderButton()}
        <img
          src={imgSrc}
          alt=""
          // inline style: truyền vào một object
          style={{
            width: "1000px",
          }}
        />
      </div>
    );
  }
}
