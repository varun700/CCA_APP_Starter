import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetCallCentreFCRWidget } from "../../../appRedux/actions/CCAwidgets";
import CardBox from "../../../components/CardBox/index";
import { Badge } from "antd";
import Top4card from "../../../components/CardBox/Top4card";
import ChartCard from "../../../components/dashboard/Crypto/ChartCard";
import {
  Area,
  AreaChart,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const FCRwidget = () => {
  const dispatch = useDispatch();
  const callsdata = useSelector((state) => state.GetCallCentreFCRWidgetreducer);
  const callsdataloader = useSelector(
    (state) => state.GetCallCentreFCRWidgetloader
  );

  useEffect(() => {
    dispatch(GetCallCentreFCRWidget());
  }, []);
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
      <ChartCard
        prize="$849"
        title="47"
        icon="litcoin"
        children={
          <ResponsiveContainer width="100%" height={75}>
            <LineChart
              data={lineData}
              margin={{ top: 5, right: 5, left: 5, bottom: 5 }}
            >
              <Tooltip />
              <Line
                dataKey="price"
                stroke="#038FDE"
                dot={{ stroke: "#FEA931", strokeWidth: 2 }}
              />
            </LineChart>
          </ResponsiveContainer>
        }
        styleName="down"
        desc="FCR"
      />
    </div>
  );
};

export default FCRwidget;
