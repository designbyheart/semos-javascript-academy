'use client';
import { useState, useEffect } from 'react';
import DestinationList from '@/components/organisms/DestinationList';

const DestinationsPage = () => {
    // Todo: Load destinations when component renders
    const [destinations, setDestinations] = useState([]);
    // Set active tab state
    const[activeTab, setActiveTab] = useState('All');
    // Set search value state

    // Load destinations
    const loadDestinations = () => {
// Fetch destinations from API
        fetch('/api/packages')
            .then((response) => response.json())
            .then((data) => {
                console.log('destinations data', data);
                setDestinations(data);
            });
    }

    const onUpdateTab = (tab) => {
        setActiveTab(tab)
        //loadDestinations()
    }

    useEffect(() => {
        if(destinations.length === 0) {
            loadDestinations()
        }
    });

    return (
        <div className="destinations-page">
            {/*
        Header > Organizam
        DestinationList > Organizam
        Discount > Organizam
        WhatDoYouSayAboutUs > Organizam
        Footer > Organizam
        */}
            <h1>Destinations</h1>
            <p>Check out these amazing destinations!</p>
            <DestinationList
                destinations={destinations}
                activeTab={activeTab}
                onTabChange={onUpdateTab}
                onSearchChange={() => {
            }}/>
        </div>
    );
};

export default DestinationsPage;