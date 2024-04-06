import { orders } from '@/data/mocked/orders';
import { NextResponse } from 'next/server';

export const GET = async (request) => {
    return NextResponse.json(orders);
};