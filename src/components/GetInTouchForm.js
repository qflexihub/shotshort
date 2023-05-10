import styled from "styled-components";
import Input from "./shared/Input";
import Form from "./shared/Form";
import Image from "next/image";
import Heading from "./shared/Heading";
import Text from "./shared/Text";
import { useIsMobile } from "@/utils/general";

const GetInTouchForm = () => {
  const isMobile = useIsMobile();
  return (
    <>
      <GetInTouchContainer>
        <ContentBlock>
          <Heading marginBottom={32} color="#fff">
            Ready To Take Your Business To The Next Level?
          </Heading>
          <Text
            fontSize={25}
            marginBottom={isMobile ? 28 : 86}
            color="#fff"
            marginRight="140px"
          >
            Talk to our video experts and discuss your business goals. We will
            definitely help your brand achieve great awareness, leads and sales
            through our video content. Let's connect!
          </Text>
          {!isMobile && (
            <Image
              width={387}
              height={232}
              src="/contactMail.svg"
              alt="Email Image"
            />
          )}
        </ContentBlock>
        <FormBlock>
          <Form />
        </FormBlock>
      </GetInTouchContainer>
    </>
  );
};
export default GetInTouchForm;

const GetInTouchContainer = styled.div`
  max-width: 100%;
  background: #24093f;
  padding: 100px 120px 90px 120px;
  display: flex;

  @media (max-width: 768px) {
    padding: 50px 20px;
    display: block;
    /* text-align: center; */
  }
`;

const ContentBlock = styled.div`
  width: 50%;
  @media (max-width: 768px) {
    text-align: center;
    width: 100%;
  }
`;

const FormBlock = styled.div`
  width: 50%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
