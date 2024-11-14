import { useEffect, useState } from "react";
import LocationIcon from "./assets/location.svg";
import "./index.css";

const GoogleLocationSuggest = ({
  apiKey,
  handleLocationSelect,
  onChangeHandler,
  defaultValue,
  placeholder,
  inputClass,
  suggestionClass,
}) => {
  const [input, setInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const changeHandler = async (e) => {
    const userInput = e.target.value;
    setInput(userInput);
    if (onChangeHandler) {
      onChangeHandler(userInput);
    }
    if (userInput) {
      const response = await fetch(
        `https://react-google-location-suggest.vercel.app/api/autocomplete`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            apiKey,
            address: userInput,
          }),
        }
      );
      const data = await response.json();
      if (data.predictions) {
        setSuggestions(data.predictions);
        setSelectedIndex(-1);
      }
    } else {
      setSuggestions([]);
    }
  };

  const keyDownHandler = (e) => {
    if (e.key === "ArrowDown") {
      setSelectedIndex((prevIndex) =>
        Math.min(prevIndex + 1, suggestions.length - 1)
      );
    } else if (e.key === "ArrowUp") {
      setSelectedIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    } else if (e.key === "Enter" && selectedIndex >= 0) {
      selectHandle(suggestions[selectedIndex]);
    }
  };

  const selectHandle = async (place) => {
    setInput(place.description);
    setSuggestions([]);
    setSelectedIndex(-1);
    const placeDetails = await fetchPlaceDetails(place.place_id);
    handleLocationSelect(placeDetails);
    if (onChangeHandler) {
      onChangeHandler(placeDetails?.formatted_address);
    }
  };

  const fetchPlaceDetails = async (placeId) => {
    const response = await fetch(
      `https://react-google-location-suggest.vercel.app/api/details`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          apiKey,
          placeId: placeId,
        }),
      }
    );
    const data = await response.json();
    return data.result;
  };

  useEffect(() => {
    if (!input) {
      setInput(defaultValue);
    }
  }, [defaultValue]);

  return (
    <div className="google-location-suggest">
      <input
        type="text"
        value={input}
        onChange={changeHandler}
        onKeyDown={keyDownHandler}
        placeholder={placeholder}
        className={`google-location-suggest-input`}
        style={inputClass}
      />
      {input && suggestions.length > 0 && (
        <ul className={`google-location-suggest-ul`} style={suggestionClass}>
          {suggestions.map((suggestion, index) => (
            <li
              key={suggestion.place_id}
              style={{
                backgroundColor: selectedIndex === index ? "#efefef" : "white",
              }}
              className={`google-location-suggest-li`}
              onMouseEnter={() => setSelectedIndex(index)}
              onClick={() => selectHandle(suggestion)}
            >
              <img
                src={LocationIcon}
                alt=""
                className="google-location-suggest-li-location"
              />
              {suggestion.description}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default GoogleLocationSuggest;
