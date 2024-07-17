import React from "react";
import Widget from "components/Widget/index";
import { Card, Col, Row } from "antd";
import App from "./CallByRegion.js";

const BalanceHistory = () => {
  return (
    <Widget styleName="map_default_size">
      <h2 className="h4 gx-mb-3">Call By Region</h2>
      <Row>
        <Col lg={24} md={12} sm={12} xs={24}>
          <App />
        </Col>
      </Row>
    </Widget>
  );
};

export default BalanceHistory;
