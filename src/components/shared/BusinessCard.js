import Image from "next/image";
import styled from "styled-components";
import Heading from "./Heading";
import Text from "./Text";

const BusinessCardView = ({ data, isClient = false }) => {
  return (
    <CardVieW>
      <div className="flex items-center gap-2">
        {!isClient ? (
          <Logo>
            <Image
              width={34}
              height={34}
              src={data?.logo}
              alt={data?.heading}
            />
          </Logo>
        ) : (
          <Image
            width={100}
            height={100}
            src={"/testi1.svg"}
            alt={data?.heading}
          />
        )}
        {isClient && (
          <div>
            <Heading fontSize={25} lineHeight={29}>
              Edwin zohir
            </Heading>
            <Text>Businessman</Text>
          </div>
        )}
      </div>
      <Heading fontSize={24} marginTop={30} marginBottom={10}>
        {data?.heading}
      </Heading>
      <Description>{data?.description}</Description>
    </CardVieW>
  );
};

export default BusinessCardView;

const CardVieW = styled.div`
  height: 322px;
  max-width: 386px;
  width: 100%;
  padding: 30px;
  background: #ffffff;
  border: 1px solid #cfcfcf;
  box-shadow: 0px 0px 120px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  &:not(:last-of-type) {
    margin-right: 10px;
  }

  @media (max-width: 768px) {
    &:not(:last-of-type) {
      margin-bottom: 10px;
    }
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

const Description = styled.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  color: #555555;
`;
