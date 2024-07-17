import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  GetCallCentreColdCallWidget,
  GetCallCentreFCRWidget,
  GetColdCallChart,
} from "../../../appRedux/actions/CCAwidgets";
import CardBox from "../../../components/CardBox/index";
import { Badge } from "antd";
import Top4card from "../../../components/CardBox/Top4card";
import ChartCard from "../../../components/dashboard/Crypto/ChartCard";
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis } from "recharts";
const Coldcallwidget = () => {
  const dispatch = useDispatch();
  const callsdata = useSelector(
    (state) => state.GetCallCentreColdCallWidgetreducer
  );
  const callsdataloader = useSelector(
    (state) => state.GetCallCentreColdCallWidgetloader
  );

  const chartdata = useSelector((state) => state.GetColdCallChartreducer);
  const chartdataloader = useSelector((state) => state.GetColdCallChartloader);
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
    dispatch(GetCallCentreColdCallWidget(uservals?.Employee_Id));
    dispatch(GetColdCallChart(uservals?.Employee_Id));
  }, [uservals]);

  console.log(callsdata, "op", callsdataloader);

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
      {!callsdataloader && !chartdataloader ? (
        <ChartCard
          prize={callsdata?.Table[0]?.Cold_Call_Percentage}
          title={callsdata?.Table[0]?.IncDec_Percentage}
          icon="ripple"
          children={
            <ResponsiveContainer width="100%" height={75}>
              <AreaChart
                data={chartdata?.Table}
                margin={{ top: 0, right: 0, left: 0, bottom: -30 }}
              >
                <XAxis dataKey="Short_Month" tick={false} />

                <Tooltip />
                <defs>
                  <linearGradient id="color5" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#e81a24" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#FEEADA" stopOpacity={0.8} />
                  </linearGradient>
                </defs>
                <Area
                  dataKey="Cold_Call_Percentage"
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
            callsdata?.Table[0]?.Inc_Dec_Percentage > 0
              ? "up"
              : callsdata?.Table[0]?.Inc_Dec_Percentage === null
              ? ""
              : "down"
          }
          desc="Transfer/Cold"
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default Coldcallwidget;