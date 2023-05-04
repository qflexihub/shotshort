import styled from "styled-components";
import Button from "./shared/Button";
import ContentHeading from "./shared/contentHeading";
import ProgressCard from "./shared/ProgressCard";

const MarketBuzz = ({ data }) => {
  return (
    <CardContainer>
      <ContentHeading data={data?.processHeading} />
      <MainComponent>
        {data?.content?.map((item, index) => {
          return <ProgressCard key={index} data={item} />;
        })}
      </MainComponent>
      <Button
        width="375px"
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
  margin-bottom: 250px;
`;

const MainComponent = styled.div`
  padding: 30px 100px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;
