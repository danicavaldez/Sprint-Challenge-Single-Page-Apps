import React, { useEffect, useState } from "react";
import axios from "axios"
import EpisodeCard from "./EpisodeCard";

export default function EpisodesList() {
  // TODO: Add useState to track data from useEffect
  const [episodes, setEpisodes] = useState([]);
  
  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
      .get("https://rickandmortyapi.com/api/episode/")
      .then(res => {
        console.log(res.data.results);
        setEpisodes(res.data.results);
      })
      .catch(err => console.error("Fix this: ", err))
  }, []);

  return (
    <div className="character-list grid-view">
      {episodes.map(episode => (
          <EpisodeCard
            key={episode.id}
            name={episode.name}
            airDate={episode.air_date}
            episode={episode.episode}
            characters={episode.characters}
            />
        ))}
    </div>
  );
}
