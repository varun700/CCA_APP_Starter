import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
// import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { Button, message } from "antd";
import "regenerator-runtime";

// const Dynamicrecorder = ({ setip, sendmsg, modal, state, setstate }) => {
//   // const [state, setstate] = useState(false);
//   const chatGPT = useSelector((state) => state.ChatGPTToggle.ChatGPTToggle);

//   const commands = [
//     {
//       command: 'hi iim',
//       callback: () => {
//         resetTranscript();
//         setstate(true);
//       }
//     },
//     {
//       command: 'send',
//       callback: (condition) => {
//         // setstate(false);
//         sendmsg();
//         resetTranscript();
//       }
//     },
//     {
//       command: 'stop',
//       callback: (condition) => {
//         setstate(false);
//         resetTranscript();
//       }
//     },
//     {
//       command: 'clear',
//       callback: ({ resetTranscript }) => resetTranscript()
//     }
//   ];
//   const { transcript, listening, resetTranscript, browserSupportsSpeechRecognition } =
//     useSpeechRecognition({ commands });
//   // const Iimgptvoicedatas = useSelector((state) => state.Iimgptvoicedata);

//   //   const startListening = () => {
//   //     resetTranscript();
//   //     SpeechRecognition.startListening({ continuous: true });
//   //   };
//   useEffect(() => {
//     if (state) {
//       setip(transcript.replace('send', ''));
//     }
//   }, [transcript]);

//   // const onstoplistening = (e) => {
//   //   SpeechRecognition.stopListening();
//   //   sendmsg();
//   // };
//   // const handleSpeechEnd = (e) => {
//   //   console.log('e', e);
//   // };
//   useEffect(() => {
//     console.log(modal, 'modal');
//     if (modal) {
//       SpeechRecognition.startListening({ continuous: true });
//     }
//   }, [modal]);

//   return (
//     <div>
//       {console.log(modal, state, transcript)}

//       {/* Hold and speak func */}

//       {/* {listening ? ( */}
//       {/* <button
//         className="audio_bg"
//         onTouchStart={startListening}
//         onMouseDown={startListening}
//         onTouchEnd={onstoplistening}
//         onMouseUp={onstoplistening}>
//         {listening ? (
//           <div>
//             <div className="pulse-ring"></div>
//             <i className="fas fa-microphone-slash voice_text_slash"></i>
//           </div>
//         ) : (
//           <i className="fas fa-microphone voice_text"></i>
//         )}
//       </button> */}
//       {/* // ) : ( // <button className="audio_bg" onClick={startListening}></button>
//       // )} */}

//       {/* click and speak and stop func */}

//       {/* {listening ? (
//         <button className="audio_bg" onClick={onstoplistening}>
//           <div className="pulse-ring"></div>
//           <i className="fas fa-microphone-slash voice_text_slash"></i>
//         </button>
//       ) : (
//         <button className="audio_bg" onClick={startListening}>
//           <i className="fas fa-microphone voice_text"></i>
//         </button>
//       )} */}
//       {state ? (
//         <button className="audio_bg">
//           <div className="pulse-ring"></div>
//           <i className="fas fa-microphone-slash voice_text_slash"></i>
//         </button>
//       ) : (
//         <button className="audio_bg">
//           <i className="fas fa-microphone voice_text"></i>
//         </button>
//       )}
//     </div>
//   );
// };

// export default Dynamicrecorder;
// import React, { useEffect, useState } from 'react';

