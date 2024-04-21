'use client';
import { useState, useEffect } from 'react';
import DestinationDetails from '@/components/organisms/DestinationDetails';

const DestinationDetailPage = ({ params }) => {
    const { 'destination-id': destinationId } = params;

    const [destinationDetails, setDestinationDetails] = useState(null);

    const loadDestinationDetails = () => {
        // Fetch destinations from API
        fetch(`/api/packages/${destinationId}`)
            .then((response) => response.json())
            .then((data) => {
                setDestinationDetails(data);
            });

    }

    useEffect(() => {
        if (!destinationDetails) {
            loadDestinationDetails()
        }
    });

    return (
        <DestinationDetails details={destinationDetails} />
    );
};

export default DestinationDetailPage;