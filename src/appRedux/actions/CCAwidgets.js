import axios from "axios";

export const GetCCATotalCalls = () => {
  return async function (dispatch) {
    dispatch({
      type: "GetCCATotalCallsloader",
      payload: true,
    });
    try {
      const response = await axios.get(
        `https://ccaapp-api.azurewebsites.net/api/CCA/GetCCATotalCalls?EmployeeId=AG102&StartDate=01-07-2023&EndDate=30-07-2023`
      );
      dispatch({
        type: "GetCCATotalCalls",
        payload: response?.data?.Table,
      });
      dispatch({
        type: "GetCCATotalCallsloader",
        payload: false,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const GetCallCentreFCRWidget = () => {
  return async function (dispatch) {
    dispatch({
      type: "GetCallCentreFCRWidgetloader",
      payload: true,
    });
    try {
      const response = await axios.get(
        `https://ccaapp-api.azurewebsites.net/api/CCA/GetCallCentreFCRWidget?EmployeeId=AG102&StartDate=01-07-2023&EndDate=30-07-2023`
      );
      dispatch({
        type: "GetCallCentreFCRWidget",
        payload: {
          Table: response?.data?.Table,
          Table1: response?.data?.Table1,
        },
      });
      dispatch({
        type: "GetCallCentreFCRWidgetloader",
        payload: false,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
export const GetCallCentreColdCallWidget = () => {
  return async function (dispatch) {
    dispatch({
      type: "GetCallCentreColdCallWidgetloader",
      payload: true,
    });
    try {
      const response = await axios.get(
        `https://ccaapp-api.azurewebsites.net/api/CCA/GetCallCentreColdCallWidget?EmployeeId=AG102&StartDate=01-07-2023&EndDate=30-07-2023`
      );
      dispatch({
        type: "GetCallCentreColdCallWidget",
        payload: {
          Table: response?.data?.Table,
          Table1: response?.data?.Table1,
        },
      });
      dispatch({
        type: "GetCallCentreColdCallWidgetloader",
        payload: false,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
export const GetCallCentreWarmCallWidget = () => {
  return async function (dispatch) {
    dispatch({
      type: "GetCallCentreWarmCallWidgetloader",
      payload: true,
    });
    try {
      const response = await axios.get(
        `https://ccaapp-api.azurewebsites.net/api/CCA/GetCallCentreWarmCallWidget?EmployeeId=AG102&StartDate=01-07-2023&EndDate=30-07-2023`
      );
      dispatch({
        type: "GetCallCentreWarmCallWidget",
        payload: {
          Table: response?.data?.Table,
          Table1: response?.data?.Table1,
        },
      });
      dispatch({
        type: "GetCallCentreWarmCallWidgetloader",
        payload: false,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
export const GetCallByRegionMap = () => {
  return async function (dispatch) {
    dispatch({
      type: "GetCallByRegionMaploader",
      payload: true,
    });
    try {
      const response = await axios.get(
        `https://ccaapp-api.azurewebsites.net/api/CCA/GetCallByRegionMap?EmployeeId=AG102
`
      );
      dispatch({
        type: "GetCallByRegionMap",
        payload: response.data,
      });
      dispatch({
        type: "GetCallByRegionMaploader",
        payload: false,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
