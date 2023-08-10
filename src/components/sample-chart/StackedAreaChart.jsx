import React, { useRef, useEffect } from "react";
import ReactECharts from "echarts-for-react";
import * as echarts from "echarts/lib/echarts.js";

const StackedAreaChart = () => {
  const chartRef = useRef(null);
  let base = +new Date(1988, 9, 3);
  let oneDay = 24 * 3600 * 1000;
  let data = [[base, Math.random() * 300]];
  for (let i = 1; i < 5000; i++) {
    let now = new Date((base += oneDay));
    data.push([+now, Math.round((Math.random() - 0.5) * 20 + data[i - 1][1])]);
  }

  const options = {
    backgroundColor: "#0d171e",
    grid: { top: 8, right: 8, bottom: 24, left: 48 },
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        name: "Point 1",
        type: "line",
        smooth: true,
        lineStyle: {
          width: 0,
        },
        showSymbol: false,
        itemStyle: {
          color: "#ec6666",
        },
        areaStyle: {
          opacity: 0.8,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "#ec6666",
            },
            {
              offset: 1,
              color: "#c45b5e",
            },
          ]),
        },
        emphasis: {
          focus: "series",
        },
        data: [250, 220, 270, 264, 130, 110, 30],
      },
      {
        name: "Point 2",
        type: "line",
        smooth: true,
        lineStyle: {
          width: 0,
        },
        showSymbol: false,
        itemStyle: {
          color: "#41c9f0",
        },
        areaStyle: {
          opacity: 0.8,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "#0e88ab",
            },
            {
              offset: 1,
              color: "#5dbdd9",
            },
          ]),
        },
        emphasis: {
          focus: "series",
        },
        data: [350, 480, 240, 221, 102, 364, 40],
      },
    ],
    tooltip: {
      trigger: "axis",
    },
    legend: {
      data: ["Point 01", "Point 02"],
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

export default StackedAreaChart;
