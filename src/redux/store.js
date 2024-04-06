import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slice/cartSlice";
import loginReducer from "./slice/loginSlice";


const store = configureStore({
    reducer: {
        cart: cartReducer,
        login: loginReducer
    }
})

console.log("oncreate :", store.getState())
store.subscribe(() => {
    console.log("store Change :", store.getState())
})

export default store;