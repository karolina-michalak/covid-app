import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Moment from "react-moment";
import Graph from "./Graph";

const CountryData = () => {
  const [inputValue, setInputValue] = useState("");
  const [data, setData] = useState([]);
  const [chartData, setChartData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getResults();
    getChartResults();
  }, []);

  const getResults = () => {
    axios
      .get(`https://corona.lmao.ninja/v3/covid-19/countries/${inputValue}`)
      .then(
        (result) => setData(result.data),
        (err) => setError(err)
      );
  };

  const getChartResults = () => {
    axios
      .get(`https://corona.lmao.ninja/v3/covid-19/historical/${inputValue}`)
      .then(
        (result) => setChartData(result.data),
        (err) => setError(err)
      );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getResults();
    getChartResults();
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

      {data && data.country ? (
        <div>
          <h1>
            {data.country}{" "}
            {data && data.countryInfo ? (
              <img src={`${data.countryInfo.flag}`} alt="flag" />
            ) : (
              ""
            )}
          </h1>
          <p>
            Updated:{" "}
            <Moment format="YYYY/MM/DD hh:mm">{Date(data.updated)}</Moment>
          </p>
          <p>Today cases: {data.todayCases}</p>
          <p>Today deaths: {data.todayDeaths}</p>
          <p>Today recovered: {data.todayRecovered}</p>
          <p>Active: {data.active}</p>
          <p>Tests: {data.tests}</p>

          <p>Total cases: {data.cases}</p>
          <p>Total deaths: {data.deaths}</p>
          <p>Total recovered: {data.recovered}</p>
          <p>Active cases per milion: {data.activePerOneMillion}</p>

          <Graph chartData={chartData} />
        </div>
      ) : (
        ""
      )}

      {error && <div>{error.message}</div>}
    </div>
  );
};

export default CountryData;
