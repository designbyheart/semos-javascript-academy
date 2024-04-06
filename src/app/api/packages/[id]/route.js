
import { packages } from '@/data/mocked/packages';
import { NextResponse } from 'next/server';

export const GET = async (request, { params }) => {
    const { id } = params;

    const foundPackages = packages.filter(item => `${item.id}` === `${id}`);

    if (foundPackages.length === 0) return NextResponse.json({ error: 'Package not found' }, { status: 404 });

    return NextResponse.json(foundPackages[ 0 ]);
};