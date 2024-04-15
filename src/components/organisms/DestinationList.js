import './_destinations-list.scss';

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
                    {destinations?.filter(destination => {
                        if (activeTab == "Best seller") {
                            return destination.object.rating === 5;
                        } else {
                            return true;
                        }
                    }).map((destination) => {
                        return (
                            <div className="destination-item" key={destination.id}>
                                <a href={`/destinations/${destination.id}`}> {/* TO-DO: change /destinations/ to a reusable variable */}
                                    <img className="image" src={destination.object.image} alt={destination.name} />
                                    <div className='info'>
                                        <p className="price">${destination.price}</p>
                                        <p className="rating">⭐ {destination.object.rating} (reviews)</p>
                                    </div>
                                    <h1 className="name">{destination.name}</h1>
                                    <p className='description'>{destination.description}</p>
                                </a>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}