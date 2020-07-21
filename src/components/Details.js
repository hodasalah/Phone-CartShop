import React, { Component } from 'react';
import {ContextConsumer} from './Context';
import {Link} from 'react-router-dom';
import {ButtonContainer} from './ui/Button/Button';

export default class Details extends Component {
    render() {
        const Style= {
            backgroundColor:'var(--mainBlue)',
            color:'var(--mainWhite)',
            borderColor:'var(--mainBlue)',
            
        }
        return (
            <ContextConsumer>
                {value=>{
                    const{id ,company , title , img , info , price ,inCart } = value.detailProduct;
                    
                        return(
                                <div>
                                    {/* start title */}
                                    <div className="row">
                                        <div className="col-10 my-5 text-blue text-slanted mx-auto text-center">
                                            <h1>{title}</h1>
                                        </div>
                                    </div>
                                    {/* end title */}
                                    {/* Product  info */}
                                    {/**start container */}
                                    <div className="container px-4">
                                        <div className="row">
                                            <div className="col-10 col-md-6 mx-auto my-3">
                                                <img src={img} alt="Product" className="img-fluid"/>
                                            </div>
                                            <div className="col-10 col-md-6 mx-auto my-3 text-capitalize">
                                                {/* Product  text */}
                                                    <h2>model: {title}</h2>
                                                    <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                                                        made by: <span className="text-uppercase">{company}</span>
                                                    </h4>
                                                    <h4 className="text-blue">
                                                        <strong>    
                                                            Price : <span>$</span> {price}
                                                        </strong>
                                                    </h4>
                                                    <p className="text-capitalize font-weight-bold mt-3 mb-0">
                                                        some information about product
                                                    </p>
                                                    <p className="text-muted">{info}</p>
                                                    {/* BUTTONS */}
                                                    <div>
                                                        <Link to="/">
                                                            <ButtonContainer style={Style}>back to products</ButtonContainer>
                                                        </Link>
                                                        <ButtonContainer cart disabled={inCart?true:false}
                                                        onClick={()=>value.addToCart(id)}>
                                                            {inCart?"in cart" : "add to cart"}
                                                        </ButtonContainer>
                                                    </div>
                                            {/*end col */}
                                            </div>
                                        {/**end row2 */}
                                        </div>
                                    {/*end container */}
                                    </div>
                                {/**end detail */}
                                </div>
                            )
                }}  
            </ContextConsumer>
        )
    }
}

