// features/productSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    Data: [],
    activeTab: "ATVNCG",
    Props: null,
};

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        setData: (state, action) => {
            state.Data = action.payload;
            state.Props = action.payload[0] || null;
        },
        setTab: (state, action) => {
            state.activeTab = action.payload;
            if (action.payload === "ATVNCG") state.Props = state.Data[0];
            else if (action.payload === "GLX Merch") state.Props = state.Data[1];
            else state.Props = null;
        },
    },
});

export const { setData, setTab } = productSlice.actions;
export default productSlice.reducer;
