/* eslint-disable no-unused-vars */
import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "react-resizable/css/styles.css";
import axios from "axios";
import { ResizableBox, Resizable } from "react-resizable";
// eslint-disable-next-line no-unused-vars
import {
  Input,
  Row,
  Col,
  List,
  Radio,
  Button,
  Modal,
  Popover,
  message,
  Divider,
} from "antd";
import Draggable from "react-draggable";
// import { Speech } from 'react-speech';
import "regenerator-runtime";

// import csv6 from '../../../public/data/understockdetail.txt';
// import csv7 from '../../../public/data/overstockdetail.txt';

import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { useSpeechSynthesis } from "react-speech-kit";

// import VoiceToMp3Converter from "./VoiceToMp3Converter";
// import Reactrecorder from "./Reactrecorder";
import Dynamicrecorder from "./DynamicRecorder";

// const apiKey = "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";

const customSyntaxStyle = {
  backgroundColor: "lightgray",
  fontSize: "14px",

  borderRadius: "5px",
  fontFamily: "monospace",
};
const customSyntaxStyleWhite = {
  backgroundColor: "black",
  color: "white",
  fontSize: "14px",

  borderRadius: "5px",
  fontFamily: "monospace",
};

const ChatGpt = () => {
  var modalclose = false;
  const dispatch = useDispatch();
  const [messages, setMessages] = useState([]);
  const [state, setstate] = useState(false);
  const chatgptval = useSelector((state) => state.Chatgptsettings);
  const Voicetotxtopenapival = useSelector((state) => state.Voicetotxtopenapi);
  const username = sessionStorage.getItem("loggedEmailId");
  const [userInput, setUserInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [listeningvoice] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const csvDatas = useSelector((state) => state.GetChatGPTFilesdatareducer);
  const [speechdata, setspeechdata] = useState(true);
  const [speechonoroff, setspeechonoroff] = useState(false);
  const [modalshw, setmodalshw] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [switchStatus, setSwitchStatus] = useState(1);
  const [modalOpen, setModalOpen] = useState(false);
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();
  const { speak, cancel, speaking } = useSpeechSynthesis();
  const recognition1 =
    window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new recognition1();
  const [bounds, setBounds] = useState({
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
  });
  const [Height, setHeight] = useState(400);
  const [width, setWidth] = useState(800);
  const draggleRef = useRef(null);
  const [streamResponse, setstreamResponse] = useState("");
  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    if (userInput.includes("!@#$%^&*")) {
      sendMessage();
    }
  }, [userInput]);
  useEffect(() => {
    scrollToBottom();
  }, [streamResponse]);
  useEffect(() => {
    if (modalshw) {
      // SpeechRecognition.startListening({ continuous: true });
    } else {
      // SpeechRecognition.stopListening();
    }
  }, [modalshw]);
  useEffect(() => {
    setspeechdata(transcript);
    // setUserInput(transcript);
  }, [transcript]);

  const onStart = (_event, uiData) => {
    const { clientWidth, clientHeight } = window.document.documentElement;
    const targetRect = draggleRef.current?.getBoundingClientRect();
    if (!targetRect) {
      return;
    }
    setBounds({
      left: -targetRect.left + uiData.x,
      right: clientWidth - (targetRect.right - uiData.x),
      top: -targetRect.top + uiData.y,
      bottom: clientHeight - (targetRect.bottom - uiData.y),
    });
  };

  const checkInputTextFormat = (inputContent) => {
    let items = ["pdf", "purchase order", "form", "sample", "po"];
    let str = inputContent.toLowerCase();
    var count = 0;
    for (var i in items) {
      var item = items[i];
      if (str.includes(item)) {
        count++;
      }
    }
    return count;
  };
  const replaceItemsWithString = (inputContent) => {
    let items = ["create", "send", "pdf"];
    let str = inputContent.toLowerCase();
    for (const item of items) {
      if (item === "create") {
        str = str.split(item).join("create");
      } else if (item === "pdf") {
        str = str.split(item).join("table format");
      } else {
        str = str.split(item).join("");
      }
    }

    return str;
  };
  const onclosemodal = (e, currvall) => {
    // setModalOpen(!chatGPT);
    console.log("e");
    // dispatch(Chatgptmodalonoroff(true));
    setmodalshw(false);
    setstate(false);
    // dispatch(ChatGPTToggle(!chatGPT));
    // dispatch(ChatBot(true));
    // }
    // if (modalshw) {
    // recognition.stop();
    // console.log(currvall, 'onclose');
    // // }else {
    // if (currvall) {
    //   console.log('valu1');
    //   recognition.start();
    // } else {
    //   recognition.stop();

    // }
  };
  // const chatGPT = useSelector((state) => state.ChatGPTToggle.ChatGPTToggle);
  const apologizeFunc = async () => {
    try {
      const response = await fetch(
        "https://api.openai.com/v1/chat/completions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`,
          },
          body: JSON.stringify({
            messages: [{ role: "user", content: userInput }],
            temperature: 0,
            model: "gpt-3.5-turbo-16k",
            stream: true, // For streaming responses
          }),
        }
      );

      // Read the response as a stream of data
      const reader = response.body.getReader();
      const decoder = new TextDecoder("utf-8");
      let resultText = "";

      // eslint-disable-next-line no-constant-condition
      while (true) {
        const { done, value } = await reader.read();
        if (done) {
          break;
        }
        // Massage and parse the chunk of data
        const chunk = decoder.decode(value);
        const lines = chunk.split("\n");
        const parsedLines = lines
          .map((line) => line.replace(/^data: /, "").trim()) // Remove the "data: " prefix
          .filter((line) => line !== "" && line !== "[DONE]") // Remove empty lines and "[DONE]"
          .map((line) => JSON.parse(line)); // Parse the JSON string

        for (const parsedLine of parsedLines) {
          const { choices } = parsedLine;
          const { delta } = choices[0];
          const { content } = delta;
          // Update the UI with the new content
          if (content) {
            resultText = resultText + content;
            setstreamResponse(resultText);
          }
        }
      }
      setLoading(false);
      setMessages((prev) => {
        return [...prev, { content: resultText, role: "assistant" }];
      });
      if (speechonoroff) {
        speak({ text: resultText });
      }
      setstreamResponse("");
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  if (!browserSupportsSpeechRecognition) {
    return <span>Browser t support speech recognition.</span>;
  }
  const sendEmailPostApi = async (userInputtext) => {
    try {
      await axios
        .post("https://iimapidemo.azurewebsites.net/api/OpenAI/SendPOMail", {
          userInput: userInputtext,
        })
        .then((res) => {
          if (res.status == 200) {
            message.success("Email sent successfully");
          }
        });
    } catch (error) {
      console.log("err", error);
    }
  };

  const sendMessage = async (e) => {
    console.log(userInput, "send");
    let filterval = userInput.includes("!@#$%^&*")
      ? userInput.replace("!@#$%^&*", "")
      : userInput;
    if (filterval.trim() === "") return;
    // if (e.keyCode == 13) {
    //   e.preventDefault();
    // }

    setUserInput("");
    setLoading(true);
    let historyMsg = [];
    if (checkInputTextFormat(filterval) >= 2) {
      sendEmailPostApi(filterval);
      let replacedContent = replaceItemsWithString(filterval);
      historyMsg.push(
        { role: "user", content: replacedContent },
        {
          role: "user",
          content:
            "Please generate Purchase Order Template for the following information and it should have Purchase Order Details only in the Table format Do not add table format for To From Purchase Order Number Shipping Details Total Amount Delivery Instructions Payment Terms and Thank you Notes and also in the following order To From Purchase Order Number Shipping Details Purchase Order Details Table Total Amount Delivery Instructions Payment Terms and Thank you Notes Purchase Order Number you can give some random number Please add the normal styles for the To From Purchase Order Number Shipping Details Total Amount Delivery Instructions Payment Terms and Thank you Notes No need of Table format Add Table borders only for Purchase Details table and remove escape sequences",
        }
      );
    } else {
      if ("33" === "gpt-4") {
        historyMsg.push(
          { role: "user", content: csvDatas[0]?.data },
          { role: "user", content: csvDatas[1]?.data },
          { role: "user", content: csvDatas[2]?.data },
          { role: "user", content: csvDatas[3]?.data },
          { role: "user", content: csvDatas[4]?.data },
          // { role: 'user', content: csv6 },
          // { role: 'user', content: csv7 },
          {
            role: "user",
            content:
              "Please analyze the above 5 text which you should be referring as tables to answer the following question",
          },
          { role: "user", content: filterval }
        );
      } else {
        historyMsg.push(
          { role: "user", content: csvDatas[0]?.data },
          { role: "user", content: csvDatas[1]?.data },
          { role: "user", content: csvDatas[2]?.data },
          { role: "user", content: csvDatas[3]?.data },
          // { role: 'user', content: csv6 },
          // { role: 'user', content: csv7 },
          {
            role: "user",
            content:
              "Please analyze the above 4 text which you should be referring as tables to answer the following question",
          },
          { role: "user", content: filterval }
        );
      }
    }

    setMessages((prev) => {
      return [...prev, { content: filterval, role: "user" }];
    });
    if (switchStatus === 1) {
      try {
        const response = await fetch(
          "https://api.openai.com/v1/chat/completions",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${apiKey}`,
            },
            body: JSON.stringify({
              messages: historyMsg,
              temperature: 0,
              model: "gpt-4-turbo-preview",
              stream: true,
              // For streaming responses
              // model: chatgptval[0].Model,
              // stream: true, // For streaming responses
              // max_tokens: chatgptval[0].Maxtoken,
              // temperature: chatgptval[0].Temperature,
              // frequency_penalty: chatgptval[0].Frequencypenalty,
              // presence_penalty: chatgptval[0].Presencepenalty,
              // top_p: chatgptval[0].TopP
            }),
          }
        );

        // Read the response as a stream of data
        const reader = response.body.getReader();
        const decoder = new TextDecoder("utf-8");
        let resultText = "";

        // eslint-disable-next-line no-constant-condition
        while (true) {
          const { done, value } = await reader.read();
          if (done) {
            break;
          }
          // Massage and parse the chunk of data
          const chunk = decoder.decode(value);
          const lines = chunk.split("\n");
          const parsedLines = lines
            .map((line) => line.replace(/^data: /, "").trim()) // Remove the "data: " prefix
            .filter((line) => line !== "" && line !== "[DONE]") // Remove empty lines and "[DONE]"
            .map((line) => JSON.parse(line)); // Parse the JSON string

          for (const parsedLine of parsedLines) {
            const { choices } = parsedLine;
            const { delta } = choices[0];
            const { content } = delta;
            // Update the UI with the new content
            if (content) {
              if (
                content.toLowerCase().includes("apologize") ||
                content.toLowerCase().includes("sorry") ||
                content.toLowerCase().includes("nothing") ||
                resultText.toLowerCase().includes("above tables do not contain")
              ) {
                return apologizeFunc();
              }
              resultText = resultText + content;
              setstreamResponse(resultText);
            }
          }
        }
        setLoading(false);
        setMessages((prev) => {
          return [...prev, { content: resultText, role: "assistant" }];
        });
        if (speechonoroff) {
          speak({ text: resultText });
        }
        setstreamResponse("");
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    } else {
      try {
        const response = await axios.post(
          "https://iim-ds-model.openai.azure.com/openai/deployments/gpt-35-turbo-iim/chat/completions?api-version=2023-03-15-preview ",
          {
            messages: [{ content: filterval, role: "user" }],
            max_tokens: 4000,
            temperature: 0,
            frequency_penalty: 0,
            presence_penalty: 0,
            top_p: 1,
            stop: null,
          },
          {
            headers: {
              "api-key": `e1289d3865dd4c398427abb0c214a496`,
              "Content-Type": "application/json",
            },
          }
        );

        const botResponse = response.data.choices[0].message.content;

        setLoading(false);
        setMessages((prev) => {
          return [...prev, { content: botResponse, role: "assistant" }];
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
  };

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
    SpeechRecognition.stopListening();
  };
  const customLocale = {
    emptyText: (
      <span className="empty-class-text">
        I am IIMGPT by Microsoft Azure Open AI. Happy to help 🙂
      </span>
    ),
  };

  const HandleClear = () => {
    setMessages([]);
    setLoading(false);
    setUserInput("");
  };
  // const getspeechdata = () => {
  //   SpeechRecognition.startListening;
  // };
  const speakeronoroff = () => {
    setspeechonoroff(!speechonoroff);
    if (speakeronoroff) {
      cancel();
    }
  };
  const onResize = (event, { node, size, handle }) => {
    // this.setState({width: size.width, height: size.height});
    setHeight(size.Height);
    setWidth(size.width);
    console.log("size", size);
  };
  return (
    <div>
      <i
        className="fad fa-comments-alt"
        onClick={() => {
          // setModalOpen(!chatGPT);

          // if (username === "Sundar Kannan") {
          recognition.start();
          setmodalshw(true);
          // }
          // dispatch(ChatGPTToggle(!chatGPT));
        }}
      ></i>
      <Resizable
        height={Height}
        width={width}
        onResize={onResize}
        minConstraints={[500, 500]}
        maxConstraints={[1200, 1200]}
      >
        <Modal
          width={width + "px"}
          height={Height + "px"}
          destroyOnClose
          bodyStyle={{ maxHeight: "70vh", overflowY: "auto" }}
          maskClosable={false}
          title={
            <div
              style={{
                width: "100%",
                cursor: "move",
              }}
              onMouseOver={() => {
                if (disabled) {
                  setDisabled(false);
                }
              }}
              onMouseOut={() => {
                setDisabled(true);
              }}
            >
              {" "}
              <i className="fad fa-robot pr-2"></i> CCAGPT
            </div>
          }
          modalRender={(modal) => (
            <Draggable
              disabled={disabled}
              bounds={bounds}
              onStart={(event, uiData) => onStart(event, uiData)}
            >
              <div ref={draggleRef}>{modal}</div>
            </Draggable>
          )}
          footer={
            <div className="gpt" style={{ position: "relative" }}>
              <Row>
                <Col span={1}>
                  <i className="fad fa-user "></i>
                </Col>
                <Col span={23}>
                  {" "}
                  <Row gutter={(16, 16)}>
                    <Col span={21}>
                      <Input.TextArea
                        type="text"
                        autoSize={{
                          minRows: 2,
                        }}
                        // style={{ width: width + 'px', height: Height + 'px' }}
                        // className="gpt-input"
                        className={
                          listeningvoice ? "listening-gpt-input" : "gpt-input"
                        }
                        value={
                          userInput.includes("!@#$%^&*")
                            ? userInput.replace("!@#$%^&*", "")
                            : userInput
                        }
                        enterButton={<i className="fad fa-paper-plane"></i>}
                        onChange={handleInputChange}
                        onPressEnter={sendMessage}
                        placeholder="New prompt"
                        disabled={listeningvoice}
                      />
                    </Col>
                    <Col span={3} className="mt-1">
                      <span className="gx-text-center gx-mt-3">
                        <Dynamicrecorder
                          sendmsg={sendMessage}
                          setip={setUserInput}
                          modal={modalclose}
                          onclosemodals={onclosemodal}
                          state={state}
                          userip={userInput}
                          setstate={setstate}
                        />
                      </span>
                    </Col>
                  </Row>
                </Col>
                {/* <Col span={2}></Col> */}
                {/* <Col span={2}> */}{" "}
                {/* {userInput.length > 0 && Voicetotxtopenapival ? (
                  <Button onClick={sendMessage} className="gpt-send-msg">
                    <i className="fad fa-paper-plane gpt_send_icon"></i>
                  </Button>
                ) : userInput.length > 0 && !Voicetotxtopenapival && !listening ? (
                  <Button onClick={sendMessage} className="gpt-send-msg">
                    <i className="fad fa-paper-plane gpt_send_icon"></i>
                  </Button>
                ) : username === 'Sundar Kannan' && !Voicetotxtopenapival ? ( */}
                {/* {username === 'Sundar Kannan' ? ( */}
                {/* // ) : ( //{' '}
                <Button onClick={sendMessage} className="gpt-send-msg">
                  // <i className="fad fa-paper-plane gpt_send_icon"></i>
                  //{' '}
                </Button>
                // )} */}
                {/* ) : (
                  ''
                )} */}
                {/* {userInput.length > 0 && Voicetotxtopenapival ? (
                  <Button onClick={sendMessage} className="gpt-send-msg">
                    <i className="fad fa-paper-plane gpt_send_icon"></i>
                  </Button>
                ) : userInput.length > 0 && !Voicetotxtopenapival && !listening ? (
                  <Button onClick={sendMessage} className="gpt-send-msg">
                    <i className="fad fa-paper-plane gpt_send_icon"></i>
                  </Button>
                ) : username === 'Sundar Kannan' && Voicetotxtopenapival ? (
                  <VoiceToMp3Converter
                    setip={setUserInput}
                    setislistening={setnotlisteningvoice}
                    sendMessages={sendMessage}
                    userInput={userInput}
                  />
                ) : username === 'Sundar Kannan' && !Voicetotxtopenapival ? (
                  <Reactrecorder sendmsg={sendMessage} setip={setUserInput} />
                ) : (
                  ''
                )} */}
                {/* </Col> */}
                {/* <Col span={1}> */}{" "}
                <div>
                  {/* {listening ? (
                    <i
                      onClick={SpeechRecognition.stopListening}
                      className="fas fa-microphone-slash voice_text_slash"></i>
                  ) : (
                    <i
                      onClick={SpeechRecognition.startListening}
                      className="fas fa-microphone voice_text"></i>
                  )} */}
                  {/* {username === 'Sundar Kannan' ? : ''} */}
                  {/* {speaking ? (
                    <button type="button" onClick={cancel}>
                      Stop
                    </button>
                  ) : (
                    <button type="button" onClick={() => speak({})}>
                      Speak
                    </button>
                  )} */}
                </div>
                {/* </Col> */}
              </Row>
            </div>
          }
          className="Intervaltimeline gpt-modal"
          open={modalshw}
          onCancel={(e) => {
            onclosemodal(e, false);
            setHeight(400);
            setWidth(800);
          }}
        >
          <List
            locale={customLocale}
            className="demo-loadmore-list gx-mr-3 gx-ml-3 gpt-modal"
            itemLayout="horizontal"
            dataSource={messages}
            renderItem={(item) => (
              <List.Item className={`message-${item.role}`}>
                <List.Item.Meta
                  description={
                    <div>
                      <span>
                        {console.log(item.content, "op")}
                        <div>
                          <SyntaxHighlighter
                            customStyle={
                              item.role === "assistant"
                                ? customSyntaxStyleWhite
                                : customSyntaxStyle
                            }
                            language="javascript"
                            style={docco}
                            wrapLongLines={true}
                            wrapLines={true}
                          >
                            {item.content}
                          </SyntaxHighlighter>
                        </div>
                      </span>
                    </div>
                  }
                />
              </List.Item>
            )}
          />
          {/* <p>Microphone: {listening ? 'on' : 'off'}</p> */}
          {/* <button onClick={SpeechRecognition.startListening}>
          <i className="fas fa-microphone"></i>{' '}
        </button> */}
          {/* <button onClick={SpeechRecognition.stopListening}>
          <i className="fas fa-microphone"></i> stop
        </button> */}
          {/* <button onClick={resetTranscript}>Reset</button> */}
          {/* <p>{transcript}</p> */}
          {/* {console.log(streamResponse)} */}
          {loading ? (
            <SyntaxHighlighter
              customStyle={customSyntaxStyleWhite}
              language="javascript"
              style={docco}
              wrapLongLines={true}
              wrapLines={true}
            >
              {streamResponse}
            </SyntaxHighlighter>
          ) : (
            <></>
          )}
          <Row ref={messagesEndRef}>
            <Col span={1}></Col>
            <Col span={23} className="gx-text-center">
              {/* <Radio.Group
              name="radiogroup "
              className="ml-5 gpt-radio-btn"
              defaultValue={1}
              onChange={(e) => setSwitchStatus(e.target.value)}>
              <Radio value={1}> iIMGPT</Radio>
              <Radio value={2}>GPT-3.5</Radio>
            </Radio.Group> */}
              <Button
                className={
                  speechonoroff
                    ? "gpt-clear colorof_offmic float-right mr-3"
                    : "gpt-clear  float-right gx-mr-3"
                }
                onClick={speakeronoroff}
              >
                {speechonoroff ? (
                  <i className="fas fa-volume-up"></i>
                ) : (
                  <i className="fas fa-volume-mute"></i>
                )}
              </Button>

              <Button
                disabled={messages.length === 0}
                className="gpt-clear float-right mr-3"
                onClick={HandleClear}
              >
                <i className="fas fa-trash-alt mr-2"></i> Clear chat
              </Button>
            </Col>
          </Row>
        </Modal>
      </Resizable>
      {/* <ResizableBox
        className="box"
        width={200}
        height={200}
        minConstraints={[150, 150]}
        maxConstraints={[500, 300]}
        style={{ backgroundColor: 'red' }}>
        <span className="text">
          Resizable box, starting at 200x200. Min size is 150x150, max is 500x300.
        </span>
      </ResizableBox> */}
      {/* <Resizable height={Height} width={width} onResize={onResize}>
        <div
          className="box"
          style={{ width: width + 'px', height: Height + 'px', backgroundColor: 'red' }}>
          <span>Contents</span>
        </div>
      </Resizable> */}
    </div>
  );
};

export default ChatGpt;
