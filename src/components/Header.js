import Image from "next/image";
import styled from "styled-components";
import Heading from "./shared/Heading";
import Text from "./shared/Text";
import HappyClients from "./shared/HappyClients";
import VideoCard from "./shared/videoCard";
import { useIsMobile } from "@/utils/general";

const Header = () => {
  return (
    <HeaderContainer>
      <Image
        className="hidden lg:block"
        style={{ position: "absolute", left: 0 }}
        width={403}
        height={426}
        src="/header1.svg"
        alt=""
      />
      <Image
        className="hidden lg:block"
        style={{ position: "absolute", right: 0 }}
        width={314}
        height={484}
        src="/header2.svg"
        alt=""
      />
      <TextBlock>
        <Heading
          fontSize={72}
          lineHeight={82}
          mobileFontSize={28}
          mobileLineHeight={32}
        >
          Best <span style={{ color: "#8218EA" }}>Video</span> Production
          Company In India
        </Heading>
        <Text
          fontWeight={700}
          fontSize={24}
          mobileFontSize={16}
          marginTop={24}
          lineHeight={24}
          textTransform="uppercase"
        >
          ShotShort stands at the top in the video production industry
        </Text>
        <Text fontSize={18} color="#555555" marginTop={15}>
          We offer creativity with exceptional quality through our long and
          short-form videos with the credibility of the hottest 50k+ content
          creators and influencers.
        </Text>
      </TextBlock>
      <VideoBlock>
        <VideoCard
          width="1050px"
          height="539px"
          headerVideo={true}
          data={{
            url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
            poster: "/headerVideo.svg",
          }}
        />
      </VideoBlock>
      <HappyClients />
    </HeaderContainer>
  );
};
export default Header;

const HeaderContainer = styled.div`
  position: relative;
  text-align: center;
  padding-top: 40px;

  @media (max-width: 768px) {
    /* padding: 24px 20px; */
  }
`;

const TextBlock = styled.div`
  max-width: 973px;
  width: 100%;
  margin: auto;
  text-align: center;
`;

const VideoBlock = styled.div`
  width: 100%;
  max-width: 1050px;
  height: 539px;
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
    max-width: 335px;
    height: 171px;
  }
`;
