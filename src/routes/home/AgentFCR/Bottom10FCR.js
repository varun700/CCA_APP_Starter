import React, { useEffect } from "react";
import { Table, Card } from "antd";
import Widget from "components/Widget/index";
import { useDispatch, useSelector } from "react-redux";
import { GetCallBottom10AgentByFCR } from "../../../appRedux/actions/globalactions";
import SkeletonTable from "../../loader/Antdtableloader";
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const Bottom10FCR = () => {
  const dispatch = useDispatch();
  const uservals = useSelector((state) => state?.Userval);
  const tabledata = useSelector(
    (state) => state?.GetCallBottom10AgentByFCRreducer
  );
  const tabledataloader = useSelector(
    (state) => state?.GetCallBottom10AgentByFCRloader
  );
  console.log(uservals?.Employee_Id, "uservl");
  useEffect(() => {
    if (uservals?.Employee_Id !== undefined) {
      dispatch(GetCallBottom10AgentByFCR(uservals?.Employee_Id));
    }
  }, [uservals]);

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <Card style={{ width: 180 }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span>{` Positive  : ${payload[0]?.payload.Positive_Score_Percentage}%`}</span>
            <span>{` Neutral   : ${payload[1]?.payload.Neutral_Score_Percentage}%`}</span>
            <span>{` Negative  : ${payload[2]?.payload.Negative_Score_Percentage}%`}</span>
          </div>
        </Card>
      );
    }

    return null;
  };

  const columns = [
    {
      title: "Agent Name",
      dataIndex: "Agent_Name",
      key: "Agent_Name",
      width: 220,
      // render: (text) => <span>{text}</span>,
    },
    {
      title: "Total Call",
      dataIndex: "Total_Call",
      key: "Total_Call",
      width: 120,
    },

    {
      title: "Service Level%",
      key: "Service_Level%",
      dataIndex: "Service_Level%",
      width: 180,
      render: (text, record) => {
        return <span>{text}%</span>;
      },
    },
    {
      title: "FCR%",
      key: "FCR%",
      dataIndex: "FCR%",
      width: 70,
      render: (text, record) => {
        return <span>{text}%</span>;
      },
    },
    {
      title: "Sentiment Score%",
      key: "Sentiment_Score_Percentage%",
      dataIndex: "Neutral_Score_Percentage",
      width: 220,
      render: (text, record) => {
        const dectowholeno = [
          {
            ...record,
            Positive_Whole_Value: Math.round(record.Positive_Whole_Value),
            Negative_Whole_Value: Math.round(record.Negative_Whole_Value),
            Neutral_Whole_Value: Math.round(record.Neutral_Whole_Value),
          },
        ];

        console.log(dectowholeno, "whlno");
        return (
          <div style={{ display: "flex", justifyContent: "center" }}>
            {console.log(record, "re")}
            <ResponsiveContainer width={"100%"} height={20}>
              <BarChart
                width={100}
                height={20}
                data={dectowholeno}
                layout="vertical"
              >
                <Tooltip
                  content={<CustomTooltip />}
                  position={{ x: -100, y: -90 }}
                />
                <XAxis type="number" hide={true} />
                <YAxis type="category" dataKey="name" hide={true} />
                <Bar
                  dataKey="Positive_Whole_Value"
                  stackId="a"
                  fill="#6ec48b"
                />
                <Bar dataKey="Neutral_Whole_Value" stackId="a" fill="#bfbfbd" />
                <Bar
                  dataKey="Negative_Whole_Value"
                  stackId="a"
                  fill="#e36d6d"
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        );
      },
    },
  ];

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
        <SkeletonTable columns={columns} rows={5}></SkeletonTable>
      )}
    </>
    // {/* </Widget> */}
  );
};

export default Bottom10FCR;
