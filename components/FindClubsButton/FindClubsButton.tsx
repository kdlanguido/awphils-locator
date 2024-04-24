"use client"

import React, { useState } from 'react'
import Button from '@mui/joy/Button';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import { useSelector } from 'react-redux';
import { RootState } from '@/app/globalredux/store';
import { useDispatch } from 'react-redux';
import { setClubsFound } from '@/app/globalredux/features/clubs/clubSlice';

const FindClubsButton = () => {

    const selectedRegion = useSelector((state: RootState) => state.club.selectedRegion)
    const dispatch = useDispatch();

    const handleFindClubs = async () => {
        try {
            const clubsFound = await getClubsByRegion(selectedRegion)
            dispatch(setClubsFound(clubsFound))
            console.log(clubsFound)
        } catch (error) {
            console.error('Error fetching clubs:', error);
        }
    }

    return (
        <Button
            variant="soft"
            startDecorator={<TravelExploreIcon />}
            className='ml-3 sm:w-20 md:w-1/5 lg:w-64'
            onClick={handleFindClubs}>
            <span className="hidden lg:block">
                Find Clubs
            </span>
        </Button>
    )
}

export const getClubsByRegion = async (selectedRegion: string) => {
    const response = await fetch(`/api/clubs?region=${selectedRegion}`);
    const clubs = await response.json();
    return clubs
}

export default FindClubsButton