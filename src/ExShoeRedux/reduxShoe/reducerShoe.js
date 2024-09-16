import { dataShoe } from "../data";
import { ADD_SHOE, CHANGE_TOTAL, DELETE_SHOE } from "./constant";

let initialState = {
  cart: [],
  listShoe: dataShoe,
};

export let shoeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SHOE: {
      let shoe = action.payload;
      console.log(shoe);
      let cloneCart = [...state.cart];
      let index = cloneCart.findIndex((item) => item.id === shoe.id);
      //findIndex : nếu không tìm thấy => trả về -1
      // th1: sp dã có trong giỏ hàng => tăng số lượng => không push
      if (index !== -1) {
        cloneCart[index].total++;
      } else {
        // th2: sp chưa có trong giỏ hàng => thêm vào giỏ hàng => push
        cloneCart.push({ ...shoe, total: 1 });
      }
      return { ...state, cart: cloneCart };
    }
    case DELETE_SHOE: {
      let idShoe = action.payload;
      let cloneCart = [...state.cart];
      let newCart = cloneCart.filter((shoe) => shoe.id !== idShoe);
      return { ...state, cart: newCart };
    }
    case CHANGE_TOTAL: {
      let data = action.payload;
      // console.log("📢[reducerShoe.js:33]: data: ", data);
      let cloneCart = [...state.cart];
      let index = cloneCart.findIndex((item) => item.id === data.idShoe);
      // let shoe = cloneCart[index]
      // shoe.total = shoe.total + option;
      cloneCart[index].total += data.option;
      if (cloneCart[index].total == 0) {
        cloneCart.splice(index, 1);
      }
      return { ...state, cart: cloneCart };
    }
    default:
      return state;
  }
};
