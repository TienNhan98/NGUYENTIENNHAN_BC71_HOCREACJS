import React, { Component } from "react";
import ItemPhone from "./ItemPhone";

export default class ListPhone extends Component {
  render() {
    console.log("props", this.props);
    return (
      <div className="row">
        {/* phone: là 1 phần tử trong array (object), gọi đến tham số phone để ở dưới có thể phone.hinhAnh hoặc phone.tenSP */}
        {this.props.list.map((phone, index) => {
          return (
            <ItemPhone
              key={index}
              phone={phone}
              handleClick={this.props.handleClick}
            />
          );
          // return (
          //   <div key={index} className="col-4">
          //     <img style={{ height: 300 }} src={phone.hinhAnh} alt="" />
          //     <h3>{phone.tenSP}</h3>
          //     <button
          //       onClick={() => {
          //         this.props.handleClick(phone);
          //       }}
          //       className="btn btn-success"
          //     >
          //       Xem Chi Tiết
          //     </button>
          //   </div>
          // );
        })}
      </div>
    );
  }
}
