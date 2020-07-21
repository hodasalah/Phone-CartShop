import React from 'react'
import CartItem from './CartItem'

const CartList = ({cart ,value}) => {
	return (
		<div className="container-fluid mt-2">
			{cart.map(item =>{
				return <CartItem item={item} value={value} key={item.id}/>
			})}
		</div>
	)
}

export default CartList
