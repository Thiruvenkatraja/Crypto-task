import {createSlice} from '@reduxjs/toolkit';


export const CartSlice = createSlice({
    name:'cart',
    initialState:{
        cart:[],
        counter:0,
        filteredData:[]
    },
    reducers:{
        cartData:(state:any, action:any)=>{
            state.cart = [...state.cart,action.payload]
        },
        increaseCounter:(state:any, action:any)=>{
            state.counter =action.payload
        },
        filterDatas:(state:any, action:any)=>{
            state.filteredData = action.payload
        }
    }
})
export const { cartData, increaseCounter,filterDatas } = CartSlice.actions;
export default CartSlice.reducer;