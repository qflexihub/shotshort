import Image from "next/image";
import styled from "styled-components";

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
        <MainHeading>
          Top <span style={{ color: "#8218EA" }}>Video</span> Production Company
          In India
        </MainHeading>
        <SubHeading>
          The top video production company that leverages the power
        </SubHeading>
        <Description>
          The top video production company that leverages the power of 50k+
          content creators/influencers to produce compelling long as well short
          form videos to grow your business!
        </Description>
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

const MainHeading = styled.h1`
  font-weight: 700;
  font-size: 72px;
  line-height: 82px;
`;

const SubHeading = styled.h2`
  font-weight: 700;
  font-size: 24px;
  line-height: 24px;
  text-transform: uppercase;
  margin-top: 24px;
`;

const Description = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  color: #555555;
  margin-top: 15px;
`;

const VideoBlock = styled.div`
  margin-top: 40px;
`;
