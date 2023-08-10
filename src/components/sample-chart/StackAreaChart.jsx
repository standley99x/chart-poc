import React, { useRef, useEffect } from "react";
import ReactECharts from "echarts-for-react";
import * as echarts from "echarts/lib/echarts.js";

const StackAreaChart = () => {
  const chartRef = useRef(null);
  let base = +new Date(1988, 9, 3);
  let oneDay = 24 * 3600 * 1000;
  let data = [[base, Math.random() * 300]];
  for (let i = 1; i < 5000; i++) {
    let now = new Date((base += oneDay));
    data.push([+now, Math.round(Math.max((Math.random() - 0.5) * 20 + data[i - 1][1]))]);
  }

  const options = {
    backgroundColor: "#0d171e",
    grid: { top: 8, right: 8, bottom: 24, left: 48 },
    xAxis: {
        type: 'time',
        boundaryGap: false
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        type: "line",
        symbol: "none",
        itemStyle: {
          color: "#41c9f0",
        },
        smooth: true,
        stack: 'Total',
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "#5dbdd9",
            },
            {
              offset: 1,
              color: "#0e88ab",
            },
          ]),
        },
        data: data,
      },
      {
        type: "line",
        symbol: "none",
        itemStyle: {
          color: "#147ad6",
        },
        smooth: true,
        stack: 'Total',
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "#147ad6",
            },
            {
              offset: 1,
              color: "#59a3e6",
            },
          ]),
        },
        data: data,
      },
      {
        type: "line",
        symbol: "none",
        itemStyle: {
          color: "#ec6666",
        },
        smooth: true,
        stack: 'Total',
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "#ec6666",
            },
            {
              offset: 1,
              color: "#e79c9c",
            },
          ]),
        },
        data: data,
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

export default StackAreaChart;
