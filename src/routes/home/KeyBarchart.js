import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
  ResponsiveContainer,
} from "recharts";

const KeyBarChart = () => {
  const data = [
    {
      name: "Schedule Appoinment",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Need New Checkbook",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Pay Bill",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Local Branch",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Transfer Money",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
  ];
  return (
    <div className="App">
      <ResponsiveContainer width={"100%"} height={290}>
        <BarChart
          layout="vertical"
          width={600}
          height={290}
          data={data}
          margin={{
            top: 0,
            right: 20,
            bottom: 20,
            left: 40,
          }}
        >
          {/* <CartesianGrid stroke="#f5f5f5" /> */}
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" />
          <defs>
            <linearGradient id="color08" x1="0" y1="1" x2="0" y2="0">
              <stop offset="5%" stopColor="#23DFDC" stopOpacity={0.9} />
              <stop offset="95%" stopColor="#63AEE4" stopOpacity={0.9} />
            </linearGradient>
          </defs>
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" stackId="a" fill="url(#color08)" barSize={7} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default KeyBarChart;
