import { loadFromStorage } from '@/utilities/localStorage';
import { useRouter } from 'next/navigation';

import { useEffect, useState } from 'react';
export default function PrivatePage ({ children }) {
    const [isLoaded, setIsLoaded] = useState(false);
    const router = useRouter();

    useEffect(() => {
        // check if user is authenticated
        const authToken = loadFromStorage('authToken')
        console.log('user token', authToken);
        if(!authToken) {
            console.log('user is not authenticated');
            //redirect('/auth/login');
            setIsLoaded(false);
            router.push('/auth/login');
        }
        setIsLoaded(true);
    });

    return <div>
        {!isLoaded && <p>Loading...</p>}
        {isLoaded && children}
    </div>
}