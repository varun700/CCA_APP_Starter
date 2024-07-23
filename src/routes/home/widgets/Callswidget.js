import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  GetCCATotalCalls,
  GetCCATotalCallsChart,
} from "../../../appRedux/actions/CCAwidgets";
import CardBox from "../../../components/CardBox/index";
import { Badge, Card, Skeleton } from "antd";
import Top4card from "../../../components/CardBox/Top4card";
import ChartCard from "../../../components/dashboard/Crypto/ChartCard";
import { Button, Modal } from "antd";

import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis } from "recharts";
import moment from "moment";
import CallsDD from "./widgetdd/CallsDD";
const Index = () => {
  const dispatch = useDispatch();
  const callsdata = useSelector((state) => state.GetCCATotalCallsreducer);
  const callsdataloader = useSelector((state) => state.GetCCATotalCallsLoader);
  const uservals = useSelector((state) => state?.Userval);
  const chartdata = useSelector((state) => state.GetCCATotalCallsChartreducer);
  const chartdataloader = useSelector(
    (state) => state.GetCCATotalCallsChartloader
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (uservals?.Employee_Id !== undefined) {
      dispatch(GetCCATotalCalls(uservals?.Employee_Id));
      dispatch(GetCCATotalCallsChart(uservals?.Employee_Id));
    }
  }, [uservals]);

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
            <h5 className="h4 gx-mb-3">{payload[0]?.payload.SHORT_MONTH}</h5>
            <span className="label">{`${payload[0]?.payload?.Actual_Predicted_Calls.replace(
              "_",
              " "
            )} : ${payload[0]?.value}`}</span>
          </div>
        </Card>
      );
    }
    return null;
  };
  const COLORS = {
    "Actual Calls": "#0088FE", // Purple for actual calls
    "Predicted Calls": "#00C49F", // Green for predicted calls
  };
  return (
    <div>
      {!callsdataloader && !chartdataloader ? (
        <ChartCard
          prize={!callsdataloader && callsdata?.Table[0]?.AVG_CALLS}
          // title="23"
          forecast={
            !callsdataloader && callsdata?.Table1[0]?.AVG_FORECAST_CALLS
          }
          forecasttitle="Avg Predicted Calls"
          icon="phone"
          children={
            <ResponsiveContainer width="100%" height={75}>
              <AreaChart
                data={chartdata?.Table}
                onClick={showModal}
                style={{ cursor: "pointer" }}
                margin={{ top: 0, right: 0, left: 0, bottom: -30 }}
              >
                <XAxis dataKey="MONTH_YEAR" tick={false} />

                <Tooltip content={<CustomTooltip />} />
                <defs>
                  <linearGradient
                    id="colorGradient"
                    x1="0"
                    y1="0"
                    x2="1"
                    y2="0"
                  >
                    {chartdata?.Table.map((entry, index) => {
                      console.log(
                        `${(index / (chartdata?.Table.length - 1)) * 100}%`,
                        "off"
                      );
                      return (
                        <stop
                          key={index}
                          offset={`${
                            (index / (chartdata?.Table.length - 1)) * 100
                          }%`}
                          stopColor={COLORS[entry.Actual_Predicted_Calls]}
                          opacity={1}
                        />
                      );
                    })}
                  </linearGradient>
                </defs>
                {/* <defs>
                  <linearGradient id="color3" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="5%" stopColor="#163469" stopOpacity={0.9} />
                    <stop offset="95%" stopColor="#FE9E15" stopOpacity={0.9} />
                  </linearGradient>
                </defs> */}
                {/* <Area
                  dataKey="AVG_CALLS"
                  strokeWidth={0}
                  stackId="2"
                  stroke="#4D95F3"
                  fill="url(#color3)"
                  fillOpacity={1}
                /> */}
                <Area
                  type="monotone"
                  dataKey="AVG_CALLS"
                  stroke="url(#colorGradient)"
                  fill="url(#colorGradient)"
                />
              </AreaChart>
            </ResponsiveContainer>
          }
          styleName="up"
          desc="Avg Calls (Avg Predicted Calls)"
        />
      ) : (
        <Card className="gx-card-widget" style={{ height: "400" }}>
          <Skeleton paragraph={{ rows: 2 }} active />
        </Card>
      )}
      <Modal
        title="Calls"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width={1200}
        // style={{ height: }}
        footer={null}
      >
        <CallsDD />
      </Modal>
    </div>
  );
};

export default Index;
