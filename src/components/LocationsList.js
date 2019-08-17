import React, { useEffect, useState } from "react";
import axios from "axios"
import LocationCard from "./LocationCard.js"

export default function LocationsList() {
  
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/location/")
      .then(res => {
        console.log(res.data.results);
        setLocations(res.data.results);
      })
      .catch(err => console.error("Fix this: ", err))
  }, []);

  return (
    <div className="character-list grid-view">
      {locations.map(location => (
        <LocationCard 
          key={location.id}
          name={location.name}
          type={location.type}
          residents={location.residents}
          dimension={location.dimension}
        />
      ))}
    </div>
  )
}


