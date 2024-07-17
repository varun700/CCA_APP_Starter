import axios from "axios";

export const GetServiceLevel = (userid) => {
  return async function (dispatch) {
    dispatch({
      type: "GetServiceLevelloader",
      payload: true,
    });
    try {
      const response = await axios.get(
        `https://ccaapp-api.azurewebsites.net/api/CCA/GetServiceLevel?EmployeeId=${userid}`
      );
      dispatch({
        type: "GetServiceLevel",
        payload: response.data,
      });
      dispatch({
        type: "GetServiceLevelloader",
        payload: false,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
