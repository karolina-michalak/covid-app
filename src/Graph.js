import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const Graph = (props) => {
  const { chartData } = props;
  return (
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
            date: Object.keys(chartData.timeline.cases)[11],
            count: Object.values(chartData.timeline.cases)[11],
          },
          {
            date: Object.keys(chartData.timeline.cases)[12],
            count: Object.values(chartData.timeline.cases)[12],
          },
          {
            date: Object.keys(chartData.timeline.cases)[13],
            count: Object.values(chartData.timeline.cases)[13],
          },
          {
            date: Object.keys(chartData.timeline.cases)[14],
            count: Object.values(chartData.timeline.cases)[14],
          },
          {
            date: Object.keys(chartData.timeline.cases)[15],
            count: Object.values(chartData.timeline.cases)[15],
          },
          {
            date: Object.keys(chartData.timeline.cases)[16],
            count: Object.values(chartData.timeline.cases)[16],
          },
          {
            date: Object.keys(chartData.timeline.cases)[17],
            count: Object.values(chartData.timeline.cases)[17],
          },
          {
            date: Object.keys(chartData.timeline.cases)[18],
            count: Object.values(chartData.timeline.cases)[18],
          },
          {
            date: Object.keys(chartData.timeline.cases)[19],
            count: Object.values(chartData.timeline.cases)[19],
          },
          {
            date: Object.keys(chartData.timeline.cases)[20],
            count: Object.values(chartData.timeline.cases)[20],
          },
          {
            date: Object.keys(chartData.timeline.cases)[21],
            count: Object.values(chartData.timeline.cases)[21],
          },
          {
            date: Object.keys(chartData.timeline.cases)[22],
            count: Object.values(chartData.timeline.cases)[22],
          },
          {
            date: Object.keys(chartData.timeline.cases)[23],
            count: Object.values(chartData.timeline.cases)[23],
          },
          {
            date: Object.keys(chartData.timeline.cases)[24],
            count: Object.values(chartData.timeline.cases)[24],
          },
          {
            date: Object.keys(chartData.timeline.cases)[25],
            count: Object.values(chartData.timeline.cases)[25],
          },
          {
            date: Object.keys(chartData.timeline.cases)[26],
            count: Object.values(chartData.timeline.cases)[26],
          },
          {
            date: Object.keys(chartData.timeline.cases)[27],
            count: Object.values(chartData.timeline.cases)[27],
          },
          {
            date: Object.keys(chartData.timeline.cases)[28],
            count: Object.values(chartData.timeline.cases)[28],
          },
          {
            date: Object.keys(chartData.timeline.cases)[29],
            count: Object.values(chartData.timeline.cases)[29],
          },
        ]
      }
    >
      <CartesianGrid />
      <XAxis dataKey="date" />
      <YAxis dataKey="count" />
      <Tooltip />
      <Line type="monotone" dataKey="date" stroke="#8884d8" />
      <Line type="monotone" dataKey="count" stroke="#82ca9d" />
    </LineChart>
  );
};

export default Graph;
