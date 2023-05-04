import styled from "styled-components";
import Button from "./shared/Button";
import IconDescriptionCard from "./shared/IconDescriptionCard";
import { WhyChooseUsData } from "@/data/commonData";

const WhyChooseUs = () => {
  return (
    <>
      <WhyChooseContainer>
        <Block1>
          <MainHeading>
            Creative And Professional Video Production Company In India ( Why
            Choose Us)
          </MainHeading>
          <Button
            value="Schedule a Call with Video's Expert"
            width="371px"
            height="50px"
            rightArrow
          />
        </Block1>
        <Block2>
          {WhyChooseUsData?.map((item, index) => {
            return (
              <>
                <IconDescriptionCard key={index} data={item} />
              </>
            );
          })}
        </Block2>
      </WhyChooseContainer>
    </>
  );
};
export default WhyChooseUs;

const WhyChooseContainer = styled.div`
  width: 100%;
  background-color: #fffdf7;
  padding: 100px 110px;
`;

const MainHeading = styled.h2`
  font-weight: 700;
  font-size: 54px;
  line-height: 62px;
  text-align: center;
  margin-bottom: 30px;
`;

const Block1 = styled.div`
  width: 100%;
  text-align: center;
  margin-bottom: 67px;
`;

const Block2 = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
