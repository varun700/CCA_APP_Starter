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
const CallsDD = () => {
  const dispatch = useDispatch();

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <Card>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "10px",
            }}
          >
            <h5 className="h4 gx-mb-3">{payload[0]?.payload.DS}</h5>
            <span className="label">Total Calls : {payload[0]?.value}</span>
          </div>
        </Card>
      );
    }
    return null;
  };
  const uservals = useSelector((state) => state?.Userval);
  const chartdata = useSelector(
    (state) => state.GetCCATotalActualPredictedCallsChartreducer
  );
  const chartdataloader = useSelector(
    (state) => state.GetCCATotalActualPredictedCallsChartloader
  );
  const COLORS = {
    Y: "#0088FE", // Purple for actual calls
    N: "#00C49F", // Green for predicted calls
  };
  useEffect(() => {
    if (uservals?.Employee_Id !== undefined) {
      dispatch(GetCCATotalActualPredictedCallsChart(uservals?.Employee_Id));
    }
  }, [uservals]);

  return (
    <div>
      {" "}
      {!chartdataloader ? (
        <ResponsiveContainer width="100%" height={450}>
          <AreaChart
            data={chartdata?.Table}
            margin={{ top: 0, right: 30, left: 30, bottom: 0 }}
          >
            <XAxis dataKey="DS" />
            <YAxis dataKey="TOTAL_CALLS" />

            <Tooltip content={<CustomTooltip />} />
            <defs>
              <linearGradient id="colorGradient" x1="0" y1="0" x2="1" y2="0">
                {chartdata?.Table.map((entry, index) => {
                  return (
                    <stop
                      key={index}
                      offset={`${
                        (index / (chartdata?.Table.length - 1)) * 100
                      }%`}
                      stopColor={COLORS[entry.Is_Predicted]}
                      opacity={1}
                    />
                  );
                })}
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
              dataKey="TOTAL_CALLS"
              stroke="url(#colorGradient)"
              fill="url(#colorGradient)"
            />
            <Brush dataKey="DS" height={30} stroke="#8884d8" />
          </AreaChart>
        </ResponsiveContainer>
      ) : (
        <AreaChartSkeleton height={400} />
      )}
    </div>
  );
};

export default CallsDD;
