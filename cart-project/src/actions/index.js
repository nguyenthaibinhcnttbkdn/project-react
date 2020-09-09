import * as types from '../constants/ActionTypes';

export const actAddToCart = (product, quantity) => {
    return {
        type: types.ADD_TO_CART,
        product: product,
        quantity: quantity
    }
}
export const actPlusOne = (id) => {
    return {
        type: types.PLUS_ONE,
        data: id
    }
}

export const actSubOne = (id) => {
    return {
        type: types.SUB_ONE,
        data: id
    }
}

export const actDeleteCart = (id) => {
    return {
        type: types.DELETE_CART,
        data: id
    }
}