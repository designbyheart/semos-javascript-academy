"use client";
import "./airports-style.css";
import { products } from "../../services/products";
import { flights } from "@/services/flights";
import { useEffect, useState } from "react";
import { isSearchValid } from "@/data/validators/searchValidator";
import { apiLoadFlights } from "@/services/api/apiFlights";

const AirportsPage = () => {
  const [searchValue, setSearchValue] = useState("");
  const [airports, setAirports] = useState([]);
  const [selectedAirport, setSelectedAirport] = useState(null);

  useEffect(() => {
    setSearchValue("miami");

    console.log("Miami from useEffect: ", searchValue);
  }, [searchValue, setSearchValue]);

  {/*
    This code snippet defines a function onInputChange which is likely used as an event handler for an input field.

    The function takes an event object e as a parameter.
    It first calls the setSearchValue function with the current value of the input field (e.target.value). This likely updates the state of the component with the new input value.
    It then calls the filterAirports function, which presumably filters a list of airports based on the new search value.
  */}
  const onInputChange = (e) => {
    setSearchValue(e.target.value);
    filterAirports();
  };

  {
    /*
      This code snippet defines an asynchronous function `filterAirports`.

      - The function first checks if the `searchValue` is valid by calling the `isSearchValid` function. If the `searchValue` is not valid, the function returns immediately.
      - If the `searchValue` is valid, the function calls the `apiLoadFlights` function with `searchValue` as an argument. This function is awaited, meaning the execution of `filterAirports` is paused until a Promise is returned.
      - If `apiLoadFlights` returns a truthy value (stored in `airportResult`), the `setAirports` function is called with `airportResult.locations` as an argument. This likely updates the state of the component with the new list of airports.
    */
  }
  const filterAirports = async () => {
    if (!isSearchValid(searchValue)) {
      return;
    }

    const airportResult = await apiLoadFlights(searchValue);
    if (airportResult) {
      setAirports(airportResult.locations);
    }
  };

  // Renders component structure
  return (
    <div className="airports-page-container">
      <h1>Aerodromi</h1>
      <div className="form-container">
        <h3>Pretrazi</h3>
        <label>Unesi ime aerodroma</label>
        <input
          type="text"
          defaultValue={searchValue}
          onChange={onInputChange}
        />
        <div className="airport-list-container">
          <div className="airport-list">
            {/* 
            This code snippet is a part of a React component that renders a
            list of airports.
            - It first checks if there is no selected airport
            (!selectedAirport) or if the search value length is greater than 2
            (searchValue.length > 2).  
            - If either of these conditions is true, it
            proceeds to map over the airports array.
            - For each airport in the
            airports array, it creates a div with the class name
            "airport-list-item" and a unique key of airport.id. 
            - Inside this div, it creates a button that, when clicked, sets the selected airport to
            the current airport and empties the airports array.
            - The button's text is the airport's name and code, formatted as "{name} [{code}]".
            */}
            {(!selectedAirport || searchValue.length > 2) &&
              airports?.map((airport) => {
                return (
                  <div className="airport-list-item" key={airport.id}>
                    <button
                      onClick={() => {
                        setSelectedAirport(airport);
                        setAirports([]);
                      }}
                    >
                      {airport.name} [{airport.code}]
                    </button>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      {/*
      This code snippet is a part of a React component that conditionally renders information about a selected airport.

      - It first checks if selectedAirport is truthy. If it is, it proceeds to render the following JSX.
      - It uses a React Fragment (<>...</>) to group the JSX elements without adding extra nodes to the DOM.
      - Inside the fragment, it renders a paragraph (<p>) with the text "Izabrani aerodrom", which translates to "Selected airport".
      - It then renders another paragraph with the selectedAirport's name and code, formatted as "{name} [{code}]". The optional chaining operator (?.) is used to access the name and code properties, which prevents a TypeError in case selectedAirport is null or undefined.
      */}
      {selectedAirport && (
        <>
          <p>Izabrani aerodrom</p>
          <p>
            {selectedAirport?.name} [{selectedAirport?.code}]
          </p>
        </>
      )}
      <p>Ukupno proizvoda: {flights.length}</p>
    </div>
  );
};

export default AirportsPage;
