import { createSlice } from "@reduxjs/toolkit";
import { useSelector, useDispatch } from "react-redux";

const initialState = { 'light': false };

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleTheme: (state) => {
            state.light = !state.light;
        }
    }
});

export const { toggleTheme } = themeSlice.actions;	
export default themeSlice.reducer;