import Image from "next/image";
import styled from "styled-components";

const BusinessCardView = ({ data }) => {
  return (
    <CardVieW>
      <Logo>
        <Image width={34} height={34} src={data?.logo} alt={data?.heading} />
      </Logo>
      <Heading>{data?.heading}</Heading>
      <Description>{data?.description}</Description>
    </CardVieW>
  );
};

export default BusinessCardView;

const CardVieW = styled.div`
  height: 322px;
  width: 386px;
  padding: 30px;
  background: #ffffff;
  border: 1px solid #cfcfcf;
  box-shadow: 0px 0px 120px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  &:not(:last-of-type) {
    margin-right: 10px;
  }
`;

const Logo = styled.div`
  background: linear-gradient(180deg, #8c51a2 0%, #592789 100%);
  width: 75px;
  height: 75px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Heading = styled.h5`
  font-size: 24px;
  font-weight: 700;
  color: #000000;
  padding-top: 30px;
  padding-bottom: 10px;
`;

const Description = styled.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  color: #555555;
`;
