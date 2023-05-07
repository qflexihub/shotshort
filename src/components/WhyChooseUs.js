import styled from "styled-components";
import Button from "./shared/Button";
import IconDescriptionCard from "./shared/IconDescriptionCard";
import { WhyChooseUsData } from "@/data/commonData";
import Heading from "./shared/Heading";
import { Fragment } from "react";

const WhyChooseUs = () => {
  return (
    <>
      <WhyChooseContainer>
        <Block1>
          <Heading marginBottom={30}>
            Creative And Professional Video Production Company In India ( Why
            Choose Us)
          </Heading>
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
              <Fragment key={index}>
                <IconDescriptionCard data={item} />
              </Fragment>
            );
          })}
        </Block2>
      </WhyChooseContainer>
    </>
  );
};
export default WhyChooseUs;

const WhyChooseContainer = styled.div`
  max-width: 100%;
  background-color: #fffdf7;
  padding: 100px 110px;
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
  grid-gap: 20px;
  justify-content: center;
`;
