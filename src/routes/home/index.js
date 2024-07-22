import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FCRwidget from "./widgets/FCRwidget";
import Coldcallwidget from "./widgets/Coldcallwidgets";
import Callswidget from "./widgets/Callswidget";
import Warmcallwidget from "./widgets/Warmcallwidget";
import { Card, Col, Row, Select } from "antd";
// import { ServiceLead } from "./Servicelevel/Table.js";
import CallByRegion from "./CallsbyRegion/Map.js";
import ServiceLevelWidget from "./widgets/ServiceLevelWidget.js";
import QueueTime from "./widgets/QueueTime.js";
import KeyBarChart from "./KeyBarchart.js";
import Top10FCR from "./AgentFCR/Top10FCR.js";
import Bottom10FCR from "./AgentFCR/Bottom10FCR.js";
import Top5QueueTime from "./Anomaly/Top5QueueTime.js";
import { Top10Splitgroup } from "./Group/Top10SplitGroup.js";
import {
  GetImporsinationDD,
  GetUserDetails,
  SaveUserDetails,
  Userval,
} from "../../appRedux/actions/globalactions/index.js";
import Top5talkDuration from "./Anomaly/Top5TalkDurationAnomaly.js";
import { Disposition } from "./Group/Disposition.js";
import KeyHeatmap from "./KeyHeatmap.js";
// import BalanceHistory from "./CallsbyRegion/Map.js";
// import CallByRegion from "./CallsbyRegion/CallByRegion.js";
import BalanceHistory from "./CallsbyRegion/Map.js";
import Talkddchart from "./Anomaly/Talkddchart.js";
import Queueddchart from "./Anomaly/Queueddchart.js";

// import CallByRegion from "./CallsbyRegion/CallregionMap.js";
// import CallsByRegion from "./CallsbyRegion/Map.js";
// import BalanceHistory from "./CallsbyRegion/CallregionMap.js";
// import { Disposition } from "./Group/Disposition.js";
const { Option } = Select;

