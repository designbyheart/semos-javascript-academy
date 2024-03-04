"use client";

import { useState } from "react";

export default function DotaPage() {
  const [heroes, setHeroes] = useState([]);
  const BaseURL = "https://api.opendota.com/api/";

  const apiLoadHeroes = async () => {
    // 1. Validate data
    // 2. Send data to server
    // 2.1. Get data from form and convert to json
    // 2.2. Prepare url
    const url = `${BaseURL}heroes`;
    // Example using async/await
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    setHeroes(data);
  };

  if(heroes.length === 0){
    apiLoadHeroes();
  } 

  console.log("apiLoadHeroes", () => apiLoadHeroes());

  return (
    <>
      <h1>Dota 2</h1>
      <button onClick={() => apiLoadHeroes()}>Load heroes</button>
      <ul>
        {heroes.map((hero) => (
          <li key={hero.id}>{hero.localized_name}</li>
        ))}
      </ul>
    </>
  );
}
