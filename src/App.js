import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Switch , Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import ProductList from './components/Products/ProductList';
import Details from './components/Details';
import Modal from './components/ui/Modal/Modal';
import Cart from './components/Cart';
import DefaultPage from './components/DefaultPage';

const App =() =>{
    return ( 
        <>
            <NavBar/>
            <Switch>
                <Route path="/" exact component={ProductList} />
                <Route path="/details" component={Details}/>
                <Route path="/cart" component={Cart} />
                <Route component={DefaultPage}/>
            </Switch>
            <Modal />
        </>
    );
}

export default App;
