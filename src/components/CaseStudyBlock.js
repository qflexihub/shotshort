import React, { Fragment } from "react";
import styled from "styled-components";
import { caseStudyData } from "./../data/CaseStudyData";
import VideoInfoCard from "./shared/VideoInfoCard";

const CaseStudyBlock = () => {
  return (
    <CardContainer>
      {caseStudyData?.map((item, index) => {
        return (
          <Fragment key={item?.id}>
            <VideoInfoCard
              data={item}
              imageRight={index % 2 === 0 ? true : false}
            />
          </Fragment>
        );
      })}
    </CardContainer>
  );
};
export default CaseStudyBlock;

const CardContainer = styled.div`
  padding: 0 185px;
`;
