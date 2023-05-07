import styled from "styled-components";
import VideoCard from "./shared/videoCard";
import { Fragment } from "react";
import { Videos } from "@/data/BrandVideosData";
import Heading from "./shared/Heading";
import Text from "./shared/Text";
import Button from "./shared/Button";

const BrandVideos = () => {
  return (
    <>
      <BrandVideoContainer>
        <Block1>
          <Heading textAlign="center">Video Company For Brand Videos</Heading>
          <Text fontSize={18} color="#555555" marginTop={17} textAlign="center">
            Being the top video agency in India, we offer short video production
            services and long format videos for marketing and branding. For
            world class videos, hire the best video company today
          </Text>
          <Button
            value="Get your video now"
            width="257px"
            height="50px"
            marginTop="32px"
            rightArrow
          />
        </Block1>
        <VideoContainer>
          {Videos?.map((item, index) => {
            return (
              <Fragment key={index}>
                <VideoCard data={item} />
              </Fragment>
            );
          })}
        </VideoContainer>
      </BrandVideoContainer>
    </>
  );
};
export default BrandVideos;

const BrandVideoContainer = styled.div`
  max-width: 100%;
  padding: 80px 92px;
`;

const Block1 = styled.div`
  text-align: center;
`;

const VideoContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 40px;
`;
