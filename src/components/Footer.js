import Image from "next/image";
import styled from "styled-components";
import { SocialMediaHandles } from "./../data/SocialMediaHandles";

const Footer = () => {
  return (
    <FooterContainer>
      <BrandInfo>
        <Image width={100} height={75} src="/logo.png" alt="" />
        <SocialMediaIcons>
          {SocialMediaHandles?.map((item, index) => {
            return (
              <Image
                key={item.id}
                width={25}
                height={25}
                src={item.icon}
                alt={item.title}
              />
            );
          })}
        </SocialMediaIcons>
        <FindUs>Finds us online</FindUs>
      </BrandInfo>
      <ContactInfo>Contact Info</ContactInfo>
      <ServicesInfo>Services Info</ServicesInfo>
    </FooterContainer>
  );
};
export default Footer;

const FooterContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-evenly;
  max-width: 100%;
  padding: 50px 120px;
  background: #24093f;
`;

const BrandInfo = styled.div`
  height: 250px;
  flex: 3;
`;

const FindUs = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  text-transform: capitalize;
  color: rgba(255, 255, 255, 0.7);
  padding: 25px 0;
`;

const SocialMediaIcons = styled.div`
  background: red;
`;
const ContactInfo = styled.div`
  height: 250px;
  flex: 4;
`;

const ServicesInfo = styled.div`
  height: 250px;
  flex: 5;
`;
