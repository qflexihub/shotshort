import React, { Fragment, useState } from "react";
import styled from "styled-components";
import Button from "./shared/Button";
import StepCard from "./shared/StepCard";
import ContentHeading from "./shared/contentHeading";
import Heading from "./shared/Heading";
import { StepsType1 } from "@/data/steps";
import { useIsMobile } from "@/utils/general";
import { curiousAbout } from "@/data/SocialMediaData";
import Text from "./shared/Text";

const ContentProcess = ({ data }) => {
  const isMobile = useIsMobile();
  const [expandedItems, setExpandedItems] = useState([]);
  const toggleDescription = (itemId) => {
    if (expandedItems.includes(itemId)) {
      setExpandedItems(expandedItems.filter((id) => id !== itemId));
    } else {
      setExpandedItems([...expandedItems, itemId]);
    }
  };

  return (
    <CardContainer>
      <ContentHeading data={data?.contentHeading} />
      <Button
        width={isMobile ? "335px" : "375px"}
        value="Schedule Your Call Today"
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
        {data?.processTitle}
      </Heading>
      <StepComponent>
        {data?.process?.map((item) => {
          return (
            <Fragment key={item?.id}>
              <StepCard
                key={item?.id}
                data={item}
                isExpanded={expandedItems.includes(item.id)}
                toggleDescription={toggleDescription}
              />
            </Fragment>
          );
        })}
      </StepComponent>
      <Text
        style={{ maxWidth: "665px" }}
        fontSize={18}
        color="#555555"
        marginTop={60}
        textAlign="center"
      >
        {data?.bottomText}
      </Text>
    </CardContainer>
  );
};
export default ContentProcess;

const CardContainer = styled.div`
  padding: 0 120px 80px 120px;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  display: flex;

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
  align-items: flex-start;
  /* & > * {
    flex: 1;
    margin: 0 10px;
  } */

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
  }
`;
