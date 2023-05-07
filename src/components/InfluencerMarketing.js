import { MarketingCardData } from "@/data/MarketingCardData";
import InfluencerMarketingView from "./shared/InfluencerMarketing";
import styled from "styled-components";
import Heading from "./shared/Heading";

export const InfluencerMarketingCardView = () => {
  return (
    <InfluencerMarketing>
      <Heading fontSize={54} marginTop={80} textAlign={"center"}>
        Influencer Marketing Service
      </Heading>
      <MarketingSection>
        {MarketingCardData?.map((item, index) => {
          return <InfluencerMarketingView key={index} data={item} />;
        })}
      </MarketingSection>
    </InfluencerMarketing>
  );
};

export default InfluencerMarketingCardView;

const InfluencerMarketing = styled.div``;

const MarketingSection = styled.div`
  display: flex;
  justify-content: center;
  gap: 22px;
  flex-wrap: wrap;
`;
