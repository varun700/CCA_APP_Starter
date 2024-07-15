export const GetServiceLevel = (state = [], action) => {
  switch (action.type) {
    case "GetServiceLevel":
      return action.payload;
    default:
      return state;
  }
};
