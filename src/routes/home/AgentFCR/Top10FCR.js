import React, { useEffect } from "react";
import { Table } from "antd";
import Widget from "components/Widget/index";
import { useDispatch, useSelector } from "react-redux";
import { GetCallTop10AgentByFCR } from "../../../appRedux/actions/globalactions";
import SkeletonTable from "../../loader/Antdtableloader";

const Top10FCR = () => {
  const dispatch = useDispatch();
  const uservals = useSelector((state) => state?.Userval);
  const tabledata = useSelector(
    (state) => state?.GetCallTop10AgentByFCRreducer
  );
  const tabledataloader = useSelector(
    (state) => state?.GetCallTop10AgentByFCRloader
  );

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
      render: (text, record) => {
        return <span>{text}%</span>;
      },
    },
    {
      title: "FCR%",
      key: "FCR%",
      dataIndex: "FCR%",
      render: (text, record) => {
        return <span>{text}%</span>;
      },
    },
    {
      title: "Avg Sentiment Score%",
      key: "Sentiment_Score_Percentage%",
      dataIndex: "Neutral_Score_Percentage",
      render: (text, record) => {
        return <span>{text}%</span>;
      },
      // render: (text, record) => (
      //   <BarChart
      //     width={100}
      //     height={40}
      //     data={[record]}
      //     // layout="vertical"
      //     margin={{ top: 5, right: 5, left: 5, bottom: 5 }}
      //   >
      //     {/* <Tooltip /> */}
      //     <Bar dataKey="Positive_Score_Percentage" stackId="a" fill="#82ca9d" />
      //     <Bar dataKey="Negative_Score_Percentage" stackId="a" fill="#8884d8" />
      //     <Bar dataKey="Neutral_Score_Percentage" stackId="a" fill="#ff7300" />
      //   </BarChart>
      // ),
    },
  ];

  useEffect(() => {
    if (uservals?.Employee_Id !== undefined) {
      dispatch(GetCallTop10AgentByFCR(uservals?.Employee_Id));
    }
  }, [uservals]);
  return (
    // <Widget>
    <>
      {!tabledataloader ? (
        <Table
          className="gx-table-responsive"
          columns={columns}
          dataSource={tabledata?.Table}
          // pagination={{
          //   pageSize: 5,
          // }}
          pagination={false}
        />
      ) : (
        <SkeletonTable columns={columns} rows={6}></SkeletonTable>
      )}
    </>
    // </Widget>
  );
};

export default Top10FCR;
