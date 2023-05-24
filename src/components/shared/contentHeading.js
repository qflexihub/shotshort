import styled from "styled-components";
import Heading from "./Heading";
import Text from "./Text";

const ContentHeading = ({ data }) => {
  return (
    <HeadingContainer>
      <Heading textAlign="center">{data?.title}</Heading>
      {data?.subtitle && (
        <Text fontSize={18} color="#555555" marginTop={20} textAlign="center">
          {data?.subtitle}
        </Text>
      )}
    </HeadingContainer>
  );
};
export default ContentHeading;

const HeadingContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  padding: 0px 64px;

  @media (max-width: 768px) {
    padding: 0px;
  }
`;
