import './_destinastions-list.scss';

import SearchField from '@/components/molecules/SearchField';
import TabBar from '@/components/molecules/TabBar';

export default function DestinationList({ destinations, activeTab, onTabChange, searchValue, onSearchChange }) {
    return (
        <div className="destination-list">
            <h2>Find and take the trip you want</h2>
            <div>
                <TabBar tabs={['All', 'Best seller', 'Nature', 'Seasonal', 'City']}
                        activeTab={activeTab}
                        onTabClick={onTabChange}
                />
                <SearchField value={searchValue} onChange={onSearchChange}/>
            </div>
            <div>
                {destinations?.map((destination) => {
                    return (
                        <div key={destination.id}>
                          <a href={destination.link}>
                            <img src={destination.image} alt={destination.name}/>
                            <h3>{destination.name}</h3>
                          </a>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}