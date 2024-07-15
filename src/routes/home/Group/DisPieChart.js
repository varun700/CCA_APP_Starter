import React from "react";
import AmCharts from "@amcharts/amcharts3-react";

const DisPieChart = () => {
  const config = {
    type: "pie",
    theme: "light",
    dataProvider: [
      {
        country: "CONNECTED_NON ACD CALL",
        litres: 501.9,
      },
      {
        country: "ABANDONED CALL",
        litres: 301.9,
      },
      {
        country: "FORCED DISCONNECT CALL",
        litres: 201.1,
      },
      {
        country: "INTERFLOWED CALLS",
        litres: 165.8,
      },
      {
        country: "OTHERS",
        litres: 139.9,
      },
    ],
    valueField: "litres",
    titleField: "country",
    balloon: {
      fixedPosition: true,
    },
    export: {
      enabled: false,
    },
    legend: {
      enabled: true,
      position: "right",
      markerType: "circle",
    },
    labelsEnabled: false,
    labelRadius: -40, // This will hide the pie chart values
  };

  return (
    <div className="App">
      <AmCharts.React
        style={{ width: "100%", height: "350px" }}
        options={config}
      />
    </div>
  );
};

export default DisPieChart;
