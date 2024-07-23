// SkeletonLoader.jsx
import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Row, Col } from "antd";

const SkeletonLoader = () => {
  return (
    <Row style={{ alignItems: "center", padding: "10px" }}>
      <Col>
        <Skeleton circle={true} height={45} width={45} />
      </Col>
      <Col flex="auto" style={{ marginLeft: "20px", width: "100px" }}>
        <Skeleton height={10} width={`100%`} style={{ marginBottom: "0px" }} />
        <Skeleton height={10} width={`90%`} style={{ marginTop: "5px" }} />
      </Col>
    </Row>
  );
};

export default SkeletonLoader;
