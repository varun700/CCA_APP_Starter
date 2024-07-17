import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetCallCentreWarmCallWidget } from "../../../appRedux/actions/CCAwidgets";
import CardBox from "../../../components/CardBox/index";
import { Badge } from "antd";
import Top4card from "../../../components/CardBox/Top4card";
import ChartCard from "../../../components/dashboard/Crypto/ChartCard";
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis } from "recharts";
import { GetSatisfactionScoreWidget } from "../../../appRedux/actions/globalactions";

const Warmcallwidget = () => {
  const dispatch = useDispatch();

  const chartdata = useSelector(
    (state) => state.GetSatisfactionScoreWidgetreducer
  );
  const chartdataloader = useSelector(
    (state) => state.GetSatisfactionScoreWidgetloader
  );
  const uservals = useSelector((state) => state?.Userval);

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
    dispatch(GetSatisfactionScoreWidget(uservals?.Employee_Id));
  }, [uservals]);

  console.log(chartdata, "warm", chartdataloader);

  return (
    <div>
      {" "}
      {!chartdataloader ? (
        <ChartCard
          prize={chartdata?.Table[0]?.Avg_Satisfaction_Score}
          title={chartdata?.Table[0]?.IncDec_Percentage}
          icon="etherium"
          children={
            <ResponsiveContainer width="100%" height={75}>
              <AreaChart
                data={chartdata?.Table1}
                margin={{ top: 0, right: 0, left: 0, bottom: -30 }}
              >
                <Tooltip />
                <XAxis dataKey="Short_Month" tick={false} />

                <defs>
                  <linearGradient id="color4" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="5%" stopColor="#4ECDE4" stopOpacity={0.9} />
                    <stop offset="95%" stopColor="#06BB8A" stopOpacity={0.9} />
                  </linearGradient>
                </defs>
                <Area
                  dataKey="Avg_Satisfaction_Score"
                  type="monotone"
                  strokeWidth={0}
                  stackId="2"
                  stroke="#4D95F3"
                  fill="url(#color4)"
                  fillOpacity={1}
                />
              </AreaChart>
            </ResponsiveContainer>
          }
          styleName={
            chartdata.Table[0]?.IncDec_Percentage > 0
              ? "up"
              : chartdata.Table[0]?.IncDec_Percentage == 0 || null
              ? ""
              : "down"
          }
          desc="Satisfaction Score"
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default Warmcallwidget;
