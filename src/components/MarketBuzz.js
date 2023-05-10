import React, { Fragment } from "react";
import styled from "styled-components";
import Button from "./shared/Button";
import ContentHeading from "./shared/contentHeading";
import ProgressCard from "./shared/ProgressCard";
import { MarketBuzzProcess } from "@/data/marketBuzzProcess";
import { useIsMobile } from "@/utils/general";

const MarketBuzz = () => {
  const isMobile = useIsMobile();
  return (
    <CardContainer>
      <ContentHeading data={MarketBuzzProcess?.processHeading} />
      <MainComponent>
        {MarketBuzzProcess?.content?.map((item) => {
          return (
            <Fragment key={item?.id}>
              <ProgressCard data={item} />
            </Fragment>
          );
        })}
      </MainComponent>
      <Button
        width={isMobile ? "335px" : "375px"}
        value="Schedule a Call with Video's Expert"
        rightArrow={true}
      />
    </CardContainer>
  );
};
export default MarketBuzz;

const CardContainer = styled.div`
  justify-content: center;
  flex-direction: column;
  align-items: center;
  display: flex;
  padding: 80px 120px;
  background: linear-gradient(180deg, #f8efff 0%, #ffffff 100%);

  @media (max-width: 768px) {
    padding: 50px 20px;
  }
`;

const MainComponent = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  margin-top: 46px;
  margin-bottom: 50px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
