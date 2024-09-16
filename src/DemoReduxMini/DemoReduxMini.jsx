import React, { Component } from "react";
import { connect } from "react-redux";
import { DECREASE, INCREASE } from "./redux/contants";

class DemoReduxMini extends Component {
  render() {
    // console.log(this.props);
    return (
      <div className="container d-flex">
        <button
          className="btn btn-dark"
          onClick={() => {
            // tham số được truyền vào từ hàm ở dưới, muốn truyền tham số thì phải dùng arrow fuction
            this.props.handleDecrease(5);
          }}
        >
          -
        </button>
        <h2>{this.props.number}</h2>
        <button
          className="btn btn-dark"
          onClick={() => {
            this.props.handleIncrease(5);
          }}
        >
          +
        </button>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  // lấy data từ redux về và truyền thành props của component
  return {
    number: state.number,
  };
};

let mapDispatchToProps = (dispatch) => {
  // tạo ra các function để gửi action lên redux (gửi data để thay đổi state)
  return {
    // ở đây truyền tham số value và lấy payload: value là dùng để truyền tham số tăng giảm bao nhiêu. truyền tham số thì gắn onclick sd arrow fuction
    handleIncrease: (value) => {
      let action = { type: INCREASE, payload: value };
      dispatch(action);
    },
    handleDecrease: (value) => {
      let action = { type: DECREASE, payload: value };
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DemoReduxMini);
