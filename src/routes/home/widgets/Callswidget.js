import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  GetCCATotalCalls,
  GetCCATotalCallsChart,
} from "../../../appRedux/actions/CCAwidgets";
import CardBox from "../../../components/CardBox/index";
import { Badge, Card, Skeleton } from "antd";
import Top4card from "../../../components/CardBox/Top4card";
import ChartCard from "../../../components/dashboard/Crypto/ChartCard";
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis } from "recharts";
const Index = () => {
  const dispatch = useDispatch();
  const callsdata = useSelector((state) => state.GetCCATotalCallsreducer);
  const callsdataloader = useSelector((state) => state.GetCCATotalCallsLoader);
  const uservals = useSelector((state) => state?.Userval);
  const chartdata = useSelector((state) => state.GetCCATotalCallsChartreducer);
  const chartdataloader = useSelector(
    (state) => state.GetCCATotalCallsChartloader
  );

  const increamentData = [
    { name: "Page A", price: 200 },
    { name: "Page B", price: 1200 },
    { name: "Page C", price: 600 },
    { name: "Page D", price: 1600 },
    { name: "Page D", price: 1000 },
    { name: "Page H", price: 2260 },
    { name: "Page K", price: 800 },
  ];
  console.log(uservals);
  useEffect(() => {
    if (uservals?.Employee_Id !== undefined) {
      dispatch(GetCCATotalCalls(uservals?.Employee_Id));
      dispatch(GetCCATotalCallsChart(uservals?.Employee_Id));
    }
  }, [uservals]);
  console.log(callsdata, "calls", callsdataloader, chartdata);
  return (
    <div>
      {!callsdataloader && !chartdataloader ? (
        <ChartCard
          prize={!callsdataloader && callsdata?.Table[0]?.AVG_CALLS}
          // title="23"
          forecast={
            !callsdataloader && callsdata?.Table1[0]?.AVG_FORECAST_CALLS
          }
          forecasttitle="Forecast Calls"
          icon="bitcoin"
          children={
            <ResponsiveContainer width="100%" height={75}>
              <AreaChart
                data={chartdata?.Table}
                margin={{ top: 0, right: 0, left: 0, bottom: -30 }}
              >
                <XAxis dataKey="MONTH_YEAR" tick={false} />

                <Tooltip />
                <defs>
                  <linearGradient id="color3" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="5%" stopColor="#163469" stopOpacity={0.9} />
                    <stop offset="95%" stopColor="#FE9E15" stopOpacity={0.9} />
                  </linearGradient>
                </defs>
                <Area
                  dataKey="AVG_CALLS"
                  strokeWidth={0}
                  stackId="2"
                  stroke="#4D95F3"
                  fill="url(#color3)"
                  fillOpacity={1}
                />
              </AreaChart>
            </ResponsiveContainer>
          }
          styleName="up"
          desc="Calls"
        />
      ) : (
        <Card className="gx-card-widget" style={{ height: "400" }}>
          <Skeleton paragraph={{ rows: 2 }} active />
        </Card>
      )}
    </div>
  );
};

export default Index;