const Index = () => {
  const dispatch = useDispatch();

  const callsdata = useSelector((state) => state.GetCCATotalCallsreducer);

  const callsdataloader = useSelector((state) => state.GetCCATotalCallsLoader);
  const uservals = useSelector((state) => state?.Userval);

  const usercurrval = useSelector((state) => state?.Userval) || [];
  const GetImporsinationDDs = useSelector(
    (state) => state?.GetImporsinationDDreducer?.Table
  );
  const GetUserDetailss = useSelector((state) => state?.GetUserDetailsreducer);
  const Usermainprofiledata = useSelector(
    (state) => state?.Usermainprofilereducer
  );

  const GetUserDetailsimpdata = useSelector(
    (state) => state?.GetUserDetailsreducer?.Table
  );
  const GetUserDetailsimpdataloader = useSelector(
    (state) => state?.GetUserDetailsloader
  );
  const [selectdata, setselectdata] = useState("");

  useEffect(() => {
    if (GetUserDetailsimpdata && !GetUserDetailsimpdataloader) {
      console.log(GetUserDetailsimpdata, "useff");
      if (GetUserDetailsimpdata[0]?.Impersonation_Id == null || undefined) {
        // console.log(GetUserDetailsimpdata[0]?.Impersonation_Id, "iff");
        setselectdata("");
      } else {
        const getimpname = GetImporsinationDDs?.filter(
          (e) => e.Employee_Id == GetUserDetailsimpdata[0]?.Impersonation_Id
        );
        console.log(getimpname, "getim");
        getimpname && setselectdata(getimpname[0]?.Employee_Name);
      }
    }
  }, [GetUserDetailsimpdataloader, GetUserDetailsimpdata, GetImporsinationDDs]);

  const Clickeduserdetails1 = (val) => {
    setselectdata(val);
    if (val == "") {
      dispatch(Userval(Usermainprofiledata));
      dispatch(
        SaveUserDetails({
          EmployeeId: Usermainprofiledata?.Employee_Id,
          // ImpersonationId: "",
          Theme: "Light",
        })
      );
    } else {
      const userimpdata = GetImporsinationDDs.filter(
        (e) => e.Employee_Name === val
      );
      dispatch(Userval(userimpdata[0]));

      dispatch(
        SaveUserDetails({
          EmployeeId: Usermainprofiledata?.Employee_Id,
          ImpersonationId: userimpdata[0]?.Employee_Id,
          Theme: "Light",
        })
      );
    }
  };

  return (
    <div>
      {console.log(usercurrval, "pdff")}
      <Row>
        {/* {Usermainprofiledata?.Job_Title !== "Call Centre Agent" && (
          <Col
            span={24}
            style={{
              display: "flex",
              justifyContent: "flex-end",
              marginBottom: "20px",
            }}
          >
            <label
              style={{
                display: "flex",
                alignItems: "center",
                marginRight: "20px",
              }}
            >
              Impersonating as{" "}
            </label>
            <Select
              showSearch
              value={selectdata}
              placeholder="Select value for impersonate"
              onChange={(e) => Clickeduserdetails1(e)}
              style={{
                width: 300,
              }}
              // filterOption={(input, option) =>
              //   (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
              // }
              // options={GetImporsinationDDs?.map((e) => {
              //   console.log(e, "select");
              //   return {
              //     value: `${e?.Employee_Name}(${e?.Job_Title})`,
              //   };
              // })}
            >
              <Option key={""} value={""}></Option>
              {GetImporsinationDDs?.map((item) => (
                <Option key={item.Employee_Name} value={item.Employee_Name}>
                  {`${item?.Employee_Name}(${item?.Job_Title})`}
                </Option>
              ))}
            </Select>
          </Col>
        )} */}
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
          <ServiceLevelWidget />
        </Col>
        <Col xl={6} lg={12} md={12} sm={12} xs={24}>
          {" "}
          <Warmcallwidget />
        </Col>
        <Col xl={12} lg={12} md={12} sm={24} xs={24}>
          <Row span={24}>
            <Col xl={12} lg={24} md={12} sm={24} xs={24}>
              <Coldcallwidget />
            </Col>
            <Col xl={12} lg={24} md={12} sm={24} xs={24}>
              <QueueTime />
            </Col>
            <Col span={24}>
              <Disposition />
            </Col>
          </Row>
        </Col>
        <Col span={12}>
          <BalanceHistory />
        </Col>
        <Col span={12}>
          <Card style={{ height: "370px" }} className="gx-card">
            <h2 className="h4 gx-mb-3">Reason for contact</h2>
            <KeyBarChart />
          </Card>
        </Col>
        <Col span={12}>
          <Card style={{ height: "370px" }} className="gx-card">
            <h2 className="h4 gx-mb-3">Key Call Topics</h2>
            <KeyHeatmap />
          </Card>
        </Col>
        {usercurrval?.Job_Title == "Call Centre Agent" ? (
          <Col span={12}>
            <Card
              className="gx-card text_transform_none"
              title="Talk Duration Anomaly"
            >
              <Talkddchart />
            </Card>
          </Col>
        ) : (
          <Col span={12}>
            <Top5talkDuration />
          </Col>
        )}
        {usercurrval?.Job_Title == "Call Centre Agent" ? (
          <Col span={12}>
            <Card
              className="gx-card text_transform_none"
              title="Queue Time Anomaly"
            >
              <Queueddchart />
            </Card>
          </Col>
        ) : (
          <Col span={12}>
            <Top5QueueTime />
          </Col>
        )}{" "}
        {usercurrval?.Job_Title !== "Call Centre Agent" && (
          <Col span={12}>
            <Card style={{ height: "440px" }} className="gx-card">
              <h2 className="h4 gx-mb-0 gx-text-capitalize">
                Top 5 agent by FCR
              </h2>
              <div style={{ marginTop: "20px" }}>
                <Top10FCR />
              </div>
            </Card>
          </Col>
        )}
        {usercurrval?.Job_Title !== "Call Centre Agent" && (
          <Col span={12}>
            <Card style={{ height: "440px" }} className="gx-card">
              <h2 className="h4 gx-mb-0 gx-text-capitalize">
                Bottom 5 agent by FCR
              </h2>
              <div style={{ marginTop: "20px" }}>
                <Bottom10FCR />
              </div>
            </Card>
          </Col>
        )}
      </Row>
    </div>
  );
};

export default Index;
