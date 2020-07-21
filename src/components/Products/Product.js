import React from 'react';
import {ContextConsumer} from '../Context';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';


function Product(props) {
    const {id ,title ,img , price ,inCart } = props.product;
    return (
        <CardWrapper className="col-9 col-md-6 col-lg-3 mx-auto my-3">
            <div className="card">
                <ContextConsumer>
                    {value=>(
                            <div className="img-container p-5" 
                            onClick={()=>value.handelDetail(id)}>
                                <Link to="/details">
                                    <img src={img} alt="product img" 
                                    className="card-img-top" />
                                </Link>
                                <button 
                                className="card-btn"
                                disabled={inCart?true:false}
                                onClick={
                                    ()=>value.addToCart(id)}>
                                    {inCart?<p className="text-capitalize mb-0">in cart</p>:
                                    <i className ="fas fa-cart-plus" />}
                                </button>
                            </div>
                        )
                    }
                </ContextConsumer>
                
                <div className="card-footer d-flex justify-content-between">
                    <p className="align-self-center mb-0">{title}</p>
                    <h5 className="text-blue font-italic mb-0">
                        {price}
                        <span className="mr-1">$</span>
                    </h5>
                </div>
            </div>
        </CardWrapper>
    )
}
Product.propTypes={
    product:PropTypes.shape({
        id:PropTypes.number,
        img:PropTypes.string,
        price:PropTypes.number,
        inCard:PropTypes.bool,
        title:PropTypes.string
    }).isRequired
};
const CardWrapper = styled.div`
    .card,.card-footer{
        border-color:transparent;
        transition:all 1s linear;
    }

    &:hover{
        .card{
            border:0.04rem solid rgba(0,0,0,0.2);
            box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.2);
        }
        .card-footer{
            background-color:rgb(250,250,250)
        }
    }
    .img-container{
        position:relative;
        overflow:hidden;
    }
    .card-img-top{
        transition:all 1s linear;
    }
    .img-container:hover .card-img-top{
        transform:scale(1.2);
    }
    .card-btn{
        position:absolute;
        right:0;
        bottom:0;
        transition:all 1s linear;
        transform:translate(100% , 100%);
        padding:0.4rem 0.6rem;
        color:var(--mainWhite);
        background:var(--lightBlue);
        border:none;
        border-radius:0.5rem 0 0 0;
        font-size:1.2rem;
    }
    .card-btn:hover{
        color:var(--mainBlue);
        /* background:var(--mainBlue) */;
    }
    .img-container:hover .card-btn{
        transform:translate(0,0);
    }
`;
export default Product
