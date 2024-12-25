import React, { useState } from "react";
import { countryArrayTwo } from "./countryArray";
const CountryChangeTwo = () => {
  const [country, setCountry] = useState("");

  const [city, setCity] = useState([])
  const[selectedCity,setSelectedCity]=useState('')

  const handleCountry = (e) => {
    const selectedCountry = e.target.value;
    setCountry(selectedCountry);

    const filterCountry = countryArrayTwo.find(
      (currCountry) => currCountry.name === selectedCountry
    );
    setCity(filterCountry ? filterCountry.cities : []);
  };
const handleCity = (e)=>{
    setSelectedCity(e.target.value)
}
  return (
    <div>
      <h2>Country and Cities Change via Dropdown another method</h2>

      <div>
        <select value={country} onChange={handleCountry}>
          <option value="">select a country</option>
          {countryArrayTwo.map((currCountry) => {
            return <option value={currCountry.name}>{currCountry.name}</option>;
          })}
        </select>
        <div>
          <select value={selectedCity} onChange={handleCity}>
            <option value="">select a city</option>
            {city.map((currCity) => {
              return <option value={currCity}>{currCity}</option>;
            })}
          </select>
        </div>
        <div>
            <p>Selected Country :<strong>{country}</strong></p>
            <p>Selected City :<strong>{selectedCity}</strong></p>
        </div>
      </div>
    </div>
  );
};

export default CountryChangeTwo;
