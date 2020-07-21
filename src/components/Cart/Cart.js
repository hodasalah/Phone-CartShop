import React, { Component } from 'react'
import Title from '../ui/Title';
import CartColumns from './CartColumns';
import EmptyCart from './EmptyCart';
import {ContextConsumer} from '../Context';
import CartList from './CartList';
import CartTotals from './CartTotals';

export default class Cart extends Component {
    render() {
        return (
            <section>
							<ContextConsumer>
								{value=>{ 
									if(value.cart.length === 0){
										return (<EmptyCart />);
									}else{
										return(
											<>
												<Title name ="Your" title="Cart" />
                				<CartColumns  />
												<CartList cart={value.cart} value={value}/>
												<CartTotals value={value}/>
											</>
										)
									}
								}}
							</ContextConsumer>
            </section>
        )
    }
}
