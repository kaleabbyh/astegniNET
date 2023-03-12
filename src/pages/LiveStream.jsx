import React from "react";

import "../styles/main.css";
import "../styles/room.css";

import Header from "../components/Header";
import Members from "../components/Members";
import Stream from "../components/Stream";
import Messages from "../components/Messages";

const LiveStream = () => {
  return (
    <>
      <Header />
      <main class="container">
        <div id="room__container">
          <Members />
          <Stream />
          <Messages />
        </div>
      </main>
    </>
  );
};

export default LiveStream;
