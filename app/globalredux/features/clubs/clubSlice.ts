'use client';

import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface IClub {
    name: string,
    founder: string,
    tagline: string,
    alias: string,
    region: string,
    establishYear: string,
    city: string,
    address: string,
    logo: string,
    maps:string,
    fbPage:string,
    tiktokPage:string,
    instagramPage:string,
}

export interface ClubState {
    selectedRegion: string,
    clubsFound: any[],
    selectedClubInfo: IClub[]
}

const initialState: ClubState = {
    selectedRegion: "",
    clubsFound: [],
    selectedClubInfo: []
}

export const clubSlice = createSlice({
    name: 'club',
    initialState,
    reducers: {
        setSelectedRegion: (state, action: PayloadAction<string>) => {
            state.selectedRegion = action.payload;
        },
        setClubsFound: (state, action: PayloadAction<any[]>) => {
            state.clubsFound = action.payload;
        },
        setSelectedClubInfo: (state, action: PayloadAction<IClub[]>) => {
            state.selectedClubInfo = action.payload;
        },
    }
})


export const {
    setSelectedRegion,
    setClubsFound,
    setSelectedClubInfo
} = clubSlice.actions;

export default clubSlice.reducer;
