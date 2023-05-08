import React, { Fragment } from "react";
import styled from "styled-components";
import Button from "./shared/Button";
import StepCard from "./shared/StepCard";
import ContentHeading from "./shared/contentHeading";
import Heading from "./shared/Heading";
import { StepsType1 } from "@/data/steps";
import { useIsMobile } from "@/utils/general";

const ContentProcess = () => {
  const isMobile = useIsMobile();
  return (
    <CardContainer>
      <ContentHeading data={StepsType1?.processHead} />
      <Button
        width={isMobile ? "335px" : "375px"}
        value="Schedule a Call with Video's Expert"
        rightArrow={true}
      />
      <Heading
        fontSize={24}
        mobileFontSize={18}
        lineHeight={27}
        marginTop={isMobile ? 30 : 50}
        color="#8218ea"
        textAlign="center"
      >
        {StepsType1?.processTitle}
      </Heading>
      <StepComponent>
        {StepsType1?.process?.map((item) => {
          return (
            <Fragment key={item?.id}>
              <StepCard data={item} />
            </Fragment>
          );
        })}
      </StepComponent>
    </CardContainer>
  );
};
export default ContentProcess;

const CardContainer = styled.div`
  padding: 0 120px;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  display: flex;
  margin-bottom: 250px;

  @media (max-width: 768px) {
    padding: 50px 20px;
    margin: 0;
  }
`;

const StepComponent = styled.div`
  /* display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between; */
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  margin-top: 30px;
  /* & > * {
    flex: 1;
    margin: 0 10px;
  } */

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
  }
`;
