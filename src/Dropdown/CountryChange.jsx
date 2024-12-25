import React, { useState } from "react";
import {countryArray} from "./countryArray";
const CountryChange = () => {
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const handleCountry = (e) => {
    setCountry(e.target.value);
    setCity("");
  };
  const handleCity = (e) => {
    setCity(e.target.value);
  };
  return (
    <div>
      <h2>Country And citites Change Via Dropdown </h2>
      {/* country Select dropdown*/}
      <div>
        <select value={country} onChange={handleCountry}>
          <option value="">Select a country</option>
          {Object.keys(countryArray).map((CurrCountry) => {
            return <option value={CurrCountry}>{CurrCountry}</option>;
          })}
        </select>
      </div>
      {/* cities Select dropdown*/}
      <div>
        <select value={city} onChange={handleCity}>
          <option value="">Select a city</option>
          {country &&
            countryArray[country].map((currCity) => {
              return <option value={currCity}>{currCity}</option>;
            })}
        </select>
      </div>

      <div>
        <p>
          Selected Country : <strong>{country}</strong>
        </p>
        <p>
          Selected City : <strong>{city}</strong>
        </p>
      </div>
    </div>
  );
};
export default CountryChange;
