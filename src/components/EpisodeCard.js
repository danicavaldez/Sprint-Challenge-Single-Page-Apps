import React from "react";

export default function EpisodeCard({ name, airDate, episode, characters }) {
  
  return( 
      <div>
        <h2>{name}</h2>
        <p>Air Date: {airDate}</p>
        <p>Episode: {episode}</p>
        <p>Characters: {characters.length}</p>
      </div>
    );
}