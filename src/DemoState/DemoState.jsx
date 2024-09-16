import React, { Component } from "react";

export default class DemoState extends Component {
  state = {
    soLuong: 1,
    donGia: 500,
    userName: "Nhân Đẹp Trai",
  };
  // update state cấu trúc => this.setState({}) => re-render
  handleTang = () => {
    this.setState({
      soLuong: this.state.soLuong + 1,
    });
  };
  handleGiam = () => {
    this.setState({
      soLuong: this.state.soLuong - 1,
    });
  };
  handleChangeUsername = () => {
    this.setState({
      userName:
        this.state.userName === "Nhân Đẹp Trai"
          ? "Nhân Tuyệt Cú Mèo"
          : "Nhân Đẹp Trai",
    });
  };
  render() {
    return (
      <div className="container text-center">
        <h3>DemoState - {this.state.userName}</h3>
        <button
          // onClick={() => {
          //   this.setState({ userName: "Nhân Tuyệt Cú Mèo" });
          // }}
          onClick={this.handleChangeUsername}
        >
          Đổi Tên
        </button>
        <div className="d-flex justify-content-center mt-3">
          <button onClick={this.handleGiam}>-</button>
          <h2 className="mx-3">{this.state.soLuong}</h2>
          {/* <h2 className="mx-3">{this.state.donGia}</h2> */}
          <button onClick={this.handleTang}>+</button>
        </div>
      </div>
    );
  }
}
