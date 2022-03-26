import { combineReducers } from "redux";

import {createStore,  applyMiddleware} from 'redux'

import thunk from 'redux-thunk';

import {composeWithDevTools} from 'redux-devtools-extension';
import {getAllPizzasReducer} from './reducers/pizzaReducer'
import {cartReducer} from './reducers/cartReducer';



const finalReducer = combineReducers({
     getAllPizzasReducer : getAllPizzasReducer,
     cartReducer : cartReducer
 }) 

 
const cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []
// looking into the localStorage to see if there is an exsisting carts 
// called cartItems if not pass it an empty array/[]



const initialState = {
    // Adding the cart items to a reducer
    cartReducer :{
        cartItems : cartItems
    }
}


const composeEnhancers = composeWithDevTools({})
const store = createStore(finalReducer, initialState, composeEnhancers(applyMiddleware(thunk)))

export default store