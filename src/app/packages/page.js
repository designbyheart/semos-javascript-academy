"use client";

import { useState, useEffect } from "react";
export default function PackagesPage() {
  // Todo: Load destinations when component renders
  const [packages, setPackages] = useState([]);

  // Load destinations
  const loadPackages = () => {
    // Fetch destinations from API
    fetch("/api/packages")
      .then((response) => response.json())
      .then((data) => {
        console.log("packages data", data);
        setPackages(data);
      });
  };

  useEffect(() => {
    if (packages.length === 0) {
      loadPackages();
    }
  }, []);

  return (
    <div>
      <h1>Packages</h1>
      <p>Here is description of Packages</p>
      <div className="packages-container">
        {packages.map((packageItem) => (
          <a href={`/packages/${packageItem?.id}`} key={packageItem?.id}>
            <p>{packageItem?.name}</p>

            {packageItem && packageItem?.image && (
              <img src={packageItem?.image} alt={packageItem?.name} />
            )}
          </a>
        ))}
      </div>
    </div>
  );
}
