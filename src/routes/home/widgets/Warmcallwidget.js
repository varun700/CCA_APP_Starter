import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetCallCentreWarmCallWidget } from "../../../appRedux/actions/CCAwidgets";
import CardBox from "../../../components/CardBox/index";
import { Badge, Card, Skeleton } from "antd";
import Top4card from "../../../components/CardBox/Top4card";
import ChartCard from "../../../components/dashboard/Crypto/ChartCard";
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis } from "recharts";
import { GetSatisfactionScoreWidget } from "../../../appRedux/actions/globalactions";
// import Skeleton from "react-loading-skeleton";
// import "react-loading-skeleton/dist/skeleton.css";
// import CustomSkeleton from "../../loader/CustomSkeleton";
const Warmcallwidget = () => {
  const dispatch = useDispatch();

  const chartdata = useSelector(
    (state) => state.GetSatisfactionScoreWidgetreducer
  );
  const chartdataloader = useSelector(
    (state) => state.GetSatisfactionScoreWidgetloader
  );
  const uservals = useSelector((state) => state?.Userval);
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
            <h5 className="h4 gx-mb-3">{payload[0]?.payload.Short_Month}</h5>
            <span className="label">{`${payload[0]?.dataKey.replaceAll(
              "_",
              " "
            )} : ${payload[0]?.value}`}</span>
          </div>
        </Card>
      );
    }
    return null;
  };

  useEffect(() => {
    if (uservals?.Employee_Id !== undefined) {
      dispatch(GetSatisfactionScoreWidget(uservals?.Employee_Id));
    }
  }, [uservals]);

  return (
    <div>
      {" "}
      {!chartdataloader ? (
        <ChartCard
          prize={`${chartdata?.Table[0]?.Avg_Satisfaction_Score}`}
          title={`${chartdata?.Table[0]?.IncDec_Percentage}`}
          icon="editor"
          children={
            <ResponsiveContainer width="100%" height={75}>
              <AreaChart
                data={chartdata?.Table1}
                margin={{ top: 0, right: 0, left: 0, bottom: -30 }}
              >
                <Tooltip content={<CustomTooltip />} />
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
            chartdata.Table[0]?.IncDec_Percentage > 0.0
              ? "up"
              : chartdata.Table[0]?.IncDec_Percentage == 0 || null
              ? "neutral"
              : "down"
          }
          desc="Satisfaction Score"
        />
      ) : (
        <Card className="gx-card-widget" style={{ height: "400" }}>
          <Skeleton paragraph={{ rows: 2 }} active />
        </Card>
      )}
    </div>
  );
};

export default Warmcallwidget;

// <Card className="gx-card-widget" style={{ height: "400" }}>
//   {/* <div style={{ display: "flex" }}> */}
//   <CustomSkeleton lineCount={5} height={20} gap={10} />
//   {/* </div> */}
// </Card>
