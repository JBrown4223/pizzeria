import menu from './menu.js';
import { ADD_TO_CART,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY, REMOVE_ALL } from '../actions/actionTypes';


const initState = {

    menu: menu,
    addedItems:[],
    total: 0
}



const cartReducer= (state = initState, action)=>{
    
  switch(action.type){
      case ADD_TO_CART:
            let addedItem = state.menu.find(item => item.id === action.id)
            //Find way to add Quantity key to existing json
            
        
            let existed_item = state.addedItems.find(item => action.id === item.id)
            if(existed_item){
                existed_item.quantity++
               
                return{
                ...state,
                    total: (state.total + existed_item.price )
                    }
            }
            else{
                addedItem.quantity += 1;
                //calculating the total
                let newTotal = state.total + addedItem.price
                
                return{
                    ...state,
                    addedItems: [...state.addedItems, addedItem],
                    total : newTotal
                }
            
            }
        case REMOVE_ITEM:
            let itemToRemove= state.addedItems.find(item=> action.id === item.id)
            let new_items = state.addedItems.filter(item=> action.id !== item.id)
    
            //calculating the total
            let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity )
            console.log(itemToRemove)
            return{
                ...state,
                addedItems: new_items,
                total: newTotal
            }
        case ADD_QUANTITY:
            let x = state.addedItems.find(item=> item.id === action.id)
            x.quantity += 1 
            let newT = state.total + x.price
            return{
                ...state,
                total: newT
            }
        case SUB_QUANTITY:
            let y = state.addedItems.find(item=> item.id === action.id) 
            //if the qt == 0 then it should be removed
            if(y.quantity === 1){
                let new_items = state.addedItems.filter(item=>item.id !== action.id)
                let newTotal = state.total - y.price
                return{
                    ...state,
                    addedItems: new_items,
                    total: newTotal
                }
            }
            else {
                y.quantity -= 1
                let newTotal = state.total - y.price
                return{
                    ...state,
                    total: newTotal
                }
            }
        case REMOVE_ALL:
                

            return{
                ...state,
                addedItems: [],
                total: 0
            }
        default:
            return state
   }

}
export default cartReducer;