'use client';

import React, { useEffect, useRef, useState } from 'react';
import Avatar from '@mui/joy/Avatar';
import Chip from '@mui/joy/Chip';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import ButtonGroup from '@mui/joy/ButtonGroup';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import CardActions from '@mui/joy/CardActions';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';

import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';
import { RootState } from '../globalredux/store';
import { IClub } from '../globalredux/features/clubs/clubSlice';

export default function ClubInformation() {

    const router = useRouter();

    const clubInformation = useSelector((state: RootState) => state.club.selectedClubInfo);
    const [output, setOutput] = useState<JSX.Element[] | null>(null);

    useEffect(() => {

        if (!clubInformation || clubInformation.length < 1) {
            router.push('/')
        };

        const clubs = clubInformation.map((club: IClub, index: number) => (
            <ClubCard key={index} club={club} />
        ));

        setOutput(clubs);
    }, [clubInformation]);

    return <div>{output}</div>;
}

interface ClubCardProps {
    club: IClub;
}

function ClubCard({ club }: ClubCardProps) {

    const router = useRouter();

    return (
        <Card sx={{
            width: '70%',
            maxWidth: '100%',
            margin: '50px auto',
            boxShadow: 'lg',
        }}>
            <CardContent sx={{ alignItems: 'center', textAlign: 'center' }}>
                <Avatar src={club.logo} sx={{ '--Avatar-size': '40%' }} />
                <Chip
                    size="sm"
                    variant="soft"
                    color="primary"
                    sx={{
                        mt: -1,
                        mb: 1,
                        border: '3px solid',
                        borderColor: 'background.surface',
                    }}
                >
                    {club.alias}
                </Chip>
                <Typography level="title-lg">{club.name}</Typography>
                <Typography level="body-sm" sx={{ maxWidth: '24ch' }}>
                    {club.address}
                </Typography>
                <Box
                    sx={{
                        display: 'flex',
                        gap: 2,
                        mt: 2,
                        '& > button': { borderRadius: '2rem' },
                    }}
                >
                    <IconButton onClick={() => {
                        window.open(club.fbPage, '_blank', 'noopener,noreferrer');
                    }} size="sm" variant="plain" color="neutral">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="currentColor" d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95" /></svg>
                    </IconButton>
                    <IconButton onClick={() => {
                        window.open(club.tiktokPage, '_blank', 'noopener,noreferrer');
                    }} size="sm" variant="plain" color="neutral">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="currentColor" d="M16.6 5.82s.51.5 0 0A4.278 4.278 0 0 1 15.54 3h-3.09v12.4a2.592 2.592 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6c0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64c0 3.33 2.76 5.7 5.69 5.7c3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48" /></svg>
                    </IconButton>
                    <IconButton onClick={() => {
                        window.open(club.instagramPage, '_blank', 'noopener,noreferrer');
                    }} size="sm" variant="plain" color="neutral">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="currentColor" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3" /></svg>
                    </IconButton>
                </Box>
            </CardContent>
            <CardOverflow sx={{ bgcolor: 'background.level1' }}>
                <CardActions buttonFlex="1">
                    <ButtonGroup variant="outlined" sx={{ bgcolor: 'background.surface' }}>
                        <Button onClick={() => {
                            window.open(club.maps, '_blank', 'noopener,noreferrer');
                        }} startDecorator={<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18.5L9 17l-6 3V7l6-3l6 3l6-3v7.5M9 4v13m6-10v5.5m6.121 7.621a3 3 0 1 0-4.242 0Q17.506 20.749 19 22q1.577-1.335 2.121-1.879M19 18v.01" /></svg>}>
                            Locate
                        </Button>
                        <Button onClick={() => { router.push('/') }} startDecorator={<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M244 400L100 256l144-144M120 256h292" /></svg>}>Back</Button>
                    </ButtonGroup>
                </CardActions>
            </CardOverflow>
        </Card>
    );
}
