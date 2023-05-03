import styled from "styled-components";
import { processHeading } from "@/data/contentHeading";
import Button from "./shared/Button";
import ContentHeading from "./shared/ContentHeading";
import { StepsType1 } from "@/data/steps";
import StepCard from "./shared/StepCard";

const ContentProcess = ({ data }) => {
  return (
    <CardContainer>
      <ContentHeading data={data?.processHeading} />
      <Button width="375px" value="Schedule a Call with Video's Expert" rightArrow={true} />
      <MainHeading>
        {data?.processTitle}
      </MainHeading>
      <StepComponent>
        {StepsType1?.process?.map((item, index) => {
            return (
            <StepCard
                key={index}
                data={item}
            />
            );
        })}
      </StepComponent>
    </CardContainer>
  );
};
export default ContentProcess;

const CardContainer = styled.div`
  padding: 0 185px;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  display: flex;
  margin-bottom: 250px;
`;

const MainHeading = styled.p`
  font-weight: 700;
  font-size: 24px;
  line-height: 27px;
  display: flex;
  align-items: center;
  color: #8218EA;
  padding-top: 50px;
`;

const StepComponent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  margin-top: 30px;
  & > * {
    flex: 1;
    margin: 0 10px;
  };
`;
