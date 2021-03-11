import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { GraphContainer, TitleContainer } from "./../styles/graph";

function Graph() {
  const [data, setGraph] = useState({
    // labels: ["2016-12-25", "2017-1-25", "2017-1-29", "2017-2-25"],
    labels: ["2017-1-1", "2017-2-1", "2017-3-1"],
    datasets: [
      {
        backgroundColor: "rgba(30, 130, 76, 1)",
        // data: [
        //   { x: "2016-12-25", y: 1500 },
        //   { x: "2016-12-10", y: 1250 },
        //   { x: 9, y: 2100 },
        //   { x: 3, y: 1500 },
        //   { x: 1, y: 1000 },
        //   { x: 11, y: 1100 },
        //   { x: 11, y: 2100 },
        // ],
        data: [
          { x: "2017-1-1", y: 1500 },
          { x: "2017-2-5", y: 1250 },
          //   { x: "2017-2-24", y: 1250 },

          { x: "2017-3-1", y: 1250 },
        ],
        // data: [10, 20, 30, 40],
      },
    ],
  });

  var options = {
    legend: {
      display: false,
    },

    // parsing: {
    //     xAxisKey: 'id',
    //     yAxisKey: 'nested.value'
    // },
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
            fontSize: 8,
            stepSize: 500,
            // suggestedMax: 2000,
            callback: function (value, index, values) {
              return value + "kg.";
            },
          },
        },
      ],
      xAxes: [
        {
          distribution: "series",

          ticks: {
            source: "labels",
            maxTicksLimit: 2,
            callback: function (value, index, values) {
              return value.split(" ")[0];
            },
          },
          stepSize: "month",
          type: "time",
          min: "Dec 2015",
          time: {
            unit: "month",
          },
        },
      ],
      fontColor: "blue",
    },
  };

  let plugins = {};

  const setGradientColor = (canvas, color) => {
    const ctx = canvas.getContext("2d");
    const gradient = ctx.createLinearGradient(0, 0, 0, 100);

    ctx.canvas.height = "100";
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
      <TitleContainer>
        <img src="/images/recycling.png" />
        <h4>Recovered</h4>
      </TitleContainer>
      <div style={{ position: "relative", width: "100%" }}>
        <Line
          type="line"
          options={{
            responsive: false,
            aspectRatio: 3,
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
