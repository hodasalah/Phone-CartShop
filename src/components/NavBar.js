import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import logo from '../logo.svg';
import {ButtonContainer} from './ui/Button/Button';
import styled from 'styled-components';

const NavWrapper=styled.nav`
    background-color:var(--mainBlue);
    .nav-link{
        color: var(--mainWhite) !important;
        text-transform:capitalize;
        font-size:1.2rem;
    }
    
`;

class NavBar extends Component {
    render() {
        return (
            <NavWrapper className="navbar navbar-expand-sm 
                navbar-dark  px-sm-5">
                <Link to="/">
                    <img src={logo} alt="our logo" className="navbar-brand" />
                </Link>
                <ul className="navbar-nav">
                    <li className="nav-item ml-5">
                        <Link to="/" className="nav-link">Products</Link>
                    </li>
                </ul> 
                <Link to="/cart" className="ml-auto">
                    <ButtonContainer>
                        <span className="mr-2"><i className="fas fa-cart-plus"/></span>
                        my cart
                    </ButtonContainer>
                </Link>
            </NavWrapper>
        )
    }
}
export default NavBar;
