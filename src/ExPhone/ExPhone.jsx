import React, { Component } from "react";
import { dataPhone } from "./data";
import ListPhone from "./ListPhone";
import DetailPhone from "./DetailPhone";

export default class ExPhone extends Component {
  state = {
    detail: dataPhone[0],
  };
  handleChangePhone = (phone) => {
    this.setState({
      detail: phone,
    });
  };

  render() {
    return (
      <div>
        <ListPhone list={dataPhone} handleClick={this.handleChangePhone} />
        <div className="d-flex">
          <DetailPhone detailData={this.state.detail} />
          <img style={{ height: 300 }} src={this.state.detail.hinhAnh} alt="" />
        </div>
      </div>
    );
  }
}
