import React, { useRef, useEffect } from "react";
import ReactECharts from "echarts-for-react";
import * as echarts from "echarts/lib/echarts.js";

const InvertLineChart = () => {
  const chartRef = useRef(null);
  const timestampArray = [];
  const intervalMinutes = 60;

  for (let i = 0; i < 30; i++) {
    const date = new Date();
    const timestamp = new Date(date);
    timestamp.setUTCHours(
      (i * intervalMinutes) / 60,
      (i * intervalMinutes) % 60
    );
    timestampArray.push(timestamp.toISOString().split('T')[0]);
  }

  function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
  }

  const numberArray = [];
  const numberArray2 = [];
  for (let i = 0; i < 15; i++) {
    numberArray.push(getRandomNumber(0.5, 4));
    numberArray2.push(getRandomNumber(-1, -2));
  }

  const options = {
    backgroundColor: "#0d171e",
    grid: { top: 8, right: 8, bottom: 24, left: 48 },
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: timestampArray,
    },
    yAxis: {
      type: "value",
      max: 6
    },
    series: [
      {
        name: "Writes",
        type: "line",
        data: [1,1.8,1,1,1.2,1.3,1.2,1.3,1.2,3.8,1.3,1.4,1.2,2.6,2.7,1.3,1.4,1.3,1.2,1.3,1.4,1.2,2.6,2.7,1.3,1.4,1.3,1.2],
        itemStyle: {
            color: "#41c9f0",
          },
      },
      {
        name: "Reads",
        type: "line",
        data: [-1,-1.8,-1,-1,-1.2,-1.3,-1.2,-1.3,-1.2,-3.8,-1.3,-1.4,-1.2,-2.6,-2.3,-1.3,-1.4,-1.3,-1.2,-1.3,-1.4,-1.2,-1.6,-1.7,-1.3,-1.4,-1.3,-1.2],
        itemStyle: {
            color: "#ec6666",
          },
      },
    ],
    tooltip: {
      trigger: "axis",
    },
  };

  useEffect(() => {
    const chartInstance = echarts.init(chartRef.current, "dark");
    chartInstance.setOption(options);

    // Cleanup: Dispose of the chart instance when the component is unmounted
    return () => {
      chartInstance.dispose();
    };
  }, []);

  return <div ref={chartRef} style={{ width: "100%", height: "400px" }} />;
};

export default InvertLineChart;
