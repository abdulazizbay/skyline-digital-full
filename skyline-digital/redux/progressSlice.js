import { createSlice } from "@reduxjs/toolkit";
import {SERVICESINFO} from "@/constants";

const initialState = {
    data: {
        items: [],
        totalPrice: 0,
        totalTime: 0,
    },
};

const progressSlice = createSlice({
    name: "progress",
    initialState,
    reducers: {
        saveFormData: (state, action) => {
            state.data = { ...state.data, ...action.payload };
        },
        removeItem: (state, action) => {
            const itemToRemove = action.payload;
            const updatedItems = state.data.items.filter((item) => item !== itemToRemove);

            const selectedItemsData = SERVICESINFO.flat().filter((item) =>
                updatedItems.includes(item.label)
            );
            const totalPrice = selectedItemsData.reduce((sum, item) => sum + item.price, 0);
            const totalTime = selectedItemsData.reduce((sum, item) => sum + item.takingTime, 0);

            state.data = {
                items: updatedItems,
                totalPrice,
                totalTime,
            };
        },
    },
});

export const { saveFormData, removeItem } = progressSlice.actions;
export default progressSlice.reducer;
