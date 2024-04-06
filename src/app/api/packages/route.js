import { packages } from '@/data/mocked/packages';
import { NextResponse } from 'next/server';

export const GET = async (request) => {
    return NextResponse.json(packages);
};