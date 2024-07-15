import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FCRwidget from "./widgets/FCRwidget";
import Coldcallwidget from "./widgets/Coldcallwidgets";
import Callswidget from "./widgets/Callswidget";
import Warmcallwidget from "./widgets/Warmcallwidget";
import { Card, Col, Row } from "antd";
import { ServiceLead } from "./Servicelevel/Table.js";
import { CallByRegion } from "./CallsbyRegion/Map.js";
import ServiceLevelWidget from "./widgets/ServiceLevelWidget.js";
import QueueTime from "./widgets/QueueTime.js";
import KeyBarChart from "./KeyBarchart.js";

const Index = () => {
  const dispatch = useDispatch();
  const callsdata = useSelector((state) => state.GetCCATotalCallsreducer);
  const callsdataloader = useSelector((state) => state.GetCCATotalCallsLoader);

  return (
    <div>
      <Row>
        <Col xl={6} lg={12} md={12} sm={12} xs={24}>
          {" "}
          <Callswidget />
        </Col>
        <Col xl={6} lg={12} md={12} sm={12} xs={24}>
          {" "}
          <FCRwidget />
        </Col>
        <Col xl={6} lg={12} md={12} sm={12} xs={24}>
          {" "}
          <Coldcallwidget />
        </Col>
        <Col xl={6} lg={12} md={12} sm={12} xs={24}>
          {" "}
          <Warmcallwidget />
        </Col>
        <Col xl={12} lg={24} md={12} sm={24} xs={24}>
          <ServiceLevelWidget />
        </Col>
        <Col xl={12} lg={24} md={12} sm={24} xs={24}>
          <QueueTime />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Card style={{ height: "300px" }} className="gx-card">
            <h2 className="h4 gx-mb-3">Key Call Topics</h2>
            {/* {userval === "JM" ? <Barchart /> : <Heatmap />} */}
            <KeyBarChart />

            {/* <Heatmap /> */}
          </Card>
        </Col>
        <Col span={12}>
          <CallByRegion />
        </Col>
      </Row>
    </div>
  );
};

export default Index;
