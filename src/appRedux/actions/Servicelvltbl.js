import axios from "axios";

export const GetServiceLevel = () => {
  return async function (dispatch) {
    dispatch({
      type: "GetServiceLevelloader",
      payload: true,
    });
    try {
      const response = await axios.get(
        `https://ccaapp-api.azurewebsites.net/api/CCA/GetServiceLevel?EmployeeId=AG102&StartDate=01-07-2023&EndDate=30-07-2023`
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
