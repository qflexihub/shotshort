import styled from "styled-components";

const VideoCard = ({ data }) => {
  return (
    <VideoCardContainer>
      <video src={data}></video>
    </VideoCardContainer>
  );
};
export default VideoCard;

const VideoCardContainer = styled.div``;
