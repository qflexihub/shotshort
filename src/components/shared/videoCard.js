import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ReactPlayer from "react-player";
import Image from "next/image";

const VideoCard = ({ data }) => {
  const [hasWindow, setHasWindow] = useState(false);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);

  return (
    <VideoCardContainer onClick={() => setPlaying(!playing)}>
      {hasWindow && (
        <ReactPlayer
          width="100%"
          height="100%"
          className="react-player"
          onEnded={() => setPlaying(false)}
          playing={playing}
          url={data?.url}
          // light="/ellipse4.png"
        />
      )}
      <BrandLogo>
        {data?.brandLogo && <Image fill src={data?.brandLogo} alt="Brand" />}
      </BrandLogo>
      <PlayIcon playing={playing} />
    </VideoCardContainer>
  );
};
export default VideoCard;

const VideoCardContainer = styled.div`
  width: 285px;
  height: 506px;
  display: flex;
  justify-content: center;
  position: relative;
  cursor: pointer;
  border-radius: 20px;
  overflow: hidden;
`;

const PlayButton = styled.div`
  width: 60px;
  height: 60px;
  background-color: #000000;
  opacity: 0.7;
  position: absolute;
  display: ${(props) => (props.playing ? "none" : "flex")};
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
`;

const BrandLogo = styled.div`
  width: 65px;
  height: 65px;
  border-radius: 50%;
  position: absolute;
  left: 20px;
  top: 20px;
`;

export const PlayIcon = ({ playing }) => {
  return (
    <>
      <PlayButton playing={playing}>
        <Image width={20} height={20} src="/play.svg" alt="play button" />
      </PlayButton>
    </>
  );
};
