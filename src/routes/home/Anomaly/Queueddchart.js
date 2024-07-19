import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Area,
  AreaChart,
  Legend,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import { GetQueueTimeDD } from "../../../appRedux/actions/globalactions";
import AreaChartSkeleton from "../../loader/Areachartloader";

const Queueddchart = () => {
  const dispatch = useDispatch();

  const chartdataqueue = useSelector(
    (state) => state?.GetQueueTimeDDreducer?.Table
  );
  const chartdataloaderqueue = useSelector(
    (state) => state?.GetQueueTimeDDloader
  );
  const uservals = useSelector((state) => state?.Userval);
  useEffect(() => {
    if (uservals?.Employee_Id !== undefined) {
      dispatch(GetQueueTimeDD(uservals?.Employee_Id));
    }
  }, [uservals]);

  return (
    <div>
      {!chartdataloaderqueue ? (
        // <ResponsiveContainer width="100%" height={275}>
        //   <LineChart
        //     data={chartdataqueue?.Table}
        //     margin={{ top: 5, right: 5, left: 5, bottom: -30 }}
        //   >
        //     <XAxis dataKey="Short_Month" tick={false} />

        //     <Tooltip />
        //     <Line
        //       dataKey="FCR_Percentage"
        //       stroke="#038FDE"
        //       dot={{ stroke: "#FEA931", strokeWidth: 2 }}
        //     />
        //   </LineChart>
        // </ResponsiveContainer>
        <div style={{ width: "100%", height: 300 }}>
          <ResponsiveContainer>
            <AreaChart
              width={400}
              height={150}
              data={chartdataqueue}
              margin={{ top: 5, right: 5, left: 5, bottom: 0 }}
            >
              <XAxis
                dataKey="Date"
                padding={{ left: 30, right: 30 }}
                // stroke={"#fff"}
                tick={true}
              />
              <YAxis
                dataKey="Queue_Time"
                stroke={"#000"}
                // tick={true}
                tick={"#000"}
              />
              <Tooltip />
              <Legend verticalAlign="top" />
              {/* {GetCallVolumePredictionValue?.length > 0 && (
          <Brush
            startIndex={GetCallVolumePredictionValue?.length - 60}
            endIndex={GetCallVolumePredictionValue?.length - 1}
            dataKey="Date"
            // tickFormatter={formatXAxis}
            height={50}
            y={250}
          >
            <LineChart data={GetCallVolumePredictionValue}>
              <Line
                type="monotone"
                dataKey="Total_Answered_Calls"
                stroke="#54D454"
                fill="#54D454"
                strokeWidth={3}
                dot={false}
              />
            </LineChart>
          </Brush>
        )} */}
              <Area
                type="monotone"
                dataKey="Queue_Time"
                stroke="#54D454"
                activeDot={{ r: 8 }}
              />
              {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
            </AreaChart>
          </ResponsiveContainer>
        </div>
      ) : (
        <AreaChartSkeleton />
      )}
    </div>
  );
};

export default Queueddchart;
