import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { GetCallCentreWarmCallWidget } from "../../../appRedux/actions/CCAwidgets";
// import CardBox from "../../../components/CardBox/index";
// import { Badge } from "antd";
// import Top4card from "../../../components/CardBox/Top4card";
import ChartCard from "../../../components/dashboard/Crypto/ChartCard";
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis } from "recharts";
import { useDispatch, useSelector } from "react-redux";
import { GetCallCentreWarmCallWidget } from "../../../appRedux/actions/CCAwidgets";
import { GetServiceLevel } from "../../../appRedux/actions/Servicelvltbl";
import { GetServiceLevelChart } from "../../../appRedux/actions/globalactions";

const ServiceLevelWidget = () => {
  const dispatch = useDispatch();
  const callsdata = useSelector((state) => state.GetServiceLevelreducer);
  const callsdataloader = useSelector((state) => state.GetServiceLevelloader);
  const chartdata = useSelector((state) => state.GetServiceLevelChartreducer);
  const chartdataloader = useSelector(
    (state) => state.GetServiceLevelChartloader
  );
  const uservals = useSelector((state) => state?.Userval);

  // GetServiceLevel
  const increamentData = [
    { name: "Page A", price: 200 },
    { name: "Page B", price: 1200 },
    { name: "Page C", price: 600 },
    { name: "Page D", price: 1600 },
    { name: "Page D", price: 1000 },
    { name: "Page H", price: 2260 },
    { name: "Page K", price: 800 },
  ];

  useEffect(() => {
    dispatch(GetServiceLevel(uservals?.Employee_Id));

    dispatch(GetServiceLevelChart(uservals?.Employee_Id));
  }, []);

  console.log(callsdata, "SERVICE", callsdataloader);

  return (
    <div>
      {" "}
      {!callsdataloader && !chartdataloader ? (
        <ChartCard
          prize={callsdata?.Table[0]?.SERVICE_LEVEL}
          // title="07"
          icon="etherium"
          children={
            <ResponsiveContainer width="100%" height={75}>
              <AreaChart
                data={chartdata.Table}
                margin={{ top: 0, right: 0, left: 0, bottom: -30 }}
              >
                <Tooltip />
                <XAxis dataKey="MONTH_YEAR" tick={false} />

                <defs>
                  <linearGradient id="color1" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="5%" stopColor="#FF55AA" stopOpacity={0.9} />
                    <stop offset="95%" stopColor="#E81D27" stopOpacity={0.9} />
                  </linearGradient>
                </defs>
                <Area
                  dataKey="SERVICE_LVL"
                  type="monotone"
                  strokeWidth={0}
                  stackId="2"
                  stroke="#4D95F3"
                  fill="url(#color1)"
                  fillOpacity={1}
                />
              </AreaChart>
            </ResponsiveContainer>
          }
          // styleName="up"
          desc="Service Level"
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default ServiceLevelWidget;
