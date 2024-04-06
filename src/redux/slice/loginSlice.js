import { createSlice } from "@reduxjs/toolkit";


const loginSlice = createSlice({
    name: "cart",
    initialState: {
        data: {}, 
    },
    reducers: {
        addUser: (state, action) => {
            console.log('aksi',action.payload);
            state.data.user = action.payload.data_user
            state.data.token = action.payload.access_token
        },
       
    }
})

export const loginAction = loginSlice.actions

export default loginSlice.reducer;