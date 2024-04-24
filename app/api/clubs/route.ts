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
            clubs = await Clubs.find({ name: parameters.get('name') })
        } else if (parameters.has('region')) {
            clubs = await Clubs.find({ region: parameters.get('region') })
        } else {
            clubs = await Clubs.find({});
        }

        return NextResponse.json(clubs)

    } catch (error) {
        console.error('Error fetching clubs:', error);
        return NextResponse.json({
            "message": "There is an error in api"
        })
    }
}
