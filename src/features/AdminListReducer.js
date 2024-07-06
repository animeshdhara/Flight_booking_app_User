import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    admin: [],
    loading: true
};

const adminSlice = createSlice({
    name: 'adminList',
    initialState,
    reducers: {
        setAdminList: (state, action)=>{
            state.admin = action.payload;
            state.loading = false;
        },
    }
});

export const { setAdminList} = adminSlice.actions;
export default adminSlice.reducer;