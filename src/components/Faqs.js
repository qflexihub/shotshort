import styled from "styled-components";
import Text from "./shared/Text";
import { faqsData } from "@/data/Faqs";
import { useState } from "react";
// TODO:- NEED TO FIX CSS
const Faqs = () => {

    const [activeIndex, setActiveIndex] = useState(null);

    const handleAccordianClick = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
      <MainContainer>
        <HeadingContainer>
            <Text fontSize={74} lineHeight={98} color="#8218EA" fontWeight={"700"}>{faqsData?.title}</Text>
            <Text fontSize={18} lineHeight={20} color="#555555" fontWeight={"400"}>{faqsData?.description}</Text>
        </HeadingContainer>
        <DetailContainer>
            {faqsData?.faqs?.map((item, index) => {
                return(
                    <Accordian key={index}>
                        {/* <AccordianHeading>
                            <Text fontSize={24} fontWeight={"500"} marginTop={30} marginBottom={30}>{item?.question}</Text>
                        </AccordianHeading> */}
                        <AccordianHeading onClick={() => handleAccordianClick(index)}>
                            <Text fontSize={24} fontWeight={"500"} marginTop={30} marginBottom={30}>
                                {item?.question}
                            </Text>
                        </AccordianHeading>
                        {/* <AccordianContent>
                            <Text fontSize={18} fontWeight={"400"}>{item?.answer}</Text>
                        </AccordianContent> */}
                        <AccordianContent style={{ height: activeIndex === index ? "auto" : 0 }}>
                            <Text fontSize={18} fontWeight={"400"} >
                                {item?.answer}
                            </Text>
                        </AccordianContent>
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
  padding: 50px 120px 90px 120px;
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

const AccordianHeading = styled.div``;

const AccordianContent = styled.div`
    background: #DBDBDB;
`;