import Image from "next/image";
import styled from "styled-components";
import Heading from "./shared/Heading";
import Text from "./shared/Text";

const Header = () => {
  return (
    <HeaderContainer>
      <Image
        style={{ position: "absolute", left: 0 }}
        width={403}
        height={426}
        src="/header1.svg"
        alt=""
      />
      <Image
        style={{ position: "absolute", right: 0 }}
        width={314}
        height={484}
        src="/header2.svg"
        alt=""
      />
      <TextBlock>
        <Heading fontSize={72} lineHeight={82}>
          Top <span style={{ color: "#8218EA" }}>Video</span> Production Company
          In India
        </Heading>
        <Text
          fontWeight={700}
          fontSize={24}
          marginTop={24}
          lineHeight={24}
          uppercase
        >
          The top video production company that leverages the power
        </Text>
        <Text fontSize={18} color="#555555" marginTop={15}>
          The top video production company that leverages the power of 50k+
          content creators/influencers to produce compelling long as well short
          form videos to grow your business!
        </Text>
      </TextBlock>
      <VideoBlock>
        <Image
          style={{ margin: "auto" }}
          width={1050}
          height={539}
          src="/headerVideo.svg"
          alt="Video"
        />
      </VideoBlock>
    </HeaderContainer>
  );
};
export default Header;

const HeaderContainer = styled.div`
  position: relative;
  text-align: center;
  padding-top: 40px;
`;

const TextBlock = styled.div`
  max-width: 973px;
  width: 100%;
  margin: auto;
  text-align: center;
`;

const VideoBlock = styled.div`
  margin-top: 40px;
`;
