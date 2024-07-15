import React from "react";
import ReactWordcloud from "react-wordcloud";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";
const data = [
  { text: "schedule appointment", value: 100, fill: "#5c6bc0" },
  { text: "local branch hours", value: 80, fill: "#26a69a" },
  { text: "need new checkbook", value: 70, fill: "#ffb74d" },
  { text: "transfer money accounts", value: 60, fill: "#29b6f6" },
  { text: "check account balance", value: 50, fill: "#ef5350" },
  { text: "pay bill", value: 40, fill: "#ab47bc" },
  { text: "reset password", value: 30, fill: "#ec407a" },
  { text: "lost credit card", value: 20, fill: "#9ccc65" },
  { text: "lost debit card", value: 10, fill: "#ff4081" },
  { text: "transfer money accounts", value: 60, fill: "#29b6f6" },
  { text: "check account balance", value: 50, fill: "#ef5350" },
  { text: "pay bill", value: 40, fill: "#ab47bc" },
  { text: "reset password", value: 30, fill: "#ec407a" },
  { text: "lost credit card", value: 20, fill: "#9ccc65" },
  { text: "lost debit card", value: 10, fill: "#ff4081" },
  { text: "transfer money accounts", value: 60, fill: "#29b6f6" },
  { text: "check account balance", value: 50, fill: "#ef5350" },
  { text: "pay bill", value: 40, fill: "#ab47bc" },
  { text: "reset password", value: 30, fill: "#ec407a" },
  { text: "lost credit card", value: 20, fill: "#9ccc65" },
  { text: "lost debit card", value: 10, fill: "#ff4081" },
  { text: "lost debit card", value: 10, fill: "#ff4081" },
  { text: "transfer money accounts", value: 60, fill: "#29b6f6" },
  { text: "check account balance", value: 50, fill: "#ef5350" },
  { text: "pay bill", value: 40, fill: "#ab47bc" },
  { text: "reset password", value: 30, fill: "#ec407a" },
  { text: "lost credit card", value: 20, fill: "#9ccc65" },
  { text: "lost debit card", value: 10, fill: "#ff4081" },
  {
    text: "told",
    value: 64,
  },
  {
    text: "mistake",
    value: 11,
  },
  {
    text: "thought",
    value: 16,
  },
  {
    text: "bad",
    value: 17,
  },
];

function KeyHeatmap() {
  const options = {
    rotations: 0,
    // rotationAngles: [-90, 0],
  };

  return (
    <div style={{ marginTop: "-40px", marginLeft: "-35px" }}>
      <ReactWordcloud words={data} options={options} />
    </div>
  );
}
export default KeyHeatmap;
