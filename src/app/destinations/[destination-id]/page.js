'use client';
import { useState, useEffect } from 'react';
import DestinationDetails from '@/components/organisms/DestinationDetails';

const DestinationDetailPage = ({ params }) => {
    const { 'destination-id': destinationId } = params;

    const [destinationDetails, setDestinationDetails] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const loadDestinationDetails = () => {
        // Fetch destinations from API
        fetch(`/api/packages/${destinationId}`)
            .then((response) => response.json())
            .then((data) => {
                setDestinationDetails(data);
                setIsLoading(false);
            });

    }

    useEffect(() => {
        if (!destinationDetails) {
            setIsLoading(true);
            loadDestinationDetails()
        }
    });

    return (
        <DestinationDetails details={destinationDetails} isLoading={isLoading} />
    );
};

export default DestinationDetailPage;