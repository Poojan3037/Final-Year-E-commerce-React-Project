import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: "products",
    initialState: {
        products: [],
        copyProducts: [],
        loading: false,
        singleProduct: []
    },
    reducers: {

        // set loading on
        setLoadingOn(state, action) {
            state.loading = true
        },

        // set loading off

        setLoadingOff(state, action) {
            state.loading = false;
        },

        // on first load
        setProductsOnLoad(state, action) {
            state.products = action.payload;
        },

        // ---Men---

        // get all men products
        getMenProducts(state, action) {
            let menProducts = state.products.filter((item) => {
                if (item.gender === "male") {
                    return item;
                }
            })

            state.copyProducts = menProducts;
        },

        // men-clothes
        getMenClothes(state, action) {
            let menClothes = state.products.filter((item) => {
                if (item.gender === "male") {
                    return item;
                }
            }).filter((item) => {
                if (item.category === "clothes") {
                    return item;
                }
            })

            state.copyProducts = menClothes;
        },

        // men - shoes
        getMenShoes(state, action) {
            let menShoes = state.products.filter((item) => {
                if (item.gender === "male") {
                    return item;
                }
            }).filter((item) => {
                if (item.category === "shoes") {
                    return item;
                }
            })

            state.copyProducts = menShoes;
        },

        // men-watch
        getMenWatch(state, action) {
            let menWatch = state.products.filter((item) => {
                if (item.gender === "male") {
                    return item;
                }
            }).filter((item) => {
                if (item.category === "watch") {
                    return item;
                }
            })

            state.copyProducts = menWatch;
        },

        // ----Women

        // women all products
        getWomenProducts(state, action) {
            let womenProducts = state.products.filter((item) => {
                if (item.gender === "female") {
                    return item;
                }
            })

            state.copyProducts = womenProducts;
        },

        // women-clothes
        getWomenClothes(state, action) {
            let womenClothes = state.products.filter((item) => {
                if (item.gender === "female") {
                    return item;
                }
            }).filter((item) => {
                if (item.category === "clothes") {
                    return item;
                }
            })

            state.copyProducts = womenClothes;
        },

        // women-shoes
        getWomenShoes(state, action) {
            let womenShoes = state.products.filter((item) => {
                if (item.gender === "female") {
                    return item;
                }
            }).filter((item) => {
                if (item.category === "shoes") {
                    return item;
                }
            })

            state.copyProducts = womenShoes;
        },

        // women-watch
        getWomenWatch(state, action) {
            let womenWatch = state.products.filter((item) => {
                if (item.gender === "female") {
                    return item;
                }
            }).filter((item) => {
                if (item.category === "watch") {
                    return item;
                }
            })
            state.copyProducts = womenWatch;
        },

        // ==== Get all clothes

        getAllClothes(state, action) {
            let clothes = state.products.filter((item) => {
                if (item.category === "clothes") {
                    return item;
                }
            })

            state.copyProducts = clothes;
        },

        // === get all shoes


        getAllShoes(state, action) {
            let shoes = state.products.filter((item) => {
                if (item.category === "shoes") {
                    return item;
                }
            })

            state.copyProducts = shoes;
        },

        // === get all watch


        getAllWatch(state, action) {
            let watch = state.products.filter((item) => {
                if (item.category === "watch") {
                    return item;
                }
            })

            state.copyProducts = watch;
        },


        // ===setSingleProduct Details

        setSingleProductDetails(state, action) {
            state.singleProduct = action.payload;
        }

    }
})

export const productSliceAction = productSlice.actions;
export default productSlice;