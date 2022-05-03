
import { ADD_TO_CART,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY, REMOVE_ALL}  from './actionTypes';

export const addToCart = (id)=>{
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
//subtract Quatity action
export const subtractQuantity=(id)=>{
    return{
        type: SUB_QUANTITY,
        id
    }
}
//add Quantity action
export const addQuantity=(id)=>{
    return{
        type: ADD_QUANTITY,
        id
    }
}

//Remove
export const removeAll=()=>{
    return{
        
        type: REMOVE_ALL  
    }
}