const App = ({
  setip,
  sendmsg,
  modal,
  state,
  setstate,
  userip,
  onclosemodals,
  btnstatus,
}) => {
  const [recognizedText, setRecognizedText] = useState("");
  const [miconoroff, setmiconoroff] = useState(false);
  const [onclickvr, setonclickvr] = useState(false);
  const [prompt, setprompt] = useState("");
  const startarr = [
    "CCA start",
    "CCAStart",
    "CCA Start",
    "CCA start",
    "hi CCA",
    "HI CCA",
    "hello CCA",
    "Hello CCA",
    "hello CCA",
    "hello gpt",
    "Hello Gpt",
    "hello GPT",
  ];
  const stoparr = [
    "CCA stop",
    "CCAStop",
    "CCA Stop",
    "CCA stop",
    "Stop Gpt",
    "stop gpt",
    "stop GPT",
    "Stop GPT",
    "stop GPT",
  ];
  // const grammar = '#JSGF V1.0; grammar customCommands; public <command> = iimchatgpt | hi iim ;';
  const recognition1 =
    window.SpeechRecognition || window.webkitSpeechRecognition;
  // const speechRecognitionList1 = window.SpeechGrammarList || window.webkitSpeechGrammarList;
  // const speechRecognitionList = new speechRecognitionList1();
  // speechRecognitionList.addFromString(grammar, 1);
  const recognition = new recognition1();
  // recognition.grammars = speechRecognitionList;
  const Chatgptmodalonoroff1 = useSelector(
    (state) => state.Chatgptmodalonoroff
  );
  var stopaud = false;
  // recognition.interimResults = true;
  recognition.continuous = true;
  var allowval = false;
  var ignorefirstval = false;
  var stopaudio = false;
  var testval;
  recognition.onresult = (event) => {
    console.log("onclickvr", onclickvr, miconoroff, testval);
    ignorefirstval = true;
    const last = event.results.length - 1;
    const text = event.results[last][0].transcript.trim();
    console.log(text, "txt");
    setprompt(text);
    // console.log(event)
    if (startarr.some((substring) => text.includes(substring))) {
      console.log("true");
      allowval = true;
      setmiconoroff(true);
      setonclickvr(true);
      message.success("CCAGPT started");
      ignorefirstval = false;
    }
    if (stoparr.some((substring) => text.includes(substring))) {
      console.log("false");
      allowval = false;
      setmiconoroff(false);
      setonclickvr(false);
      message.success("CCAGPT Stopped");
      ignorefirstval = false;
    }
    // if (allowval && onclickvr) {
    //   setip(text.concat('!@#$%^&*'));
    // }

    // setsendval(true);
    // setRecognizedText(text);

    // recognition.start();
  };
  useEffect(() => {
    if (onclickvr && miconoroff) {
      setip(prompt.concat("!@#$%^&*"));
    }
  }, [onclickvr, miconoroff, prompt]);
  recognition.onend = (event) => {
    // if (!stopaudio) {
    // onclosemodals('', true);
    console.log("stopped");
    if (!stopaud) {
      recognition.continuous = true;
      recognition.start();
    }

    // }
  };

  useEffect(() => {
    console.log("started");
    recognition.start();
    return () => {
      console.log("hi");
      stopaud = true;
      recognition.stop();
    };
  }, []);
  // useEffect(() => {
  //   console.log(allowval, 'allval');
  //   setmiconoroff(allowval);
  // }, [allowval]);
  const setmicon = () => {
    setonclickvr(true);
    setmiconoroff(true);
  };
  const setmicoff = () => {
    setonclickvr(false);
    setmiconoroff(false);
  };
  return (
    <div>
      {console.log(miconoroff, onclickvr, "render")}
      {/* <button onClick={startListening}>Start Listening</button> */}
      {/* <button onClick={stopListening}>Stop Listening</button>
      <p>Recognized Text: {recognizedText}</p> */}
      {userip.length > 0 ? (
        <>
          <Button
            disabled={btnstatus}
            onClick={sendmsg}
            className="gpt-send-msg"
          >
            <i className="fad fa-paper-plane gpt_send_icon"></i>
          </Button>
        </>
      ) : miconoroff ? (
        <button
          className="audio_bg"
          // onClick={() => {
          //   setonclickvr(false), setmiconoroff(false), (testval = false);
          // }}
          onClick={setmicoff}
        >
          <div className="pulse-ring"></div>
          <i className="fas fa-microphone-slash voice_text_slash"></i>
        </button>
      ) : (
        <button
          className="audio_bg"
          // onClick={() => {
          //   setonclickvr(true), setmiconoroff(true), (testval = true);
          // }}
          // onClick={setmicon}
        >
          <i className="fas fa-microphone voice_text"></i>
        </button>
      )}
      {/* <Button
        onClick={() => {
          stopaudio = true;
        }}
        className="gpt-send-msg">
        stop
      </Button> */}
    </div>
  );
};
// Log to console
console.log("Hello console");
export default App;
