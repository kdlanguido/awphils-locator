'use client';

import { configureStore } from "@reduxjs/toolkit";
import subscriptionReducer from "./features/subscription/subscriptionSlice";
import clubSlice from "./features/clubs/clubSlice";

export const store = configureStore({
    reducer: {
        subscription: subscriptionReducer,
        club: clubSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch