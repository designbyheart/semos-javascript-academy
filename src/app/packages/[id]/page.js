'use client';
import { useEffect, useState } from 'react';

export default function PackageDetailsPage({ params }) {
    const { id } = params;

    const [packageItem, setPackageItem] = useState(null);
    //1. Fetch data from API
    // 1.1. Fetch data from API: create function loadData
    // 1.2. Call loadData function in useEffect
    const loadData = () => {
        fetch(`/api/packages/${id}`)
            .then((response) => response.json())
            .then((data) => {
                setPackageItem(data);
            });
    };

    useEffect(() => {
        loadData();
    }, []);
    // 2. Update local state (to re-render the component)
    // 3. Display the data in the component

    console.log('packageItem', packageItem);
    return (
        <div>
            <h1>{packageItem?.name}</h1>
            {packageItem?.image && <img src={packageItem?.image} alt={packageItem?.name} />}
            <p>{packageItem?.description}</p>
            <p>
                {packageItem?.price} EUR
            </p>
        </div>
    );
}
