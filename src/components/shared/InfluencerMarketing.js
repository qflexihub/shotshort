import styled from "styled-components";
import Heading from "./Heading";
import Text from "./Text";
import Link from "next/link";

export const InfluencerMarketingView = ({ data }) => {
  return (
    <>
      <MarketingCard>
        <Logo></Logo>
        <MarketingCardContent>
          <Heading fontSize={25} fontWeight={700} color={"#8218EA"}>
            {data.heading}
          </Heading>
          <Text fontWeight={400} fontSize={"normal"}>
            {data.description}
          </Text>
          <SeeMoreLink>
            <Link href={data.link}>See More</Link>
          </SeeMoreLink>
        </MarketingCardContent>
      </MarketingCard>
    </>
  );
};

export default InfluencerMarketingView;

const MarketingCard = styled.div`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  margin-bottom: 80px;
`;

const MarketingCardContent = styled.div`
  height: 197px;
  width: 387px;
  background: #ffffff;
  border: 1px solid #cfcfcf;
  box-shadow: 0px 0px 120px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  display: grid;
  text-align: center;
  padding: 66px 42px 20px 42px;
  font-weight: 400;
  color: #000000;
`;

const SeeMoreLink = styled.div`
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  color: #8218ea;
`;

const Logo = styled.div`
  position: relative;
  top: 55px;
  height: 110px;
  width: 110px;
  background: linear-gradient(180deg, #8c51a2 0%, #592789 100%);
  border-radius: 50%;
`;
