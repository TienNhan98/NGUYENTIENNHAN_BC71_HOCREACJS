import React, { Component } from "react";

export default class ExColorCar extends Component {
  state = {
    color: "black",
  };
  handleChangeColor = (color) => {
    this.setState({
      color: color,
    });
  };

  render() {
    return (
      <div className="container">
        <img
          className="col-3"
          src={`./imgEx/CarBasic/products/${this.state.color}-car.jpg`}
          alt=""
        />
        <button
          onClick={() => {
            this.handleChangeColor("black");
          }}
          className="btn btn-dark"
        >
          Black
        </button>
        <button
          onClick={() => {
            this.handleChangeColor("red");
          }}
          className="btn btn-danger"
        >
          Red
        </button>
        <button
          onClick={() => {
            this.handleChangeColor("silver");
          }}
          className="btn btn-secondary"
        >
          Silver
        </button>
      </div>
    );
  }
}
