import './_destination-details.scss';

import { useState } from 'react';
import TabBar from '../molecules/TabBar';

export default function DestinationDetails({ details, isLoading }) {
    const [activeTab, setActiveTab] = useState('Summary');

    const onUpdateTab = (tab) => {
        setActiveTab(tab)
    }

    if (isLoading) {
        return <h1>Loading page..</h1>;
    } else if (!details) {
        return <h1>Object not found..</h1>;
    }


    return (
        <div className='destination-wrapper'>
            <h1>{details.name}</h1>
            <div className='info'>
                <p className='location'>📍 {details.city}, {details.country}</p>
                <p className="rating">⭐ {details?.object?.rating} (reviews)</p>
            </div>
            <div className='picture-gallery'>
                <img className="image-1" src="https://media-cdn.tripadvisor.com/media/photo-m/1280/1d/81/30/3f/caption.jpg" alt={details.name} />
                <img className="image-2" src={details?.object?.image} alt={details.name} />
                <img className="image-3" src={details?.object?.image} alt={details.name} />
                <img className="image-4" src={details?.object?.image} alt={details.name} />
                <img className="image-5" src={details?.object?.image} alt={details.name} />
            </div>

            <div className='details'>
                <div className='details-left'>
                    <TabBar tabs={['Summary', 'Review', 'Package', 'Location', 'Other']}
                        activeTab={activeTab}
                        onTabClick={onUpdateTab}
                        isWired
                    />

                    <h2 className='title'>{details.description}</h2>
                    <p className='description'>{details?.object?.description}</p>
                </div>
                <div className='details-right'>
                    <h1 className='days'>7 days 6 nights</h1>
                    <div className='info'>
                        <p className='location'>📍 {details.city}, {details.country}</p>
                        <p className="rating">⭐ {details?.object?.rating} (reviews)</p>
                    </div>
                    <div className='booking-info'>
                        <div className='booking-info-left'>
                            From <p className='price'>${details.price}</p>
                        </div>
                        <div className='booking-info-right'>
                            Trip Code <p className='code'>CHGH4</p>
                        </div>
                    </div>
                    <a href="#" className="book-btn">Book now</a>
                </div>
            </div>

        </div>
    );
}