import React from 'react'

const CartItem = ({item , value}) => {
const { id , title , img , price , total , count } = item;
const{ increment , decrement , removeItem} =value;
	return (
		<div className="row my-5 text-center text-capitalize">
			<div className="col-10 mx-auto col-lg-2">
				<img src={img} alt="product cart" 
				style={{width:'5rem',height:'5rem'}}
				className="img-fluid"/>
			</div>

			<div className="col-10 mx-auto col-lg-2">
				<span className="d-lg-none">title</span> {title}
			</div>

			<div className="col-10 mx-auto col-lg-2">
				<span className="d-lg-none">price</span> {price}
			</div>

			<div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
				<div className="d-flex justify-content-center">
					<div className="d-flex justify-content-space-between">
						<span className="btn btn-black mx-1 text-center" 
						onClick={()=>decrement(id)}>-</span>

						<span className="btn btn-black mx-1 text-center" 
						>{count}</span>

						<span className="btn btn-black mx-1 text-center" 
						onClick={()=>increment(id)}> + </span>
					</div>
				
				</div>
			</div>
			<div className="col-10 mx-auto col-lg-2">
				<div className="cart-icon" onClick={()=>removeItem(id)}>
					<i className="fas fa-trash"></i>
				</div> 
			</div>
			<div className="col-10 mx-auto col-lg-2">
				<strong>item total : $ {total}</strong> 
			</div>

		</div>
	)
}

export default CartItem
