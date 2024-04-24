'use client';

import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface SubscriptionState {
    newProductModalIsShown: boolean
}

const initialState: SubscriptionState = {
    newProductModalIsShown: false
}

export const subscriptionSlice = createSlice({
    name: 'subscription',
    initialState,
    reducers: {
        setNewProductModalIsShown: (state, action: PayloadAction<boolean>) => {
            state.newProductModalIsShown = action.payload;
        },
    }
})


export const {
    setNewProductModalIsShown,
} = subscriptionSlice.actions;

export default subscriptionSlice.reducer;
