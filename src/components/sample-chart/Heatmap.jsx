import { useState } from "react";
import ReactApexChart from "react-apexcharts";

const generateData = (count, options) => {
  const data = [];
  const xaxis = [
    "00:00",
    "01:00",
    "02:00",
    "03:00",
    "04:00",
    "05:00",
    "06:00",
    "07:00",
    "08:00",
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
    "23:00",
  ];
  for (let i = 0; i < count; i++) {
    data.push({
      x: xaxis[i],
      y:
        Math.floor(Math.random() * (options.max - options.min + 1)) +
        options.min,
    });
  }
  console.log("🚀 ~ file: Heatmap.jsx:6 ~ generateData ~ data:", data);
  return data;
};

const Heatmap = () => {
  const [state] = useState({
    series: [
      {
        name: "10 °C",
        data: generateData(24, {
          min: 0,
          max: 0,
        }),
      },
      {
        name: "20 °C",
        data: generateData(24, {
          min: 0,
          max: 0,
        }),
      },
      {
        name: "30 °C",
        data: generateData(24, {
          min: 1,
          max: 10,
        }),
      },
      {
        name: "40 °C",
        data: generateData(24, {
          min: 11,
          max: 20,
        }),
      },
      {
        name: "50 °C",
        data: generateData(24, {
          min: 30,
          max: 80,
        }),
      },
      {
        name: "60 °C",
        data: generateData(24, {
          min: 40,
          max: 90,
        }),
      },
      {
        name: "70 °C",
        data: generateData(24, {
          min: 30,
          max: 80,
        }),
      },
      {
        name: "80 °C",
        data: generateData(24, {
          min: 11,
          max: 20,
        }),
      },
      {
        name: "90 °C",
        data: generateData(24, {
          min: 0,
          max: 7,
        }),
      },
      {
        name: "100 °C",
        data: generateData(24, {
          min: 0,
          max: 0,
        }),
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "heatmap",
      },
      dataLabels: {
        enabled: false,
      },
      colors: ["#008FFB"],
      xaxis: {
        type: "category",
      },
      title: {
        text: "HeatMap Chart (Different color shades for each series)",
      },
      grid: {
        padding: {
          right: 20,
        },
      },
    },
  });
  return (
    <ReactApexChart
      options={state.options}
      series={state.series}
      type="heatmap"
      height={350}
    />
  );
};

export default Heatmap;
