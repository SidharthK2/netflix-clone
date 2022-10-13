import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import React from "react";

const Featured = () => {
  return (
    <div className="featured">
      <img
        width="100%"
        src="https://images4.alphacoders.com/133/133184.jpg"
        alt="bgImg"
      />
      <div className="info">
        <img
          src="https://occ-0-1432-1433.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABUZdeG1DrMstq-YKHZ-dA-cx2uQN_YbCYx7RABDk0y7F8ZK6nzgCz4bp5qJVgMizPbVpIvXrd4xMBQAuNe0xmuW2WjoeGMDn1cFO.webp?r=df1"
          alt="img"
        />
        <span className="dec">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam debitis
          fugit non harum vero suscipit, enim tempore repellat dolorem nobis
          excepturi voluptas animi unde alias, quasi eveniet. Quibusdam, rem
          nesciunt?
        </span>
        <div className="buttons">
          <button className="play">
            <PlayArrow />
            <span>Play</span>
          </button>
          <button className="more">
            <InfoOutlined />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
