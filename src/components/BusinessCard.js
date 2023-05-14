import React, { Fragment } from "react";
import { BusinesdCardData } from "@/data/BusinessCardData";
import BusinessCardView from "./shared/BusinessCard";
import styled from "styled-components";

const BusinessCard = () => {
  return (
    <BusinessCardContainer>
      <BusinessCardHeading>
        How Our Short Video Ads Company Can Help Your Business?
      </BusinessCardHeading>
      <BusinessCardSection>
        {BusinesdCardData?.map((item) => {
          return (
            <Fragment key={item?.id}>
              <BusinessCardView data={item} />
            </Fragment>
          );
        })}
      </BusinessCardSection>
    </BusinessCardContainer>
  );
};

export default BusinessCard;

const BusinessCardSection = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    display: block;
    margin-top: 30px;
  }
`;

const BusinessCardHeading = styled.h1`
  display: block;
  text-align: center;
  color: #000000;
  font-size: 54px;
  font-weight: 700;
  padding: 0px 181px 50px 181px;

  @media (max-width: 768px) {
    padding: 0px;
    font-size: 24px;
    line-height: 28px;
  }
`;

const BusinessCardContainer = styled.div`
  padding: 80px 80px;

  @media (max-width: 768px) {
    padding: 50px 20px;
  }
`;
