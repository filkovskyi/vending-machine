import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchProducts} from '../actions'

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

function mapDispathcToProps(dispath) {
    return bindActionCreators({fetchProducts}, dispath);
}

export default connect(mapStateToProps, mapDispathcToProps)(ProductList)
