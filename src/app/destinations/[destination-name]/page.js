const DestinationDetails = ({ params }) => {
    const { 'destination-name': destinationName  } = params;
    return (
        <div>
            <h1>{destinationName}</h1>
            <p>Here is description of Indonesia</p>
        </div>
    );
};

export default DestinationDetails;