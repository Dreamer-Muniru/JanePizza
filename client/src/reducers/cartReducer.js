export const cartReducer =(state={cartItems : []}, action) =>{
    switch(action.type){

        case 'ADD_TO_CART' : 
        // checking to see if there is already an existing item in the cart
        // If it exist, you get the value of the "alreadyExist variable"
        const alreadyExists = state.cartItems.find(item=> item._id===action.payload._id)
        if(alreadyExists){
            return{
                // If it exist, you simply replace the old item to the new item 
                ...state,
                cartItems :state.cartItems.map(item=>item._id===action.payload._id ? action.payload : item)
            }
        }
        else{

            return{
                // If there's no item in the cart, then you add a new item here
                ...state,
                cartItems:[...state.cartItems, action.payload]
            }
        }

        case 'DELETE_FROM_CART' :return{
            ...state,
            cartItems : state.cartItems.filter(item=> item._id !==action.payload._id)
        }

        
            default : return state
    }
}