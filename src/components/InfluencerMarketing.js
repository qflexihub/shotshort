import { MarketingCardData } from "@/data/MarketingCardData";
import InfluencerMarketingView from "./shared/InfluencerMarketing";
import styled from "styled-components";
import Heading from "./shared/Heading";
import { Fragment } from "react";

export const InfluencerMarketingCardView = () => {
  return (
    <InfluencerMarketing>
      <Heading fontSize={54} marginTop={80} textAlign={"center"}>
        Influencer Marketing Service
      </Heading>
      <MarketingSection>
        {MarketingCardData?.map((item) => {
          return (
            <Fragment key={item?.id}>
              <InfluencerMarketingView key={index} data={item} />
            </Fragment>
          );
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
