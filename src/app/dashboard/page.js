'use client';
import { redirect } from 'next/navigation';
import { useEffect } from 'react';
import { loadFromStorage } from '@/utilities/localStorage';

const DashboardPage = () => {
    // load api data
    // load from local storage
    // validate data
    // validate user - does token exists

    useEffect(() => {
        // check if user is authenticated
        const authToken = loadFromStorage('authToken')
        console.log('user token', authToken);
        if(!authToken) {
            redirect('/auth/login');
            console.log('user is not authenticated');
        }
    });


    return (
        <div>
            <h1>Dashboard Page</h1>
        </div>
    );
};

export default DashboardPage;