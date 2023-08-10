import React, { useRef, useEffect } from "react";
import ReactECharts from "echarts-for-react";
import * as echarts from "echarts/lib/echarts.js";

const BarchartFocused = () => {
  const chartRef = useRef(null);

  const options = {
    backgroundColor: "#0d171e",
    grid: { top: 8, right: 8, bottom: 24, left: 48 },
    xAxis: {
      type: "category",
      data: [
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
      ],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [
          120,
          150,
          80,
          70,
          {
            value: 200,
            itemStyle: {
              color: "#41c9f0",
            },
          },
          110,
          130,
          150,
          80,
          70,
          110,
          130,
        ],
        type: "bar",
        smooth: true,
        itemStyle: {
          normal: {
            barBorderRadius: [5, 5, 0, 0], // Adjust the normal bar border radius
            color: "#495166",
          },
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

export default BarchartFocused;
