import { hotels } from '@/data/mocked/hotels';
import { NextResponse } from 'next/server';


export const GET = async (request) => {
    return NextResponse.json(hotels);
};