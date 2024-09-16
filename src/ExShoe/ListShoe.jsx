import React, { Component } from "react";
import ItemShoe from "./ItemShoe";

export default class ListShoe extends Component {
  render() {
    // console.log("📢[ListShoe.jsx:6]: this.props: ", this.props);
    let { shoeArr, handleClickAdd } = this.props;
    // console.log("🚀 ~ ListShoe ~ render ~ shoeArr:", shoeArr);
    return (
      <div className="row col-6">
        {shoeArr.map((item, index) => {
          return (
            <ItemShoe handleClick={handleClickAdd} key={index} data={item} />
          );
        })}
      </div>
    );
  }
}
