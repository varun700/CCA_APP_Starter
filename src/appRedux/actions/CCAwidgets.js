import axios from "axios";

export const GetCCATotalCalls = (userid) => {
  return async function (dispatch) {
    dispatch({
      type: "GetCCATotalCallsloader",
      payload: true,
    });
    try {
      const response = await axios.get(
        `https://ccaapp-api.azurewebsites.net/api/CCA/GetCCATotalCalls?EmployeeId=${userid}`
      );
      dispatch({
        type: "GetCCATotalCalls",
        payload: response?.data,
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
export const GetCCATotalCallsChart = (userid) => {
  return async function (dispatch) {
    dispatch({
      type: "GetCCATotalCallsChartloader",
      payload: true,
    });
    try {
      const response = await axios.get(
        `https://ccaapp-api.azurewebsites.net/api/CCA/GetCCATotalCallsChart?EmployeeId=${userid}
`
      );
      dispatch({
        type: "GetCCATotalCallsChart",
        payload: response?.data,
      });
      dispatch({
        type: "GetCCATotalCallsChartloader",
        payload: false,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
export const GetCallCentreFCRWidget = (userid) => {
  return async function (dispatch) {
    dispatch({
      type: "GetCallCentreFCRWidgetloader",
      payload: true,
    });
    try {
      const response = await axios.get(
        `https://ccaapp-api.azurewebsites.net/api/CCA/GetCallCentreFCRWidget?EmployeeId=${userid}`
      );
      dispatch({
        type: "GetCallCentreFCRWidget",
        payload: response?.data,
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
export const GetCallCentreColdCallWidget = (userid) => {
  return async function (dispatch) {
    dispatch({
      type: "GetCallCentreColdCallWidgetloader",
      payload: true,
    });
    try {
      const response = await axios.get(
        `https://ccaapp-api.azurewebsites.net/api/CCA/GetAHTWidget?EmployeeId=${userid}`
      );
      dispatch({
        type: "GetCallCentreColdCallWidget",
        payload: response?.data,
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
export const GetCallCentreWarmCallWidget = (userid) => {
  return async function (dispatch) {
    dispatch({
      type: "GetCallCentreWarmCallWidgetloader",
      payload: true,
    });
    try {
      const response = await axios.get(
        `https://ccaapp-api.azurewebsites.net/api/CCA/GetCallCentreWarmCallWidget?EmployeeId=${userid}`
      );
      dispatch({
        type: "GetCallCentreWarmCallWidget",
        payload: response?.data,
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
export const GetCallByRegionMap = (userid) => {
  return async function (dispatch) {
    dispatch({
      type: "GetCallByRegionMaploader",
      payload: true,
    });
    try {
      const response = await axios.get(
        `https://ccaapp-api.azurewebsites.net/api/CCA/GetCallByRegionMap?EmployeeId=${userid}
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
export const GetColdCallChart = (userid) => {
  return async function (dispatch) {
    dispatch({
      type: "GetColdCallChartloader",
      payload: true,
    });
    try {
      const response = await axios.get(
        `https://ccaapp-api.azurewebsites.net/api/CCA/GetAHTWidgetDD?EmployeeId=${userid}`
      );
      const val = response?.data?.Table.map((e) => ({
        Date: e?.Date.split("T")[0],
        Avg_Handling_Time: e?.Avg_Handling_Time,
        // Is_Predicted: e?.Is_Predicted,
      }));
      dispatch({
        type: "GetColdCallChart",
        payload: { Table: val },
      });
      dispatch({
        type: "GetColdCallChartloader",
        payload: false,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
export const GetCallByRegion = (userid, region) => {
  return async function (dispatch) {
    dispatch({
      type: "GetCallByRegionloader",
      payload: true,
    });
    try {
      const response = await axios.get(
        `https://ccaapp-api.azurewebsites.net/api/CCA/GetCallByRegion?EmployeeId=${userid}&Region=${region}`
      );
      dispatch({
        type: "GetCallByRegion",
        payload: response.data,
      });
      dispatch({
        type: "GetCallByRegionloader",
        payload: false,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
export const GetTalkDurationAnomaly = (userid) => {
  return async function (dispatch) {
    dispatch({
      type: "GetTalkDurationAnomalyloader",
      payload: true,
    });
    try {
      const response = await axios.get(
        `https://ccaapp-api.azurewebsites.net/api/CCA/GetTalkDurationAnomaly?EmployeeId=${userid}
`
      );
      dispatch({
        type: "GetTalkDurationAnomaly",
        payload: response.data,
      });
      dispatch({
        type: "GetTalkDurationAnomalyloader",
        payload: false,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
export const GetQueueTimeAnomaly = (userid) => {
  return async function (dispatch) {
    dispatch({
      type: "GetQueueTimeAnomalyloader",
      payload: true,
    });
    try {
      const response = await axios.get(
        `https://ccaapp-api.azurewebsites.net/api/CCA/GetQueueTimeAnomaly?EmployeeId=${userid}
`
      );
      dispatch({
        type: "GetQueueTimeAnomaly",
        payload: response.data,
      });
      dispatch({
        type: "GetQueueTimeAnomalyloader",
        payload: false,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
