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
          ranges: [
            {
              from: 0,
              to: 200,
              color: "#f0e9c0",
            },
            {
              from: 201,
              to: 400,
              color: "#c5e39a",
            },
            {
              from: 401,
              to: 600,
              color: "#a2d160",
            },
            {
              from: 601,
              to: 800,
              color: "#60bcd1",
            },
            {
              from: 801,
              to: 1000,
              color: "#4379ba",
            },
            {
              from: 1001,
              to: 1200,
              color: "#35289e",
            },
          ],
          inverse: true,
          min: 0,
          max: 1400,
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
        {!dataloader ? (
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
                  <span>0</span>
                  <span>200</span>
                  <span>400</span>
                  <span>600</span>
                  <span>800</span>
                  <span>1000</span>
                  <span>1200</span>
                  <span>1400</span>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <CustomMapSkeleton width={540} height={330} />
          </>
        )}
      </div>
    </Card>
  );
};

export default HeatmapChart;
