import React, { Component } from "react";

export default class CartShoe extends Component {
  renderTable = () => {
    let { dataCart, handleClickDelete, handleChangeTotal } = this.props;
    return dataCart.map((item, index) => {
      return (
        <tr key={index}>
          <td>{item.name}</td>
          <td>
            <img width={100} src={item.image} alt="" />
          </td>
          <td>{item.price}</td>
          <td>
            <button
              onClick={() => {
                handleChangeTotal(item.id, -1);
              }}
              className="btn btn-success"
            >
              -
            </button>
            {item.total}
            <button
              onClick={() => {
                handleChangeTotal(item.id, 1);
              }}
              className="btn btn-success"
            >
              +
            </button>
          </td>
          <td>
            <button
              onClick={() => {
                handleClickDelete(item.id);
              }}
              className="btn btn-danger"
            >
              Xóa
            </button>
          </td>
        </tr>
      );
    });
  };
  render() {
    return (
      <div className="col-6">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Image</th>
              <th>Price</th>
              <th>Total</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{this.renderTable()}</tbody>
        </table>
        {this.props.dataCart.length === 0 && (
          <h3 className="text-center">Chưa có gì</h3>
        )}
      </div>
    );
  }
}
