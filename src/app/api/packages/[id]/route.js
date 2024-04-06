
import { orders } from '@/data/mocked/orders';
import { packages } from '@/data/mocked/packages';
import { NextResponse } from 'next/server';

export const GET = async (request, { params }) => {
    const { id } = params;

    const foundPackages = packages.filter(item => `${item.id}` === `${id}`);

    if (foundPackages.length === 0) return NextResponse.json({ error: 'Package not found' }, { status: 404 });

    return NextResponse.json(foundPackages[ 0 ]);
};

export const POST = async (request, { params }) => {
    const { id } = params;

    if (id === 'new') {
        const newPackage = await request.json();

        packages.push(newPackage);

        return NextResponse.json(newPackage, { status: 201 });
    }

    const foundOrders = orders.filter(item => `${item.id}` === `${id}`);
    return NextResponse.json(foundOrders[ 0 ]);
};
