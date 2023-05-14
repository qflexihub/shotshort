import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import ReactPlayer from "react-player";
import Image from "next/image";

const VideoCard = ({
  width,
  height,
  data,
  playerRefs,
  headerVideo = false,
  index = 0,
  stopAllVideos = () => {},
}) => {
  const [hasWindow, setHasWindow] = useState(false);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);

  return (
    <>
      <VideoCardContainer
        width={width}
        height={height}
        onClick={() => {
          stopAllVideos();
          setPlaying(!playing);
        }}
      >
        <>
          {!headerVideo && hasWindow && playerRefs?.current && (
            <ReactPlayer
              width="100%"
              height="100%"
              ref={(el) => (playerRefs.current[index] = el)}
              className="react-player"
              onEnded={() => setPlaying(false)}
              playing={playing}
              url={data?.url}
              light={data?.poster}
            />
          )}
          {headerVideo && hasWindow && (
            <ReactPlayer
              width="100%"
              height="100%"
              className="react-player"
              onEnded={() => setPlaying(false)}
              playing={playing}
              url={data?.url}
              light={data?.poster}
            />
          )}
        </>
        <BrandLogo>
          {data?.brandLogo && <Image fill src={data?.brandLogo} alt="Brand" />}
        </BrandLogo>
        <PlayIcon playing={playing} />
      </VideoCardContainer>
    </>
  );
};
export default VideoCard;

const VideoCardContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  /* max-width: ${(props) => props?.width || "285px"};
  height: ${(props) => props?.height || "506px"}; */
  /* display: flex;
  justify-content: center;
  cursor: pointer;
  border-radius: 20px;
  overflow: hidden;
  margin: auto;

  @media (max-width: 768px) {
    width: 100%;
  } */
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

  @media (max-width: 768px) {
    width: 45px;
    height: 45px;
    left: 12px;
    top: 12px;
  }
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
