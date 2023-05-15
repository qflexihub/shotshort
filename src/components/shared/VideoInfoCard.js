import React, { Fragment } from "react";
import Image from "next/image";
import styled from "styled-components";
import Button from "./Button";
import Heading from "./Heading";
import Text from "./Text";
import VideoCard from "./videoCard";
import { useIsMobile } from "@/utils/general";

const VideoInfoCard = ({ data, imageRight = true }) => {
  const isMobile = useIsMobile();
  return (
    <MainContainer>
      <InfoCardContainer imageRight={imageRight}>
        <InfoBlock imageRight={imageRight}>
          <Image
            style={{ margin: isMobile ? "auto" : "" }}
            width={169}
            height={57}
            src={data?.brandLogo}
            alt={data?.title}
          />
          <Heading fontSize={44} marginBottom={20} marginTop={20}>
            {data?.title}
          </Heading>
          <Text fontSize={24} lineHeight={24} color="#555555" marginTop={16}>
            {data?.description}
          </Text>
          <HashtagContainer>
            {data?.hashtag?.map((item, index) => {
              return (
                <Fragment key={index}>
                  <Text
                    fontSize={24}
                    lineHeight={24}
                    color="#8218EA"
                    fontWeight={"700"}
                    marginRight={12}
                  >
                    {item}
                  </Text>
                </Fragment>
              );
            })}
          </HashtagContainer>
          <Button value={"Contact Us"} marginTop="20px" rightArrow={true} />
        </InfoBlock>
        <VideoBlock>
          <VideoCard data={data?.videoData} headerVideo />
        </VideoBlock>
      </InfoCardContainer>
      <CardView>
        {data?.infoData?.map((item) => {
          return (
            <DataView key={item?.id}>
              <Text
                fontSize={35}
                lineHeight={24}
                color="#8218EA"
                fontWeight={"700"}
              >
                {item.count}
              </Text>
              <Text
                fontSize={24}
                lineHeight={24}
                color="#555555"
                fontWeight={"400"}
                marginTop={8}
              >
                {item.title}
              </Text>
            </DataView>
          );
        })}
      </CardView>
    </MainContainer>
  );
};
export default VideoInfoCard;

const MainContainer = styled.div`
  padding: 10px;
  width: 100%;
  @media (max-width: 786px) {
    text-align: center;
  }
`;

const InfoCardContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: ${(props) => (props.imageRight ? "row" : "row-reverse")};
  gap: 100px;
  align-items: self-end;

  @media (max-width: 786px) {
    display: block;
  }
`;

const InfoBlock = styled.div`
  max-width: 735px;
  width: 100%;
`;

const HashtagContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 24px;

  @media (max-width: 786px) {
    justify-content: center;
  }
`;

const VideoBlock = styled.div`
  width: 100%;
  max-width: 285px;
  height: 506px;
  display: flex;
  justify-content: center;
  position: relative;
  cursor: pointer;
  border-radius: 20px;
  overflow: hidden;
  margin: 0 auto;
  margin-top: 40px;

  @media (max-width: 768px) {
    width: 100%;
    max-width: 193px;
    height: 344px;
    margin: 10px auto;
  }
`;

const CardView = styled.div`
  max-width: 100%;
  padding-top: 50px;
  padding-bottom: 80px;
  justify-content: center;
  display: flex;
  align-items: center;
  flex-direction: row;

  @media (max-width: 768px) {
    padding-top: 10px;
    padding-bottom: 20px;
    flex-direction: column;
    gap: 10px;
  }
`;

const DataView = styled.div`
  background: #ffffff;
  border: 1px solid #cfcfcf;
  box-shadow: 0px 0px 120px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  max-width: 360px;
  width: 100%;
  flex: 4;
  margin: 0 10px;
  padding: 45px 20px;
  text-align: center;
`;
