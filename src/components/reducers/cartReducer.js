import Item1 from '../../images/item1.jpg'
import Item2 from '../../images/item2.jpg'
import Item3 from '../../images/item3.jpg'
import Item4 from '../../images/item4.jpg'
import Item5 from '../../images/item5.jpg'
import Item6 from '../../images/item6.jpg'
import { ADD_TO_CART,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY,ADD_SHIPPING, UPDATE_LOGGEDIN_STATUS, UPDATE_REDIRECT_STATUS, RESET_STATES } from '../actions/action-types/cart-actions'


const initState = {
    items: [
        {id:1,title:'Winter body', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:110,img:Item1},
        {id:2,title:'Adidas', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:80,img: Item2},
        {id:3,title:'Vans', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:120,img: Item3},
        {id:4,title:'White', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:260,img:Item4},
        {id:5,title:'Cropped-sho', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:160,img: Item5},
        {id:6,title:'Blues', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:90,img: Item6}
    ],
    addedItems:[],
    total: 0,
    totalCount: 0,
    isLoggedin: false,
    isRedirectedFromCheckout: false,
    userAddress: "Pune, India, 411057"

}
const cartReducer= (state = initState,action)=>{
   
    //INSIDE HOME COMPONENT
    if(action.type === ADD_TO_CART){
          let addedItem = state.items.find(item=> item.id === action.id)
          //check if the action id exists in the addedItems
         let existed_item= state.addedItems.find(item=> action.id === item.id)
         if(existed_item)
         {
            addedItem.quantity += 1 
             return{
                ...state,
                 total: state.total + addedItem.price,
                 totalCount : state.totalCount +1
                  }
        }
         else{
            addedItem.quantity = 1;
            //calculating the total
            let newTotal = state.total + addedItem.price 
            
            return{
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total : newTotal,
                totalCount : state.totalCount +1
            }
            
        }
    }

    
    if(action.type === REMOVE_ITEM){
        let addedItem = state.items.find(item=> item.id === action.id) 
        let new_items = state.addedItems.filter(item=>item.id !== action.id)
            let newTotal = state.total - addedItem.price*addedItem.quantity;
            return{
                ...state,
                addedItems: new_items,
                total: newTotal,
                totalCount : state.totalCount - addedItem.quantity
            }
    }
    //INSIDE CART COMPONENT
    if(action.type=== ADD_QUANTITY){
        let addedItem = state.items.find(item=> item.id === action.id)
          addedItem.quantity += 1 
          let newTotal = state.total + addedItem.price
          return{
              ...state,
              total: newTotal,
              addedItems: [...state.addedItems],
              totalCount : state.totalCount +1
          }
    }
    if(action.type=== SUB_QUANTITY){  
        let addedItem = state.items.find(item=> item.id === action.id) 
        //if the qt == 0 then it should be removed
        if(addedItem.quantity === 1){
            let new_items = state.addedItems.filter(item=>item.id !== action.id)
            let newTotal = state.total - addedItem.price
            return{
                ...state,
                addedItems: new_items,
                total: newTotal,
                totalCount : state.totalCount -1
            }
        }
        else {
            addedItem.quantity -= 1
            let newTotal = state.total - addedItem.price
            return{
                ...state,
                total: newTotal,
                addedItems: [...state.addedItems],
                totalCount : state.totalCount -1
            }
        }
        
    }
     /* if(action.type=== REMOVE_ITEMS){  
        let addedItem = state.items.find(item=> item.id === action.id) 
        //if the qt == 0 then it should be removed
        else {
            let new_items = state.addedItems.filter(item=>item.id !== action.id)
            let newTotal = state.total - addedItem.price*addedItem.quantity;
            return{
                ...state,
                addedItems: new_items,
                total: newTotal,
                totalCount : state.totalCount - addedItem.quantity
            }
        }
        
    } */ 

    if(action.type=== ADD_SHIPPING){
          return{
              ...state,
              total: state.total + 6
          }
    }

    if(action.type=== 'SUB_SHIPPING'){
        return{
            ...state,
            total: state.total - 6
        }
  }
  if(action.type === UPDATE_LOGGEDIN_STATUS){
      return{
          ...state,
          isLoggedin: true
      }
}
    if(action.type === UPDATE_REDIRECT_STATUS){  
        return{
            ...state,
            isRedirectedFromCheckout: true
        }
    }

    if(action.type === RESET_STATES){  
        return{
            ...initState,
            isLoggedin: true
        }
    }


  else{
    return state
    }
    
}

export default cartReducer
