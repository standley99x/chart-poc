import React, { useRef, useEffect } from "react";
import ReactECharts from "echarts-for-react";
import * as echarts from "echarts/lib/echarts.js";

const LineChart = () => {
  const chartRef = useRef(null);
  const timestampArray = [];
  const intervalMinutes = 60;

  for (let i = 0; i < 150; i++) {
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
  for (let i = 0; i < 150; i++) {
    numberArray.push(getRandomNumber(30, 40));
    numberArray2.push(getRandomNumber(8, 10));
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
      max: 60
    },
    series: [
      {
        name: "Point 01",
        type: "line",
        data: numberArray,
        itemStyle: {
            color: "#41c9f0",
          },
      },
      {
        name: "Point 02",
        type: "line",
        data: numberArray2,
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

export default LineChart;
