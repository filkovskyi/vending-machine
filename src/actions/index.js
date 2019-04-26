import shop from '../api/server'
import * as types from '../constants/ActionTypes'

const reciveProducts = products => ({
    type: types.RECEIVE_PRODUCTS,
    products
});

export const getAllProducts = () => dispatch => {
    shop.getProducts(products => {
        dispatch(reciveProducts(products))
    })
};
