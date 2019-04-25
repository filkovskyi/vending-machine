import axios from 'axios';
import {FETCH_PRODUCTS} from '../constants/ActionTypes';

export const fetchProducts = () => dispatch => {
    axios.get('api/product_items.json').then(products => {
        console.log(products)
        dispatch({
            type: FETCH_PRODUCTS,
            payload: products
        });
    });
};

