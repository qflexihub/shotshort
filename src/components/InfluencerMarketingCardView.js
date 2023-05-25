import React, { Fragment } from "react";
import { MarketingCardData } from "@/data/MarketingCardData";
import InfluencerMarketingView from "./shared/InfluencerMarketingView";
import styled from "styled-components";
import Heading from "./shared/Heading";

const InfluencerMarketingCardView = ({ data }) => {
  return (
    <InfluencerMarketingContainer>
      <Heading fontSize={54} marginTop={80} textAlign={"center"}>
        {data?.title}
      </Heading>
      <MarketingSection>
        {data?.content?.map((item) => {
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
