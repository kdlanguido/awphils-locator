"use client"

import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import React, { useEffect, useState } from 'react';

import { useDispatch } from 'react-redux';
import { setSelectedRegion } from '@/app/globalredux/features/clubs/clubSlice';

export default function RegionSelect() {

    const dispatch = useDispatch();

    const [regions, setRegions] = useState<string[]>([]);

    const fetchRegions = async () => {
        const res = await fetch("/api/clubs/regions")
        const data = await res.json();
        setRegions(data)
    }

    const handleChange = (
        event: React.SyntheticEvent | null,
        selectedRegion: string | null,
    ) => {
        dispatch(setSelectedRegion(selectedRegion ?? ""))
    };

    useEffect(() => {
        fetchRegions()
    }, [])

    return (
        <Select placeholder="Select Region..." onChange={handleChange} sx={{ width: '80%' }}>
            {
                <Option key={0} value={'all'}>
                    {'All Clubs'}
                </Option>
            }
            {

                regions.map((region, indx) => (
                    <Option key={indx + 1} value={region}>
                        {region}
                    </Option>
                ))
            }
        </Select >
    );
}
