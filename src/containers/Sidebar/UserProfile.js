import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { Avatar, Col, Popover, Row } from "antd";
import { userSignOut } from "../../appRedux/actions";
import { Userval } from "../../appRedux/actions/globalactions";

const UserProfile = () => {
  const dispatch = useDispatch();
  const [state, setstate] = useState("Jones, Miller");
  const [desigination, setDesigination] = useState("Call Center Analyst");
  const [initial, setInitial] = useState("JM");
  useEffect(() => {
    // localStorage.setItem("user", "JM");
    dispatch(Userval("JM"));
  }, []);
  const changeuser = (e) => {
    setstate(e);
    if (e === "Adam, Billi") {
      setInitial("AB");
      setDesigination("Call Center Agent");
      // localStorage.setItem("user", "AB");
      dispatch(Userval("AB"));
    } else if (e === "Gower, Pamela") {
      setInitial("GP");
      setDesigination("Call Center Manager");
      // localStorage.setItem("user", "GP")
      dispatch(Userval("GP"));
    } else if (e === "Jones, Miller") {
      setInitial("JM");
      setDesigination("Call Center Analyst");
      // localStorage.setItem("user", "JM");
      dispatch(Userval("JM"));
    }
  };

  const userMenuOptions = (
    <ul className="gx-user-popover">
      <li onClick={() => changeuser("Adam, Billi")}>Adam, Billi</li>
      <li onClick={() => changeuser("Gower, Pamela")}>Gower, Pamela</li>
      <li onClick={() => changeuser("Jones, Miller")}>Jones, Miller</li>
    </ul>
  );

  return (
    <div className="gx-flex-row gx-align-items-center  gx-avatar-row">
      <Popover
        placement="bottomRight"
        content={userMenuOptions}
        trigger="click"
      >
        <Row gutter={[16, 16]}>
          <Col>
            <Avatar
              style={{
                color: "black",
              }}
              className="gx-size-40 gx-pointer gx-mr-3"
              alt=""
            >
              {" "}
              {initial}
            </Avatar>
          </Col>
          <Col style={{ marginTop: "5px" }}>
            <Row>
              <Col>
                <span className="gx-avatar-name">
                  {state}
                  <i className="icon icon-chevron-down gx-fs-xxs gx-ml-2" />
                </span>
              </Col>
            </Row>
            <Row>
              <Col>
                <span>{desigination}</span>
              </Col>
            </Row>
          </Col>
        </Row>
      </Popover>
    </div>
  );
};

export default UserProfile;
