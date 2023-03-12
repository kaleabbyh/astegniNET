import React from "react";
import SchoolIcon from "@mui/icons-material/School";
import { display } from "@mui/system";

const Messages = () => {
  return (
    <section id="messages__container">
      <div id="messages">
        <div class="message__wrapper">
          <div class="message__body__bot">
            <strong class="message__author__bot">
              <SchoolIcon
                style={{
                  VerticalAlign: "text-bottom",
                }}
              />
              ategniNET BOT
            </strong>
            <p class="message__text__bot">Welcome to the room, some one</p>
          </div>
        </div>
        <div class="message__wrapper">
          <div class="message__body">
            <strong class="message__author">kaleab</strong>
            <p class="message__text"> Great stream!</p>
          </div>
        </div>
        <div class="message__wrapper">
          <div class="message__body">
            <strong class="message__author">kaleab</strong>
            <p class="message__text"> Great stream!</p>
          </div>
        </div>
        <div class="message__wrapper">
          <div class="message__body">
            <strong class="message__author">kaleab</strong>
            <p class="message__text"> Great stream!</p>
          </div>
        </div>
        <div class="message__wrapper">
          <div class="message__body">
            <strong class="message__author">kaleab</strong>
            <p class="message__text"> Great stream!</p>
          </div>
        </div>
        <div class="message__wrapper">
          <div class="message__body">
            <strong class="message__author">kaleab</strong>
            <p class="message__text"> Great stream!</p>
          </div>
        </div>
        <div class="message__wrapper">
          <div class="message__body">
            <strong class="message__author">kaleab</strong>
            <p class="message__text"> Great stream!</p>
          </div>
        </div>
        <div class="message__wrapper">
          <div class="message__body">
            <strong class="message__author">kaleab</strong>
            <p class="message__text"> Great stream!</p>
          </div>
        </div>
        <div class="message__wrapper">
          <div class="message__body">
            <strong class="message__author">kaleab</strong>
            <p class="message__text"> Great stream!</p>
          </div>
        </div>
        <div class="message__wrapper">
          <div class="message__body">
            <strong class="message__author">kaleab</strong>
            <p class="message__text"> Great stream!</p>
          </div>
        </div>
      </div>

      <form id="message__form">
        <input type="text" name="message" placeholder="Send a message...." />
      </form>
    </section>
  );
};

export default Messages;
