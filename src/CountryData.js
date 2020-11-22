import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

const CountryData = () => {
  const [inputValue, setInputValue] = useState("");
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getResults();
  }, []);

  const getResults = () => {
    axios
      .get(`https://corona.lmao.ninja/v3/covid-19/countries/${inputValue}`)
      .then(
        (result) => setData(result.data),
        (err) => setError(err)
      );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getResults();
    setError("");
    clearInput();
    setData("");
  
  };


  const clearInput = () => {
    setInputValue("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">submit</button>
      </form>
 
      {data && data.country ? (  <div>
        <h1>{data.country} {data && data.countryInfo ? <img src={`${data.countryInfo.flag}`}/> : ''}</h1>
        <p>Updated: {Date(data.updated)}</p>
        <p>Total cases: {data.cases}</p>
        <p>Today cases: {data.todayCases}</p>
        <p>Total deaths: {data.deaths}</p>
        <p>Today deaths: {data.todayDeaths}</p>
        </div> ) : ''
}
        
        
       
        
  
      {error && <div>{error.message}</div>}
    </div>
  );
};

export default CountryData;
