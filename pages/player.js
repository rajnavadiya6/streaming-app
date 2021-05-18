import React, { useEffect, useRef } from "react";
import { useRouter } from "next/router";

import ReactPlayer from "react-player";
import screenfull from "screenfull";

function Player() {
  const { query } = useRouter();
  const player = useRef(null);
  const { movieURl } = query;

  useEffect(() => {
    document.getElementById("btn").click();
  }, []);

  const handleClickFullscreen = () => {
    if (screenfull.isEnabled) {
      screenfull.request(player.current.wrapper);
    }
  };

  return (
    <div style={{ margin: "15px" }}>
      <ReactPlayer ref={player} className="react-player" controls width="100%" height="100%" url={movieURl} />
      <button id="btn" style={{ display: "none" }} onClick={handleClickFullscreen}></button>
    </div>
  );
}

export default Player;
