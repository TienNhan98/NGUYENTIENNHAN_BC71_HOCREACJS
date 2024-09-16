import React, { Component } from "react";

export default class ItemShoe extends Component {
  render() {
    // console.log("📢[ItemShoe.jsx:5]: this.props: ", this.props);
    let { data, handleClick } = this.props;
    return (
      <div className="col-3">
        <img className="w-100" src={data.image} alt="" />
        <h5 className="text-center">{data.name}</h5>
        <button
          className="btn btn-primary"
          onClick={() => {
            handleClick(data);
          }}
        >
          Add
        </button>
      </div>
    );
  }
}
