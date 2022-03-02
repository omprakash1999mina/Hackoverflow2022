import { createSlice } from "@reduxjs/toolkit";

const initialState = {color: []};

const colorSlice = createSlice({
    name: "color",
    initialState,
    reducers: {
        setColor: (state, action) => {
            state.color = action.payload;
        },

    }
})

export const { setColor } = colorSlice.actions;
export const getColor = (state) => state.color;
export default colorSlice.reducer;