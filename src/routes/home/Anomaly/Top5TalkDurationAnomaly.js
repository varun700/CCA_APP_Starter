import { Card, Modal } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import AmCharts from "@amcharts/amcharts3-react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { GetTalkDurationAnomaly } from "../../../appRedux/actions/CCAwidgets";
import {
  GetQueueTimeDD,
  GetTalkDurationDD,
} from "../../../appRedux/actions/globalactions";
import { Line } from "react-simple-maps";
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

const Top5talkDuration = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen1, setIsModalOpen1] = useState(false);
  const [talkmodalname, settalkmodalname] = useState("");
  const [queuemodalname, setqueuemodalname] = useState("");
  const dispatch = useDispatch();
  const uservals = useSelector((state) => state?.Userval);
  const chartdata = useSelector(
    (state) => state?.GetTalkDurationAnomalyreducer
  );
  const chartdataloader = useSelector(
    (state) => state?.GetTalkDurationAnomalyloader
  );
  const chartdatadd = useSelector(
    (state) => state?.GetTalkDurationDDreducer?.Table
  );
  const chartdataloaderdd = useSelector(
    (state) => state?.GetTalkDurationDDloader
  );
  const chartdataqueue = useSelector(
    (state) => state?.GetQueueTimeDDreducer?.Table
  );
  const chartdataloaderqueue = useSelector(
    (state) => state?.GetQueueTimeDDloader
  );
  useEffect(() => {
    dispatch(GetTalkDurationAnomaly(uservals?.Employee_Id));
  }, [uservals]);

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
    setIsModalOpen1(true);
  };
  const handleOk1 = () => {
    setIsModalOpen1(false);
  };
  const handleCancel1 = () => {
    setIsModalOpen1(false);
  };
  const Talkdurationchart = (e) => {
    console.log(e, "talk");
    dispatch(GetTalkDurationDD(e?.Employee_Id));
    settalkmodalname(e?.Employee_Name);
    showModal();
  };
  const queuedurationchart = (e) => {
    console.log(e, "talk");
    dispatch(GetQueueTimeDD(e?.Employee_Id));
    setqueuemodalname(e?.Employee_Name);
    showModal1();
  };
  console.log(chartdatadd, chartdataloaderdd, "ddtop5talk1");
  return (
    <>
      <Card className="gx-card" title="Top 5 Talk Duration Anomaly">
        <div className="App">
          {!chartdataloader && (
            <ResponsiveContainer width="100%" height={350}>
              <BarChart
                data={chartdata?.Table}
                margin={{ top: 120, right: 0, left: 0, bottom: 0 }}
              >
                <XAxis dataKey="Employee_Name" />
                <YAxis dataKey="Talkduration_count" />
                <Tooltip cursor={false} />
                <Legend verticalAlign="bottom" />
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
                  dataKey="Talkduration_count"
                  fill="url(#color08)"
                  barSize={30}
                  radius={5}
                  cursor={"pointer"}
                  onClickCapture={(e) => Talkdurationchart(e)}
                />
                <Bar
                  dataKey="Queuetime_Count"
                  fill="url(#blueGradient)"
                  barSize={30}
                  cursor={"pointer"}
                  onClickCapture={(e) => queuedurationchart(e)}
                  radius={5}
                />
              </BarChart>
            </ResponsiveContainer>
          )}
        </div>
      </Card>

      <Modal
        title={talkmodalname}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width={900}
        footer={null}
      >
        <div>
          {" "}
          {!chartdataloaderdd && (
            // <ResponsiveContainer width="100%" height={275}>
            //   <LineChart
            //     data={chartdatadd?.Table}
            //     margin={{ top: 5, right: 5, left: 5, bottom: 0 }}
            //   >
            //     <XAxis dataKey="Short_Month" tick={false} />

            //     <Tooltip />
            //     <Line
            //       dataKey="FCR_Percentage"
            //       stroke="#038FDE"
            //       dot={{ stroke: "#FEA931", strokeWidth: 2 }}
            //     />
            //   </LineChart>
            // </ResponsiveContainer>
            <div style={{ width: "100%", height: 300 }}>
              {console.log(chartdatadd, "ddtest")}
              <ResponsiveContainer>
                <AreaChart
                  width={400}
                  height={150}
                  data={chartdatadd}
                  margin={{ top: 5, right: 5, left: 5, bottom: 0 }}
                >
                  <XAxis
                    dataKey="Date"
                    padding={{ left: 30, right: 30 }}
                    // stroke={"#fff"}
                    tick={true}
                  />
                  <YAxis
                    dataKey="Talk_Duration"
                    stroke={"#000"}
                    // tick={true}
                    tick={"#000"}
                  />
                  <Tooltip />
                  <Legend verticalAlign="top" />
                  {/* {GetCallVolumePredictionValue?.length > 0 && (
                  <Brush
                    startIndex={GetCallVolumePredictionValue?.length - 60}
                    endIndex={GetCallVolumePredictionValue?.length - 1}
                    dataKey="Date"
                    // tickFormatter={formatXAxis}
                    height={50}
                    y={250}
                  >
                    <LineChart data={GetCallVolumePredictionValue}>
                      <Line
                        type="monotone"
                        dataKey="Total_Answered_Calls"
                        stroke="#54D454"
                        fill="#54D454"
                        strokeWidth={3}
                        dot={false}
                      />
                    </LineChart>
                  </Brush>
                )} */}
                  <Area
                    type="monotone"
                    dataKey="Talk_Duration"
                    stroke="#54D454"
                    activeDot={{ r: 8 }}
                  />
                  {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
                </AreaChart>
              </ResponsiveContainer>
            </div>
            // <div>
            //   <ResponsiveContainer width="100%" height={400}>
            //     {console.log(chartdatadd?.Table)}
            //     <AreaChart
            //       data={chartdatadd}
            //       // width={500}
            //       // height={500}
            //       margin={{ top: 5, right: 5, left: 5, bottom: -30 }}
            //     >
            //       <XAxis dataKey="Date" />

            //       <Tooltip />
            //       <Area
            //         dataKey="Talk_Duration"
            //         stroke="#8884d8"
            //         // dot={{ stroke: "#FEA931", strokeWidth: 2 }}
            //       />
            //     </AreaChart>
            //   </ResponsiveContainer>
            // </div>
          )}
        </div>
      </Modal>
      <Modal
        title={queuemodalname}
        width={900}
        footer={null}
        open={isModalOpen1}
        onOk={handleOk1}
        onCancel={handleCancel1}
      >
        <div>
          {!chartdataloaderqueue && (
            // <ResponsiveContainer width="100%" height={275}>
            //   <LineChart
            //     data={chartdataqueue?.Table}
            //     margin={{ top: 5, right: 5, left: 5, bottom: -30 }}
            //   >
            //     <XAxis dataKey="Short_Month" tick={false} />

            //     <Tooltip />
            //     <Line
            //       dataKey="FCR_Percentage"
            //       stroke="#038FDE"
            //       dot={{ stroke: "#FEA931", strokeWidth: 2 }}
            //     />
            //   </LineChart>
            // </ResponsiveContainer>
            <div style={{ width: "100%", height: 300 }}>
              {console.log(chartdataqueue, "ddtest3")}
              <ResponsiveContainer>
                <AreaChart
                  width={400}
                  height={150}
                  data={chartdataqueue}
                  margin={{ top: 5, right: 5, left: 5, bottom: 0 }}
                >
                  <XAxis
                    dataKey="Date"
                    padding={{ left: 30, right: 30 }}
                    // stroke={"#fff"}
                    tick={true}
                  />
                  <YAxis
                    dataKey="Queue_Time"
                    stroke={"#000"}
                    // tick={true}
                    tick={"#000"}
                  />
                  <Tooltip />
                  <Legend verticalAlign="top" />
                  {/* {GetCallVolumePredictionValue?.length > 0 && (
                  <Brush
                    startIndex={GetCallVolumePredictionValue?.length - 60}
                    endIndex={GetCallVolumePredictionValue?.length - 1}
                    dataKey="Date"
                    // tickFormatter={formatXAxis}
                    height={50}
                    y={250}
                  >
                    <LineChart data={GetCallVolumePredictionValue}>
                      <Line
                        type="monotone"
                        dataKey="Total_Answered_Calls"
                        stroke="#54D454"
                        fill="#54D454"
                        strokeWidth={3}
                        dot={false}
                      />
                    </LineChart>
                  </Brush>
                )} */}
                  <Area
                    type="monotone"
                    dataKey="Queue_Time"
                    stroke="#54D454"
                    activeDot={{ r: 8 }}
                  />
                  {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
                </AreaChart>
              </ResponsiveContainer>
            </div>
          )}
        </div>
      </Modal>
    </>
  );
};

export default Top5talkDuration;
