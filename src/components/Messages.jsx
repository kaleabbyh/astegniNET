import React from "react";

const Messages = () => {
  return (
    <section id="messages__container">
      <div id="messages">
        <div class="message__wrapper">
          <div class="message__body__bot">
            <strong class="message__author__bot">🤖 Mumble Bot</strong>
            <p class="message__text__bot">
              Welcome to the room, Don't be shy, say hello!
            </p>
          </div>
        </div>

        <div class="message__wrapper">
          <div class="message__body__bot">
            <strong class="message__author__bot">🤖 Mumble Bot</strong>
            <p class="message__text__bot">Dennis Ivy just entered the room!</p>
          </div>
        </div>

        <div class="message__wrapper">
          <div class="message__body">
            <strong class="message__author">Dennis Ivy</strong>
            <p class="message__text">Does anyone know hen he will be back?</p>
          </div>
        </div>

        <div class="message__wrapper">
          <div class="message__body__bot">
            <strong class="message__author__bot">🤖 Mumble Bot</strong>
            <p class="message__text__bot">Sulamita just entered the room!</p>
          </div>
        </div>

        <div class="message__wrapper">
          <div class="message__body__bot">
            <strong class="message__author__bot">🤖 Mumble Bot</strong>
            <p class="message__text__bot">
              Shahriar P. Shuvo just entered the room!
            </p>
          </div>
        </div>

        <div class="message__wrapper">
          <div class="message__body">
            <strong class="message__author">Sulamita</strong>
            <p class="message__text"> Great stream!</p>
          </div>
        </div>

        <div class="message__wrapper">
          <div class="message__body">
            <strong class="message__author">Dennis Ivy</strong>
            <p class="message__text">
              {" "}
              Convert RGB color codes to HEX HTML format for use in web design
              and CSS.
            </p>
          </div>
        </div>

        <div class="message__wrapper">
          <div class="message__body">
            <strong class="message__author">Shahriar P. Shuvo 👋</strong>
            <p class="message__text">Does anyone know hen he will be back?</p>
          </div>
        </div>
        <div class="message__wrapper">
          <div class="message__body">
            <strong class="message__author">Sulamita</strong>
            <p class="message__text">Great stream!</p>
          </div>
        </div>

        <div class="message__wrapper">
          <div class="message__body">
            <strong class="message__author">Dennis Ivy</strong>
            <p class="message__text">
              Convert RGB color codes to HEX HTML format for use in web design
              and CSS.
            </p>
          </div>
        </div>

        <div class="message__wrapper">
          <div class="message__body">
            <strong class="message__author">Shahriar P. Shuvo 👋</strong>
            <p class="message__text">Does anyone know hen he will be back?</p>
          </div>
        </div>

        <div class="message__wrapper">
          <div class="message__body">
            <strong class="message__author">Sulamita</strong>
            <p class="message__text">Great stream!</p>
          </div>
        </div>

        <div class="message__wrapper">
          <div class="message__body__bot">
            <strong class="message__author__bot">🤖 Mumble Bot</strong>
            <p class="message__text__bot">👋 Sulamita has left the room</p>
          </div>
        </div>

        <div class="message__wrapper">
          <div class="message__body">
            <strong class="message__author">Dennis Ivy</strong>
            <p class="message__text">
              Convert RGB color codes to HEX HTML format for use in web design
              and CSS.
            </p>
          </div>
        </div>

        <div class="message__wrapper">
          <div class="message__body">
            <strong class="message__author">Shahriar P. Shuvo 👋</strong>
            <p class="message__text">Does anyone know hen he will be back?</p>
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
