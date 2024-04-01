import { apartments } from '@/data/mocked/apartments';
import { NextResponse } from 'next/server';


export const GET = async (request) => {
    return NextResponse.json(apartments);
};