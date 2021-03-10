import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { GraphContainer } from "./../styles/graph";

function Graph() {
  const [data, setGraph] = useState({
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        backgroundColor: "rgba(30, 130, 76, 1)",
        data: [1500, 1250, 2100, 1500, 1000, 1100],
      },
    ],
  });

  var options = {
    legend: {
      display: false,
    },

    plugins: [
      {
        /* Adjust axis labelling font size according to chart size */
        beforeDraw: function (c) {
          var chartHeight = c.chart.height;
          var size = (chartHeight * 10) / 100;
          c.scales["y-axis-0"].options.ticks.minor.fontSize = size;
        },
      },
    ],

    scales: {
      fontColor: "#666",
      fontSize: 20,
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            min: 0,
            // fontSize: 8,
            stepSize: 500,
            suggestedMax: 2000,
            callback: function (value, index, values) {
              return value + "kg.";
            },
          },
        },
      ],
      fontColor: "blue",
    },
  };

  let plugins = {};

  const setGradientColor = (canvas, color) => {
    const ctx = canvas.getContext("2d");
    const gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, color);
    gradient.addColorStop(0.95, "rgba(255, 255, 255, 0.2)");
    return gradient;
  };

  const getChartData = (canvas) => {
    if (data.datasets) {
      let colors = ["rgba(30, 130, 76, 1)"];

      data.datasets[0].backgroundColor = setGradientColor(canvas, colors[0]);
      data.datasets[0].borderColor = "rgba(30, 130, 76, 0.7)";
      data.datasets[0].borderWidth = 1;
      data.datasets[0].pointBackgroundColor = "white";
      data.datasets[0].pointBorderWidth = 1;
      data.datasets[0].pointRadius = 6;
    }
    return data;
  };

  return (
    <GraphContainer>
      <div style={{ position: "relative", width: "100%" }}>
        <h1>Hello world</h1>
        <Line
          options={{
            responsive: true,
            maintainAspectRatio: true,
          }}
          data={getChartData}
          options={options}
          plugins={plugins}
        />
      </div>
    </GraphContainer>
  );
}

export default Graph;
