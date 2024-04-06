import { orders } from '@/data/mocked/orders';
import { isOrderValid } from '@/utilities/validators/orderValidator';
import { NextResponse } from 'next/server';

export const GET = async (request, { params }) => {
    const { id } = params;

    const foundOrders = orders.filter(item => `${item.id}` === `${id}`);

    if (foundOrders.length === 0) return NextResponse.json({ error: 'Order not found' }, { status: 404 });

    return NextResponse.json(foundOrders[ 0 ]);
};

export const POST = async (request, { params }) => {
    const { id } = params;

    if (id === 'new') {
        try {
            const newOrder = await request.json();
            newOrder.id = orders.length + 1;
            isOrderValid(newOrder);
            orders.push(newOrder);

            return NextResponse.json(newOrder, { status: 201 });
        } catch (e) {
            return NextResponse.json({ error: e.message || 'Invalid order' }, { status: 400 });
        }

    }

    const foundOrders = orders.filter(item => `${item.id}` === `${id}`);
    return NextResponse.json(foundOrders[ 0 ]);
};
