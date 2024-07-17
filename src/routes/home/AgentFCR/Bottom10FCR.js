import React, { useEffect } from "react";
import { Table } from "antd";
import Widget from "components/Widget/index";
import { useDispatch, useSelector } from "react-redux";
import { GetCallBottom10AgentByFCR } from "../../../appRedux/actions/globalactions";
import SkeletonTable from "../../loader/Antdtableloader";

const Bottom10FCR = () => {
  const dispatch = useDispatch();
  const uservals = useSelector((state) => state?.Userval);
  const tabledata = useSelector(
    (state) => state?.GetCallBottom10AgentByFCRreducer
  );
  const tabledataloader = useSelector(
    (state) => state?.GetCallBottom10AgentByFCRloader
  );
  useEffect(() => {
    console.log(uservals, "emp");
    dispatch(GetCallBottom10AgentByFCR(uservals?.Employee_Id));
  }, [uservals]);
  const columns = [
    {
      title: "Agent Name",
      dataIndex: "Agent_Name",
      key: "Agent_Name",
      render: (text) => <span>{text}</span>,
    },
    {
      title: "Total Call",
      dataIndex: "Total_Call",
      key: "Total_Call",
    },
    {
      title: "Duration",
      dataIndex: "Duration",
      key: "Duration",
    },
    {
      title: "Service Level%",
      key: "Service_Level%",
      dataIndex: "Service_Level%",
    },
    {
      title: "FCR%",
      key: "FCR%",
      dataIndex: "FCR%",
    },
    {
      title: "Avg Sentiment Score",
      key: "Sentiment_Score_Percentage",
      dataIndex: "Sentiment_Score_Percentage",
    },
  ];

  const data = [
    {
      key: "2",
      name: "Grojovin, Heather",
      age: 1493,
      address: "2d:3h:18m",
      action: "7.33",
      fcr: "85.65",
    },
    {
      key: "1",
      name: "Stevens, Clint	",
      age: 8982,
      address: "15d:17h:35m",
      action: "46.22",
      fcr: "92",
    },
  ];

  return (
    <Widget
      title={
        <h2 className="h4 gx-mb-0 gx-text-capitalize">
          Bottom 10 agent by FCR
        </h2>
      }
    >
      {!tabledataloader ? (
        <Table
          className="gx-table-responsive"
          columns={columns}
          dataSource={tabledata?.Table}
          pagination={{
            pageSize: 5,
          }}
        />
      ) : (
        <SkeletonTable columns={columns} rows={5}></SkeletonTable>
      )}
    </Widget>
  );
};

export default Bottom10FCR;
