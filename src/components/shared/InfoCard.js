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
  isSingle = false,
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
      <InfoBlock isSingle={isSingle} imageRight={imageRight}>
        <Heading
          fontSize={54}
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
        {data?.note && (
          <Text
            fontSize={20}
            lineHeight={24}
            color="#000000"
            fontWeight="600"
            marginTop={20}
          >
            {data?.note}
          </Text>
        )}
        {data?.buttonText && (
          <Button
            value={data?.buttonText}
            backgroundColor={
              data?.buttonType == "solid" ? "" : "rgba(130, 24, 234, 0.2)"
            }
            color={data?.buttonType == "solid" ? "" : "#8218EA"}
            rightArrow={data?.buttonType == "solid"}
            width={"100%"}
            height="48px"
            style={{ fontSize: isMobile && 15 }}
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
  margin-bottom: ${(props) => props.marginBottom};
  margin-top: ${(props) => props.marginTop};
  position: inherit;
  background-color: #fff;

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
    padding: ${(props) => (props.isSingle ? "0px" : "0px 24px")};
    margin: auto;
  }
`;

const ImageBlock = styled.div`
  /* max-width: 827px;
  height: 451px; */
`;
