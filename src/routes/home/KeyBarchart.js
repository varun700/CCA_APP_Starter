import React, { useEffect } from "react";
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
  ResponsiveContainer,
  LabelList,
  Label,
  Customized,
  Text,
} from "recharts";
import { useDispatch, useSelector } from "react-redux";
import { GetKeyCallTopics } from "../../appRedux/actions/globalactions";
import { Bars } from "react-loader-spinner";
import { Skeleton } from "antd";

const KeyBarChart = () => {
  const dispatch = useDispatch();
  const GetKeyCallTopicsValue = useSelector(
    (state) => state.GetKeyCallTopicsreducer?.Table
  );
  const GetKeyCallTopicsloader = useSelector(
    (state) => state.GetKeyCallTopicsloader
  );
  const uservals = useSelector((state) => state?.Userval);

  useEffect(() => {
    if (uservals?.Employee_Id !== undefined) {
      dispatch(GetKeyCallTopics(uservals?.Employee_Id));
    }
  }, [uservals]);

  // const CustomYAxisLabel = ({ x, y, value }) => {
  //   console.log("qwe34r", x, y, value);
  //   return (
  //     <text
  //       x={x - 10}
  //       y={y} // Adjust this value to position the label above the bar
  //       fill="#000000"
  //       textAnchor="middle"
  //       dominantBaseline="middle"
  //     >
  //       {value}
  //     </text>
  //   );
  // };
  const CustomYAxisLabel = ({ data }) => {
    return data.map((entry, index) => (
      <Text
        key={`custom-label-${index}`}
        x={60}
        y={index * (225 / data.length) + 320 / data.length / 2}
        fill="#000"
        textAnchor="start"
        dominantBaseline="middle"
      >
        {entry.Topics}
      </Text>
    ));
  };

  // console.log("wertyuio", GetKeyCallTopicsValue);
  return (
    <div className="App">
      {!GetKeyCallTopicsloader && GetKeyCallTopicsValue?.length > 0 ? (
        <>
          {" "}
          <ResponsiveContainer width={"100%"} height={290}>
            <BarChart
              layout="vertical"
              width={600}
              height={290}
              data={GetKeyCallTopicsValue}
              margin={{
                top: 0,
                right: 20,
                bottom: 20,
                left: 0,
              }}
            >
              {/* <CartesianGrid stroke="#f5f5f5" /> */}
              <XAxis type="number" />
              {/* <YAxis dataKey="Topics" type="category" />
               */}
              <YAxis
                dataKey="Topics"
                type="category"
                tick={false} // Hide the default ticks
                tickLine={false} // Hide the default tick lines
                axisLine={false} // Hide the axis line
              />
              <defs>
                <linearGradient id="color08" x1="0" y1="1" x2="0" y2="0">
                  <stop offset="5%" stopColor="#23DFDC" stopOpacity={0.9} />
                  <stop offset="95%" stopColor="#63AEE4" stopOpacity={0.9} />
                </linearGradient>
              </defs>
              {/* <Tooltip /> */}
              <Legend verticalAlign="top" />
              <Bar
                dataKey="Count"
                // stackId="a"
                fill="url(#color08)"
                barSize={7}
                radius={5}
              >
                {" "}
                <LabelList
                  dataKey="Percentage"
                  position="right"
                  fill="#000000"
                  formatter={(value) => `${value.toFixed(2)}%`}
                />
                {/* {
                  // Custom labels for Y-axis above each bar
                  GetKeyCallTopicsValue.map(
                    (entry, index) => (
                      console.log("oiuyui", entry, index),
                      (
                        <Label
                          key={`custom-label-${index}`}
                          content={<CustomYAxisLabel x={index * 40 + 30} />}
                          // X position of the label (0 for alignment with Y-axis)
                          y={0} // Y position based on bar position, adjust multiplier and offset as needed
                          value={entry.Topics}
                        />
                      )
                    )
                  )
                } */}
              </Bar>
              <Customized
                component={<CustomYAxisLabel data={GetKeyCallTopicsValue} />}
              />
            </BarChart>
          </ResponsiveContainer>
        </>
      ) : (
        <>
          <Skeleton paragraph={{ rows: 8 }} active />
        </>
      )}
    </div>
  );
};

export default KeyBarChart;
