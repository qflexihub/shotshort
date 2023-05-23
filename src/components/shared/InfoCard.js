import Image from "next/image";
import styled from "styled-components";
import Button from "./Button";
import Heading from "./Heading";
import Text from "./Text";
import { useIsMobile } from "@/utils/general";

const InfoCard = ({
  data,
  imageRight = true,
  imageWidth,
  imageHeight,
  imageStyles,
  marginBottom,
  marginTop,
}) => {
  const isMobile = useIsMobile();
  return (
    <InfoCardContainer
      imageRight={imageRight}
      marginBottom={marginBottom}
      marginTop={marginTop}
    >
      <ImageBlock>
        {/* <Image width={827} height={451} src={data?.image} alt={data?.title} /> */}
        <img
          width={imageWidth || "100%"}
          height={imageHeight || "100%"}
          src={data?.image}
          style={imageStyles}
        />
      </ImageBlock>
      <InfoBlock imageRight={imageRight}>
        <Heading
          fontSize={64}
          marginBottom={isMobile ? 10 : 24}
          marginTop={isMobile && 21}
        >
          {data?.title}
        </Heading>
        {data?.description && (
          <Text fontSize={24} lineHeight={24} color="#555555">
            {data?.description}
          </Text>
        )}
        {data?.buttonText && (
          <Button
            value={data?.buttonText}
            backgroundColor="rgba(130, 24, 234, 0.2)"
            color="#8218EA"
            width="207px"
            height="48px"
            marginTop={isMobile ? "20px" : "60px"}
          />
        )}
      </InfoBlock>
    </InfoCardContainer>
  );
};
export default InfoCard;

const InfoCardContainer = styled.div`
  /* padding: 0px 120px; */
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: ${(props) => (props.imageRight ? "row-reverse" : "row")};
  margin-bottom: ${(props) => props.marginBottom || "100px"};
  margin-top: ${(props) => props.marginTop || "100px"};
  position: inherit;

  @media (max-width: 768px) {
    margin: 0;
    padding: 0;
    display: block;
    text-align: center;
  }
`;

const InfoBlock = styled.div`
  max-width: 573px;
  width: 100%;
  text-align: ${(props) => (props.imageRight ? "left" : "right")};

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const ImageBlock = styled.div`
  /* max-width: 827px;
  height: 451px; */
`;
