import React from "react";
import { Line } from "react-chartjs-2";

function Graph({ graphData, labelDates }) {
  const width = window.innerWidth;

  const data = {
    labels: labelDates,
    datasets: [
      {
        backgroundColor: "rgba(30, 130, 76, 1)",
        data: graphData,
      },
    ],
  };

  var options = {
    legend: {
      display: false,
    },

    scales: {
      fontColor: "#666",
      fontSize: 20,
      yAxes: [
        {
          gridLines: {
            color: "rgba(211,211,211, 0.2)",
          },
          ticks: {
            beginAtZero: true,
            min: 0,
            fontSize: width < 500 ? 7 : 16,
            fontColor: "rgb(169,169,169)",
            stepSize: 500,
            suggestedMax: 2000,
            callback: function (value, index, values) {
              return value + "kg.";
            },
          },
        },
      ],
      xAxes: [
        {
          gridLines: {
            color: "rgba(211,211,211, 0.2)",
            offsetGridLines: false,
          },
          ticks: {
            source: "labels",
            fontColor: "rgb(169,169,169)",
            fontSize: width < 500 ? 7 : 16,

            maxTicksLimit: 2,
            callback: function (value, index, values) {
              return value.split(" ")[0];
            },
          },
          stepSize: "month",
          type: "time",

          time: {
            unit: "month",
          },
        },
      ],
      fontColor: "blue",
    },
  };

  const setGradientColor = (canvas, color) => {
    const ctx = canvas.getContext("2d");
    const gradient = ctx.createLinearGradient(0, 0, 0, (width / 320) * 50);

    ctx.canvas.height = "100";
    gradient.addColorStop(0, color);
    gradient.addColorStop(0.9, "rgba(255, 255, 255, 0.1)");
    return gradient;
  };

  const getChartData = (canvas) => {
    if (data.datasets) {
      let colors = "rgba(104, 132, 102, 0.5)";

      data.datasets[0].backgroundColor = setGradientColor(canvas, colors);
      data.datasets[0].borderColor = "rgba(30, 130, 76, 0.7)";
      data.datasets[0].borderWidth = 1;
      data.datasets[0].pointBackgroundColor = width < 500 ? "green" : "white";
      data.datasets[0].pointBorderWidth = 1;
      data.datasets[0].pointRadius = width / 200; //6
    }
    return data;
  };
  return (
    <Line
      type="line"
      options={{
        responsive: false,
        aspectRatio: 3,
        maintainAspectRatio: true,
      }}
      data={getChartData}
      options={options}
    />
  );
}

export default Graph;
