import React from "react";

export default function CharacterCard({ name, state, species, gender, location, image }) {
  
  return( 
    <div>
      <img src={image} alt={name}/>
      <h2>{name}</h2>
      <p>location: {location}</p>
      <p>Species: {species}</p>
      <p>Gender: {gender}</p>
      <p> State: {state}</p>
    </div>
  );
}
