import './_tab-bar.scss';

export default function TabBar({ tabs, activeTab, onTabClick, isWired }) {
    return (
        <div className={`tab-bar-container ${isWired ? 'wired-container' : ''}`}>
            {tabs.map((tab) => (
                <button
                    className={tab === activeTab ? 'active' : ''}
                    key={tab}
                    onClick={() => onTabClick(tab)}
                >
                    {tab}
                </button>
            ))}
        </div>
    );
}