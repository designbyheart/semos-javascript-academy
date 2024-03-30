import { hotels } from '@/data/mocked/hotels';
import { apartments } from '@/data/mocked/apartments';
import { NextResponse } from 'next/server';


export const GET = async (request, { params }) => {
    const {searchParams} = new URL(request.url);
    const name = searchParams.get("name");
    let result = [...hotels, ...apartments].filter((item) => item.name.toLowerCase().includes(name.toLowerCase()));
    return NextResponse.json(result);
};