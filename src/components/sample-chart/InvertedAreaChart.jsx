import { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";

const InvertedAreaChart = () => {
  const [positiveData] = useState([
    {
      x: 1996,
      y: 222,
    },
    {
      x: 1997,
      y: 224,
    },
    {
      x: 1998,
      y: 229,
    },
    {
      x: 1999,
      y: 242,
    },
    {
      x: 2000,
      y: 348,
    },
    {
      x: 2001,
      y: 334,
    },
    {
      x: 2002,
      y: 325,
    },
    {
      x: 2003,
      y: 116,
    },
    {
      x: 2004,
      y: 118,
    },
    {
      x: 2005,
      y: 130,
    },
    {
      x: 2006,
      y: 355,
    },
    {
      x: 2007,
      y: 366,
    },
    {
      x: 2008,
      y: 337,
    },
    {
      x: 2009,
      y: 352,
    },
    {
      x: 2010,
      y: 377,
    },
    {
      x: 2011,
      y: 383,
    },
    {
      x: 2012,
      y: 344,
    },
    {
      x: 2013,
      y: 366,
    },
    {
      x: 2014,
      y: 389,
    },
    {
      x: 2015,
      y: 334,
    },
  ]);
  const [negativeData, setNegativeData] = useState([]);

  useEffect(() => {
    setNegativeData(
      structuredClone(positiveData).map((point, index, array) => ({
        x: point.x,
        y: -array[array.length - index - 1].y,
      }))
    );
  }, [positiveData]);

  var options = {
    series: [
      {
        name: "north",
        data: positiveData,
      },
      {
        name: "south",
        data: negativeData,
      },
    ],
    chart: {
      type: "area",
      height: 350,
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "straight",
    },

    // title: {
    //   text: "Area with Negative Values",
    //   align: "left",
    //   style: {
    //     fontSize: "14px",
    //   },
    // },
    xaxis: {
      type: "datetime",
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      tickAmount: 4,
      floating: false,

      labels: {
        style: {
          colors: "#8e8da4",
        },
        offsetY: -7,
        offsetX: 0,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    fill: {
      opacity: 0.5,
    },
    tooltip: {
      x: {
        format: "yyyy",
      },
      fixed: {
        enabled: false,
        position: "topRight",
      },
    },
    grid: {
      yaxis: {
        lines: {
          offsetX: -30,
        },
      },
      padding: {
        left: 20,
      },
    },
  };

  //   var chart = new ApexCharts(document.querySelector("#chart"), options);
  //   chart.render();
  return (
    <div id="chart">
      <ReactApexChart
        options={options}
        series={options.series}
        type="area"
        height={350}
      />
    </div>
  );
};

export default InvertedAreaChart;
