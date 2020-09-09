import * as types from '../constants/ActionTypes';

let initialState = [
  {
    property: {
      id: 1,
      name: "Iphone 7 Plus",
      price: 5000000,
      image: "/template-card/img/iphone-7-plus.jpg",
    },
    quantity: 1,
  },
  {
    property: {
      id: 1,
      name: "Iphone 7 Plus",
      price: 5000000,
      image: "/template-card/img/iphone-7-plus.jpg",
    },
    quantity: 1,
  },
  {
    property: {
      id: 1,
      name: "Iphone 7 Plus",
      price: 5000000,
      image: "/template-card/img/iphone-7-plus.jpg",
    },
    quantity: 1,
  },
];

const carts = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_TO_CART:
        
    default:
      return [...state];
  }
};

export default carts;
