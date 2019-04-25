import {FETCH_PRODUCTS} from '../constants/ActionTypes';
import keyBy from 'lodash/keyBy';

const initialState = {
    productList: {}
};

const productItemReducer = (state = initialState, action)=> {
    console.log('Action received', action);
    switch (action.type) {
        case FETCH_PRODUCTS:
            return {
                ...state,
                data: keyBy(action.payload.data.map(product => (
                {...product,
                    loading: false
                }
                )), 'id')
            };
        default:
            console.log(state);
            return state;
    }

};

export default productItemReducer;
