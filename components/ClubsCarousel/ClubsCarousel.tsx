'use client'

import React, { useEffect, useState } from 'react';
import Card from '@mui/joy/Card';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemButton from '@mui/joy/ListItemButton';
import ListItemContent from '@mui/joy/ListItemContent';
import Typography from '@mui/joy/Typography';
import LinearProgress from '@mui/joy/LinearProgress';
import ListDivider from '@mui/joy/ListDivider';

import Button from '@mui/joy/Button';
import ButtonGroup from '@mui/joy/ButtonGroup';
import IconButton from '@mui/joy/IconButton';
import Tooltip from '@mui/joy/Tooltip';
import Settings from '@mui/icons-material/Settings';
import Person from '@mui/icons-material/Person';
import { Box } from '@mui/joy';
import ViewListIcon from '@mui/icons-material/ViewList';
import ViewModuleIcon from '@mui/icons-material/ViewModule';


import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import { RootState } from '@/app/globalredux/store';
import { setSelectedClubInfo, setClubsFound, IClub } from '@/app/globalredux/features/clubs/clubSlice';
import Grid from '@mui/joy/Grid';

const getAllClubs = async () => {
    const response = await fetch(`/api/clubs`);
    const clubs = await response.json();
    return clubs;
}

const ClubsCarousel = () => {
    const [clubsFoundState, setClubsFoundState] = useState<any>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [displayIsGrid, setDisplayIsGrid] = useState(false);
    const [showingRegion, setShowingRegion] = useState('All Regions');


    const clubsFound = useSelector((state: RootState) => state.club.clubsFound);
    const selectedRegion = useSelector((state: RootState) => state.club.selectedRegion);


    const router = useRouter();
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchClubs = async () => {
            setIsLoading(true);
            if (!selectedRegion || selectedRegion === 'all') {
                const clubs = await getAllClubs();
                setClubsFoundState(clubs);
                setShowingRegion('All Regions');
            } else {
                setClubsFoundState(clubsFound);
                setShowingRegion(selectedRegion);
            }
            setIsLoading(false);
        };

        fetchClubs();
    }, [clubsFound]);

    const handleClick = (club: IClub) => {
        dispatch(setSelectedClubInfo([club]));
        router.push('/club');
    };

    return (
        <>
            <Card variant="outlined" className="w-full" sx={{ maxHeight: '47vh', overflowY: 'auto' }}>
                <LinearProgress variant="soft" thickness={2} sx={{ display: isLoading ? 'block' : 'none', color: `#E4BD08` }} />

                <ButtonGroup className="ml-auto items-end justify-items-end mb-5" variant="soft" aria-label="tooltip button group">
                    <Tooltip arrow title="Go to profile">
                        <Button onClick={() => { setDisplayIsGrid(true) }} startDecorator={<ViewModuleIcon />}>Grid</Button>
                    </Tooltip>
                    <Tooltip arrow title="Go to profile">
                        <Button onClick={() => { setDisplayIsGrid(false) }} startDecorator={<ViewListIcon />}>List</Button>
                    </Tooltip>
                </ButtonGroup>

                {(!isLoading && !displayIsGrid) && (
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
                                {index !== clubsFoundState.length - 1 && <ListDivider />}
                            </React.Fragment>
                        ))}
                    </List>
                )}

                {(!isLoading && displayIsGrid) && (
                    <Grid
                        container
                        spacing={{ xs: 2, md: 3 }}
                        sx={{ flexGrow: 1 }}
                    >
                        {
                            clubsFoundState.map((club: IClub, index: number) => (

                                <Grid sm={12} md={4} lg={3} key={index}>

                                    <ListItem onClick={() => handleClick(club)}>
                                        <ListItemButton sx={{ gap: 2 }}>
                                            <img src={club.logo} alt={club.name} style={{ height: '100px', width: '100px', objectFit: 'cover' }} />
                                            <ListItemContent>
                                                <Typography fontWeight="md">{club.name}</Typography>
                                                <Typography level="body-sm">{club.address}</Typography>
                                            </ListItemContent>
                                        </ListItemButton>
                                    </ListItem>
                                    {index !== clubsFoundState.length - 1 && <ListDivider />}
                                </Grid>
                            ))
                        }

                    </Grid>
                )}
            </Card>
            <small className='w-full' style={{ textAlign: 'right' }}>Showing clubs from : {showingRegion}</small>
        </>
    );
};

export default ClubsCarousel;
