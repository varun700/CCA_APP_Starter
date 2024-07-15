import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import Settings from "./Settings";
import Auth from "./Auth";
import Notes from "./Notes";
import Contact from "./Contact";
import Common from "./Common";
import {
  GetCallBottom10AgentByFCR,
  GetCallByRegionMap,
  GetCallCentreColdCallWidget,
  GetCallCentreFCRWidget,
  GetCallCentreWarmCallWidget,
  GetCallTop10AgentByFCR,
  GetCCATotalCalls,
} from "./CcaWidgetReducer";
import {
  ClearUserDetailsloader,
  GetBottom5CallDurationAnomalyloader,
  GetCallBottom10AgentByFCRloader,
  GetCallByRegionMaploader,
  GetCallCenterDispositionPieChartloader,
  GetCallCenterTop10SplitGroupBarChartloader,
  GetCallCentreColdCallWidgetloader,
  GetCallCentreFCRWidgetloader,
  GetCallCentreWarmCallWidgetloader,
  GetCallTop10AgentByFCRloader,
  GetCallVolumePredictionChartloader,
  GetCCATotalCallsLoader,
  GetDefaultDateFilterloader,
  GetServiceLevelloader,
  GetTop5CallDurationAnomalyloader,
  GetTopCallDurationAnomalyByAgentloader,
  GetUserDetailsloader,
} from "./LoaderReducer/Ccawidgetloader";
import { GetServiceLevel } from "./ServicelvlReducer";
import {
  ClearUserDetails,
  GetBottom5CallDurationAnomaly,
  GetCallCenterDispositionPieChart,
  GetCallCenterTop10SplitGroupBarChart,
  GetCallVolumePredictionChart,
  GetDefaultDateFilter,
  GetTop5CallDurationAnomaly,
  GetTopCallDurationAnomalyByAgent,
  GetUserDetails,
  UservalReducer,
} from "./globalreducer";

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    settings: Settings,
    auth: Auth,
    notes: Notes,
    contact: Contact,
    common: Common,
    GetCCATotalCallsreducer: GetCCATotalCalls,
    GetCCATotalCallsLoader,
    GetCallCentreFCRWidgetreducer: GetCallCentreFCRWidget,
    GetCallCentreFCRWidgetloader,
    GetCallCentreColdCallWidgetreducer: GetCallCentreColdCallWidget,
    GetCallCentreColdCallWidgetloader,
    GetCallCentreWarmCallWidgetreducer: GetCallCentreWarmCallWidget,
    GetCallCentreWarmCallWidgetloader,
    GetServiceLevelloader,
    GetServiceLevelreducer: GetServiceLevel,
    GetCallByRegionMaploader,
    GetCallByRegionMapreducer: GetCallByRegionMap,
    GetCallVolumePredictionChartloader,
    GetCallVolumePredictionChartreducer: GetCallVolumePredictionChart,
    GetTop5CallDurationAnomalyreducer: GetTop5CallDurationAnomaly,
    GetTop5CallDurationAnomalyloader,
    GetBottom5CallDurationAnomalyloader,
    GetBottom5CallDurationAnomalyreducer: GetBottom5CallDurationAnomaly,
    GetTopCallDurationAnomalyByAgentloader,
    GetTopCallDurationAnomalyByAgentreducer: GetTopCallDurationAnomalyByAgent,
    GetCallTop10AgentByFCRreducer: GetCallTop10AgentByFCR,
    GetCallTop10AgentByFCRloader,
    GetCallBottom10AgentByFCRreducer: GetCallBottom10AgentByFCR,
    GetCallBottom10AgentByFCRloader,
    GetCallCenterTop10SplitGroupBarChartreducer:
      GetCallCenterTop10SplitGroupBarChart,
    GetCallCenterTop10SplitGroupBarChartloader,
    GetCallCenterDispositionPieChartreducer: GetCallCenterDispositionPieChart,
    GetCallCenterDispositionPieChartloader,
    GetUserDetailsreducer: GetUserDetails,
    GetUserDetailsloader,
    ClearUserDetailsreducer: ClearUserDetails,
    ClearUserDetailsloader,
    GetDefaultDateFilterloader,
    GetDefaultDateFilterreducer: GetDefaultDateFilter,
    Userval: UservalReducer,
  });

export default createRootReducer;
