import * as types from "../constants/ActionTypes";

let initialState = [];
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
        if(checkMatchId(state, object)) {
          let a = 1;
          let result = state.map((elm) => {
            if(elm.property.id === object.property.id) {
              return {...elm, quantity: elm.quantity + 1}
            } else {
              return elm;
            }
          })
          return result;
        } else {
          return [...state,object];
        }
      }
      return [...state, object];
    default:
      return [...state];
  }
};

export default carts;
