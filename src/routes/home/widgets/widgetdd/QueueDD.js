import { Card } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  AreaChart,
  ResponsiveContainer,
  XAxis,
  Tooltip,
  Area,
  YAxis,
  Brush,
} from "recharts";
import { GetCCATotalActualPredictedCallsChart } from "../../../../appRedux/actions/globalactions";
import AreaChartSkeleton from "../../../loader/Areachartloader";
import moment from "moment";
const QueueDD = () => {
  const dispatch = useDispatch();

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <Card style={{ borderColor: "black" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "10px",
            }}
          >
            <h5 className="h4 gx-mb-3">{payload[0]?.payload.Date}</h5>
            <span className="label">Queue Time : {payload[0]?.value}</span>
          </div>
        </Card>
      );
    }
    return null;
  };
  const uservals = useSelector((state) => state?.Userval);
  const chartdata = useSelector((state) => state.GetQueueTimeWidgetDDreducer);
  const chartdataloader = useSelector(
    (state) => state.GetQueueTimeWidgetDDloader
  );
  const COLORS = {
    Y: "#0088FE", // Purple for actual calls
    N: "#00C49F", // Green for predicted calls
  };
  //   useEffect(() => {
  //     if (uservals?.Employee_Id !== undefined) {
  //       dispatch(GetCCATotalActualPredictedCallsChart(uservals?.Employee_Id));
  //     }
  //   }, [uservals]);
  const CustomXAxisTick = ({ x, y, payload }) => {
    // Check if the current tick is the first occurrence of the month
    const isFirstOfMonth = (date) => {
      return moment(date).date() === 1; // Adjust logic if necessary
    };

    return (
      <g transform={`translate(${x},${y})`}>
        {isFirstOfMonth(payload.value) && (
          <text x={0} y={0} dy={16} textAnchor="middle" fill="#666">
            {moment(payload.value).format("MMM-YY")}
          </text>
        )}
      </g>
    );
  };

  return (
    <div>
      {" "}
      {!chartdataloader ? (
        <ResponsiveContainer width="100%" height={450}>
          <AreaChart
            data={chartdata?.Table}
            style={{ cursor: "pointer" }}
            margin={{ top: 0, right: 30, left: 30, bottom: 20 }}
          >
            <XAxis
              dataKey="Date"
              tickFormatter={(item) => {
                return moment(item).format("MMM-YY");
              }}
              tick={<CustomXAxisTick />}
              interval={0}
            />
            <YAxis dataKey="Queue_Time" />

            <Tooltip content={<CustomTooltip />} />
            <defs>
              <linearGradient id="color2" x1="0" y1="0" x2="1" y2="0">
                <stop offset="5%" stopColor="#61B1E4" stopOpacity={0.9} />
                <stop offset="95%" stopColor="#867AE5" stopOpacity={0.9} />
              </linearGradient>
            </defs>
            {/* <defs>
      <linearGradient id="color3" x1="0" y1="0" x2="1" y2="0">
        <stop offset="5%" stopColor="#163469" stopOpacity={0.9} />
        <stop offset="95%" stopColor="#FE9E15" stopOpacity={0.9} />
      </linearGradient>
    </defs> */}
            {/* <Area
      dataKey="AVG_CALLS"
      strokeWidth={0}
      stackId="2"
      stroke="#4D95F3"
      fill="url(#color3)"
      fillOpacity={1}
    /> */}
            <Area
              type="monotone"
              dataKey="Queue_Time"
              stroke="url(#color2)"
              fill="url(#color2)"
            />
            <Brush
              dataKey="Date"
              height={30}
              stroke="#8884d8"
              tickFormatter={(item) => {
                return moment(item).format("MMM-YY");
              }}
            />
          </AreaChart>
        </ResponsiveContainer>
      ) : (
        <AreaChartSkeleton height={400} />
      )}
    </div>
  );
};

export default QueueDD;
