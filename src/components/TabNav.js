import React from "react";
import { Tab, Menu, Icon } from "semantic-ui-react";
import { Route, NavLink, Switch } from "react-router-dom";
import WelcomePage from "./WelcomePage.js"
import CharacterList from './CharacterList.js';
import LocationsList from './LocationsList.js';
import EpisodeList from './EpisodeList.js';


// TODO: Add missing tabs below
export default function TabNav() {
  return (
    <div>
      <nav className="main-nav">
        <ul>
          <li>
            <NavLink to="/">Home Page</NavLink>
          </li>
          <li>
            <NavLink to="/characters/">Characters</NavLink>
          </li>
          <li>
            <NavLink to="/locations/">Locations</NavLink>
          </li>
          <li>
            <NavLink to="/episodes/">Episodes</NavLink>
          </li>          
        </ul>
      </nav>
      <Switch>
        <Route path="/" exact component={WelcomePage} />
        <Route path="/characters/" component={CharacterList} />
        <Route path="/episodes/" component={EpisodeList} />
        <Route path="/locations/" component={LocationsList} />
      </Switch>
    </div>
  );
}    

