import React, { Fragment } from "react";
import styled from "styled-components";
import Button from "./shared/Button";
import IconDescriptionCard from "./shared/IconDescriptionCard";
import Heading from "./shared/Heading";
import { WhyChooseUsData } from "@/data/commonData";
import { useIsMobile } from "@/utils/general";

const WhyChooseUs = ({ data }) => {
  const isMobile = useIsMobile();
  return (
    <>
      <WhyChooseContainer>
        <Block1>
          <Heading marginBottom={30}>{data?.title}</Heading>
          {data?.buttonTitle && <Button
            value={data?.buttonTitle}
            width={isMobile ? "335px" : "375px"}
            height="50px"
            rightArrow
          />}
        </Block1>
        <Block2>
          {data?.content?.map((item) => {
            return (
              <Fragment key={item?.id}>
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
  padding: 80px 110px;

  @media (max-width: 768px) {
    padding: 50px 20px;
  }
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
