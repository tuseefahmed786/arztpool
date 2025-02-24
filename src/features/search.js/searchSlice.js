import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userSearch: null,
    products: [],
    cart: {
        product: [],
    },
    queryProducts: [],
    amount:null,
}

const SearchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setSearch(state, action) {
            const filterSearchProducts = state.products.filter((product) => product.title.toLowerCase().includes(action.payload.toLowerCase()))
            state.queryProducts = filterSearchProducts
        },
        setProducts(state, action) {
            state.products = action.payload
            state.queryProducts = action.payload
        },
        productInCart(state, action) {
            state.amount += action.payload.price 
            const existingProduct = state.cart.product.find((product) => product.id === action.payload.id)
            console.log(existingProduct)
            if (existingProduct) {
                existingProduct.quantity += 1
            } else {
                state.cart.product.push({ ...action.payload, quantity: 1 })
            }

        //    state.amount = state.cart.product.reduce((total,e)=> total + e.price * e.amount,0)
        //    state.amount = state.cart.product.reduce((total, e) => total + e.price * e.quantity, 0);
        },
        removeProduct(state, action) {
            const findProduct = state.cart.product.find((product) => product.id == action.payload.id)
            if (findProduct) {
             findProduct.quantity > 1 ? findProduct.quantity-- : state.cart.product  = state.cart.product.filter((product) => product.id !== action.payload.id);
            }
        },
        descendingProducts(state, action) {
            state.queryProducts = [...state.products].sort((a, b) => b.price - a.price)
        },
        ascendingProducts(state, action) {
            state.queryProducts = [...state.products].sort((a, b) => a.price - b.price)
        },
        defaultProducts(state, action) {
            state.queryProducts = state.products
        },
    }
})

export const { setSearch, setProducts, productInCart, removeProduct, descendingProducts, ascendingProducts, defaultProducts } = SearchSlice.actions
export default SearchSlice.reducer