// HeatmapChart.js
import React, { useEffect } from "react";
import Chart from "react-apexcharts";
import { useDispatch, useSelector } from "react-redux";
import { GetAvgCallVolumeHeatmap } from "../../../appRedux/actions/globalactions";
import { Card } from "antd";
import AreaChartSkeleton from "../../loader/Areachartloader";
import CustomMapSkeleton from "../../loader/Maploader";

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
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      type: "category",
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
      <h2 className="h4 gx-mb-3">Heatmap</h2>
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
