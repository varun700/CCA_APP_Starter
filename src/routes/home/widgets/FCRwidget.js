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
      dispatch(GetCallCentreFCRWidget(uservals?.Employee_Id));
      dispatch(GetFcrChart(uservals?.Employee_Id));
    }
  }, [uservals]);

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <Card style={{ borderColor: "black" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "5px",
            }}
          >
            <h5 className="h4 gx-mb-3">{payload[0]?.payload.Short_Month}</h5>
            <span className="label">{`${payload[0]?.dataKey.replaceAll(
              "_",
              " "
            )} : ${payload[0]?.value}%`}</span>
          </div>
        </Card>
      );
    }
    return null;
  };

  return (
    <div>
      {" "}
      {!callsdataloader && !chartdataloader ? (
        <ChartCard
          prize={`${callsdata?.Table[0]?.FCR_Percentage}%`}
          title={callsdata?.Table[0]?.IncDec_Percentage}
          icon="shuffle"
          children={
            <ResponsiveContainer width="100%" height={75}>
              {console.log(
                typeof callsdata?.Table[0]?.IncDec_Percentage,
                "type"
              )}
              <LineChart
                data={chartdata?.Table}
                margin={{ top: 5, right: 5, left: 5, bottom: -30 }}
              >
                <XAxis dataKey="Short_Month" tick={false} />

                <Tooltip content={<CustomTooltip />} />
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
              ? "neutral"
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
