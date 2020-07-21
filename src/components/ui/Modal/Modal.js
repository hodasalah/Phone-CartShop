import React , {Component} from 'react'
import classes from './Modal.module.css';
import Backdrop from './Backdrop/Backdrop';
import {ContextConsumer} from '../../Context';
import {ButtonContainer} from '../Button/Button';
import {Link} from 'react-router-dom';

class Modal extends Component {
    render(){
        return(
            <ContextConsumer>
                {value=>{
                    const {img , price , title} = value.modalProduct;
                    return(
                        <>
                            <Backdrop closed={value.closeModal} 
                            show={value.modalOpen}/>
                            <div className={classes.Modal} style={{
                                transform: value.modalOpen ? 'translateY(0)': 'translateY(-100vh)'
                                ,opacity:value.modalOpen ? 1 : 0 
                            }}>
                                <div className="container py-2">
                                    <div className="row">
                                        <div className="mx-auto text-center text-capitalize">
                                            <h2>item add to the cart</h2>
                                            <img src={img} className="img-fluid" alt="Product" />
                                            <h5>{title}</h5>
                                            <h5 className="text-muted">Price: $ {price}</h5>
                                            <Link to="/">
                                                <ButtonContainer onClick={value.closeModal}>
                                                    continue shopping
                                                </ButtonContainer>
                                            </Link>
                                            <Link to="/cart">
                                                <ButtonContainer cart onClick={value.closeModal}>
                                                    go to cart
                                                </ButtonContainer>
                                            </Link>
                                        </div> 
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                }
                
            </ContextConsumer>
            );
    }

}

export default Modal;
