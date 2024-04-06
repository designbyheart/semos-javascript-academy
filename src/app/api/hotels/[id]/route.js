import { hotels } from '@/data/mocked/hotels';
import { NextResponse } from 'next/server';

export const GET = async (request, { params }) => {
    const { id } = params;

    const foundHotels = hotels.filter(hotelItem => `${hotelItem.id}` === `${id}`);

    if (foundHotels.length === 0) return NextResponse.json({ error: 'Hotel not found' }, { status: 404 });

    return NextResponse.json(foundHotels[ 0 ]);
};