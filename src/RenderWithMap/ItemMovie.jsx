import React, { Component } from "react";

export default class ItemMovie extends Component {
  render() {
    console.log("props", this.props);
    return (
      <div className="col-2">
        <img src={this.props.data.hinhAnh} style={{ width: 200 }} alt="" />
        <p>{this.props.data.tenPhim}</p>
      </div>
    );
  }
}
