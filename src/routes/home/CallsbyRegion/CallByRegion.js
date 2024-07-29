import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import customicon from "./placeholder.png";
import { useSelector, useDispatch } from "react-redux";
import {
  GetCallByRegion,
  GetCallByRegionMap,
} from "../../../appRedux/actions/CCAwidgets";
import { Card, Modal, Skeleton, Table } from "antd";
import Widget from "../../../components/Widget";
import { GetCallByRegionDD } from "../../../appRedux/actions/globalactions";
import CustomMapSkeleton from "../../loader/Maploader";
import SkeletonTable from "../../loader/Antdtableloader";
import {
  Bar,
  BarChart,
  Label,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
let DefaultIcon = L.icon({
  iconUrl: customicon,
  iconSize: [40, 41],
  iconAnchor: [12, 41],
});

L.Marker.prototype.options.icon = DefaultIcon;

const App = () => {
  const dispatch = useDispatch();
  const uservals = useSelector((state) => state?.Userval);
  const [center, setCenter] = useState([[46.808327, -100.783737]]);
  const [zoom, setZoom] = useState(4);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [clickedloc, setclickedloc] = useState("");
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <Card style={{ width: 150 }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span>{` Positive  : ${payload[0]?.payload.Positive_Score_Percentage}`}</span>
            <span>{` Neutral   : ${payload[1]?.payload.Neutral_Score_Percentage}`}</span>
            <span>{` Negative  : ${payload[2]?.payload.Negative_Score_Percentage}`}</span>
          </div>
        </Card>
      );
    }

    return null;
  };
  const columns = [
    {
      title: "Agent Name",
      dataIndex: "Agent_Name",
      key: "Agent_Name",
      render: (text) => <span>{text}</span>,
    },
    {
      title: "Supervisor Name",
      dataIndex: "Supervisor_Name",
      key: "Supervisor_Name",
    },
    {
      title: "Total Calls",
      dataIndex: "TOTAL_CALLS",
      key: "TOTAL_CALLS",
    },
    {
      title: "FCR Percentage %",
      key: "FCR_Percentage",
      dataIndex: "FCR_Percentage",
      render: (text, record) => {
        return <span>{text}%</span>;
      },
    },
    {
      title: "Service Level %",
      key: "SERVICE_LEVEL_%",
      dataIndex: "Service_Level_Percentage",
      render: (text, record) => {
        return <span>{text}%</span>;
      },
    },
    {
      title: "Sentiment Score%",
      key: "Sentiment_Score_Percentage%",
      dataIndex: "Neutral_Score_Percentage",
      width: 170,
      render: (text, record) => {
        const dectowholeno = [
          {
            ...record,
            Positive_Whole_Value: Math.round(record.Positive_Whole_Value),
            Negative_Whole_Value: Math.round(record.Negative_Whole_Value),
            Neutral_Whole_Value: Math.round(record.Neutral_Whole_Value),
          },
        ];
        console.log(dectowholeno, "dec");
        return (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <ResponsiveContainer width={"100%"} height={20}>
              {console.log(record)}
              <BarChart
                width={100}
                height={20}
                data={dectowholeno}
                layout="vertical"
              >
                <Tooltip
                  content={<CustomTooltip />}
                  position={{ x: -100, y: -90 }}
                />
                <XAxis type="number" hide={true} />
                <YAxis type="category" dataKey="name" hide={true} />
                <Bar
                  dataKey="Positive_Whole_Value"
                  stackId="a"
                  fill="#6ec48b"
                />
                <Bar dataKey="Neutral_Whole_Value" stackId="a" fill="#bfbfbd" />
                <Bar
                  dataKey="Negative_Whole_Value"
                  stackId="a"
                  fill="#e36d6d"
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        );
      },
    },
  ];

  const showModal = () => {
    dispatch(GetCallByRegionDD(uservals?.Employee_Id, clickedloc));
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const mapdata = useSelector((state) => state?.GetCallByRegionMapreducer);
  const mapdataloader = useSelector((state) => state?.GetCallByRegionMaploader);
  const Tooltipdata =
    useSelector((state) => state?.GetCallByRegionreducer?.Table) || [];
  const Tooltipdataloader = useSelector(
    (state) => state?.GetCallByRegionloader
  );
  const Tooltiptbldata =
    useSelector((state) => state?.GetCallByRegionDDreducer?.Table) || [];
  const Tooltiptbldataloader = useSelector(
    (state) => state?.GetCallByRegionDDloaders
  );

  const handleMarkerClick = (e, location) => {
    setclickedloc(location);
    dispatch(GetCallByRegion(uservals?.Employee_Id, location));
  };
  console.log("123456789098765432123456789098765432", uservals);
  return (
    <div>
      {/* {!mapdataloader && mapdata?.Table.length > 0 ? ( */}
      <Map
        center={
          uservals?.Employee_Id == "AG101"
            ? [45.424721, -75.695]
            : [39.0997, -94.5786]
        }
        zoom={zoom}
      >
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
        />
        {mapdata?.Table.map((e, index) => (
          <Marker
            key={index}
            position={[parseFloat(e.Latitude), parseFloat(e.Longitude)]}
            onClick={(event) => handleMarkerClick(event, e.Location)}
          >
            <Popup>
              {Tooltipdata.length > 0 && !Tooltipdataloader ? (
                <span>
                  <li>center : {Tooltipdata[0]?.CALL_CENTRE}</li>
                  <li>city : {Tooltipdata[0]?.LOCATION}</li>
                  <li>Total Call : {Tooltipdata[0]?.TOTAL_CALLS}</li>
                  <li>Fcr : {Tooltipdata[0]?.FCR_PERCENTAGE}</li>
                  <li>
                    Service Level : {Tooltipdata[0]?.SERVICE_LEVEL_PERCENTAGE}
                  </li>
                  <li
                    className=" text-blue-300 gx-link"
                    style={{ cursor: "pointer" }}
                    onClick={showModal}
                  >
                    {" "}
                    view Details
                  </li>
                </span>
              ) : Tooltipdata.length == 0 && !Tooltipdataloader ? (
                "No data"
              ) : (
                "fetching"
              )}
            </Popup>
          </Marker>
        ))}
      </Map>
      {/* ) : (
        <CustomMapSkeleton width={650} height={450} />
      )} */}
      <Modal
        title={clickedloc}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        width={1200}
      >
        {/* <Card style={{ width: "800", height: "500" }}> */}
        {console.log(Tooltiptbldataloader, "Tooltipdataloader")}
        {!Tooltiptbldataloader ? (
          <Table
            className="gx-table-responsive"
            columns={columns}
            dataSource={Tooltiptbldata}
            pagination={{
              pageSize: 5,
            }}
          />
        ) : (
          <SkeletonTable columns={columns} rows={6} />
        )}
        {/* </Card> */}
      </Modal>
    </div>
  );
};

export default App;
