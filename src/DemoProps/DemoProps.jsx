import React, { Component } from "react";
import Kid from "./Kid";

export default class DemoProps extends Component {
  state = {
    userName: "Nhân Đẹp Trai",
  };
  handleChangeUsername = () => {
    this.setState({
      userName:
        this.state.userName === "Nhân Đẹp Trai"
          ? "Tuyệt Cú Mèo"
          : "Nhân Đẹp Trai",
    });
  };
  render() {
    return (
      <div className="bg-danger p-5">
        <h2>DemoProps</h2>
        <Kid
          dataUsername={this.state.userName}
          age={20}
          handleClick={this.handleChangeUsername}
        />
      </div>
    );
  }
}
