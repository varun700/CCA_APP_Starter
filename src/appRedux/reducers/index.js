import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import Settings from "./Settings";
import Auth from "./Auth";
import Notes from "./Notes";
import Contact from "./Contact";
import Common from "./Common";
import {
  GetCallBottom10AgentByFCR,
  GetCallByRegion,
  GetCallByRegionDD,
  GetCallByRegionMap,
  GetCallCentreColdCallWidget,
  GetCallCentreFCRWidget,
  GetCallCentreUserDD,
  GetCallCentreWarmCallWidget,
  GetCallTop10AgentByFCR,
  GetCCATotalCalls,
  GetCCATotalCallsChart,
  GetColdCallChart,
  GetFcrChart,
  GetImporsinationDD,
  GetQueueTimeAnomaly,
  GetQueueTimeDD,
  GetQueueTimeWidget,
  GetSatisfactionScoreWidget,
  GetServiceLevelChart,
  GetTalkDurationAnomaly,
  GetTalkDurationDD,
  SaveUserDetails,
} from "./CcaWidgetReducer";
import {
  ClearUserDetailsloader,
  GetBottom5CallDurationAnomalyloader,
  GetCallBottom10AgentByFCRloader,
  GetCallByRegionDDloader,
  GetCallByRegionloader,
  GetCallByRegionMaploader,
  GetCallCenterDispositionPieChartloader,
  GetCallCenterTop10SplitGroupBarChartloader,
  GetCallCentreColdCallWidgetloader,
  GetCallCentreFCRWidgetloader,
  GetCallCentreWarmCallWidgetloader,
  GetCallTop10AgentByFCRloader,
  GetCallVolumePredictionChartloader,
  GetCCATotalCallsChartloader,
  GetCCATotalCallsLoader,
  GetColdCallChartloader,
  GetDefaultDateFilterloader,
  GetFcrChartloader,
  GetQueueTimeAnomalyloader,
  GetQueueTimeDDloader,
  GetQueueTimeWidgetloader,
  GetSatisfactionScoreWidgetloader,
  GetServiceLevelChartloader,
  GetServiceLevelloader,
  GetTalkDurationAnomalyloader,
  GetTalkDurationDDloader,
  GetTop5CallDurationAnomalyloader,
  GetTopCallDurationAnomalyByAgentloader,
  GetUserDetailsloader,
  GetKeyCallTopicsloader,
  GetTopKeyPhrasesloader,
  GetCCATotalActualPredictedCallsChartloader,
  GetChatGPTFilesdataloader,
  GetAvgCallVolumeHeatmaploader,
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
  GetKeyCallTopics,
  Usermainprofile,
  GetTopKeyPhrases,
  GetCCATotalActualPredictedCallsChart,
  GetChatGPTFilesdata,
  GetAvgCallVolumeHeatmap,
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
    GetCallCentreUserDDreducer: GetCallCentreUserDD,
    GetImporsinationDDreducer: GetImporsinationDD,
    GetQueueTimeWidgetreducer: GetQueueTimeWidget,
    GetQueueTimeWidgetloader,
    GetCCATotalCallsChartreducer: GetCCATotalCallsChart,
    GetCCATotalCallsChartloader,
    GetFcrChartreducer: GetFcrChart,
    GetFcrChartloader,
    GetColdCallChartreducer: GetColdCallChart,
    GetColdCallChartloader,
    GetSatisfactionScoreWidgetreducer: GetSatisfactionScoreWidget,
    GetSatisfactionScoreWidgetloader,
    GetServiceLevelChartreducer: GetServiceLevelChart,
    GetServiceLevelChartloader,
    GetCallByRegionreducer: GetCallByRegion,
    GetCallByRegionloader,
    GetCallByRegionDDreducer: GetCallByRegionDD,
    GetCallByRegionDDloader,
    GetTalkDurationAnomalyreducer: GetTalkDurationAnomaly,
    GetTalkDurationAnomalyloader,
    GetQueueTimeAnomalyloader,
    GetQueueTimeAnomalyreducer: GetQueueTimeAnomaly,
    GetTalkDurationDDreducer: GetTalkDurationDD,
    GetTalkDurationDDloader,
    GetQueueTimeDDreducer: GetQueueTimeDD,
    GetQueueTimeDDloader,
    SaveUserDetails,
    GetKeyCallTopicsreducer: GetKeyCallTopics,
    GetKeyCallTopicsloader,
    GetTopKeyPhrasesreducer: GetTopKeyPhrases,
    GetTopKeyPhrasesloader,
    Usermainprofilereducer: Usermainprofile,
    GetCCATotalActualPredictedCallsChartreducer:
      GetCCATotalActualPredictedCallsChart,
    GetCCATotalActualPredictedCallsChartloader,
    GetChatGPTFilesdatareducer: GetChatGPTFilesdata,
    GetChatGPTFilesdataloader,
    GetAvgCallVolumeHeatmapreducer: GetAvgCallVolumeHeatmap,
    GetAvgCallVolumeHeatmaploader,
  });

export default createRootReducer;
