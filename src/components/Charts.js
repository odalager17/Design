import React from "react";

import style from "./Pruebas.module.css";
import ReactApexChart from "react-apexcharts";

function Pruebas() {
  const series = [
    {
      name: "Peso",
      data: [65, 68, 64, 70],
    },
  ];

  const options = {
    chart: {
      id: "chart2",
      type: "area",
      height: 230,
      foreColor: "#fff",
      toolbar: {
        autoSelected: "pan",
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    colors: ["#68fd63", "#ff0"],
    stroke: {
      curve: "smooth",
      width: 3,
    },
    grid: {
      // borderColor: "#f00",
      clipMarkers: false,
      yaxis: {
        lines: {
          show: false,
        },
      },
    },
    // dataLabels: {
    // 	enabled: true
    // },
    fill: {
      gradient: {
        enabled: true,
        opacityFrom: 0.7,
        opacityTo: 0,
      },
    },
    markers: {
      // size: 3,
      colors: ["#000524"],
      strokeColor: "#00BAEC",
      strokeWidth: 3,
    },
    xaxis: {
      type: "datetime",
      categories: [
        "2018-02-19T00:00:00.000Z",
        "2018-04-19T01:30:00.000Z",
        "2018-05-19T02:30:00.000Z",
        "2018-06-19T03:30:00.000Z",
      ],
      labels: {
        format: "MMM yy",
      },
    },
    tooltip: {
      theme: "dark",
      enabled: true,
      // x: {
      //   format: "dd/MM/yy",
      // },
    },
  };

  return (
    <div className={style.container}>
      <ReactApexChart
        className={style.chart}
        options={options}
        series={series}
        type="area"
        height={350}
      />
    </div>
  );
}

export default Pruebas;
