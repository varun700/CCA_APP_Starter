import React, { useEffect } from "react";
import { Card, Col, Row, Space, Table, Tag } from "antd";
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, {
  Search,
} from "react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit";
import { SLCColumns } from "./SLColumns";
import { useSelector, useDispatch } from "react-redux";
import { Bars } from "react-loader-spinner";
import Widget from "../../../components/Widget";
import { GetServiceLevel } from "../../../appRedux/actions/Servicelvltbl";

export const ServiceLead = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetServiceLevel());
  }, []);

  const tabledata = useSelector((state) => state.GetServiceLevelreducer);
  const tabledataloader = useSelector((state) => state.GetServiceLevelloader);

  return (
    <>
      <Widget title={"Service Level/Ring Time"} styleName={"header_Style"}>
        {!tabledataloader && (
          <Table columns={SLCColumns} dataSource={tabledata.Table1} />
        )}
      </Widget>
    </>
  );
};
