import { combineReducers } from 'redux'
import { RECEIVE_PRODUCTS } from '../constants/ActionTypes'

const byId = (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_PRODUCTS:
            return {
                ...state,
                ...action.products.reduce((obj, product) => {
                    obj[product.id] = product;
                    return obj
                }, {})
            };
        default:
            const { productId } = action;
            if (productId) {
                return {
                    ...state,
                    [productId]: action.products(state[productId], action)
                }
            }
            return state
    }
};

const visibleIds = (state = [], action) => {
    switch (action.type) {
        case RECEIVE_PRODUCTS:
            return action.products.map(product => product.id);
        default:
            return state
    }
};

export default combineReducers({
    byId,
    visibleIds
})

export const getProduct = (state, id) => state.byId[id];

export const getVisibleProducts = state => state.visibleIds.map(id => getProduct(state, id));
