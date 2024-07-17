import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Avatar, Popover } from "antd";
import { userSignOut } from "../../appRedux/actions";
import {
  GetImporsinationDD,
  SaveUserDetails,
  Userval,
} from "../../appRedux/actions/globalactions";

const UserProfile = () => {
  const dispatch = useDispatch();
  const userdd =
    useSelector((state) => state.GetCallCentreUserDDreducer?.Table) || [];
  console.log(userdd, "userdd");
  const [userdata, setuserdata] = useState("");
  const localStorageuserval = localStorage.getItem("user");
  const GetImporsinationDDs = useSelector(
    (state) => state?.GetImporsinationDDreducer?.Table
  );
  const uservals = useSelector((state) => state?.Userval);
  useEffect(() => {
    if (JSON.parse(localStorageuserval)) {
      setuserdata(JSON.parse(localStorageuserval)?.Employee_Name);
      dispatch(Userval(JSON.parse(localStorageuserval)));
      dispatch(
        GetImporsinationDD(JSON.parse(localStorageuserval)?.Employee_Id)
      );
      dispatch(
        SaveUserDetails({
          EmployeeId: JSON.parse(localStorageuserval)?.Employee_Id,
          ImpersonationId: "",
          Theme: "Light",
        })
      );
    }
  }, []);
  useEffect(() => {
    if (userdata === "" && userdd?.length > 0) {
      console.log("eeeeeee");
      setuserdata(userdd[0]?.Employee_Name);
      dispatch(Userval(userdd[0]));
      dispatch(GetImporsinationDD(userdd[0]?.Employee_Id));
      dispatch(
        SaveUserDetails({
          EmployeeId: userdd[0]?.Employee_Id,
          ImpersonationId: "",
          Theme: "Light",
        })
      );
    }
  }, [userdd]);

  const Clickeduserdetails = (e) => {
    setuserdata(e?.Employee_Name);
    dispatch(Userval(e));
    dispatch(GetImporsinationDD(e?.Employee_Id));
    dispatch(
      SaveUserDetails({
        EmployeeId: e.Employee_Id,
        ImpersonationId: "",
        Theme: "Light",
      })
    );
    localStorage.setItem("user", JSON.stringify(e));
  };
  const Clickeduserdetails1 = (e) => {
    dispatch(Userval(e));
    dispatch(
      SaveUserDetails({
        EmployeeId: "",
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

  console.log("userimp", GetImporsinationDDs, uservals);

  return (
    <div className="gx-flex-row gx-align-items-center  gx-avatar-row">
      <Popover
        placement="bottomRight"
        content={userMenuOptions}
        trigger="click"
      >
        <Avatar
          src={"https://via.placeholder.com/150"}
          className="gx-size-40 gx-pointer gx-mr-3"
          alt=""
        />
        <span className="gx-avatar-name">
          {userdata}
          <i className="icon icon-chevron-down gx-fs-xxs gx-ml-2" />
        </span>
      </Popover>
      <Popover
        placement="bottomRight"
        content={userimporsination}
        trigger="click"
      >
        <i className="icon icon-chevron-down gx-fs-xxs gx-ml-2" />
      </Popover>
    </div>
  );
};

export default UserProfile;
