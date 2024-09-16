import React, { Component } from "react";
import DemoProps from "./DemoProps";

export default class Kid extends Component {
  render() {
    // this.props: object dùng dể nhận dât truyền từ bên ngoài vào component.
    console.log("Props", this.props);
    return (
      <div className="bg-success">
        Kid
        <h2>{this.props.dataUsername}</h2>
        <h3>{this.props.age}</h3>
        <button className="btn btn-primary" onClick={this.props.handleClick}>
          Click
        </button>
      </div>
    );
  }
}
