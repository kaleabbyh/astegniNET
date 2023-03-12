import React from "react";

import logo2_white from "../images/logo2_white.png";
import MenuIcon from "@mui/icons-material/Menu";
import MessageIcon from "@mui/icons-material/Message";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header id="nav">
      <div class="nav--list">
        <button id="members__button">
          <MenuIcon />
        </button>
        <Link to="#">
          <h3 id="logo">
            <img src={logo2_white} alt="Site Logo" />
            <span>አስጥኚNET</span>
          </h3>
        </Link>
      </div>
      <div id="nav__links">
        <button id="chat__button">
          <MessageIcon />
        </button>

        <Link class="nav__link" id="create__room__btn">
          Create Room
          <AddCircleIcon />
        </Link>
      </div>
    </header>
  );
}

export default Header;
