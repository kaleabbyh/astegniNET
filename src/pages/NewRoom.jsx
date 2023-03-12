import React from "react";

import "../styles/main.css";
import "../styles/room.css";
import "../styles/newroom.css";

import Header from "../components/Header";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";

const NewRoom = () => {
  return (
    <>
      <Header />
      <main id="room__lobby__container">
        <div id="form__container">
          <div id="form__container__header">
            <p>Create or Join Room</p>
          </div>

          <form id="lobby__form">
            <div class="form__field__wrapper">
              <label>Your Name</label>
              <input
                type="text"
                name="name"
                required
                placeholder="Enter your display name..."
              />
            </div>

            <div class="form__field__wrapper">
              <label>Room Name</label>
              <input
                type="text"
                name="room"
                required
                placeholder="Enter room name..."
              />
            </div>

            <div class="form__field__wrapper">
              <button type="submit">
                Go to Room
                <ArrowCircleDownIcon />
              </button>
            </div>
          </form>
        </div>
      </main>
    </>
  );
};

export default NewRoom;
