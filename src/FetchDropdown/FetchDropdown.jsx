import React, { useEffect, useState } from "react";
import { fetchData } from "./fetchData"; // Importing the provided JSON data

const FetchDropdown = () => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [city, setCity] = useState([]);

  const handleCountryChange = (e) => {
    const inputChange = e.target.value;

    setSelectedCountry(inputChange);
    const selectedName = countries.find((country) => {
      return country.name === inputChange;
    });
    setCity(selectedName ? selectedName.cities : []);
  };

  const fetchApi = async () => {
    try {
      const response = await new Promise((resolve) => {
        setTimeout(() => {
          resolve(fetchData);
        }, 500);
      });

  const data= response.map((country) => {
        console.log(`${country.name}: ${country.cities.join(", ")}`);
        return country
      });

      setCountries(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <div>
      <h2>Country and Cities Dropdown via Fetching</h2>

      {/* Country Dropdown */}
      <label>
        Country:
        <select value={selectedCountry} onChange={handleCountryChange}>
          <option value="">Select Country</option>
          {countries.map((country) => (
            <option key={country.name} value={country.name}>
              {country.name}
            </option>
          ))}
        </select>
      </label>

      {/* City Dropdown */}
      <label>
        City:
        <select>
          <option value="">Select City</option>
          {city.map((city) => {
            return <option value={city} key={city}>{city}</option>;
          })}
        </select>
      </label>
    </div>
  );
};

export default FetchDropdown;
