import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { GetCallCentreWarmCallWidget } from "../../../appRedux/actions/CCAwidgets";
// import CardBox from "../../../components/CardBox/index";
// import { Badge } from "antd";
// import Top4card from "../../../components/CardBox/Top4card";
import ChartCard from "../../../components/dashboard/Crypto/ChartCard";
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis } from "recharts";
import { useDispatch, useSelector } from "react-redux";
import { GetQueueTimeWidget } from "../../../appRedux/actions/globalactions";
import { Card, Skeleton } from "antd";

const QueueTime = () => {
  const dispatch = useDispatch();
  const callsdata = useSelector((state) => state.GetQueueTimeWidgetreducer);
  const callsdataloader = useSelector(
    (state) => state.GetQueueTimeWidgetloader
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
    if (uservals?.Employee_Id !== undefined) {
      dispatch(GetQueueTimeWidget(uservals?.Employee_Id));
    }
  }, [uservals]);

  //   console.log(callsdata, "op", callsdataloader);
  function formatTime(timeStr) {
    // Extract hours, minutes, and seconds using a regular expression
    const match = timeStr.match(/(\d+)h:(\d+)m:(\d+)s/);

    if (match) {
      const hours = parseInt(match[1], 10);
      const minutes = parseInt(match[2], 10);
      const seconds = parseInt(match[3], 10);

      // Convert total time to seconds
      const totalSeconds = hours * 3600 + minutes * 60 + seconds;

      // Calculate hours, minutes, and seconds from total seconds
      const finalMinutes = Math.floor(totalSeconds / 60);
      const finalSeconds = totalSeconds % 60;

      if (finalMinutes > 0) {
        return `${finalMinutes}m${finalSeconds}s`;
      } else {
        return `${finalSeconds}s`;
      }
    }

    // Return original string if it doesn't match the expected format
    return timeStr;
  }

  const CustomTooltip = ({ active, payload }) => {
    console.log("12345678976543567", payload);
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
            <h5 className="h4 gx-mb-3">{payload[0]?.payload.Month}</h5>
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
  return (
    <div>
      {" "}
      {!callsdataloader ? (
        <ChartCard
          prize={formatTime(callsdata?.Table[0]?.Queue_Time)}
          title={callsdata?.Table[0]?.Column1}
          icon="etherium"
          children={
            <ResponsiveContainer width="100%" height={75}>
              <AreaChart
                data={callsdata?.Table1}
                margin={{ top: 0, right: 0, left: 0, bottom: -30 }}
              >
                <XAxis dataKey="Month" tick={false} />

                <Tooltip content={<CustomTooltip />} />
                <defs>
                  <linearGradient id="color2" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="5%" stopColor="#61B1E4" stopOpacity={0.9} />
                    <stop offset="95%" stopColor="#867AE5" stopOpacity={0.9} />
                  </linearGradient>
                </defs>
                <Area
                  dataKey="Queue_Time"
                  type="monotone"
                  strokeWidth={0}
                  stackId="2"
                  stroke="#4D95F3"
                  fill="url(#color2)"
                  fillOpacity={1}
                />
              </AreaChart>
            </ResponsiveContainer>
          }
          // styleName="up"
          desc="Queue Time"
        />
      ) : (
        <Card className="gx-card-widget" style={{ height: "400" }}>
          <Skeleton paragraph={{ rows: 2 }} active />
        </Card>
      )}
    </div>
  );
};

export default QueueTime;
