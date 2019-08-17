import React from "react";

export default function CharacterCard({ name, status, species, gender, location, image }) {
  
  return( 

  <div class="ui card">
    <div class="image">
      <img src={image} alt={name}/> 
    </div>
    <div class="content">
      <a class="header">{name}</a>
      <div class="meta">
        <span class="date">{location}</span>
      </div>
      <div class="description">
      {species}
      </div>
    </div>
    <div class="extra content">
      <a>
        <i class="user icon"></i>
        {status}
      </a>
    </div>
  </div>
  );
}
