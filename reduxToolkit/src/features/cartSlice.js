import { createSlice } from "@reduxjs/toolkit";


let initialState = {
    cartList : [],
    cartLength:0,
    showCart : false
}


const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers : {
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
          state.cartList=  state.cartList.filter(ele=>ele.id !=action.payload)
        },

        cartStatus(state, ){

        }
    }
})


export const {addCart, showCart, removeCart} = cartSlice.actions;
export default cartSlice.reducer