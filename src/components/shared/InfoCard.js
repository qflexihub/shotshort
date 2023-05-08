import Image from "next/image";
import styled from "styled-components";
import Button from "./Button";
import Heading from "./Heading";
import Text from "./Text";
import { useIsMobile } from "@/utils/general";

const InfoCard = ({ data, imageRight = true }) => {
  const isMobile = useIsMobile();
  return (
    <InfoCardContainer imageRight={imageRight}>
      <ImageBlock>
        <Image width={460} height={443} src={data?.image} alt={data?.title} />
      </ImageBlock>
      <InfoBlock imageRight={imageRight}>
        <Heading fontSize={64} marginBottom={isMobile ? 10 : 24}>
          {data?.title}
        </Heading>
        <Text fontSize={24} lineHeight={24} color="#555555">
          {data?.description}
        </Text>
        <Button
          value={data?.buttonText}
          backgroundColor="rgba(130, 24, 234, 0.2)"
          color="#8218EA"
          width="207px"
          height="48px"
          marginTop={isMobile ? "20px" : "60px"}
        />
      </InfoBlock>
    </InfoCardContainer>
  );
};
export default InfoCard;

const InfoCardContainer = styled.div`
  padding: 10px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: ${(props) => (props.imageRight ? "row-reverse" : "row")};
  margin-top: 75px;
  margin-bottom: 100px;

  @media (max-width: 768px) {
    margin: 0;
    padding: 0;
    display: block;
    text-align: center;
  }
`;

const InfoBlock = styled.div`
  max-width: 560px;
  width: 100%;
  text-align: ${(props) => (props.imageRight ? "left" : "right")};

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const ImageBlock = styled.div`
  max-width: 460px;
  width: 100%;
`;
