import * as types from "../constants/ActionTypes";
let data = JSON.parse(localStorage.getItem("carts"));
let initialState = data ? data : [];
const checkMatchId = (state, object) => {
  let count = 0;
  if (state.length > 0) {
    state.forEach((elm) => {
      if (elm.property.id === object.property.id) {
        count++;
      }
    });
  }
  return count > 0 ? true : false;
};
const carts = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_TO_CART:
      let object = {
        property: action.product,
        quantity: action.quantity,
      };
      if (state.length > 0) {
        if (checkMatchId(state, object)) {
          let result = state.map((elm) => {
            if (elm.property.id === object.property.id) {
              return { ...elm, quantity: elm.quantity + 1 };
            } else {
              return elm;
            }
          });
          localStorage.setItem("carts", JSON.stringify(result));
          return result;
        } else {
          localStorage.setItem("carts", JSON.stringify([...state, object]));
          return [...state, object];
        }
      }
      localStorage.setItem("carts", JSON.stringify([...state, object]));
      return [...state, object];
    case types.PLUS_ONE:
      let resultAdd = state.map((elm) => {
        if (elm.property.id === action.data) {
          return { ...elm, quantity: elm.quantity + 1 };
        } else {
          return elm;
        }
      });
      localStorage.setItem("carts", JSON.stringify(resultAdd));
      return resultAdd;
    case types.SUB_ONE:
      let resultSub = state.map((elm) => {
        if (elm.property.id === action.data) {
          return { ...elm, quantity: elm.quantity <= 1 ? 1 : elm.quantity - 1 };
        } else {
          return elm;
        }
      });
      localStorage.setItem('carts', JSON.stringify(resultSub));
      return resultSub;
    case types.DELETE_CART:
      let resultDelete = state.filter((elm) => {
        return elm.property.id !== action.data;
      })
      localStorage.setItem('carts', resultDelete);
      return resultDelete;
    default:
      return [...state];
  }
};

export default carts;
