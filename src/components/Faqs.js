import styled from "styled-components";
import Text from "./shared/Text";
import { faqsData } from "@/data/Faqs";
import { useState } from "react";
import Image from "next/image";

const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleAccordianClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <MainContainer>
      <HeadingContainer>
        <Text fontSize={74} lineHeight={98} color="#8218EA" fontWeight={"700"}>
          {faqsData?.title}
        </Text>
        <Text
          fontSize={18}
          lineHeight={20}
          color="#555555"
          fontWeight={"400"}
          marginTop={8}
        >
          {faqsData?.description}
        </Text>
      </HeadingContainer>
      <DetailContainer>
        {faqsData?.faqs?.map((item, index) => {
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
`;

const HeadingContainer = styled.div`
  width: 380px;
  margin-top: 30px;
`;

const DetailContainer = styled.div`
  width: 640px;
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
