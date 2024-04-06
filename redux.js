// reducer

import { createStore } from "redux";

const cartReducer = (
        state = {
            cart : [{id:1, qty: 10}]
        }, 
        action
    ) => {
    switch(action.type){
        case "ADD_TO_CART":
            return {
                ...state,
                cart: [...state.cart, action.payload]
            }
        default:
             state;
    }

}

// store
const store = createStore(cartReducer)


// subscribe
store.subscribe(() => {
    console.log("store Change :", store.getState())
})

// dispatch
const action1 = {type: 'ADD_TO_CART', payload:{id:2, qty:20}}
store.dispatch(action1)

const action2 = {type: 'ADD_TO_CART', payload:{id:3, qty:30}}
store.dispatch(action2)
