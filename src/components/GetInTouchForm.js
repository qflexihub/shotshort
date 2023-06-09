import styled from "styled-components";
import Input from "./shared/Input";
import Form from "./shared/Form";
import Image from "next/image";
import Heading from "./shared/Heading";
import Text from "./shared/Text";

const GetInTouchForm = () => {
  return (
    <>
      <GetInTouchContainer>
        <ContentBlock>
          <Heading marginBottom={32} color="#fff">
            Ready To Take Your Business To The Next Level?
          </Heading>
          <Text
            fontSize={25}
            marginBottom={86}
            color="#fff"
            marginRight="140px"
          >
            Talk to our video experts and discuss your business goals. We will
            definitely help your brand achieve great awareness, leads and sales
            through our video content. Let's connect!
          </Text>
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
  max-width: 100%;
  background: #24093f;
  padding: 100px 120px 90px 120px;
  display: flex;
`;

const ContentBlock = styled.div`
  width: 50%;
`;

const FormBlock = styled.div`
  width: 50%;
`;
