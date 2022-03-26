export const addToCart = (pizza, quantity, varient) => (dispatch, getState) =>{


    let cartItem={
        name : pizza.name,
        _id : pizza._id,
        image : pizza.image,
        varient : varient,
        quantity : quantity,
        prices : pizza.prices,
        price : pizza.prices[0][varient] * quantity
    }
    if(cartItem.quantity>10){
        alert("You cannot add more than 10 quantity")
    }
    else{
        // If cart item is equal to 0, execute the delete functionality
        if(cartItem.quantity<1){
            dispatch({type: "DELETE_FROM_CART", payload:pizza})
        }
        else{
            dispatch({type: 'ADD_TO_CART', payload: cartItem})
        }
    }


   const cartItems = getState().cartReducer.cartItems
    localStorage.setItem('cartItems', JSON.stringify(cartItems))


}

export const deleteFromCart=(pizza)=>(dispatch, getState)=>{
    dispatch({type: "DELETE_FROM_CART", payload:pizza})
    // updating the state after deleting to permately remove item 
    // from local storage
    const cartItems = getState().cartReducer.cartItems
    localStorage.setItem('cartItems', JSON.stringify(cartItems))

}   