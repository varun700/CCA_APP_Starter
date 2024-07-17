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
import { GetTalkDurationDD } from "../../../appRedux/actions/globalactions";
const Talkddchart = () => {
  const dispatch = useDispatch();

  const chartdatadd = useSelector(
    (state) => state?.GetTalkDurationDDreducer?.Table
  );
  const chartdataloaderdd = useSelector(
    (state) => state?.GetTalkDurationDDloader
  );
  const uservals = useSelector((state) => state?.Userval);
  useEffect(() => {
    if (uservals?.Employee_Id !== undefined) {
      dispatch(GetTalkDurationDD(uservals?.Employee_Id));
    }
  }, []);

  return (
    <div>
      {" "}
      <div>
        {" "}
        {!chartdataloaderdd && (
          // <ResponsiveContainer width="100%" height={275}>
          //   <LineChart
          //     data={chartdatadd?.Table}
          //     margin={{ top: 5, right: 5, left: 5, bottom: 0 }}
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
            {console.log(chartdatadd, "ddtest")}
            <ResponsiveContainer>
              <AreaChart
                width={400}
                height={150}
                data={chartdatadd}
                margin={{ top: 5, right: 5, left: 5, bottom: 0 }}
              >
                <XAxis
                  dataKey="Date"
                  padding={{ left: 30, right: 30 }}
                  // stroke={"#fff"}
                  tick={true}
                />
                <YAxis
                  dataKey="Talk_Duration"
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
                  dataKey="Talk_Duration"
                  stroke="#54D454"
                  activeDot={{ r: 8 }}
                />
                {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
              </AreaChart>
            </ResponsiveContainer>
          </div>
          // <div>
          //   <ResponsiveContainer width="100%" height={400}>
          //     {console.log(chartdatadd?.Table)}
          //     <AreaChart
          //       data={chartdatadd}
          //       // width={500}
          //       // height={500}
          //       margin={{ top: 5, right: 5, left: 5, bottom: -30 }}
          //     >
          //       <XAxis dataKey="Date" />

          //       <Tooltip />
          //       <Area
          //         dataKey="Talk_Duration"
          //         stroke="#8884d8"
          //         // dot={{ stroke: "#FEA931", strokeWidth: 2 }}
          //       />
          //     </AreaChart>
          //   </ResponsiveContainer>
          // </div>
        )}
      </div>
    </div>
  );
};

export default Talkddchart;
