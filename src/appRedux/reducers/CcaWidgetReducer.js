export const GetCCATotalCalls = (state = [], action) => {
  switch (action.type) {
    case "GetCCATotalCalls":
      return action.payload;
    default:
      return state;
  }
};
export const GetCallCentreFCRWidget = (state = [], action) => {
  switch (action.type) {
    case "GetCallCentreFCRWidget":
      return action.payload;
    default:
      return state;
  }
};
export const GetCallCentreColdCallWidget = (state = [], action) => {
  switch (action.type) {
    case "GetCallCentreColdCallWidget":
      return action.payload;
    default:
      return state;
  }
};
export const GetCallCentreWarmCallWidget = (state = [], action) => {
  switch (action.type) {
    case "GetCallCentreWarmCallWidget":
      return action.payload;
    default:
      return state;
  }
};
export const GetCallByRegionMap = (state = [], action) => {
  switch (action.type) {
    case "GetCallByRegionMap":
      return action.payload;
    default:
      return state;
  }
};
export const GetCallTop10AgentByFCR = (state = [], action) => {
  switch (action.type) {
    case "GetCallTop10AgentByFCR":
      return action.payload;
    default:
      return state;
  }
};

export const GetCallBottom10AgentByFCR = (state = [], action) => {
  switch (action.type) {
    case "GetCallBottom10AgentByFCR":
      return action.payload;
    default:
      return state;
  }
};
