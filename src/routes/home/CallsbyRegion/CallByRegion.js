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
  const [zoom, setZoom] = useState(3);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [clickedloc, setclickedloc] = useState("");
  const columns = [
    {
      title: "Call Centre",
      dataIndex: "Call_Centre",
      key: "Call_Centre",
      render: (text) => <span>{text}</span>,
    },
    {
      title: "Total Call",
      dataIndex: "Latitude",
      key: "Latitude",
    },
    {
      title: "Location",
      dataIndex: "Location",
      key: "Location",
    },
    {
      title: "Longitude",
      key: "Longitude",
      dataIndex: "Longitude",
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
    useSelector((state) => state?.GetCallByRegionMapreducer?.Table) || [];
  const Tooltiptbldataloader = useSelector(
    (state) => state?.GetCallByRegionMaploader
  );
  useEffect(() => {
    dispatch(GetCallByRegionMap(uservals?.Employee_Id));
  }, [uservals]);
  console.log(Tooltipdata, "datatool", Tooltiptbldata, Tooltiptbldataloader);
  const handleMarkerClick = (e, location) => {
    console.log("marker clicked", e, location);
    setclickedloc(location);
    dispatch(GetCallByRegion(uservals?.Employee_Id, location));
  };
  return (
    <div>
      {!mapdataloader ? (
        <Map
          center={[
            parseFloat(mapdata?.Table[0]?.Latitude),
            parseFloat(mapdata.Table[0].Longitude),
          ]}
          zoom={zoom}
        >
          {console.log(
            mapdata,
            "map",
            mapdata?.Table[0]?.Latitude,
            Tooltipdata,
            Tooltipdataloader
          )}
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
                  "Nodata"
                ) : (
                  "fetching"
                )}
              </Popup>
            </Marker>
          ))}
        </Map>
      ) : (
        <CustomMapSkeleton width={650} height={450} />
      )}
      <Modal
        title={clickedloc}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        width={800}
      >
        <Card style={{ width: "800", height: "500" }}>
          {true && (
            <Table
              className="gx-table-responsive"
              columns={columns}
              dataSource={Tooltiptbldata}
              pagination={{
                pageSize: 5,
              }}
            />
          )}
        </Card>
      </Modal>
    </div>
  );
};

export default App;
