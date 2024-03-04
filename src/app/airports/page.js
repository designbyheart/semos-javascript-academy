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

  const onInputChange = (e) => {
    setSearchValue(e.target.value);
    filterAirports();
  };

  const filterAirports = async () => {
    if (!isSearchValid(searchValue)) {
      return;
    }

    const airportResult = await apiLoadFlights(searchValue);
    if (airportResult) {
      setAirports(airportResult.locations);
    }
  };

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
