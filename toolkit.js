import {configureStore, createAction, createReducer} from '@reduxjs/toolkit';

// const {configureStore, createAction, createReducer} = toolkit
const addToCart = createAction("ADD_TO_CART")
const cartReducer = createReducer(
    [], 
    (builder) => {
    builder.addCase(addToCart, (state, action)=> {
        state.push(action.payload)
    })
})

const login = createAction("CREATE_SESSION")
const loginReducer = createReducer(
    {status: false, naruto: false}, 
    (builder) => {
    builder.addCase(login, (state, action)=> {
        state.status = true
        state.naruto = true
    })
})



const store = configureStore({
    reducer: {
      cart:  cartReducer,
      login: loginReducer
    }
})

console.log("awal :", store.getState())
// subscribe
store.subscribe(() => {
    console.log("store Change :", store.getState())
})

// dispatch
store.dispatch(addToCart({id:1, qty:20}))
store.dispatch(addToCart({id:2, qty:10}))
store.dispatch(login())

