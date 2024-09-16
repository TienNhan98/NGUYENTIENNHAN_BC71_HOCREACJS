import React, { Component } from "react";
import { dataShoe } from "./data";
import ListShoe from "./ListShoe";
import CartShoe from "./CartShoe";

export default class ExshoeRedux extends Component {
  state = {
    cart: [],
    listShoe: dataShoe,
  };
  handleAddToCart = (shoe) => {
    // tìm xem sp đã có trong giỏ hàng hay chưa
    let cloneCart = [...this.state.cart];
    let index = cloneCart.findIndex((item) => item.id === shoe.id);
    //findIndex : nếu không tìm thấy => trả về -1
    // th1: sp dã có trong giỏ hàng => tăng số lượng => không push
    if (index !== -1) {
      cloneCart[index].total++;
    } else {
      // th2: sp chưa có trong giỏ hàng => thêm vào giỏ hàng => push
      cloneCart.push({ ...shoe, total: 1 });
    }
    // update state => render lại
    this.setState({
      cart: cloneCart,
    });
    // let newShoe = { ...shoe, total: 1 };
    // let newCart = [...this.state.cart, newShoe];
    // // console.log(newCart);

    // // newCart.push(shoe);
    // this.setState({
    //   cart: newCart,
    // });
  };
  handleChangeTotal = (idShoe, option) => {
    let cloneCart = [...this.state.cart];
    let index = cloneCart.findIndex((item) => item.id === idShoe);
    // let shoe = cloneCart[index]
    // shoe.total = shoe.total + option;
    cloneCart[index].total += option;
    if (cloneCart[index].total == 0) {
      cloneCart.splice(index, 1);
    }
    this.setState({
      cart: cloneCart,
    });
  };

  handleDeleteCart = (idShoe) => {
    let { cart } = this.state;
    let newCart = cart.filter((shoe) => shoe.id !== idShoe);
    this.setState({
      cart: newCart,
    });
  };
  render() {
    let { listShoe, cart } = this.state;
    return (
      <div className="row align-items-start">
        <ListShoe />
        <CartShoe />
      </div>
    );
  }
}
