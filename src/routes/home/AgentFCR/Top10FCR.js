import React, { useEffect } from "react";
import { Card, Progress, Space, Table, Tooltip } from "antd";
import Widget from "components/Widget/index";
import { useDispatch, useSelector } from "react-redux";
import { GetCallTop10AgentByFCR } from "../../../appRedux/actions/globalactions";
import SkeletonTable from "../../loader/Antdtableloader";
import {
  Bar,
  BarChart,
  Label,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
// import { green, red, yellow } from "@ant-design/colors";

const Top10FCR = () => {
  const dispatch = useDispatch();
  const uservals = useSelector((state) => state?.Userval);
  const tabledata = useSelector(
    (state) => state?.GetCallTop10AgentByFCRreducer
  );
  const tabledataloader = useSelector(
    (state) => state?.GetCallTop10AgentByFCRloader
  );

  const CustomTooltip = ({ active, payload }) => {
    console.log("1234567890987654321", payload, active);
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p>{`${payload[0].name} : ${payload[0].value}`}</p>
        </div>
      );
    }

    return null;
  };

  const columns = [
    {
      title: "Agent Name",
      dataIndex: "Agent_Name",
      key: "Agent_Name",
      width: 180,
      // render: (text) => <span>{text}</span>,
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
      title: "Sentiment Score%",
      key: "Sentiment_Score_Percentage%",
      dataIndex: "Neutral_Score_Percentage",
      render: (text, record) => {
        return (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <ResponsiveContainer width={"100%"} height={20}>
              <BarChart
                width={100}
                height={20}
                data={[record]}
                layout="vertical"
              >
                <Tooltip content={<CustomTooltip />} />
                <XAxis type="number" hide={true} />
                <YAxis type="category" dataKey="name" hide={true} />
                <Bar
                  dataKey="Positive_Score_Percentage"
                  stackId="a"
                  fill="#6ec48b"
                />
                <Bar
                  dataKey="Neutral_Score_Percentage"
                  stackId="a"
                  fill="#f0bf3a"
                />
                <Bar
                  dataKey="Negative_Score_Percentage"
                  stackId="a"
                  fill="#db2143"
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        );
      },
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
