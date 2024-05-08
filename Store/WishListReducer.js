

export const ADD_ITEM_WISHLIST='wishList/addItem';
export const REMOVE_ITEM_WISHLIST='wishList/removeItem';


export function addWishList(productId){
    return { type: ADD_ITEM_WISHLIST, payload: { productId} }
 }
 export function removeWishList(productId){
    return { type: REMOVE_ITEM_WISHLIST, payload: { productId} }
 }

const WishListReducer=(state=[],action)=>{
    switch (action.type) {
       
                case ADD_ITEM_WISHLIST:
                    return [...state, action.payload] 
                case REMOVE_ITEM_WISHLIST :
                    return  state.filter((wishlistItem) => {
                            return wishlistItem.productId !== action.payload.productId
                        })
                         
        default:
            return state;
    }
}
export default WishListReducer;