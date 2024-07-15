import { Card } from "antd";
import React from "react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
export const Top10Splitgroup = () => {
  const data = [
    { name: "BSD_OH_DATACNTEX", uv: 4000, Call_Count: 1100, amt: 1100 },
    { name: "BSD_TN_WINBACK", uv: 3000, Call_Count: 1000, amt: 1000 },
    { name: "BSD_TN_ACCOACH_1", uv: 2000, Call_Count: 800, amt: 800 },
    { name: "BSD_OH_GENCARE", uv: 2780, Call_Count: 300, amt: 300 },
    { name: "BSD_INQ_ORDER", uv: 1890, Call_Count: 350, amt: 350 },
    { name: "BSD_WHS_LONDGHAUL", uv: 2390, Call_Count: 500, amt: 500 },
    { name: "SB_ENS_IB", uv: 3490, Call_Count: 700, amt: 700 },
    { name: "BSD_OH_INQUIRY", uv: 1890, Call_Count: 671, amt: 671 },
    { name: "BSD_OH_QCC", uv: 2390, Call_Count: 800, amt: 800 },
    { name: "BSD_INQ_BILL", uv: 3490, Call_Count: 560, amt: 560 },
  ];
  return (
    <Card
      className="gx-card"
      style={{ marginBottom: "50px" }}
      title="Top 10 Split Group"
    >
      <ResponsiveContainer width="100%" height={350}>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart
            data={data}
            margin={{ top: 0, right: 70, left: 70, bottom: 110 }}
          >
            <defs>
              <linearGradient id="color2" x1="0" y1="0" x2="1" y2="0">
                <stop offset="5%" stopColor="#06BC8D" stopOpacity={0.9} />
                <stop offset="95%" stopColor="#05C9D0" stopOpacity={0.9} />
              </linearGradient>
            </defs>
            <XAxis interval={0} angle={-45} textAnchor="end" dataKey="name" />
            <YAxis dataKey="Call_Count" />
            <Tooltip />
            <Legend verticalAlign="top" />

            <Area
              dataKey="Call_Count"
              fill="url(#color2)"
              barSize={30}
              radius={5}
            />
          </AreaChart>
        </ResponsiveContainer>
      </ResponsiveContainer>
    </Card>
  );
};
