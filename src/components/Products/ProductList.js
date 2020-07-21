import React, { Component } from 'react';
import Product from './Product';
import Title from '../ui/Title';
import {ContextConsumer} from '../Context'

 class ProductList extends Component {
    

    render() {
        return (
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                        <Title name="Our" title="Products" /> 
                        <div className="row" >
                            <ContextConsumer>
                                {value =>{
                                    return value.products.map(product=>{
                                        return <Product 
                                            key={product.id}
                                            product={product}/>
                                    });
                                }}
                            </ContextConsumer>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default ProductList;