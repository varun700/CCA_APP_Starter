import axios from "axios";

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
export const GetCallTop10AgentByFCR = () => {
  return async function (dispatch) {
    dispatch({
      type: "GetCallTop10AgentByFCRloader",
      payload: true,
    });
    try {
      const response = await axios.get(
        `https://ccaapp-api.azurewebsites.net/api/CCA/GetCallTop10AgentByFCR?EmployeeId=AG102
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

export const GetCallBottom10AgentByFCR = () => {
  return async function (dispatch) {
    dispatch({
      type: "GetCallBottom10AgentByFCRloader",
      payload: true,
    });
    try {
      const response = await axios.get(
        `https://ccaapp-api.azurewebsites.net/api/CCA/GetCallBottom10AgentByFCR?EmployeeId=AG102

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
export const GetCallCenterDispositionPieChart = () => {
  return async function (dispatch) {
    dispatch({
      type: "GetCallCenterDispositionPieChartloader",
      payload: true,
    });
    try {
      const response = await axios.get(
        `https://ccaapp-api.azurewebsites.net/api/CCA/GetCallCenterDispositionPieChart?EmployeeId=AG102
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
export const GetUserDetails = () => {
  return async function (dispatch) {
    dispatch({
      type: "GetUserDetailsloader",
      payload: true,
    });
    try {
      const response = await axios.get(
        `https://ccaapp-api.azurewebsites.net/api/CCA/GetUserDetails?EmployeeId=AG102

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

export const ClearUserDetails = () => {
  return async function (dispatch) {
    dispatch({
      type: "ClearUserDetailsloader",
      payload: true,
    });
    try {
      const response = await axios.get(
        `https://ccaapp-api.azurewebsites.net/api/CCA/ClearUserDetails?EmployeeId=AG102
  
     `
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

export const GetKeyCallTopics = () => {
  return async function (dispatch) {
    dispatch({
      type: "GetKeyCallTopicsloader",
      payload: true,
    });
    try {
      const response = await axios.get(
        `https://ccaapp-api.azurewebsites.net/api/CCA/GetKeyCallTopics?EmployeeId=AG102
  
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
