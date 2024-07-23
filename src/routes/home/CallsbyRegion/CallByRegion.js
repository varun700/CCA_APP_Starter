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
      title: "TOTAL CALLS",
      dataIndex: "TOTAL_CALLS",
      key: "TOTAL_CALLS",
    },
    {
      title: "FCR Calls",
      key: "FCR_Calls",
      dataIndex: "FCR_Calls",
    },
    {
      title: "FCR PERCENTAGE %",
      key: "FCR_PERCENTAGE",
      dataIndex: "FCR_PERCENTAGE",
      render: (text, record) => {
        return <span>{text}%</span>;
      },
    },
    {
      title: "Total Warm Calls",
      key: "Total_Warm_Calls",
      dataIndex: "Total_Warm_Calls",
    },
    {
      title: "Warm Call Percentage %",
      key: "Warm_Call_Percentage",
      dataIndex: "Warm_Call_Percentage",
      render: (text, record) => {
        return <span>{text}%</span>;
      },
    },
    {
      title: "Total Cold Calls",
      key: "Total_Cold_Calls",
      dataIndex: "Total_Cold_Calls",
    },
    {
      title: "Cold Call Percentage %",
      key: "Cold_Call_Percentage",
      dataIndex: "Cold_Call_Percentage",
      render: (text, record) => {
        return <span>{text}%</span>;
      },
    },
    {
      title: "SERVICE LEVEL %",
      key: "SERVICE_LEVEL_%",
      dataIndex: "SERVICE_LEVEL_%",
      render: (text, record) => {
        return <span>{text}%</span>;
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
  return (
    <div>
      {/* {!mapdataloader && mapdata?.Table.length > 0 ? ( */}
      <Map center={[39.0997, -94.5786]} zoom={zoom}>
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
                  <li>center : {Tooltipdata[0]?.Call_Centre}</li>
                  <li>city : {Tooltipdata[0]?.Location}</li>
                  <li>Total Call : {Tooltipdata[0]?.Total_Calls}</li>
                  <li>Fcr : {Tooltipdata[0]?.FCR}</li>
                  <li>Transfer/Cold : {Tooltipdata[0]?.Transfer_Cold}</li>
                  <li>Conference/Warm :{Tooltipdata[0]?.Conference_Warm}</li>
                  <li>Service Level : {Tooltipdata[0]?.Service_Level}</li>
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
