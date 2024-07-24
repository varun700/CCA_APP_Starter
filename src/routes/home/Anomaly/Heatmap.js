// HeatmapChart.js
import React, { useEffect } from "react";
import Chart from "react-apexcharts";
import { useDispatch, useSelector } from "react-redux";
import { GetAvgCallVolumeHeatmap } from "../../../appRedux/actions/globalactions";
import { Card } from "antd";
import AreaChartSkeleton from "../../loader/Areachartloader";

const HeatmapChart = () => {
  const dispatch = useDispatch();

  const data = useSelector((state) => state?.GetAvgCallVolumeHeatmapreducer);
  const dataloader = useSelector(
    (state) => state?.GetAvgCallVolumeHeatmaploader
  );
  const uservals = useSelector((state) => state?.Userval);
  const colorss = ["#43a2ca", "#a8ddb5", "#f0f9e8"];

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
    <Card style={{ height: "435px" }} className="gx-card">
      <h2 className="h4 gx-mb-3">Heatmap</h2>
      <div className="App">
        {!dataloader ? (
          <>
            <Chart
              options={options}
              series={series}
              type="heatmap"
              height={290}
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
                  width: "300px",
                  height: "20px",
                  background:
                    "linear-gradient(to right,#f0f9e8,#a8ddb5, #43a2ca)",
                }}
              >
                <div
                  style={{
                    marginLeft: "10px",
                    display: "flex",
                    justifyContent: "space-between",
                    width: "290px",
                  }}
                >
                  <span>0</span>
                  <span>200</span>
                  <span>600</span>
                  <span>1000</span>
                  <span>1400</span>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <AreaChartSkeleton />
          </>
        )}
      </div>
    </Card>
  );
};

export default HeatmapChart;
