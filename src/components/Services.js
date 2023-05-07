import styled from "styled-components";
import InfoCard from "./shared/InfoCard";
import ContentHeading from "./shared/contentHeading";
import { Fragment } from "react";
import { services } from "@/data/ServicesData";
import { serviceHeading } from "@/data/contentHeadingData";

const Services = () => {
  return (
    <CardContainer>
      <ContentHeading data={serviceHeading} />
      {services?.map((item, index) => {
        return (
          <Fragment key={item?.id}>
            <InfoCard data={item} imageRight={index % 2 === 0 ? true : false} />
          </Fragment>
        );
      })}
    </CardContainer>
  );
};
export default Services;

const CardContainer = styled.div`
  padding: 0 120px;
`;
