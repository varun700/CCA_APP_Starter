import React, { useState, useEffect } from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import { Card, Col, Row, Modal, Button } from "antd";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// import customIconUrl from "./placeholder.png";
import { useSelector, useDispatch } from "react-redux";
import Widget from "../../../components/Widget";
// import { GetCallByRegionDrilldown } from "../../redux/action/CallByRegionDrilldown";
// import { GetCallByRegionMap } from "../../redux/action/CallByRegionMap";
// import { GetCallByRegion } from "../../redux/action/CallByRegion";
// import { CallByReagionColumns } from "./CallByReagionColumn";
// import {GetEmployeeID} from "../../redux/action/GetEmployeeID"

// const { ExportCSVButton } = CSVExport;
// const { SearchBar } = Search;

const isRemotePagination = true;
// const customIcon = L.icon({
//   iconUrl: customIconUrl,
//   iconSize: [38, 38], // size of the icon
//   iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
//   popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
// });

export const CallByRegion = () => {
  const dispatch = useDispatch();

  const position = [46.808327, -100.783737];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(true);
  const mapdata = useSelector((state) => state.GetCallByRegionMapreducer);
  const mapStyle = {
    height: "380px",
    width: "100%",
  };

  console.log("map", mapdata);
  return (
    <>
      <Widget title="Calls By Region" styleName={"header_Style"}>
        <Map center={position} zoom={4} scrollWheelZoom={true} style={mapStyle}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {mapdata?.map((d) => (
            <Marker
              position={[46.808327, -100.783737]}
              //   icon={customIcon}
              eventHandlers={{
                click: (e) => {
                  console.log("marker clicked", e, d?.Location);
                  //   dispatch(
                  //     GetCallByRegion({
                  //       v1: GetEmployeeIDValue,
                  //       v2: startDate,
                  //       v3: endDate,
                  //       v4: d?.Location,
                  //     })
                  //   );
                },
              }}
            >
              {showPopup && (
                <>
                  <Popup>
                    <span>
                      <li>center : {d[0]?.Call_Centre}</li>
                      <li>city : {d[0]?.Location}</li>
                      <li>Total Call : {d[0]?.Total_Calls}</li>
                      <li>Fcr : {d[0]?.Total_Cold_Calls}</li>
                      <li>Transfer/Cold : {d[0]?.Transfer_Cold}</li>
                      <li>Conference/Warm :{d[0]?.Conference_Warm}</li>
                      <li>Service Level : {d[0]?.Service_Level}</li>
                      {/* <li
                        onClick={() =>
                          showModal(GetCallByRegionValue[0]?.Location)
                        }
                        className=" text-blue-300"
                      >
                        {" "}
                        view Details
                      </li> */}
                    </span>
                  </Popup>
                </>
              )}
            </Marker>
          ))}
        </Map>
      </Widget>
    </>
  );
};
