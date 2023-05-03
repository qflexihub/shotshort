import styled from "styled-components";
import VideoCard from "./shared/videoCard";

const BrandVideos = () => {
  const videos = [
    "https://www.youtube.com/watch?v=9xwazD5SyVg",
    "https://www.youtube.com/watch?v=9xwazD5SyVg",
    "https://www.youtube.com/watch?v=9xwazD5SyVg",
  ];
  return (
    <>
      <BrandVideoContainer>
        {videos?.map((item, index) => {
          return <VideoCard key={index} data={item} />;
        })}
      </BrandVideoContainer>
    </>
  );
};
export default BrandVideos;

const BrandVideoContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;
