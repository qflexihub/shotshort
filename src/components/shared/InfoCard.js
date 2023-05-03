import Image from "next/image";
import styled from "styled-components";
import Button from "./Button";

const InfoCard = ({ data, imageRight = true }) => {
  return (
    <InfoCardContainer imageRight={imageRight}>
      <InfoBlock imageRight={imageRight}>
        <InfoHeading>{data?.title}</InfoHeading>
        <InfoPara>{data?.description}</InfoPara>
        <Button
          value={data?.buttonText}
          backgroundColor="rgba(130, 24, 234, 0.2)"
          color="#8218EA"
          width="207px"
          height="48px"
          marginTop="60px"
        />
      </InfoBlock>
      <ImageBlock>
        <Image width={460} height={443} src={data?.image} alt={data?.title} />
      </ImageBlock>
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
  flex-direction: ${(props) => (props.imageRight ? "row" : "row-reverse")};
  margin-bottom: 100px;
`;

const InfoBlock = styled.div`
  max-width: 560px;
  width: 100%;
  text-align: ${(props) => (props.imageRight ? "left" : "right")};
`;

const ImageBlock = styled.div`
  max-width: 460px;
  width: 100%;
`;

const InfoHeading = styled.p`
  font-size: 64px;
  font-weight: 700;
  line-height: 73px;
  margin-bottom: 12px;
`;

const InfoPara = styled.p`
  font-weight: 400;
  font-size: 24px;
  line-height: 24px;
  margin-top: 12px;
  color: #555555;
`;
