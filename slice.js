import {configureStore, createSlice} from '@reduxjs/toolkit';

// const {configureStore, createAction, createReducer} = toolkit
const cartSlice = createSlice(
    {
        name: 'cart',
        initialState: {
            item : [],
            status : false
        },
        reducers: {
            addToCart(state, action) {
                state.item.push(action.payload)
                state.status = true
            },
            deleteToCart(state, action) {
                state.item = state.item.filter(e => e.id != action.payload.id)
                state.status = false
            }
        }
    }
)

const store = configureStore({
    reducer: {
      cart:  cartSlice.reducer,
    }
})

// subscribe
store.subscribe(() => {
    console.log("store Change :", store.getState())
})

store.dispatch(cartSlice.actions.addToCart({id:1, qty:20}))
store.dispatch(cartSlice.actions.addToCart({id:2, qty:20}))

store.dispatch(cartSlice.actions.deleteToCart({id:1}))


