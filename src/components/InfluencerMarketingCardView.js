import React, { Fragment } from "react";
import { MarketingCardData } from "@/data/MarketingCardData";
import InfluencerMarketingView from "./shared/InfluencerMarketingView";
import styled from "styled-components";
import Heading from "./shared/Heading";

const InfluencerMarketingCardView = () => {
  return (
    <InfluencerMarketingContainer>
      <Heading fontSize={54} marginTop={80} textAlign={"center"}>
        Influencer Marketing Service
      </Heading>
      <MarketingSection>
        {MarketingCardData?.map((item) => {
          return (
            <Fragment key={item?.id}>
              <InfluencerMarketingView data={item} />
            </Fragment>
          );
        })}
      </MarketingSection>
    </InfluencerMarketingContainer>
  );
};

export default InfluencerMarketingCardView;

const InfluencerMarketingContainer = styled.div``;

const MarketingSection = styled.div`
  display: flex;
  justify-content: center;
  gap: 22px;
  flex-wrap: wrap;
`;
