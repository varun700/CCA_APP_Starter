import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { GetCallCentreWarmCallWidget } from "../../../appRedux/actions/CCAwidgets";
// import CardBox from "../../../components/CardBox/index";
// import { Badge } from "antd";
// import Top4card from "../../../components/CardBox/Top4card";
import ChartCard from "../../../components/dashboard/Crypto/ChartCard";
import { Area, AreaChart, ResponsiveContainer, Tooltip } from "recharts";

const ServiceLevelWidget = () => {
  //   const dispatch = useDispatch();
  //   const callsdata = useSelector(
  //     (state) => state.GetCallCentreWarmCallWidgetreducer
  //   );
  //   const callsdataloader = useSelector(
  //     (state) => state.GetCallCentreWarmCallWidgetloader
  //   );
  const increamentData = [
    { name: "Page A", price: 200 },
    { name: "Page B", price: 1200 },
    { name: "Page C", price: 600 },
    { name: "Page D", price: 1600 },
    { name: "Page D", price: 1000 },
    { name: "Page H", price: 2260 },
    { name: "Page K", price: 800 },
  ];

  //   useEffect(() => {
  //     dispatch(GetCallCentreWarmCallWidget());
  //   }, []);

  //   console.log(callsdata, "op", callsdataloader);

  return (
    <div>
      {" "}
      <ChartCard
        prize="$7,831"
        title="07"
        icon="etherium"
        children={
          <ResponsiveContainer width="100%" height={75}>
            <AreaChart
              data={increamentData}
              margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
            >
              <Tooltip />
              <defs>
                <linearGradient id="color1" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="5%" stopColor="#FF55AA" stopOpacity={0.9} />
                  <stop offset="95%" stopColor="#E81D27" stopOpacity={0.9} />
                </linearGradient>
              </defs>
              <Area
                dataKey="price"
                type="monotone"
                strokeWidth={0}
                stackId="2"
                stroke="#4D95F3"
                fill="url(#color1)"
                fillOpacity={1}
              />
            </AreaChart>
          </ResponsiveContainer>
        }
        styleName="up"
        desc="Service Level"
      />
    </div>
  );
};

export default ServiceLevelWidget;
