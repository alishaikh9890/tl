import { createSlice } from "@reduxjs/toolkit";
import { showNotification } from "./uiSlice";


let initialState = {
    cartList : [],
    cartLength:0,
    showCart : false
}


const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers : {

        replaceData(state, action){
                state.cartLength = action.payload.cartLength
                state.cartList = action.payload.cartList
        },

        addCart(state, action){
            let newItem = action.payload;

            let itemStatus = state.cartList.find((ele) => ele.id == newItem.id)

            if(itemStatus)
            {
                itemStatus.quantity++;
                itemStatus.price += newItem.price
            }
            else{
                newItem.quantity = 1;
                state.cartList.push(newItem);
                state.cartLength++;
            }
        },

        showCart(state){
            state.showCart= !state.showCart
        },


        removeCart(state, action){
            state.cartLength--;
          state.cartList=  state.cartList.filter(ele=>ele.id !=action.payload)
        },

        cartStatus(state, ){

        }
    }
})






export const {addCart, showCart, removeCart, replaceData} = cartSlice.actions;
export default cartSlice.reducer