import { combineReducers, createStore } from "redux"
import ProductReducer from "./ProductReducer";
import CartReducer, {  addItem, decreseItemCart, increseItemCart, removeItem } from "./CartReducer";
import WishListReducer,{ addWishList, removeWishList} from "./WishListReducer";








// let initialstate = {
//     Product: [
//         {
//             "id": 1,
//             "title": "Fjallraven",
//             "price": 109.95,
//             "description": "Your perfect pack ",
//             "category": "men's clothing",
//             "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
//             "rating": { "rate": 3.9, "count": 120 }
//         }
//     ],
//     CartItems: [],
//     WishList: []
// }

// const increment = 'increment';
// const decrement = 'decrement';
// const bypay = 'bypay';

// const ADD_ITEM_CART='cart/addItem';
// const REMOVE_ITEM_CART='cart/removeItem';
// const INCRESE_ITEM_CART='cart/increseItem';
// const DECRESE_ITEM_CART='cart/decreseItem';
// const ADD_ITEM_WISHLIST='wishList/addItem';
// const REMOVE_ITEM_WISHLIST='wishList/removeItem';

// const reducer=(state=initialstate,action)=>{
// switch(action.type) {
//     case increment:
//     return {...state,count:state.count +1}
//     case decrement:
//     return {...state,count:state.count - 1}
//     case bypay:
//     return {...state,count:state.count + action.payload}
//     default:
//     return state
// }   
// }

//// reducer for json product
// function reducer(state = initialstate, action) {
//     switch (action.type) {
//         case ADD_ITEM_CART:
//             return { ...state, CartItems: [...state.CartItems, action.payload] }
//         case REMOVE_ITEM_CART :
//             return {
//                 ...state, CartItems: state.CartItems.filter((cartItem) => {
//                     return cartItem.productId !== action.payload.productId
//                 })
//             }
//         case INCRESE_ITEM_CART:
//             return {
//                 ...state, CartItems: state.CartItems.map((cartItem) => {
//                     if (cartItem.productId === action.payload.productId) {
//                         return { ...cartItem, qty: cartItem.qty + 1 }
//                     } else {
//                         return cartItem
//                     }
//                 })
//             }
//             case DECRESE_ITEM_CART:
//                 return {
//                     ...state, CartItems: state.CartItems.map((cartItem) => {
                       
//                         if (cartItem.productId === action.payload.productId) {
//                             if(cartItem.qty < 0){
//                                 return { ...cartItem, qty: 0 } 
//                             }else{
//                                 return { ...cartItem, qty: cartItem.qty - 1 }
//                             }
                           
//                         } else {
//                             return cartItem
//                         }
                    
//                     }).filter((cartitem)=> cartitem.qty > 0 )
//                 } 
//                 case ADD_ITEM_WISHLIST:
//                     return { ...state, WishList: [...state.WishList, action.payload] }
//                 case REMOVE_ITEM_WISHLIST :
//                     return {
//                         ...state, WishList: state.WishList.filter((wishlistItem) => {
//                             return wishlistItem.productId !== action.payload.productId
//                         })
//                     }       
//         default:
//             return state;
//     }
// }


// console.log(state);
// state=reduce(state,{type:'increment'})
// console.log(state);
// state=reduce(state,{type:'decrement'})
// console.log(state);
// state=reduce(state,{type:'bypay',payload:20 })
// console.log(state);

const Storecombine=combineReducers({
    Products:ProductReducer,
    CartItem:CartReducer,
    WishList:WishListReducer

})

let store = createStore(Storecombine, window.__REDUX_DEVTOOLS_EXTENSION__?.())
store.subscribe(() => {
    console.log(store.getState());
})
// store.dispatch({type:increment})
// store.dispatch({type:decrement})
// store.dispatch({type:bypay,payload:20})

//redux with json  product

// store.dispatch({ type: ADD_ITEM_CART, payload: { productId: 2, qty: 1 } })
// store.dispatch({type:DECRESE_ITEM_CART,payload:{productId:1}})
// store.dispatch({ type: ADD_ITEM_WISHLIST, payload: { productId: 2 } })
// store.dispatch({ type: ADD_ITEM_WISHLIST, payload: { productId: 3 } })
// store.dispatch({ type: ADD_ITEM_WISHLIST, payload: { productId: 4 } })
// store.dispatch({ type: REMOVE_ITEM_WISHLIST, payload: { productId: 2 } })


// store.dispatch(addItem(2))
// store.dispatch(increseItemCart(2))
// store.dispatch(decreseItemCart(2))
// store.dispatch(removeItem(2))
// store.dispatch(addWishList(2))
// store.dispatch(addWishList(3))
// store.dispatch(removeWishList(3))




