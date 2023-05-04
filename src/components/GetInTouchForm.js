import styled from "styled-components";
import Input from "./shared/Input";
import Form from "./shared/Form";
import Image from "next/image";

const GetInTouchForm = () => {
  return (
    <>
      <GetInTouchContainer>
        <ContentBlock>
          <Heading>Ready To Take Your Business To The Next Level?</Heading>
          <Description>
            Talk to our video experts and discuss your business goals. We will
            definitely help your brand achieve great awareness, leads and sales
            through our video content. Let's connect!
          </Description>
          <Image
            width={387}
            height={232}
            src="/contactMail.svg"
            alt="Email Image"
          />
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
  width: 100%;
  background: #24093f;
  padding: 100px 120px 90px 120px;
  display: flex;
`;

const ContentBlock = styled.div`
  width: 50%;
`;
const Heading = styled.h2`
  font-weight: 700;
  font-size: 54px;
  line-height: 62px;
  margin-bottom: 32px;
  color: #fff;
`;
const Description = styled.p`
  font-weight: 400;
  font-size: 25px;
  line-height: 31px;
  margin-bottom: 86px;
  width: 100%;
  max-width: 458px;
  color: #fff;
`;
const FormBlock = styled.div`
  width: 50%;
`;
