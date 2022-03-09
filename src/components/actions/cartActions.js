
import { ADD_TO_CART,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY,UPDATE_LOGGEDIN_STATUS, UPDATE_REDIRECT_STATUS,RESET_STATES} from './action-types/cart-actions'

//add cart action
export const addToCart= (id)=>{
    return{
        type: ADD_TO_CART,
        id
    }
}
//remove item action
export const removeItem=(id)=>{
    return{
        type: REMOVE_ITEM,
        id
    }
}
//subtract qt action
export const subtractQuantity=(id)=>{
    return{
        type: SUB_QUANTITY,
        id
    }
}
//add qt action
export const addQuantity=(id)=>{
    return{
        type: ADD_QUANTITY,
        id
    }
}

//update loggedin status
export const updateLoggedinStatus=(id)=>{
    return{
        type: UPDATE_LOGGEDIN_STATUS,
        id
    }
}
export const updateRedirect=(id)=>{
    return{
        type: UPDATE_REDIRECT_STATUS,
        id
    }
}
export const resetState=(id)=>{
    return{
        type: RESET_STATES,
        id
    }
}
