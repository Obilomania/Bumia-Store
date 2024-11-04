import { createSlice } from '@reduxjs/toolkit'
import toast from 'react-hot-toast';




const initialState = {
    cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems") || "null") : [],
    cartTotalcount: 0,
    cartTotalAmount: 0,
    previousURL:""
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        CART_ITEMS: (state, action) => {
            state.cartItems = action.payload
        },
        ADD_CART_ITEM: (state, action) => {
            const productIndex = state.cartItems.findIndex((item) => item._id === action.payload._id)
            if (productIndex >= 0) {
                state.cartItems[productIndex].count += 1
                toast.success(`${action.payload.title} Increased by one`)
            } else { 
                const tempProduct = { ...action.payload, count: 1 }
                state.cartItems.push(tempProduct)
                toast.success(`${action.payload.title} added to cart`)
            }
            //save cart to localStorage
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
        },
        DECREASE_CART_ITEM: (state, action) => {
            const productIndex = state.cartItems.findIndex((item) => item._id === action.payload._id)
            if (state.cartItems[productIndex].count > 1) {
                state.cartItems[productIndex].count -= 1
                toast.success(`${action.payload.title} decreased by one`)
            } else if (state.cartItems[productIndex].count === 1) {
                const newCartItem = state.cartItems.filter((item) =>
                    item._id !== action.payload._id)
                toast.success(`${action.payload.title} Removed from Cart`)
                state.cartItems = newCartItem;
            }
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
        },
        DELETE_CART_ITEM: (state, action) => {
            const newCartItem = state.cartItems.filter((item) =>
                item._id !== action.payload._id)
            toast.success(`${action.payload.title} Removed from Cart`)
            state.cartItems = newCartItem;
        },
        CLEAR_CART: (state) => {
            state.cartItems = []
            toast.success("Cart Cleared")
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))

        },
        CALCULATE_SUB_TOTAL: (state) => {
            const array = []
            state.cartItems.map((item) => {
                const { price, count } = item
                const cartItemAmount = price * count
                return array.push(cartItemAmount)
            })
            const totalAmount = array.reduce((a, b) => {
                return a + b
            }, 0)
            state.cartTotalAmount = totalAmount
        },
        CALCULATE_TOTAL_COUNT: (state) => {
            const array = []
            // state.cartItems.map((item) => {
            //     const { price } = item
            //     const cartcount = count
            //     return array.push(cartcount)
            // })
            const totalcount = array.reduce((a, b) => {
                return a + b
            }, 0)
            state.cartTotalcount = totalcount
        },
        SAVE_URL: (state, action) => {
            state.previousURL = action.payload
        }, 
        resetCartSlice: (state) => {
            state.cartItems = []
            state.cartTotalcount = 0
            state.cartTotalAmount = 0
        }
        
    }
});

export const {CART_ITEMS, ADD_CART_ITEM, DELETE_CART_ITEM, DECREASE_CART_ITEM, CLEAR_CART, CALCULATE_SUB_TOTAL, CALCULATE_TOTAL_COUNT, SAVE_URL, resetCartSlice } = cartSlice.actions

export const cartReducer = cartSlice.reducer;


