export const apiLoadFlights = async (airportName) => {
    // 1. Validate data
    // 2. Send data to server
    // 2.1. Get data from form and convert to json
    // 2.2. Prepare url
    const url = `https://api.skypicker.com/locations?term=${airportName}&locale=en-US&location_types=airport&limit=10&active_only=true&sort=name`;
    // Example using async/await
    const response = await fetch(url, {
        method: "GET",
        headers: {
        "Content-Type": "application/json",
        },
    });
    
    const data = await response.json();
    return data;
}
