import React, {Component} from 'react';
import {connect} from 'react-redux';

class ProductList extends Component {
    render() {
        return (
            <div>Products</div>
        );
    }
}

const mapStateToProps = (state)=> {
    console.log(state)
    return {
        productItems: state.items
    }
};

export default connect(mapStateToProps, null)(ProductList)
