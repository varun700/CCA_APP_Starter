// HeatmapChart.js
import React, { useEffect } from "react";
import Chart from "react-apexcharts";
import { useDispatch, useSelector } from "react-redux";
import { GetAvgCallVolumeHeatmap } from "../../../appRedux/actions/globalactions";

const HeatmapChart = () => {
  const dispatch = useDispatch();

  const data = useSelector((state) => state?.GetAvgCallVolumeHeatmapreducer);
  const dataloader = useSelector(
    (state) => state?.GetAvgCallVolumeHeatmaploader
  );
  const uservals = useSelector((state) => state?.Userval);

  const options = {
    chart: {
      type: "heatmap",
    },
    plotOptions: {
      heatmap: {
        shadeIntensity: 0.5,
        colorScale: {
          ranges: [
            { from: 0, to: 10, color: "#00A100" },
            { from: 11, to: 20, color: "#128FD9" },
            { from: 21, to: 30, color: "#FFB200" },
            { from: 31, to: 40, color: "#FF0000" },
            { from: 41, to: 50, color: "#FF00FF" },
            { from: 51, to: 60, color: "#800080" },
            { from: 61, to: 70, color: "#800000" },
            { from: 71, to: 80, color: "#808000" },
            { from: 81, to: 90, color: "#008080" },
            { from: 91, to: 100, color: "#00FFFF" },
          ],
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    title: {
      text: "Weekly Heatmap",
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
    <div>
      <Chart options={options} series={series} type="heatmap" height={350} />
    </div>
  );
};

export default HeatmapChart;
