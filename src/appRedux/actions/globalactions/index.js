import axios from "axios";
import moment from "moment";

export const GetCallVolumePredictionChart = () => {
  return async function (dispatch) {
    dispatch({
      type: "GetCallVolumePredictionChartloader",
      payload: true,
    });
    try {
      const response = await axios.get(
        `https://ccaapp-api.azurewebsites.net/api/CCA/GetCallVolumePredictionChart?EmployeeId=AG102`
      );
      dispatch({
        type: "GetCallVolumePredictionChart",
        payload: response.data,
      });
      dispatch({
        type: "GetCallVolumePredictionChartloader",
        payload: false,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const GetTop5CallDurationAnomaly = () => {
  return async function (dispatch) {
    dispatch({
      type: "GetTop5CallDurationAnomalyloader",
      payload: true,
    });
    try {
      const response = await axios.get(
        `https://ccaapp-api.azurewebsites.net/api/CCA/GetTop5CallDurationAnomaly`
      );
      dispatch({
        type: "GetTop5CallDurationAnomaly",
        payload: response.data,
      });
      dispatch({
        type: "GetTop5CallDurationAnomalyloader",
        payload: false,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
export const GetBottom5CallDurationAnomaly = () => {
  return async function (dispatch) {
    dispatch({
      type: "GetBottom5CallDurationAnomalyloader",
      payload: true,
    });
    try {
      const response = await axios.get(
        `https://ccaapp-api.azurewebsites.net/api/CCA/GetBottom5CallDurationAnomaly`
      );
      dispatch({
        type: "GetBottom5CallDurationAnomaly",
        payload: response.data,
      });
      dispatch({
        type: "GetBottom5CallDurationAnomalyloader",
        payload: false,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
export const GetTopCallDurationAnomalyByAgent = () => {
  return async function (dispatch) {
    dispatch({
      type: "GetTopCallDurationAnomalyByAgentloader",
      payload: true,
    });
    try {
      const response = await axios.get(
        `https://ccaapp-api.azurewebsites.net/api/CCA/GetTopCallDurationAnomalyByAgent?EmployeeId=AG102`
      );
      dispatch({
        type: "GetTopCallDurationAnomalyByAgent",
        payload: response.data,
      });
      dispatch({
        type: "GetTopCallDurationAnomalyByAgentloader",
        payload: false,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
export const GetCallTop10AgentByFCR = (userid) => {
  return async function (dispatch) {
    dispatch({
      type: "GetCallTop10AgentByFCRloader",
      payload: true,
    });
    try {
      const response = await axios.get(
        `https://ccaapp-api.azurewebsites.net/api/CCA/GetCallTop10AgentByFCR?EmployeeId=${userid}
`
      );
      dispatch({
        type: "GetCallTop10AgentByFCR",
        payload: response.data,
      });
      dispatch({
        type: "GetCallTop10AgentByFCRloader",
        payload: false,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const GetCallBottom10AgentByFCR = (userid) => {
  return async function (dispatch) {
    dispatch({
      type: "GetCallBottom10AgentByFCRloader",
      payload: true,
    });
    try {
      const response = await axios.get(
        `https://ccaapp-api.azurewebsites.net/api/CCA/GetCallBottom10AgentByFCR?EmployeeId=${userid}

  `
      );
      dispatch({
        type: "GetCallBottom10AgentByFCR",
        payload: response.data,
      });
      dispatch({
        type: "GetCallBottom10AgentByFCRloader",
        payload: false,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
export const GetCallCenterTop10SplitGroupBarChart = () => {
  return async function (dispatch) {
    dispatch({
      type: "GetCallCenterTop10SplitGroupBarChartloader",
      payload: true,
    });
    try {
      const response = await axios.get(
        `https://ccaapp-api.azurewebsites.net/api/CCA/GetCallCenterTop10SplitGroupBarChart?EmployeeId=AG102    `
      );
      dispatch({
        type: "GetCallCenterTop10SplitGroupBarChart",
        payload: response.data,
      });
      dispatch({
        type: "GetCallCenterTop10SplitGroupBarChartloader",
        payload: false,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
export const GetCallCenterDispositionPieChart = (userid) => {
  return async function (dispatch) {
    dispatch({
      type: "GetCallCenterDispositionPieChartloader",
      payload: true,
    });
    try {
      const response = await axios.get(
        `https://ccaapp-api.azurewebsites.net/api/CCA/GetCallCenterDispositionPieChart?EmployeeId=${userid}
 `
      );
      dispatch({
        type: "GetCallCenterDispositionPieChart",
        payload: response.data,
      });
      dispatch({
        type: "GetCallCenterDispositionPieChartloader",
        payload: false,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
export const GetUserDetails = (userid) => {
  return async function (dispatch) {
    dispatch({
      type: "GetUserDetailsloader",
      payload: true,
    });
    try {
      const response = await axios.get(
        `https://ccaapp-api.azurewebsites.net/api/CCA/GetUserDetails?EmployeeId=${userid}
   `
      );
      dispatch({
        type: "GetUserDetails",
        payload: response.data,
      });
      dispatch({
        type: "GetUserDetailsloader",
        payload: false,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const ClearUserDetails = (userid) => {
  return async function (dispatch) {
    dispatch({
      type: "ClearUserDetailsloader",
      payload: true,
    });
    try {
      const response = await axios.get(
        `https://ccaapp-api.azurewebsites.net/api/CCA/ClearUserDetails?EmployeeId=${userid}`
      );
      dispatch({
        type: "ClearUserDetails",
        payload: response.data,
      });
      dispatch({
        type: "ClearUserDetailsloader",
        payload: false,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const GetKeyCallTopics = (userid) => {
  return async function (dispatch) {
    dispatch({
      type: "GetKeyCallTopicsloader",
      payload: true,
    });
    try {
      const response = await axios.get(
        `https://ccaapp-api.azurewebsites.net/api/CCA/GetKeyCallTopics?EmployeeId=${userid}
  
     `
      );
      dispatch({
        type: "GetKeyCallTopics",
        payload: response.data,
      });
      dispatch({
        type: "GetKeyCallTopicsloader",
        payload: false,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const GetTopKeyPhrases = () => {
  return async function (dispatch) {
    dispatch({
      type: "GetTopKeyPhrasesloader",
      payload: true,
    });
    try {
      const response = await axios.get(
        `https://ccaapp-api.azurewebsites.net/api/CCA/GetTopKeyPhrases
  
     `
      );
      dispatch({
        type: "GetTopKeyPhrases",
        payload: response.data,
      });
      dispatch({
        type: "GetTopKeyPhrasesloader",
        payload: false,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const GetDefaultDateFilter = () => {
  return async function (dispatch) {
    dispatch({
      type: "GetDefaultDateFilterloader",
      payload: true,
    });
    try {
      const response = await axios.get(
        `https://ccaapp-api.azurewebsites.net/api/CCA/GetDefaultDateFilter

    
       `
      );
      dispatch({
        type: "GetDefaultDateFilter",
        payload: response.data,
      });
      dispatch({
        type: "GetDefaultDateFilterloader",
        payload: false,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const Userval = (val) => {
  return async function (dispatch) {
    dispatch({
      type: "Userval",
      payload: val,
    });
  };
};
export const GetCallCentreUserDD = () => {
  return async function (dispatch) {
    dispatch({
      type: "GetCallCentreUserDDloader",
      payload: true,
    });
    try {
      const response = await axios.get(
        `https://ccaapp-api.azurewebsites.net/api/CCA/GetCallCentreUserDD

    
       `
      );
      dispatch({
        type: "GetCallCentreUserDD",
        payload: response.data,
      });
      dispatch({
        type: "GetCallCentreUserDDloader",
        payload: false,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const GetImporsinationDD = (userid) => {
  return async function (dispatch) {
    dispatch({
      type: "GetImporsinationDDloader",
      payload: true,
    });
    try {
      const response = await axios.get(
        `https://ccaapp-api.azurewebsites.net/api/CCA/GetImporsinationDD?EmployeeId=${userid}`
      );
      dispatch({
        type: "GetImporsinationDD",
        payload: response.data,
      });
      dispatch({
        type: "GetImporsinationDDloader",
        payload: false,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
export const GetQueueTimeWidget = (userid) => {
  return async function (dispatch) {
    dispatch({
      type: "GetQueueTimeWidgetloader",
      payload: true,
    });
    try {
      const response = await axios.get(
        `https://ccaapp-api.azurewebsites.net/api/CCA/GetQueueTimeWidget?EmployeeId=${userid}
`
      );
      dispatch({
        type: "GetQueueTimeWidget",
        payload: response.data,
      });
      dispatch({
        type: "GetQueueTimeWidgetloader",
        payload: false,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
export const GetFcrChart = (userid) => {
  return async function (dispatch) {
    dispatch({
      type: "GetFcrChartloader",
      payload: true,
    });
    try {
      const response = await axios.get(
        `https://ccaapp-api.azurewebsites.net/api/CCA/GetFcrChart?EmployeeId=${userid}`
      );
      dispatch({
        type: "GetFcrChart",
        payload: response.data,
      });
      dispatch({
        type: "GetFcrChartloader",
        payload: false,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
//
export const GetSatisfactionScoreWidget = (userid) => {
  return async function (dispatch) {
    dispatch({
      type: "GetSatisfactionScoreWidgetloader",
      payload: true,
    });
    try {
      const response = await axios.get(
        `https://ccaapp-api.azurewebsites.net/api/CCA/GetSatisfactionScoreWidget?EmployeeId=${userid}`
      );
      dispatch({
        type: "GetSatisfactionScoreWidget",
        payload: response.data,
      });
      dispatch({
        type: "GetSatisfactionScoreWidgetloader",
        payload: false,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
export const GetServiceLevelChart = (userid) => {
  return async function (dispatch) {
    dispatch({
      type: "GetServiceLevelChartloader",
      payload: true,
    });
    try {
      const response = await axios.get(
        `https://ccaapp-api.azurewebsites.net/api/CCA/GetServiceLevelChart?EmployeeId=${userid}`
      );
      dispatch({
        type: "GetServiceLevelChart",
        payload: response.data,
      });
      dispatch({
        type: "GetServiceLevelChartloader",
        payload: false,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
export const GetCallByRegionDD = (userid, region) => {
  return async function (dispatch) {
    dispatch({
      type: "GetCallByRegionDDloader",
      payload: true,
    });
    try {
      const response = await axios.get(
        `https://ccaapp-api.azurewebsites.net/api/CCA/GetCallByRegionDD?EmployeeId=${userid}&Region=${region}
`
      );
      dispatch({
        type: "GetCallByRegionDD",
        payload: response.data,
      });
      dispatch({
        type: "GetCallByRegionDDloader",
        payload: false,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
//
export const GetTalkDurationDD = (userid, region) => {
  return async function (dispatch) {
    dispatch({
      type: "GetTalkDurationDDloader",
      payload: true,
    });
    try {
      const response = await axios.get(
        `https://ccaapp-api.azurewebsites.net/api/CCA/GetTalkDurationDD?EmployeeId=${userid}
`
      );
      dispatch({
        type: "GetTalkDurationDD",
        payload: response.data,
      });
      dispatch({
        type: "GetTalkDurationDDloader",
        payload: false,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
export const GetQueueTimeDD = (userid, region) => {
  return async function (dispatch) {
    dispatch({
      type: "GetQueueTimeDDloader",
      payload: true,
    });
    try {
      const response = await axios.get(
        `https://ccaapp-api.azurewebsites.net/api/CCA/GetQueueTimeDD?EmployeeId=${userid}`
      );
      dispatch({
        type: "GetQueueTimeDD",
        payload: response.data,
      });
      dispatch({
        type: "GetQueueTimeDDloader",
        payload: false,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
export const SaveUserDetails = (data) => {
  return async function (dispatch) {
    dispatch({
      type: "SaveUserDetailsloader",
      payload: true,
    });
    try {
      console.log(data, "post");

      const response = await axios.post(
        `https://ccaapp-api.azurewebsites.net/api/CCA/SaveUserDetails`,
        data
      );
      dispatch({
        type: "SaveUserDetails",
        payload: response.data,
      });
      dispatch({
        type: "SaveUserDetailsloader",
        payload: false,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
export const Usermainprofile = (val) => {
  return async function (dispatch) {
    dispatch({
      type: "Usermainprofile",
      payload: val,
    });
  };
};
export const GetCCATotalActualPredictedCallsChart = (userid) => {
  return async function (dispatch) {
    dispatch({
      type: "GetCCATotalActualPredictedCallsChartloader",
      payload: true,
    });
    try {
      const response = await axios.get(
        `https://ccaapp-api.azurewebsites.net/api/CCA/GetCCATotalActualPredictedCallsChart?EmployeeId=${userid}`
      );
      const val = response?.data?.Table.map((e) => ({
        DS: e?.DS.split("T")[0],
        TOTAL_CALLS: e?.TOTAL_CALLS,
        Is_Predicted: e?.Is_Predicted,
      }));
      console.log(val, "totac");
      dispatch({
        type: "GetCCATotalActualPredictedCallsChart",
        payload: { Table: val },
      });
      dispatch({
        type: "GetCCATotalActualPredictedCallsChartloader",
        payload: false,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const GetChatGPTFilesdata = (userid) => {
  return async function (dispatch) {
    dispatch({
      type: "GetChatGPTFilesdataloader",
      payload: true,
    });
    try {
      const apiUrls = [
        "https://ccaapp-api.azurewebsites.net/api/CCA/GetChatGPTFiles?FileName=AnomalyData",
        "https://ccaapp-api.azurewebsites.net/api/CCA/GetChatGPTFiles?FileName=BasicCallData",
        "https://ccaapp-api.azurewebsites.net/api/CCA/GetChatGPTFiles?FileName=DispositionData",
        "https://ccaapp-api.azurewebsites.net/api/CCA/GetChatGPTFiles?FileName=ForecastData",
      ];
      const responses = await axios.all(apiUrls.map((url) => axios.get(url)));
      const textdata = await axios.all(
        responses.map((url) => axios.get(url.data))
      );

      dispatch({
        type: "GetChatGPTFilesdata",
        payload: textdata,
      });
      dispatch({
        type: "GetChatGPTFilesdataloader",
        payload: false,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
export const GetAvgCallVolumeHeatmap = (userid) => {
  return async function (dispatch) {
    dispatch({
      type: "GetAvgCallVolumeHeatmaploader",
      payload: true,
    });
    try {
      const response = await axios.get(
        `https:////ccaapp-api.azurewebsites.net/api/CCA/GetAvgCallVolumeHeatmap?EmployeeId=${userid}
`
      );
      // console.log(val, "totac");
      dispatch({
        type: "GetAvgCallVolumeHeatmap",
        payload: response?.data,
      });
      dispatch({
        type: "GetAvgCallVolumeHeatmaploader",
        payload: false,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
