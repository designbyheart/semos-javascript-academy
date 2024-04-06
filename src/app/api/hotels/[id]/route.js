import { hotels } from '@/data/mocked/hotels';
import { orders } from '@/data/mocked/orders';
import { NextResponse } from 'next/server';

export const GET = async (request, { params }) => {
    const { id } = params;

    const foundHotels = hotels.filter(hotelItem => `${hotelItem.id}` === `${id}`);

    if (foundHotels.length === 0) return NextResponse.json({ error: 'Hotel not found' }, { status: 404 });

    return NextResponse.json(foundHotels[ 0 ]);
};

export const POST = async (request, { params }) => {
    const { id } = params;

    if (id === 'new') {
        const newHotel = await request.json();
        newHotel.id = hotels.length + 1;

        orders.push(newHotel);


        return NextResponse.json(newHotel, { status: 201 });
    }

    const foundOrders = orders.filter(item => `${item.id}` === `${id}`);
    return NextResponse.json(foundOrders[ 0 ]);
};
