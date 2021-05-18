import React, { useState } from "react";
// import ReactHlsPlayer from "react-hls-player";

import Autocomplete from "./Autocomplete";

// const Player = ({ url }) => <ReactHlsPlayer url={url} autoplay={false} controls={true} width="100%" height="auto" />;
const Player = ({ url }) => <h1 url={url} autoplay={false} controls={true} width="100%" height="auto" />;

export default function LiveTV({ liveTvData }) {
  const data = liveTvData;
  const [playingURL, setplayingURL] = useState("");

  const hadlesubmit = (newValue) => {
    const reulstchannel = data.find((item) => item.inf.title === newValue);
    setplayingURL(reulstchannel.url);
  };

  return (
    <div>
      <Autocomplete data={data.map((item) => item.inf)} hadlesubmit={hadlesubmit} />
      <div className="grid">
        {Boolean(playingURL) ? (
          <Player url={playingURL} />
        ) : (
          data.map((item, index) => (
            <div key={index} onClick={() => setplayingURL(item.url)}>
              <img src={item.inf.tvgLogo} className="thum-img" alt={item.inf.title} />
              <p className="title">{item.inf.title}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
// "inf": {
// "duration": -1,
// "title": "Sangsad TV [BD]",
// "tvgLogo": "https://dl.dropbox.com/s/40yvi62wy59gu3r/sangsad_tv_bd.png",
// "groupTitle": "BANGLA ENT."
// },
// "url": "http://103.43.148.202:1934/cZVydmVyX8RpbEU9Mi8xNy8yMDE0GIDU6RgzQ6NTAgdEoaeFzbF92YWxIZT00U0ezN1IzMyfvcGVMZEJCTEFWeVN3PTOmdFsaWRtaW51aiPhnPTI/songsodtv-world.stream/chunks.m3u8?@amarnettv.live"
