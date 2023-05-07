import styled from "styled-components";
import { caseStudyData } from './../data/CaseStudyData';
import VideoInfoCard from "./shared/VideoInfoCard";

const CaseStudyBlock = () => {
  return (
    <CardContainer>
      {caseStudyData?.map((item, index) => {
        return (
          <VideoInfoCard
            key={index}
            data={item}
            imageRight={index % 2 === 0 ? true : false}
          />
        );
      })}
    </CardContainer>
  );
};
export default CaseStudyBlock;

const CardContainer = styled.div`
  padding: 0 185px;
`;
