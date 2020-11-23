import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Moment from "react-moment";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

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

  // const keys = {chartData && chartData.timeline && chartData.timeline.cases
  //   ? Object.entries(chartData.timeline.cases).map((key, val) => key + ' , ' + val)}

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

          <LineChart
            width={1000}
            height={600}
            data={
              chartData &&
              chartData.timeline &&
              chartData.timeline.cases && [
                {
                  date: Object.keys(chartData.timeline.cases)[0],
                  count: Object.values(chartData.timeline.cases)[0],
                },
                {
                  date: Object.keys(chartData.timeline.cases)[1],
                  count: Object.values(chartData.timeline.cases)[1],
                },
                {
                  date: Object.keys(chartData.timeline.cases)[2],
                  count: Object.values(chartData.timeline.cases)[2],
                },
                {
                  date: Object.keys(chartData.timeline.cases)[3],
                  count: Object.values(chartData.timeline.cases)[3],
                },
                {
                  date: Object.keys(chartData.timeline.cases)[4],
                  count: Object.values(chartData.timeline.cases)[4],
                },
                {
                  date: Object.keys(chartData.timeline.cases)[5],
                  count: Object.values(chartData.timeline.cases)[5],
                },
                {
                  date: Object.keys(chartData.timeline.cases)[6],
                  count: Object.values(chartData.timeline.cases)[6],
                },
                {
                  date: Object.keys(chartData.timeline.cases)[7],
                  count: Object.values(chartData.timeline.cases)[7],
                },
                {
                  date: Object.keys(chartData.timeline.cases)[8],
                  count: Object.values(chartData.timeline.cases)[8],
                },
                {
                  date: Object.keys(chartData.timeline.cases)[9],
                  count: Object.values(chartData.timeline.cases)[9],
                },
                {
                  date: Object.keys(chartData.timeline.cases)[10],
                  count: Object.values(chartData.timeline.cases)[10],
                },
                {
                  name: Object.keys(chartData.timeline.cases)[11],
                  count: Object.values(chartData.timeline.cases)[11],
                },
                {
                  name: Object.keys(chartData.timeline.cases)[12],
                  count: Object.values(chartData.timeline.cases)[12],
                },
                {
                  name: Object.keys(chartData.timeline.cases)[13],
                  count: Object.values(chartData.timeline.cases)[13],
                },
                {
                  name: Object.keys(chartData.timeline.cases)[14],
                  count: Object.values(chartData.timeline.cases)[14],
                },
                {
                  name: Object.keys(chartData.timeline.cases)[15],
                  count: Object.values(chartData.timeline.cases)[15],
                },
              ]
            }
            // (Object.keys(chartData.timeline.cases) + ' : ' + Object.values(chartData.timeline.cases))}

            // margin={{
            //   top: 5, right: 30, left: 20, bottom: 5,
            // }}
          >
            <CartesianGrid />
            <XAxis dataKey="date" />
            <YAxis dataKey="count" />
            <Tooltip />
            {/* <Legend /> */}
            <Line type="monotone" dataKey="date" stroke="#8884d8" />
            <Line type="monotone" dataKey="count" stroke="#82ca9d" />
          </LineChart>

          <p>
            {/* {chartData && chartData.timeline && chartData.timeline.cases &&
              (Object.keys(chartData.timeline.cases) + ' : ' + Object.values(chartData.timeline.cases))} */}
          </p>
        </div>
      ) : (
        ""
      )}

      {error && <div>{error.message}</div>}
    </div>
  );
};

export default CountryData;
