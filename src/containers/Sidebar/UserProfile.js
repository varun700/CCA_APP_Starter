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
  GetImporsinationDD,
  GetUserDetails,
  SaveUserDetails,
  Usermainprofile,
  Userval,
} from "../../appRedux/actions/globalactions";

const items = [{}];

const UserProfile = () => {
  const dispatch = useDispatch();
  const userdd =
    useSelector((state) => state.GetCallCentreUserDDreducer?.Table) || [];
  console.log(userdd, "userdd");
  const [userdata, setuserdata] = useState("");
  const [userdatades, setuserdatades] = useState("");
  const [usershortname, setusershortname] = useState("");
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
  useEffect(() => {
    if (userdata === "" && userdd?.length > 0) {
      dispatch(GetUserDetails(userdd[0]?.Employee_Id));
    }
  }, [userdd]);

  useEffect(() => {
    console.log(GetUserDetailsimpdataloader, GetUserDetailsimpdata, "op");
    if (userdata === "" && userdd?.length > 0 && !GetUserDetailsimpdataloader) {
      console.log(GetUserDetailsimpdata, "cond");
      if (GetUserDetailsimpdata[0]?.Impersonation_Id == null) {
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
        console.log(GetUserDetailsimpdata, "elsee");
        dispatch(
          Userval({
            Employee_Id: GetUserDetailsimpdata[0]?.Impersonation_Id,
          })
        );
        dispatch(GetImporsinationDD(userdd[0]?.Employee_Id));
      }
    }
  }, [userdd, GetUserDetailsimpdata, GetUserDetailsimpdataloader]);
  const Clickeduserdetails = (e) => {
    setuserdata(e?.Employee_Name);
    setuserdatades(e?.Job_Title);
    dispatch(Usermainprofile(e));
    dispatch(Userval(e));
    setusershortname(e?.Short_Name);
    dispatch(Usermainprofile(e));
    dispatch(GetImporsinationDD(e?.Employee_Id));

    localStorage.setItem("userss", JSON.stringify(e));
  };
  const Clickeduserdetails1 = (e) => {
    dispatch(Userval(e));
    dispatch(
      SaveUserDetails({
        EmployeeId: userdata,
        ImpersonationId: e?.Employee_Id,
        Theme: "Light",
      })
    );
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
      <ul className="gx-user-popover">
        {GetImporsinationDDs?.map((e) => (
          <li onClick={() => Clickeduserdetails1(e)}>{e?.Employee_Name}</li>
        ))}
      </ul>
    );
  };

  return (
    <>
      <div className="gx-flex-row gx-align-items-center  gx-avatar-row">
        <Popover
          placement="bottomRight"
          content={userMenuOptions}
          trigger="click"
        >
          {/* <Avatar
          src={"https://via.placeholder.com/150"}
          className="gx-size-40 gx-pointer gx-mr-3"
          alt=""
        /> */}
          {/* <span className="gx-avatar-name">
          {userdata}
          <i className="icon icon-chevron-down gx-fs-xxs gx-ml-2" />
        </span>
        <div className="gx-avatar-name">
          {userdata}
          <i className="icon icon-chevron-down gx-fs-xxs gx-ml-2" />
        </div> */}
          <Row gutter={[16, 16]}>
            <Col>
              <Avatar
                style={{
                  color: "black",
                }}
                className="gx-size-40 gx-pointer gx-mr-3"
                alt=""
              >
                {usershortname}

                {""}
              </Avatar>
            </Col>
            <Col style={{ marginTop: "5px" }}>
              <Row>
                <Col>
                  <span className="gx-avatar-name">
                    {userdata}
                    <i className="icon icon-chevron-down gx-fs-xxs gx-ml-2" />
                  </span>
                </Col>
              </Row>
              <Row>
                <Col>
                  <span>{userdatades}</span>
                </Col>
              </Row>
            </Col>
          </Row>
        </Popover>
        {/* <Popover
          placement="bottomRight"
          content={userimporsination}
          trigger="click"
        >
          <i className="icon icon-chevron-down gx-fs-xxs  userprofile_ml" />
        </Popover> */}
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
