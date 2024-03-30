import { apartments } from '@/data/mocked/apartments';
import { hotels } from '@/data/mocked/hotels';
import { NextResponse } from 'next/server';

export const GET = async (request, { params }) => {
    const { searchParams } = new URL(request.url);
    const name             = searchParams.get('name');
    const isAvailable      = searchParams.get('available') || null;
    const type             = searchParams.get('type');

    let result = [...hotels, ...apartments].filter((item) => {
        let shouldReturn = item
            .name.toLowerCase()
            .includes(name.toLowerCase());

        if (isAvailable !== null) {
            shouldReturn = shouldReturn && `${item.isAvailable}` === isAvailable;
        }

        if(type) {
            shouldReturn = shouldReturn && item.type === type;
        }

        return shouldReturn;
    });
    return NextResponse.json(result);
};