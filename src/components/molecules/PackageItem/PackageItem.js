const PackageItem = ({ packageItem }) => {
    return (
        <>
        <div className="package-item-container">
            <a href={`/packages/${packageItem?.id}`} key={packageItem?.id}>
                {packageItem && packageItem?.image && (
                    <img src={packageItem?.image} alt={packageItem?.name}/>
                )}
                <p className="price">${packageItem?.price}</p>
                <p className="title">{packageItem?.name}</p>

                <p>{packageItem?.description}</p>
            </a>
        </div>

        </>
    );
}

export default PackageItem;