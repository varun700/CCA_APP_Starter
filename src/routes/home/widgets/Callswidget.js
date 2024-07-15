import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetCCATotalCalls } from "../../../appRedux/actions/CCAwidgets";
import CardBox from "../../../components/CardBox/index";
import { Badge } from "antd";
import Top4card from "../../../components/CardBox/Top4card";
import ChartCard from "../../../components/dashboard/Crypto/ChartCard";
import { Area, AreaChart, ResponsiveContainer, Tooltip } from "recharts";
const Index = () => {
  const dispatch = useDispatch();
  const callsdata = useSelector((state) => state.GetCCATotalCallsreducer);
  const callsdataloader = useSelector((state) => state.GetCCATotalCallsLoader);
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
    dispatch(GetCCATotalCalls());
  }, []);
  console.log(callsdata, "op", callsdataloader);
  return (
    <div>
      <ChartCard
        prize="$9,626"
        title="23"
        icon="bitcoin"
        children={
          <ResponsiveContainer width="100%" height={75}>
            <AreaChart
              data={increamentData}
              margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
            >
              <Tooltip />
              <defs>
                <linearGradient id="color3" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="5%" stopColor="#163469" stopOpacity={0.9} />
                  <stop offset="95%" stopColor="#FE9E15" stopOpacity={0.9} />
                </linearGradient>
              </defs>
              <Area
                dataKey="price"
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
    </div>
  );
};

export default Index;
