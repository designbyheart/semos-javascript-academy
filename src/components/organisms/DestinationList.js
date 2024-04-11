import './_destinastions-list.scss';

import SearchField from '@/components/molecules/SearchField';
import TabBar from '@/components/molecules/TabBar';

export default function DestinationList({ destinations, activeTab, onTabChange, searchValue, onSearchChange }) {
    return (
        <div className="destination-list">
            <div className="destination-wrapper">
                <h2>Find and take the trip you want</h2>
                <div className='destination-navtabs'>
                    <TabBar tabs={['All', 'Best seller', 'Nature', 'Seasonal', 'City']}
                        activeTab={activeTab}
                        onTabClick={onTabChange}
                    />
                    {/* <SearchField value={searchValue} onChange={onSearchChange} /> */}
                </div>
                <div className="destination-grid">
                    {destinations?.map((destination) => {
                        return (
                            <div className="destination-item" key={destination.id}>
                                <a href={destination.link}>
                                    <img className="destination-image" src={destination.image} alt={destination.name} />
                                    <h3 className="destination-name">{destination.name}</h3>
                                </a>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}