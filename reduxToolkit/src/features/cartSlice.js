import { createSlice } from "@reduxjs/toolkit";


let initialState = {
    cartList :[],
    cartLength:0,
    showCart:false
}

const cartSlice = createSlice({
    name : "cart",
    initialState,
    reducers: {
        addCart(state, action){
            let item = action.payload;


            let exitItem = state.cartList.find((ele) => ele.id == item.id)

            if(exitItem)
            {
             exitItem.qtn++; 
             exitItem.price  += item.price  
            }
            else{
                item.qtn = 1;
                state.cartList.push(item)
                state.cartLength++
            }
        },

        showCart(state){
            state.showCart = !state.showCart
        }
        , 
        removeCart(state, action){
            state.cartList = state.cartList.filter(ele=> ele.id != action.payload)
            state.cartLength--;
        }
    }
})


export const {addCart, removeCart, showCart} = cartSlice.actions
export const cartReducer = cartSlice.reducer