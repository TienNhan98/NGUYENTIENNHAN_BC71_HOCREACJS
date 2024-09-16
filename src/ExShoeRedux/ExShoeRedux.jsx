import React, { Component } from "react";
import { dataShoe } from "./data";
import ListShoe from "./ListShoe";
import CartShoe from "./CartShoe";

export default class ExshoeRedux extends Component {
  render() {
    return (
      <div className="row align-items-start">
        <ListShoe />
        <CartShoe />
      </div>
    );
  }
}
