import styled from "styled-components";
import Button from "./shared/Button";
import StepCard from "./shared/StepCard";
import ContentHeading from "./shared/contentHeading";
import Heading from "./shared/Heading";
import { StepsType1 } from "@/data/Steps";

const ContentProcess = () => {
  return (
    <CardContainer>
      <ContentHeading data={StepsType1?.processHeading} />
      <Button
        width="375px"
        value="Schedule a Call with Video's Expert"
        rightArrow={true}
      />
      <Heading fontSize={24} lineHeight={27} marginTop={50} color="#8218ea">
        {StepsType1?.processTitle}
      </Heading>
      <StepComponent>
        {StepsType1?.process?.map((item, index) => {
          return <StepCard key={index} data={item} />;
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
  }
`;
