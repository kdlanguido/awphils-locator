'use client';

import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface SubscriptionState {
    newProductModalIsShown: boolean,
    carouselIsGrid: boolean
}

const initialState: SubscriptionState = {
    newProductModalIsShown: false,
    carouselIsGrid:false
}

export const subscriptionSlice = createSlice({
    name: 'subscription',
    initialState,
    reducers: {
        setNewProductModalIsShown: (state, action: PayloadAction<boolean>) => {
            state.newProductModalIsShown = action.payload;
        },
        setCarouselIsGrid: (state, action: PayloadAction<boolean>) => {
            state.carouselIsGrid = action.payload;
        },
    }
})


export const {
    setNewProductModalIsShown,
    setCarouselIsGrid
} = subscriptionSlice.actions;

export default subscriptionSlice.reducer;
