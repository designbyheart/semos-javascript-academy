'use client';
import { useState, useEffect } from 'react';
import DestinationList from '@/components/organisms/DestinationList';

const DestinationsPage = () => {
    // Todo: Load destinations when component renders
    const [destinations, setDestinations] = useState([]);
    // Set active tab state
    const [activeTab, setActiveTab] = useState('All');
    const [loading, setLoading] = useState(true);
    // Set search value state

    // Load destinations
    const loadDestinations = () => {
        // Fetch destinations from API
        setLoading(true)
        fetch('/api/packages')
            .then((response) => response.json())
            .then((data) => {
                setDestinations(data);
            });
        setLoading(false);
    }

    const onUpdateTab = (tab) => {
        setActiveTab(tab)
    }

    useEffect(() => {
        if (destinations.length === 0) {
            loadDestinations()
        }
    });

    return (
        <div className="destinations-page">
            <h1>Destinations</h1>
            <p>Check out these amazing destinations!</p>
            <DestinationList
                destinations={destinations}
                activeTab={activeTab}
                onTabChange={onUpdateTab}
                onSearchChange={() => {
                }} />
        </div>
    );
};

export default DestinationsPage;