import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  GetCallCentreColdCallWidget,
  GetCallCentreFCRWidget,
  GetColdCallChart,
} from "../../../appRedux/actions/CCAwidgets";
import CardBox from "../../../components/CardBox/index";
import { Badge, Card, Modal, Skeleton } from "antd";
import Top4card from "../../../components/CardBox/Top4card";
import ChartCard from "../../../components/dashboard/Crypto/ChartCard";
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis } from "recharts";
import Athdd from "./widgetdd/ATHDD";
const Coldcallwidget = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
    dispatch(GetColdCallChart(uservals?.Employee_Id));
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const dispatch = useDispatch();
  const callsdata = useSelector(
    (state) => state.GetCallCentreColdCallWidgetreducer
  );
  const callsdataloader = useSelector(
    (state) => state.GetCallCentreColdCallWidgetloader
  );

  // const chartdata = useSelector((state) => state.GetColdCallChartreducer);
  // const chartdataloader = useSelector((state) => state.GetColdCallChartloader);
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
      dispatch(GetCallCentreColdCallWidget(uservals?.Employee_Id));
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
            <h5 className="h4 gx-mb-3">{payload[0]?.payload.Short_Month}</h5>
            <span className="label">{`${payload[0]?.dataKey.replaceAll(
              "_",
              " "
            )} : ${payload[0]?.value}s`}</span>
          </div>
        </Card>
      );
    }
    return null;
  };

  return (
    <div>
      {/* <Badge.Ribbon
        className="custom-tax-badge"
        placement="start"
        text={<i class="fas fa-exchange-alt" style={{ fontSize: "14px" }} />}
        color={"#f77d11"}
      >
        <CardBox heading={"Transfer/Cold"} heading_Space={"widgethead_space"}>
          {!callsdataloader && (
            <Top4card
              Totalcalls={callsdata?.Table[0]?.Total_Cold_Calls || 0}
              Totalduration={callsdata?.Table1[0]?.Cold_Avg_Talk_Duration || 0}
              FCRpercentage={callsdata?.Table[0]?.Cold_Call_Percentage}
              FCRavgtimeper={callsdata?.Table1[0]?.Cold_Avg_Talk_Percentage}
            />
          )}
        </CardBox>
      </Badge.Ribbon>{" "} */}
      {!callsdataloader ? (
        <ChartCard
          prize={`${callsdata?.Table[0]?.Avg_Handling_Time}`}
          title={`${callsdata?.Table[0]?.IncDec_Percentage}`}
          icon="ripple"
          children={
            <ResponsiveContainer width="100%" height={75}>
              <AreaChart
                onClick={showModal}
                style={{ cursor: "pointer" }}
                data={callsdata?.Table1}
                margin={{ top: 0, right: 0, left: 0, bottom: -30 }}
              >
                <XAxis dataKey="Short_Month" tick={false} />

                <Tooltip content={<CustomTooltip />} />
                <defs>
                  <linearGradient id="color5" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#e81a24" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#FEEADA" stopOpacity={0.8} />
                  </linearGradient>
                </defs>
                <Area
                  dataKey="Avg_Handling_Time"
                  strokeWidth={0}
                  stackId="2"
                  stroke="#FEEADA"
                  fill="url(#color5)"
                  fillOpacity={1}
                />
              </AreaChart>
            </ResponsiveContainer>
          }
          styleName={
            callsdata.Table[0]?.IncDec_Percentage > 0.0
              ? "up"
              : callsdata.Table[0]?.IncDec_Percentage == 0 || null
              ? "neutral"
              : "down"
          }
          desc="ATH"
        />
      ) : (
        <Card className="gx-card-widget" style={{ height: "400" }}>
          <Skeleton paragraph={{ rows: 2 }} active />
        </Card>
      )}
      <Modal
        title="ATH"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width={1200}
        // style={{ height: }}
        footer={null}
      >
        <Athdd />
      </Modal>
    </div>
  );
};

export default Coldcallwidget;
