import { BusinesdCardData } from "@/data/BusinessCardData";
import BusinessCardView from "./shared/BusinessCard";
import styled from "styled-components";
import { Fragment } from "react";

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
  justify-content: space-between;
`;

const BusinessCardHeading = styled.h1`
  display: block;
  text-align: center;
  color: #000000;
  font-size: 54px;
  font-weight: 700;
  padding: 0px 181px 50px 181px;
`;

const BusinessCardContainer = styled.div`
  padding: 80px 80px;
`;
