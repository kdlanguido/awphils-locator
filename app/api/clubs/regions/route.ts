import { NextResponse } from 'next/server';
import { connectToDB } from '@/utils/database';
import Clubs from '@/models/Clubs';

export const GET = async () => {
    try {
        await connectToDB();

        const clubs = await Clubs.find({});

        const regions = Array.from(
            new Set(clubs.map(club => club.region))
        );

        return NextResponse.json(regions)

    } catch (error) {
        console.error('Error fetching club regions:', error);
        return NextResponse.json({
            "message":"There is an error in api"
        })
    }
}