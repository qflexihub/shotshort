import { services } from "@/data/Services";
import styled from "styled-components";
import InfoCard from "./shared/InfoCard";
import { serviceHeading } from "@/data/ContentHeadingData";
import ContentHeading from "./shared/contentHeading";

const Services = () => {
  return (
    <CardContainer>
      <ContentHeading data={serviceHeading} />
      {services?.map((item, index) => {
        return (
          <InfoCard
            key={index}
            data={item}
            imageRight={index % 2 === 0 ? true : false}
          />
        );
      })}
    </CardContainer>
  );
};
export default Services;

const CardContainer = styled.div`
  padding: 0 120px;
`;
