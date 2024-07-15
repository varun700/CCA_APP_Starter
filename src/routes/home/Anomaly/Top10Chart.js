import { Modal } from "antd";
import React, { useState } from "react";
// import AmCharts from "@amcharts/amcharts3-react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
// import TopSplitgroup from "./Linechart";
const datas = [
  {
    name: "Keiter, Malynne",
    "Talk Duration": 4000,
    "Queue Time": 2400,
    amt: 2400,
  },
  {
    name: "Todd, Heather",
    "Talk Duration": 3000,
    "Queue Time": 1398,
    amt: 2210,
  },
  {
    name: "Hanlon, Billi",
    "Talk Duration": 2000,
    "Queue Time": 2000,
    amt: 2290,
  },
  {
    name: "Kiefer, Amanda",
    "Talk Duration": 2780,
    "Queue Time": 3908,
    amt: 2000,
  },
  {
    name: "Morlock, Vema",
    "Talk Duration": 1890,
    "Queue Time": 4800,
    amt: 2181,
  },
];

const Top10Chart = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen1, setIsModalOpen1] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const showModal1 = () => {
    setIsModalOpen(true);
  };
  const handleOk1 = () => {
    setIsModalOpen(false);
  };
  const handleCancel1 = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="App">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={datas}
          margin={{ top: 30, right: 0, left: 0, bottom: 0 }}
        >
          <XAxis dataKey="name" />
          <YAxis dataKey="Talk Duration" />
          <Tooltip cursor={false} />
          <Legend verticalAlign="top" />
          <defs>
            <linearGradient id="color08" x1="0" y1="1" x2="0" y2="0">
              <stop offset="5%" stopColor="#43c48a" stopOpacity={0.9} />
              <stop offset="95%" stopColor="#63AEE4" stopOpacity={0.9} />
            </linearGradient>
            <linearGradient id="blueGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3D7CAD" stopOpacity="1" />
              <stop offset="95%" stopColor="#4CA6B7" stopOpacity="1" />
            </linearGradient>
          </defs>
          <Bar
            dataKey="Talk Duration"
            onClick={() => showModal()}
            fill="url(#color08)"
            barSize={30}
            radius={5}
          />
          <Bar
            dataKey="Queue Time"
            onClick={() => showModal1()}
            fill="url(#blueGradient)"
            barSize={30}
            radius={5}
          />
        </BarChart>
      </ResponsiveContainer>
      <Modal
        title={"modal1"}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width={900}
        footer={null}
      >
        <div>
          <TopSplitgroup />
        </div>
      </Modal>
      <Modal
        title={"modal2"}
        footer={null}
        open={isModalOpen1}
        onOk={handleOk1}
        onCancel={handleCancel1}
      >
        {/* <TopSplitgroup /> */}
      </Modal>
    </div>
  );
};

export default Top10Chart;
