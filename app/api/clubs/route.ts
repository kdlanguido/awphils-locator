import { NextResponse } from 'next/server';
import { connectToDB } from '@/utils/database';
import Clubs from '@/models/Clubs';

export const GET = async (req: Request) => {
    try {
        await connectToDB();

        const url = new URL(req.url)
        const parameters = new URLSearchParams(url.searchParams);

        let clubs;

        if (parameters.has('name')) {
            clubs = await GetClubsByClubname(parameters.get('name') as string)
        } else if (parameters.has('region')) {
            clubs = await GetClubsByRegion(parameters.get('region') as string)
        } else {
            clubs = await Clubs.find({});
        }

        return NextResponse.json(clubs)

    } catch (error) {
        console.error('Error fetching clubs:', error);
    }
}

const GetClubsByRegion = async (region: string) => {
    try {
        return await Clubs.find({ region: region });
    } catch (error) {
        console.error('Error fetching clubs:', error);
    }
}

const GetClubsByClubname = async (name: string) => {
    try {
        return await Clubs.find({ name: name });
    } catch (error) {
        console.error('Error fetching clubs:', error);
    }
}