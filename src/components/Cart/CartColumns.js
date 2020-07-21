import React from 'react'

const CartColumns = () => {
  return (
    <div className="container-fluid text-center d-none d-lg-block">
      <div className="row">
         <div className="col-10 col-lg-2 mx-auto">
					 <p className="text-uppercase">Products</p>
				 </div>

				 <div className="col-10 col-lg-2 mx-auto">
					 <p className="text-uppercase">Name of Product</p>
				 </div>

				 <div className="col-10 col-lg-2 mx-auto">
					 <p className="text-uppercase">Price</p>
				 </div>

				 <div className="col-10 col-lg-2 mx-auto">
					 <p className="text-uppercase">Quantity</p>
				 </div>

				 <div className="col-10 col-lg-2 mx-auto">
					 <p className="text-uppercase">Remove</p>
				 </div>

				 <div className="col-10 col-lg-2 mx-auto">
					 <p className="text-uppercase">Total</p>
				 </div>

      </div>
    </div>
  )
}
export default CartColumns;
