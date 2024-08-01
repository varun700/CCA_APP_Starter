// HeatmapChart.js
import React, { useEffect } from "react";
import Chart from "react-apexcharts";
import { useDispatch, useSelector } from "react-redux";
import { GetAvgCallVolumeHeatmap } from "../../../appRedux/actions/globalactions";
import { Card } from "antd";
// import AreaChartSkeleton from "../../loader/Areachartloader";
import CustomMapSkeleton from "../../loader/Maploader";
// import { HeatMapGrid } from "react-grid-heatmap";

const HeatmapChart = ({ height, cardheight }) => {
  const dispatch = useDispatch();
  const usercurrval = useSelector((state) => state?.Userval) || [];
  const data = useSelector((state) => state?.GetAvgCallVolumeHeatmapreducer);
  const dataloader = useSelector(
    (state) => state?.GetAvgCallVolumeHeatmaploader
  );
  const uservals = useSelector((state) => state?.Userval);
  const colorss = [
    "#f0e9c0",
    "#c5e39a",
    "#a2d160",
    "#60bcd1",
    "#4379ba",
    "#35289e",
  ];

  const ctr = (e) => {
    var result = [];
    var color = [
      "#f0e9c0",
      "#c5e39a",
      "#a2d160",
      "#60bcd1",
      "#4379ba",
      "#35289e",
      "#1d003d",
      "#0b002a",
      "#00001a",
    ];
    for (let i = 0; i < e.length - 1; i++) {
      const fromValue = e[i].value;
      const toValue = e[i + 1].value;
      result.push({ from: fromValue, to: toValue, color: color[i] });
    }
    return result;
  };

  // const mindata = data?.Table1[0]
  console.log(ctr(data?.Table1), data, "heatmap");

  const options = {
    chart: {
      type: "heatmap",
    },
    colors: colorss,
    legend: { show: false },
    dataLabels: {
      enabled: true,
      style: {
        colors: ["#302a23"],
        fontWeight: 400,
      },
    },
    xaxis: {
      type: "category",
    },

    plotOptions: {
      heatmap: {
        shadeIntensity: 0.5,
        colorScale: {
          ranges: ctr(data?.Table1),
          inverse: true,
          min: 0,
          max: data?.Table1[data.Table1.length - 1],
          gradientToColors: [
            "#f0e9c0",
            "#c5e39a",
            "#a2d160",
            "#60bcd1",
            "#4379ba",
            "#35289e",
          ],
        },
      },
    },
  };

  console.log(data, "series");

  const series = [
    {
      name: "Sunday",
      data: data?.Table?.map((item) => ({
        x: item.time_in_2hrs,
        y: item.Sunday,
      })),
    },
    {
      name: "Monday",
      data: data?.Table?.map((item) => ({
        x: item.time_in_2hrs,
        y: item.Monday,
      })),
    },
    {
      name: "Tuesday",
      data: data?.Table?.map((item) => ({
        x: item.time_in_2hrs,
        y: item.Tuesday,
      })),
    },
    {
      name: "Wednesday",
      data: data?.Table?.map((item) => ({
        x: item.time_in_2hrs,
        y: item.Wednesday,
      })),
    },
    {
      name: "Thursday",
      data: data?.Table?.map((item) => ({
        x: item.time_in_2hrs,
        y: item.Thursday,
      })),
    },
    {
      name: "Friday",
      data: data?.Table?.map((item) => ({
        x: item.time_in_2hrs,
        y: item.Friday,
      })),
    },
    {
      name: "Saturday",
      data: data?.Table?.map((item) => ({
        x: item.time_in_2hrs,
        y: item.Saturday,
      })),
    },
  ];

  return (
    <Card style={{ height: { cardheight } }} className="gx-card">
      <h2 className="h4 gx-mb-3">Hourly Call Volume</h2>
      <div className="App">
        <>
          <Chart
            options={options}
            series={series}
            type="heatmap"
            height={height}
          />

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "20px",
            }}
          >
            <div
              style={{
                width: "400px",
                height: "20px",
                background:
                  "linear-gradient(to right,#f0e9c0,#c5e39a,#a2d160,#60bcd1,#4379ba,#35289e)",
              }}
            >
              <div
                style={{
                  marginTop: "20px",
                  marginLeft: "10px",
                  display: "flex",
                  justifyContent: "space-between",
                  width: "390px",
                }}
              >
                <span>{data?.Table1[0]?.value}</span>
                <span>{data?.Table1[1]?.value}</span>
                <span>{data?.Table1[2]?.value}</span>
                <span>{data?.Table1[3]?.value}</span>
                <span>{data?.Table1[4]?.value}</span>
                <span>{data?.Table1[5]?.value}</span>
                <span>{data?.Table1[6]?.value}</span>
                <span>{data?.Table1[7]?.value}</span>
              </div>
            </div>
          </div>
        </>
      </div>
    </Card>
  );
};

export default HeatmapChart;
