import styled from "styled-components";
import Text from "./shared/Text";
import { faqsData } from "@/data/Faqs";
import { useState } from "react";
import Image from "next/image";
import { useIsMobile } from "@/utils/general";

const Faqs = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const isMobile = useIsMobile();

  const handleAccordianClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <MainContainer>
      <HeadingContainer>
        <Text
          fontSize={74}
          mobileFontSize={34}
          lineHeight={98}
          mobileLineHeight={42}
          color="#8218EA"
          fontWeight={"700"}
          textAlign={isMobile ? "center" : ""}
          marginBottom={10}
        >
          {data?.title}
        </Text>
        {data?.description && (
          <Text
            fontSize={18}
            mobileFontSize={14}
            lineHeight={20}
            color="#555555"
            fontWeight={"400"}
            marginTop={isMobile ? 10 : 8}
          >
            {data?.description}
          </Text>
        )}
      </HeadingContainer>
      <DetailContainer>
        {data?.faqs?.map((item, index) => {
          return (
            <Accordian key={item?.id}>
              <AccordianHeading onClick={() => handleAccordianClick(index)}>
                <Text cursor="pointer" fontSize={24} fontWeight={"500"}>
                  {item?.question}
                </Text>
                <IconImage>
                  <Image
                    src={
                      activeIndex === index
                        ? "/minus-icon.svg"
                        : "/plus-icon.svg"
                    }
                    alt={activeIndex === index ? "+" : "-"}
                    width={22}
                    height={22}
                  />
                </IconImage>
              </AccordianHeading>
              <AccordianContent
                style={{
                  visibility: activeIndex === index ? "visible" : "hidden",
                  height: activeIndex === index ? "auto" : 0,
                  paddingBottom: activeIndex === index ? "20px" : 0,
                }}
              >
                <Text fontSize={18} fontWeight={"400"}>
                  {item?.answer}
                </Text>
              </AccordianContent>
              <Spacebar />
            </Accordian>
          );
        })}
      </DetailContainer>
    </MainContainer>
  );
};
export default Faqs;

const MainContainer = styled.div`
  width: 100%;
  padding: 50px 120px 120px 120px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

  @media (max-width: 768px) {
    padding: 0px 20px;
    display: block;
  }
`;

const HeadingContainer = styled.div`
  max-width: 380px;
  /* margin-top: 30px; */
`;

const DetailContainer = styled.div`
  max-width: 640px;
`;

const Accordian = styled.div`
  width: 100%;
`;

const AccordianHeading = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px 0 40px 0;
`;

const AccordianContent = styled.div`
  padding-right: 30px;
  transition: height 0.3s ease;
`;

const Spacebar = styled.div`
  height: 1px;
  background: #dbdbdb;
`;

const IconImage = styled.div`
  padding: 0 20px;
  display: flex;
  justify-content: center;
  cursor: pointer;
`;
