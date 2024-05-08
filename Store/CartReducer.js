
export const ADD_ITEM_CART='cart/addItem';
export const REMOVE_ITEM_CART='cart/removeItem';
export const INCRESE_ITEM_CART='cart/increseItem';
export const DECRESE_ITEM_CART='cart/decreseItem';


export function addItem(productId,qty=1){
    return { type: ADD_ITEM_CART, payload: { productId, qty} }
 }
 export function removeItem(productId){
    return { type: REMOVE_ITEM_CART, payload: { productId} }
 }
export function increseItemCart(productId){
   return { type: INCRESE_ITEM_CART, payload: {productId} } 
}
export function decreseItemCart(productId){
    return { type: DECRESE_ITEM_CART, payload: {productId} } 
 }



 const CartReducer = (state=[],action)=>{
    switch (action.type) {
        case ADD_ITEM_CART:
            return [...state, action.payload] 
        case REMOVE_ITEM_CART :
            return  state.filter((cartItem) => {
                    return cartItem.productId !== action.payload.productId
                })
         
        case INCRESE_ITEM_CART:
            return state.map((cartItem) => {
                    if (cartItem.productId === action.payload.productId) {
                        return { ...cartItem, qty: cartItem.qty + 1 }
                    } else {
                        return cartItem
                    }
                })
            
            case DECRESE_ITEM_CART:
                return state.map((cartItem) => {
                        if (cartItem.productId === action.payload.productId) {
                            if(cartItem.qty < 0){
                                return { ...cartItem, qty: 0 } 
                            }else{
                                return { ...cartItem, qty: cartItem.qty - 1 }
                            }
                           
                        } else {
                            return cartItem
                        }
                    
                    }).filter((cartitem)=> cartitem.qty > 0 )
              
                    
        default:
            return state;
    }
}

export default CartReducer;