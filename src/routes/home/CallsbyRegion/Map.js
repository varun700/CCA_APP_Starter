import React, { useEffect } from "react";
import Widget from "components/Widget/index";
import { Card, Col, Row } from "antd";
import App from "./CallByRegion.js";
import { useDispatch, useSelector } from "react-redux";
import CustomMapSkeleton from "../../loader/Maploader.js";
import { GetCallByRegionMap } from "../../../appRedux/actions/CCAwidgets.js";

const BalanceHistory = () => {
  const mapdata = useSelector((state) => state?.GetCallByRegionMapreducer);
  const mapdataloader = useSelector((state) => state?.GetCallByRegionMaploader);
  const uservals = useSelector((state) => state?.Userval);
  const dispatch = useDispatch();

  useEffect(() => {
    if (uservals?.Employee_Id !== undefined) {
      dispatch(GetCallByRegionMap(uservals?.Employee_Id));
    }
  }, [uservals]);
  return (
    <Card styleName="map_default_size">
      <h2 className="h4 gx-mb-3">Call By Region</h2>

      {!mapdataloader && mapdata?.Table.length > 0 ? (
        <>
          <App />
        </>
      ) : (
        <CustomMapSkeleton height={440} />
      )}
    </Card>
  );
};

export default BalanceHistory;
