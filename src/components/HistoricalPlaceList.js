import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { markAsVisited, unmarkAsVisited } from "../redux/actions";
import { Link } from "react-router-dom";
import RandomSuggestion from "./RandomSuggestion";
import "./HistoricalPlaceList.css";

const HistoricalPlaceList = () => {
  const places = useSelector((state) => state.places);
  const dispatch = useDispatch();
  const [randomPlace, setRandomPlace] = useState(null);
  const [visitedPlaces, setVisitedPlaces] = useState([]);

  // Get random suggestion
  const getRandomSuggestion = () => {
    if (places.length > 0) {
      const randomIndex = Math.floor(Math.random() * places.length);
      setRandomPlace(places[randomIndex]);
    }
  };

  // Filter and show visited places
  const showVisited = () => {
    const visited = places.filter((place) => place.visited); // Filter places that are visited
    setVisitedPlaces(visited); // Set visited places to state
  };

  // Show all places when "Show All" is clicked
  const showAll = () => {
    setVisitedPlaces([]); // Reset the visitedPlaces state to show all places
  };

  // Handle unmarking a place as visited
  const handleUnmarkVisited = (placeId) => {
    // Dispatch unmark action
    dispatch(unmarkAsVisited(placeId));

    // Update visitedPlaces state after unmarking
    setVisitedPlaces((prevVisitedPlaces) =>
      prevVisitedPlaces.filter((place) => place.id !== placeId)
    );
  };

  return (
    <div className="historical-places-container">
      <h2 className="place-title">List of Historical Places</h2>
      <button onClick={showVisited}>List of Visited Places</button>
      <button onClick={showAll}>List of All Places</button>

      {/* Conditionally render either visited places or all places */}
      <div className="places-list-container">
        <ul>
          {(visitedPlaces.length > 0 ? visitedPlaces : places).map((place) => (
            <li key={place.id} className="place-item">
              <img src={place.image} alt={place.name} width="250" />
              <div className="place-info">
                <h3>{place.name}</h3>
                <p>{place.description}</p>
                <Link to={`/details/${place.id}`}>View Details</Link>
                <div className="button-group">
                  <button onClick={() => dispatch(markAsVisited(place.id))}>
                    Mark as Visited
                  </button>
                  <button onClick={() => handleUnmarkVisited(place.id)}>
                    Unmark as Visited
                  </button>
                  {place.visited && (
                    <span className="visited"> - Visited!</span>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Random suggestion */}
      <div className="random-suggestion-container">
        <button onClick={getRandomSuggestion}>Get a Random Suggestion</button>
        {randomPlace && <RandomSuggestion currentPlaceId={randomPlace.id} />}
      </div>
    </div>
  );
};

export default HistoricalPlaceList;
