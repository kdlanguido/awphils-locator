'use client'

import React, { useEffect, useState } from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Typography from '@mui/joy/Typography';
import Card from '@mui/joy/Card';
import List from '@mui/joy/List';
import ListDivider from '@mui/joy/ListDivider';
import ListItem from '@mui/joy/ListItem';
import ListItemContent from '@mui/joy/ListItemContent';
import ListItemButton from '@mui/joy/ListItemButton';
import LinearProgress from '@mui/joy/LinearProgress';


import { useSelector } from 'react-redux';
import { RootState } from '@/app/globalredux/store';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { setSelectedClubInfo, setClubsFound, IClub } from '@/app/globalredux/features/clubs/clubSlice';


const getAllClubs = async () => {
    const response = await fetch(`/api/clubs`);
    const clubs = await response.json();

    return clubs
}

export default function ClubsCarousel() {

    const [clubsFoundState, setClubsFoundState] = useState<any>([]);
    const [isLoading, setIsLoading] = useState<any>(true);


    let clubsFound = useSelector((state: RootState) => state.club.clubsFound)
    const selectedRegion = useSelector((state: RootState) => state.club.selectedRegion)

    const router = useRouter();
    const dispatch = useDispatch();

    const handleClick = (club: any) => {
        dispatch(setSelectedClubInfo([club]))
        router.push('/club')
    }

    useEffect(() => {
        setIsLoading(true)
        if (!selectedRegion || selectedRegion == 'all') {
            getAllClubs().then((data) => {
                setClubsFoundState(data)
            })
        } else {
            setClubsFoundState(clubsFound)
        }
        setIsLoading(false)
    }, [clubsFound]);


    return (
        <Card variant="outlined" className="w-full">
            <LinearProgress variant="soft" sx={{ display: isLoading ? `block` : `none` }} />
            <List sx={{ py: 'var(--ListDivider-gap)' }}>
                {clubsFoundState.map((club: IClub, index: number) => (
                    <React.Fragment key={index}>
                        <ListItem onClick={() => handleClick(club)}>
                            <ListItemButton sx={{ gap: 2 }}>
                                <img src={club.logo} alt={club.name} style={{ height: '100px', width: '100px', objectFit: 'cover' }} />
                                <ListItemContent>
                                    <Typography fontWeight="md">{club.name}</Typography>
                                    <Typography level="body-sm">{club.address}</Typography>
                                </ListItemContent>
                            </ListItemButton>
                        </ListItem>
                        {index !== clubsFound.length - 1 && <ListDivider />}
                    </React.Fragment>
                ))}
            </List>
        </Card>
    );
}
