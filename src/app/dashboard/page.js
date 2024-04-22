'use client';
import PrivatePage from '@/components/templates/PrivateTemplate';
import { useEffect } from 'react';
import { loadFromStorage } from '@/utilities/localStorage';
import  { useState } from 'react';

const DashboardPage = () => {
    // load api data
    // load from local storage
    // validate data
    // validate user - does token exists

console.log('rendered dashboard')
    return <PrivatePage>
        <div>
            <h1>Dashboard Page</h1>
        </div>
    </PrivatePage>
};

export default DashboardPage;