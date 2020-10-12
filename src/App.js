import React, { useState, useEffect, useMemo } from "react";
import Chatbot from "react-chatbot-kit";
import "./App.css";
import socketIOClient from "socket.io-client";

import ActionProvider from "./ActionProvider";
import MessageParser from "./MessageParser";
import config from "./config";

const ENDPOINT = "http://127.0.0.1:3001";
const socket = socketIOClient();

function App() {
  //Component Did Mount Events
  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    //Socket Connection
    socket.on("FromAPI", (data) => {
      // setResponse(data);
    });
    //Socket on Recieve Messages
    socket.on("outputMsg", (data) => {
      // setMessages(data);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Chatbot
          config={config}
          actionProvider={ActionProvider}
          messageParser={MessageParser}
        />
      </header>
    </div>
  );
}

export default App;
