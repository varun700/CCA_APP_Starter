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
import { GetColdCallChart } from "../../../../appRedux/actions/CCAwidgets";
import AreaChartSkeleton from "../../../loader/Areachartloader";
import moment from "moment";
const Athdd = () => {
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
            <h5 className="h4 gx-mb-3">
              {payload[0]?.payload.Date
                ? moment(payload[0].payload.Date).format("MMM-YY")
                : ""}
            </h5>
            <span className="label">
              Avg Handling Time :{payload[0]?.value}sec
            </span>
          </div>
        </Card>
      );
    }
    return null;
  };
  const uservals = useSelector((state) => state?.Userval);
  const chartdata = useSelector((state) => state.GetColdCallChartreducer);
  const chartdataloader = useSelector((state) => state.GetColdCallChartloader);
  const COLORS = {
    Y: "#0088FE", // Purple for actual calls
    N: "#00C49F", // Green for predicted calls
  };
  //   useEffect(() => {
  //     if (uservals?.Employee_Id !== undefined) {
  //       dispatch(GetColdCallChart(uservals?.Employee_Id));
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

  console.log(chartdata?.Table, "1234567890987654321");
  return (
    <div>
      {" "}
      {!chartdataloader ? (
        <ResponsiveContainer width="100%" height={450}>
          <AreaChart
            data={chartdata?.Table}
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
            <YAxis dataKey="Avg_Handling_Time" />

            <Tooltip content={<CustomTooltip />} />
            <defs>
              <linearGradient id="color5" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#e81a24" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#FEEADA" stopOpacity={0.8} />
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
              dataKey="Avg_Handling_Time"
              //   stroke="url(#color5)"
              //   fill="url(#color5)"
              stroke="#00C49F"
              fill="#00C49F"
            />
            <Brush
              dataKey="Date"
              height={30}
              stroke="#00C49F"
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

export default Athdd;
