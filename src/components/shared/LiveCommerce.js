import styled from "styled-components";
import Heading from "./Heading";
import Text from "./Text";

const LiveCommerceView = ({ data }) => {
  return (
    <LiveCommerceContainer>
      <LeftDiv>
        <Heading>{data.heading}</Heading>
        <Text>{data.description}</Text>
      </LeftDiv>
      <RightDiv>Video Content</RightDiv>
    </LiveCommerceContainer>
  );
};

export default LiveCommerceView;

const LiveCommerceContainer = styled.div`
  display: flex;
  width: 100vw;
  margin-top: 80px;
  margin-bottom: 80px;
  justify-content: center;
`;

const LeftDiv = styled.div`
  width: 70%;
`;

const RightDiv = styled.div`
  width: 30%;
`;

const HeadingLiveCommerceContainer = styled.div``;
