import Image from "next/image";
import styled from "styled-components";
import Button from "./Button";
import Heading from "./Heading";
import Text from "./Text";
import VideoCard from "./videoCard";

const VideoInfoCard = ({ data, imageRight = true }) => {
  return (
    <MainContainer>
      <InfoCardContainer imageRight={imageRight}>
        <InfoBlock imageRight={imageRight}>
          <Image width={169} height={57} src={data?.brandLogo} alt={data?.title} />
          <Heading fontSize={44} marginBottom={20} marginTop={20}>
            {data?.title}
          </Heading>
          <Text fontSize={24} lineHeight={24} color="#555555" marginTop={16}>
            {data?.description}
          </Text>
          <HashtagContainer>
          {data?.hashtag?.map((item, index) => {
            return (<Text fontSize={24} lineHeight={24} color="#8218EA" fontWeight={"700"} marginRight={12}>
              {item}
            </Text>);
          })}
          </HashtagContainer>
          <Button
            value={"Contact Us"}
            marginTop="20px"
            rightArrow={true}
          />
        </InfoBlock>
        <VideoBlock>
          <VideoCard data={data?.videoData} />
        </VideoBlock>
      </InfoCardContainer>
      <CardView>
        {data?.infoData?.map((item, index) => {
          return (
          <DataView>
            <Text fontSize={35} lineHeight={24} color="#8218EA" fontWeight={"700"}>
             {item.count}
            </Text>
            <Text fontSize={24} lineHeight={24} color="#555555" fontWeight={"400"} marginTop={8}>
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
  margin-top: 75px;
  margin-bottom: 100px;
`;

const InfoCardContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: ${(props) => (props.imageRight ? "row" : "row-reverse")};
`;

const InfoBlock = styled.div`
  max-width: 735px;
  width: 100%;
`;

const HashtagContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 24px;
`;

const VideoBlock = styled.div`
  max-width: 285px;
  width: 100%;
`;

const CardView = styled.div`
  max-width: 100%;
  padding-top: 50px;
  padding-bottom: 12px;
  justify-content: center;
  display: flex;
  align-items: center;
  flex-direction: row;
`;

const DataView = styled.div`
  background: #FFFFFF;
  border: 1px solid #CFCFCF;
  box-shadow: 0px 0px 120px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  max-width: 360px;
  flex: 4;
  margin: 0 10px;
  padding: 45px 20px;
  text-align: center;
`;