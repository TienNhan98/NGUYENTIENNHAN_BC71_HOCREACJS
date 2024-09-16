import React, { Component } from "react";

export default class EventHandling extends Component {
  handleClick = () => {
    console.log("Đã Đấm");
  };
  handleSayHello = (name) => {
    console.log(`Hello ${name}`);
  };
  userName = "Anh Nhân Đẹp Trai";
  handleChangeUsername = () => {
    this.userName = "Anh Tụn";
    console.log(this.userName);
  };
  render() {
    return (
      <div>
        <h2>EventHandling</h2>
        {/* Hàm không có tham số */}
        <button onClick={this.handleClick}>Đấm Em Đi</button>
        {/* Hàm có tham số => dùng arrow function để bọc lại */}
        <button
          onClick={() => {
            this.handleSayHello("Anh Nhân Đẹp Trai");
          }}
        >
          Say Hello
        </button>
        <h2>{this.userName}</h2>
        <button onClick={this.handleChangeUsername}>
          Bấm dô để thấy sự bất ngờ
        </button>
      </div>
    );
  }
}
