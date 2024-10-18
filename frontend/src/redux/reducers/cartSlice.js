import { createSlice } from '@reduxjs/toolkit'
import toast from 'react-hot-toast';




const initialState = {
    cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems") || "null") : [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
    previousURL:""
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        ADD_CART_ITEM: (state, action) => {
            const productIndex = state.cartItems.findIndex((item) => item.id === action.payload.id)
            if (productIndex >= 0) {
                state.cartItems[productIndex].quantity += 1
                toast.success(`${action.payload.name} Increased by one`)
            } else {
                const tempProduct = { ...action.payload, quantity: 1 }
                state.cartItems.push(tempProduct)
                toast.success(`${action.payload.name} added to cart`)
            }
            //save cart to localStorage
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
        },
        DECREASE_CART_ITEM: (state, action) => {
            const productIndex = state.cartItems.findIndex((item) => item._id === action.payload._id)
            if (state.cartItems[productIndex].quantity > 1) {
                state.cartItems[productIndex].quantity -= 1
                toast.info(`${action.payload.name} decreased by one`)
            } else if (state.cartItems[productIndex].quantity === 1) {
                const newCartItem = state.cartItems.filter((item) =>
                    item._id !== action.payload._id)
                toast.info(`${action.payload.name} Removed from Cart`)
                state.cartItems = newCartItem;
            }
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
        },
        DELETE_CART_ITEM: (state, action) => {
            const newCartItem = state.cartItems.filter((item) =>
                item._id !== action.payload._id)
            toast.info(`${action.payload.name} Removed from Cart`)
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
                const { price, quantity } = item
                const cartItemAmount = price * quantity
                return array.push(cartItemAmount)
            })
            const totalAmount = array.reduce((a, b) => {
                return a + b
            }, 0)
            state.cartTotalAmount = totalAmount
        },
        CALCULATE_TOTAL_QUANTITY: (state) => {
            const array = []
            state.cartItems.map((item) => {
                const { price } = item
                console.log("item",price)
                // const cartQuantity = quantity
                // return array.push(cartQuantity)
            })
            const totalQuantity = array.reduce((a, b) => {
                return a + b
            }, 0)
            state.cartTotalQuantity = totalQuantity
        },
        SAVE_URL: (state, action) => {
            state.previousURL = action.payload
        }, 
        resetCartSlice: (state) => {
            state.cartItems = []
            state.cartTotalQuantity = 0
            state.cartTotalAmount = 0
        }
        
    }
});

export const { ADD_CART_ITEM, DELETE_CART_ITEM, DECREASE_CART_ITEM, CLEAR_CART, CALCULATE_SUB_TOTAL, CALCULATE_TOTAL_QUANTITY, SAVE_URL, resetCartSlice } = cartSlice.actions

export const cartReducer = cartSlice.reducer;


