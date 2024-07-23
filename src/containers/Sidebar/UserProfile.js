import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Avatar,
  Button,
  Col,
  Dropdown,
  Menu,
  Popover,
  Row,
  Select,
  Space,
} from "antd";
import { DownOutlined } from "@ant-design/icons";
import { userSignOut } from "../../appRedux/actions";
import {
  ClearUserDetails,
  GetChatGPTFilesdata,
  GetImporsinationDD,
  GetUserDetails,
  SaveUserDetails,
  Usermainprofile,
  Userval,
} from "../../appRedux/actions/globalactions";
import SkeletonLoader from "../../routes/loader/Userloader";

const items = [{}];
const { Option } = Select;

const UserProfile = () => {
  const dispatch = useDispatch();
  const userdd =
    useSelector((state) => state.GetCallCentreUserDDreducer?.Table) || [];
  console.log(userdd, "userdd");
  const [userdata, setuserdata] = useState("");
  const [userdatades, setuserdatades] = useState("");
  const [usershortname, setusershortname] = useState("");
  const [isuserimpopen, setisuserimpopen] = useState(false);
  const [selectdata, setselectdata] = useState("");
  const [selectimpdata, setselectimpdata] = useState("");

  const localStorageuserval = localStorage.getItem("userss");
  const GetImporsinationDDs = useSelector(
    (state) => state?.GetImporsinationDDreducer?.Table
  );
  const GetUserDetailsimpdata = useSelector(
    (state) => state?.GetUserDetailsreducer?.Table
  );
  const GetUserDetailsimpdataloader = useSelector(
    (state) => state?.GetUserDetailsloader
  );

  const Usermainprofiledata = useSelector(
    (state) => state?.Usermainprofilereducer
  );
  const uservals = useSelector((state) => state?.Userval);
  // useEffect(() => {
  //   if (JSON.parse(localStorageuserval)) {
  //     setuserdata(JSON.parse(localStorageuserval)?.Employee_Name);
  //     setuserdatades(JSON.parse(localStorageuserval)?.Job_Title);
  //     setusershortname(JSON.parse(localStorageuserval)?.Short_Name);
  //     dispatch(Userval(JSON.parse(localStorageuserval)));
  //     dispatch(Usermainprofile(localStorageuserval));
  //     dispatch(
  //       GetImporsinationDD(JSON.parse(localStorageuserval)?.Employee_Id)
  //     );
  //   }
  // }, []);
  const csvdata = useSelector((state) => state.GetChatGPTFilesdatareducer);
  console.log(csvdata, "csvdata");
  useEffect(() => {
    if (userdata === "" && userdd?.length > 0) {
      dispatch(GetUserDetails(userdd[0]?.Employee_Id));
      dispatch(GetChatGPTFilesdata());
    }
  }, [userdd]);

  useEffect(() => {
    console.log(GetUserDetailsimpdataloader, GetUserDetailsimpdata, "op");
    if (userdata === "" && userdd?.length > 0 && !GetUserDetailsimpdataloader) {
      console.log(
        GetUserDetailsimpdata,
        "cond",
        GetUserDetailsimpdata[0]?.Impersonation_Id
      );
      if (
        GetUserDetailsimpdata[0]?.Impersonation_Id === null ||
        GetUserDetailsimpdata[0]?.Impersonation_Id === ""
      ) {
        console.log("iff");
        dispatch(Usermainprofile(userdd[0]));
        setuserdata(userdd[0]?.Employee_Name);
        setuserdatades(userdd[0]?.Job_Title);
        setusershortname(userdd[0]?.Short_Name);
        dispatch(Userval(userdd[0]));
        dispatch(GetImporsinationDD(userdd[0]?.Employee_Id));
      } else {
        console.log("elsee");
        dispatch(Usermainprofile(userdd[0]));
        setuserdata(userdd[0]?.Employee_Name);
        setuserdatades(userdd[0]?.Job_Title);
        setusershortname(userdd[0]?.Short_Name);
        const imporsinatetitle = GetImporsinationDDs?.map(
          (val) => val.Job_Title == GetUserDetailsimpdata[0]?.Impersonation_Id
        );
        dispatch(
          Userval({
            Employee_Id: GetUserDetailsimpdata[0]?.Impersonation_Id,
            Job_Title: GetUserDetailsimpdata[0]?.Impersonation_Job_Title,
          })
        );
        console.log("userjobt", GetUserDetailsimpdata[0], imporsinatetitle);
        dispatch(GetImporsinationDD(userdd[0]?.Employee_Id));
      }
    } else if (userdata && !GetUserDetailsimpdataloader) {
      if (
        GetUserDetailsimpdata[0]?.Impersonation_Id === null ||
        GetUserDetailsimpdata[0]?.Impersonation_Id === ""
      ) {
        dispatch(Userval(Usermainprofiledata));
      } else {
        dispatch(
          Userval({
            Employee_Id: GetUserDetailsimpdata[0]?.Impersonation_Id,
            Job_Title: GetUserDetailsimpdata[0]?.Impersonation_Job_Title,
          })
        );
      }
    }
  }, [userdd, GetUserDetailsimpdata, GetUserDetailsimpdataloader]);
  const Clickeduserdetails = (e) => {
    setuserdata(e?.Employee_Name);
    setuserdatades(e?.Job_Title);
    dispatch(GetUserDetails(e?.Employee_Id));
    dispatch(Usermainprofile(e));
    setusershortname(e?.Short_Name);
    dispatch(Usermainprofile(e));
    dispatch(GetImporsinationDD(e?.Employee_Id));

    localStorage.setItem("userss", JSON.stringify(e));
  };

  // const Clickeduserdetails1 = (val) => {
  //   setselectdata(val);
  //   if (val == "") {
  //     dispatch(Userval(Usermainprofiledata));
  //     dispatch(
  //       SaveUserDetails({
  //         EmployeeId: Usermainprofiledata?.Employee_Id,
  //         // ImpersonationId: "",
  //         Theme: "Light",
  //       })
  //     );
  //   } else {
  //     const userimpdata = GetImporsinationDDs.filter(
  //       (e) => e.Employee_Name === val
  //     );
  //     dispatch(Userval(userimpdata[0]));

  //     dispatch(
  //       SaveUserDetails({
  //         EmployeeId: Usermainprofiledata?.Employee_Id,
  //         ImpersonationId: userimpdata[0]?.Employee_Id,
  //         Theme: "Light",
  //       })
  //     );
  //   }
  // };
  useEffect(() => {
    if (GetUserDetailsimpdata && !GetUserDetailsimpdataloader) {
      console.log(GetUserDetailsimpdata, "useff");
      if (
        GetUserDetailsimpdata[0]?.Impersonation_Id == null ||
        GetUserDetailsimpdata[0]?.Impersonation_Id == undefined
      ) {
        console.log(GetUserDetailsimpdata[0]?.Impersonation_Id, "iff");
        setselectdata("");
        setselectimpdata("");
      } else {
        const getimpname = GetImporsinationDDs?.filter(
          (e) => e.Employee_Id == GetUserDetailsimpdata[0]?.Impersonation_Id
        );
        console.log(getimpname, "getim");
        getimpname && setselectdata(getimpname[0]?.Employee_Name);
        getimpname && setselectimpdata(getimpname[0]?.Job_Title);
      }
    }
  }, [GetUserDetailsimpdataloader, GetUserDetailsimpdata, GetImporsinationDDs]);

  const Clickeduserdetails1 = (data) => {
    const vals = GetImporsinationDDs?.filter((e) => e.Employee_Name == data);
    const val = vals[0];
    console.log("eee", val);

    if (val?.Employee_Name == "") {
      console.log("eee", "iff", val);
      setselectdata("");
      setselectimpdata("");
      dispatch(Userval(Usermainprofiledata));
      dispatch(
        SaveUserDetails({
          EmployeeId: Usermainprofiledata?.Employee_Id,
          ImpersonationId: "",
          Theme: "Light",
        })
      );
    } else {
      console.log("eee", "else", val);
      setselectdata(val?.Employee_Name);
      setselectimpdata(val?.Job_Title);
      const userimpdata = GetImporsinationDDs.filter(
        (e) => e.Employee_Name === val.Employee_Name
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
    // dispatch(Userval(e));
    // dispatch(
    //   SaveUserDetails({
    //     EmployeeId: userdata,
    //     ImpersonationId: e?.Employee_Id,
    //     Theme: "Light",
    //   })
    // );
    setisuserimpopen(false);
  };
  const userMenuOptions = () => {
    return (
      <ul className="gx-user-popover">
        {userdd.map((e) => (
          <li onClick={() => Clickeduserdetails(e)}>{e?.Employee_Name}</li>
        ))}
      </ul>
    );
  };
  const userimporsination = () => {
    return (
      <ul className="gx-user-popover userimpPopover">
        {/* <li onClick={() => Clickeduserdetails1(e)}>
          {" "}
          {`${e?.Employee_Name}(${e?.Job_Title})`}
        </li> */}

        <li onClick={() => Clickeduserdetails1({ Employee_Name: "" })}>
          Clear
        </li>
      </ul>
    );
  };
  const clearbutton = () => {
    setselectdata("");
    dispatch(ClearUserDetails(Usermainprofiledata?.Employee_Id));
    dispatch(Userval(Usermainprofiledata));
  };
  const content = (
    <>
      <div className="gx-flex-row gx-align-items-center  gx-avatar-row">
        <Avatar
          style={{
            color: "black",
          }}
          className="gx-size-40 gx-pointer gx-mr-4"
          alt=""
        >
          {usershortname}{" "}
        </Avatar>
        <Row gutter={[16, 16]}>
          <Col>
            <Row>
              <Col>
                <span className="gx-avatar-name">{userdata}</span>
              </Col>
            </Row>
            <Row>
              <Col>
                <span>{userdatades}</span>
              </Col>
            </Row>
          </Col>
        </Row>
        <Button
          style={{ left: "40px", top: "10px" }}
          danger
          size="small"
          onClick={clearbutton}
        >
          clear
        </Button>
      </div>
      <div>
        <hr />
        <h6>Impersonation : </h6>
        <Select
          showSearch
          value={selectdata}
          onChange={(e) => Clickeduserdetails1(e)}
          placeholder="Select"
          style={{
            width: 250,
          }}
        >
          {GetImporsinationDDs?.map((e, i) => (
            <Option
              key={i}
              value={e?.Employee_Name}
            >{`${e?.Employee_Name}(${e?.Job_Title})`}</Option>
          ))}
        </Select>
      </div>
    </>
  );
  return (
    <>
      <div className="gx-flex-row gx-align-items-center  gx-avatar-row">
        {!GetUserDetailsimpdataloader &&
          Usermainprofiledata?.Job_Title !== "Call Centre Agent" &&
          selectdata !== "" &&
          selectimpdata !== "" &&
          false == true && (
            // <div style={{ marginRight: "20px" }}>
            //   <Row>
            //     <i
            //       class="fas fa-users"
            //       style={{ marginRight: "10px", fontSize: "18px" }}
            //     ></i>
            //     <Col span={24}>{selectdata}</Col>
            //     {/* <Col span={24}>{selectdata}</Col> */}
            //   </Row>
            // </div>
            <Row gutter={[16, 16]} style={{ marginRight: "20px" }}>
              <Col
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <i
                  class="fas fa-users"
                  style={{
                    marginRight: "10px",
                    fontSize: "22px",
                  }}
                ></i>
              </Col>
              <Col style={{ marginTop: "15px" }}>
                <Row>
                  <Col>
                    <span className="gx-avatar-name">{selectdata}</span>
                  </Col>
                </Row>
                <Row style={{ marginTop: "4px" }}>
                  <Col>
                    <span>{selectimpdata}</span>
                  </Col>
                </Row>
              </Col>
            </Row>
          )}

        {console.log(selectdata, "sel")}
        {!GetUserDetailsimpdataloader ? (
          <>
            <Avatar
              style={{
                color: "black",
              }}
              className="avatarsize gx-pointer gx-mr-4"
              alt=""
              // size={30}
            >
              <span style={{ display: "flex", flexDirection: "column" }}>
                {usershortname}{" "}
                <Popover content={content} trigger="click">
                  {" "}
                  <i className="icon icon-chevron-down" />
                </Popover>
              </span>
            </Avatar>
            <Popover
              placement="bottomRight"
              content={userMenuOptions}
              trigger="click"
            >
              <Row gutter={[16, 16]}>
                <Col>
                  <Row>
                    <Col>
                      <span className="gx-avatar-name">
                        {` ${userdata}`}
                        {selectdata && `(impersonated as ${selectdata})`}
                        <i className="icon icon-chevron-down gx-fs-xxs gx-ml-2" />
                      </span>
                    </Col>
                  </Row>
                  <Row>
                    <Col style={{ marginTop: "4px" }}>
                      <span>{userdatades}</span>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Popover>
          </>
        ) : (
          <SkeletonLoader />
        )}

        {/* <div style={{ position: "relative" }}>
          <Popover
            placement="bottom"
            content={userimporsination}
            trigger="click"
            open={isuserimpopen}
            className="userimpPopover"
          >
            <i
              className="icon icon-chevron-down gx-fs-xxs  userprofile_ml"
              onClick={() => setisuserimpopen(!isuserimpopen)}
            />
          </Popover>
        </div> */}

        {/* <Dropdown
          menu={{ items }}
          dropdownRender={() => (
            <Menu>
              <Row gutter={[16, 16]}>
                <Col span={24}>
                  <Select
                    showSearch
                    placeholder="Select"
                    style={{
                      width: 160,
                    }}
                    filterOption={(input, option) =>
                      (option?.label ?? "")
                        .toLowerCase()
                        .includes(input.toLowerCase())
                    }
                    options={GetImporsinationDDs?.map((e) => {
                      return {
                        value: e?.Employee_Name,
                      };
                    })}
                  />
                </Col>
              </Row>

              <Row
                gutter={[16, 16]}
                style={{ marginTop: "15px", marginLeft: "10px" }}
              >
                <Col span={12}>
                  <Button
                    size="small"
                    style={{ background: "#f23a3a", color: "white" }}
                  >
                    Clear
                  </Button>
                </Col>
                <Col span={12}>
                  <Button
                    size="small"
                    style={{ background: "#77f23a", color: "white" }}
                    onClick={(e) => Clickeduserdetails1(e)}
                  >
                    Save
                  </Button>
                </Col>
              </Row>
            </Menu>
          )}
        >
          <a className="ant-dropdown-link">
            <Space>
              <i className="icon icon-chevron-down gx-fs-xxs  userprofile_ml" />
            </Space>
          </a>
        </Dropdown> */}
      </div>
    </>
  );
};

export default UserProfile;
