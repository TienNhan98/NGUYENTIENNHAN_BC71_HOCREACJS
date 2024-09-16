import React, { Component } from "react";
import { connect } from "react-redux";
import { ADD_SHOE } from "./reduxShoe/constant";

class ItemShoe extends Component {
  render() {
    // console.log("📢[ItemShoe.jsx:5]: this.props: ", this.props);
    let { data, handleAddToCart } = this.props;
    return (
      <div className="col-3">
        <img className="w-100" src={data.image} alt="" />
        <h5 className="text-center">{data.name}</h5>
        <button
          className="btn btn-primary"
          onClick={() => {
            handleAddToCart(data);
          }}
        >
          Add
        </button>
      </div>
    );
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    handleAddToCart: (shoe) => {
      let action = {
        type: ADD_SHOE,
        payload: shoe,
      };
      dispatch(action);
    },
  };
};

export default connect(null, mapDispatchToProps)(ItemShoe);
