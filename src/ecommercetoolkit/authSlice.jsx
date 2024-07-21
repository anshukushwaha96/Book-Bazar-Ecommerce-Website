// import { createSlice } from "@reduxjs/toolkit";
import {createSlice } from "@reduxjs/toolkit";

const initialState ={
   items:[],
   wishlist:[]
}
const ecommerceSlice = createSlice({
    name:"commerce",
    initialState,
    reducers:{
        addtocart:(state,action)=>{
            state.items.push(action.payload)
        },


        addtowish:(state,action)=>{
            state.wishlist.push(action.payload)
           
        },
        // closeCart:(state,action)=>{
           
        // },

        // addtocart:(state,action)=>{
        //     state.items = [action.payload];
        //     console.log(state.items)
        // },
        removeItem:(state, action)=>{
            const idToRemove =action.payload;
            state.items=state.items.filter(item =>item.id!=idToRemove);
            state.wishlist=state.wishlist.filter(item=>item.id!=idToRemove);
        }
    }
})

export const {addtocart,removeItem,addtowish,closeCart} = ecommerceSlice.actions;
export default ecommerceSlice.reducer
