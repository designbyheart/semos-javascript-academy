export const isOrderValid = (order) => {
    if (!order) {
        throw new Error('Order is required');
    }
    ;
    if (!order.userId) {
        throw new Error('UserId is required');
    }


    if (!(order.packageId || order.hotelId)) {
        throw new Error('Order needs to include PackageId or HotelId');
    }

    return true;
};

