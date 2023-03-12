import React from "react";

import CameraAltIcon from "@mui/icons-material/CameraAlt";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import PresentToAllIcon from "@mui/icons-material/PresentToAll";
import StopCircleIcon from "@mui/icons-material/StopCircle";

const Stream = () => {
  return (
    <section id="stream__container">
      <div class="stream__actions">
        <button>
          <CameraAltIcon />
        </button>
        <button class="active">
          <KeyboardVoiceIcon />
        </button>
        <button>
          <PresentToAllIcon />
        </button>
        <button>
          <StopCircleIcon />
        </button>
      </div>
    </section>
  );
};

export default Stream;
