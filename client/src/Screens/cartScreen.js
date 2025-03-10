import React from 'react'
import '../App.css';
import { useDispatch, useSelector } from 'react-redux'
import {addToCart, deleteFromCart} from '../action/cartActions';
function CartScreen() {
        const cartState = useSelector(state=>state.cartReducer)
        const cartItems = cartState.cartItems
        const dispatch = useDispatch()
        const subTotal = cartItems.reduce((x, item) => x+item.price, 0)
    return (
        <div className='container'>
        <div className='row justify-content-center'>
            <div className='col-md-6'>
                <h2 style={{fontSize: '40px'}}>My Cart</h2>
                {cartItems.map(item=>{
                    return <div className='flex-container'>
                    <div className='text-left'style={{width: '100', margin:'10px'}}>
                        <h1>{item.name} ({item.varient}) </h1>
                        <h1>Price: {item.quantity} * {item.prices[0][item.varient]} * {item.price} </h1>
                        <h1 style={{display: 'inline'}}>Quantity: 
                            <i className="fa-solid fa-plus" onClick={()=>{dispatch(addToCart(item, item.quantity+1, item.varient))}}></i>
                            <b>{item.quantity}</b>
                            <i className="fa-solid fa-minus" onClick={()=>{dispatch(addToCart(item, item.quantity-1, item.varient))}}></i>
                        </h1>
                        <hr/>
                    </div>

                    <div style={{width: '100', margin:'10px'}}>
                        <img src={item.image} alt="Product Image" style={{height: '80px', width:'80px'}} />
                    </div>
                    <div style={{width: '100', margin:'10px'}}>
                        <i className="fa-solid fa-trash" onClick={() =>{dispatch(deleteFromCart(item))}} ></i>
                    </div>
                </div>
                })}
                
            </div>

            <div className='col-md-6'>
                <h2 style={{fontSize: '45px'}}> SubTotal = GHS {subTotal} </h2>
                <button className='btn text-right'>Pay Now</button>
            </div>
    </div>
    </div>
    )
}

export default CartScreen

