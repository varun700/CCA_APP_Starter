import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FCRwidget from "./widgets/FCRwidget";
import Coldcallwidget from "./widgets/Coldcallwidgets";
import Callswidget from "./widgets/Callswidget";
import Warmcallwidget from "./widgets/Warmcallwidget";
import { Col, Row } from "antd";
import { ServiceLead } from "./Servicelevel/Table.js";
import { CallByRegion } from "./CallsbyRegion/Map.js";

const Index = () => {
  const dispatch = useDispatch();
  const callsdata = useSelector((state) => state.GetCCATotalCallsreducer);
  const callsdataloader = useSelector((state) => state.GetCCATotalCallsLoader);

  return (
    <div>
      <Row>
        <Col span={6}>
          {" "}
          <Callswidget />
        </Col>
        <Col span={6}>
          {" "}
          <FCRwidget />
        </Col>
        <Col span={6}>
          {" "}
          <Coldcallwidget />
        </Col>
        <Col span={6}>
          {" "}
          <Warmcallwidget />
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <ServiceLead />
        </Col>
        <Col span={12}>
          <CallByRegion />
        </Col>
      </Row>
    </div>
  );
};

export default Index;
