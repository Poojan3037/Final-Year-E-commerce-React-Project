import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: [],
        total: 0
    },
    reducers: {
        addToCart(state, action) {
            state.cart = [action.payload, ...state.cart]
        },

        plusOneToCart(state, action) {
            const newArr = state.cart.map((item) => {
                if (action.payload === item.id) {
                    return {
                        ...item,
                        quantity: item.quantity + 1,
                        totalPriceOfProduct: Number(item.price) * Number(item.quantity + 1)

                    }

                }
                return item;
            })

            state.cart = newArr
        },

        minusOneToCart(state, action) {
            const newArr = state.cart.map((item) => {
                if (action.payload === item.id) {
                    return {
                        ...item,
                        quantity: item.quantity - 1,
                        totalPriceOfProduct: Number(item.price) * Number(item.quantity - 1)
                    }
                }
                return item;
            }).filter((item) => {
                if (item.quantity > 1) {
                    return item
                }
            })

            state.cart = newArr
        },

        removeFromCart(state, action) {
            const newArr = state.cart.filter((item) => {
                if (action.payload !== item.id) {

                    return item;
                }

            })



            state.cart = newArr
        },

        updateTotal(state, action) {
            const total = state.cart.reduce((total, item) => {
                return total = total + Number(item.totalPriceOfProduct)
            }, 0)

            state.total = total
        }


    }
})


export const cartSliceAction = cartSlice.actions;

export default cartSlice;