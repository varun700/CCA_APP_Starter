import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetCallCentreFCRWidget } from "../../../appRedux/actions/CCAwidgets";
import CardBox from "../../../components/CardBox/index";
import { Badge, Card, Skeleton } from "antd";
import Top4card from "../../../components/CardBox/Top4card";
import ChartCard from "../../../components/dashboard/Crypto/ChartCard";
import {
  Area,
  AreaChart,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts";
import { GetFcrChart } from "../../../appRedux/actions/globalactions";

const FCRwidget = () => {
  const dispatch = useDispatch();
  const callsdata = useSelector((state) => state.GetCallCentreFCRWidgetreducer);
  const callsdataloader = useSelector(
    (state) => state.GetCallCentreFCRWidgetloader
  );
  const chartdata = useSelector((state) => state.GetFcrChartreducer);
  const chartdataloader = useSelector((state) => state.GetFcrChartloader);

  const uservals = useSelector((state) => state?.Userval);

  useEffect(() => {
    if (uservals?.Employee_Id !== undefined) {
      console.log("oops", uservals, uservals?.Employee_Id);
      dispatch(GetCallCentreFCRWidget(uservals?.Employee_Id));
      dispatch(GetFcrChart(uservals?.Employee_Id));
    }
  }, [uservals]);
  const lineData = [
    { name: "Page A", price: 200 },
    { name: "Page B", price: 1100 },
    { name: "Page C", price: 800 },
    { name: "Page D", price: 1700 },
    { name: "Page D", price: 600 },
    { name: "Page D", price: 1800 },
    { name: "Page D", price: 600 },
  ];
  console.log(callsdata, "fcr", callsdataloader);

  return (
    <div>
      {" "}
      {!callsdataloader && !chartdataloader ? (
        <ChartCard
          prize={`${callsdata?.Table[0]?.FCR_Percentage}%`}
          title={callsdata?.Table[0]?.IncDec_Percentage}
          icon="litcoin"
          children={
            <ResponsiveContainer width="100%" height={75}>
              <LineChart
                data={chartdata?.Table}
                margin={{ top: 5, right: 5, left: 5, bottom: -30 }}
              >
                <XAxis dataKey="Short_Month" tick={false} />

                <Tooltip />
                <Line
                  dataKey="FCR_Percentage"
                  stroke="#038FDE"
                  dot={{ stroke: "#FEA931", strokeWidth: 2 }}
                />
              </LineChart>
            </ResponsiveContainer>
          }
          // styleName={callsdata?.Table[0]?.IncDec_Percentage > 0 ? "up" : "down"}
          styleName={
            callsdata?.Table[0]?.IncDec_Percentage > 0
              ? "up"
              : callsdata?.Table[0]?.Inc_Dec_Percentage === null
              ? ""
              : "down"
          }
          desc="FCR"
        />
      ) : (
        <Card className="gx-card-widget" style={{ height: "400" }}>
          <Skeleton paragraph={{ rows: 2 }} active />
        </Card>
      )}
    </div>
  );
};

export default FCRwidget;
