import styled from "styled-components";
import Input from "./shared/Input";
import Form from "./shared/Form";
import Image from "next/image";
import Heading from "./shared/Heading";
import Text from "./shared/Text";
import { useIsMobile } from "@/utils/general";
import { useRouter } from "next/router";

const ContactUsForm = () => {
  const isMobile = useIsMobile();
  const router = useRouter();
  const pagesWithGradiant = ["/contact-us"];
  return (
    <>
      <GetInTouchContainer
        isGradiant={pagesWithGradiant.includes(router.pathname) ? false : true}
      >
        <ContentBlock>
          <Heading marginBottom={32}>
            Ready To Take Your Business To The Next Level?
          </Heading>
          <Text
            fontSize={25}
            marginBottom={isMobile ? 28 : 86}
            marginRight="140px"
          >
            Talk to our video experts and discuss your business goals. We will
            definitely help your brand achieve great awareness, leads and sales
            through our video content. Let's connect!
          </Text>
        </ContentBlock>
        <FormBlock>
          <Form />
        </FormBlock>
      </GetInTouchContainer>
    </>
  );
};
export default ContactUsForm;

const GetInTouchContainer = styled.div`
  max-width: 100%;
  background: ${(props) =>
    props?.isGradiant
      ? "linear-gradient(180deg, #f4eaff 0%, #ffffff 96.64%)"
      : props.backgroundColor};
  padding: 40px 195px 70px 195px;
  display: flex;
  gap: 53px;
  align-items: center;

  @media (max-width: 768px) {
    padding: 50px 20px;
    display: block;
    /* text-align: center; */
  }
`;

const ContentBlock = styled.div`
  /* width: 50%; */
  @media (max-width: 768px) {
    text-align: center;
    width: 100%;
  }
`;

const FormBlock = styled.div`
  /* width: 50%; */
  background-color: #fff;
  padding: 30px;
  box-shadow: 0px 0px 120px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
