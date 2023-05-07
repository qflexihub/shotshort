import Image from "next/image";
import styled from "styled-components";
import { SocialMediaHandles } from "../data/FooterData";

const Footer = () => {
  return (
    <FooterContainer>
      <BrandInfo>
        <Image width={100} height={75} src="/logo.png" alt="logo" />
        <FindUs>Finds us online</FindUs>
        <SocialMediaIcons>
          {SocialMediaHandles?.map((item, index) => {
            return (
              <Image
                style={{}}
                key={item.id}
                width={20}
                height={20}
                src={item.icon}
                alt={item.title}
              />
            );
          })}
        </SocialMediaIcons>
      </BrandInfo>
      <ContactInfo>
        <HeadingTitle>Contact Info</HeadingTitle>
        <AddressData>
          F-12/1, DLF Phase - 1, Sector 27, Golf Course Rd, Gurugram, Haryana
          122002
        </AddressData>
        <EmailData>contact@videoly.in</EmailData>
        <ContactData>
          <MobileData>+91 1234567890</MobileData>
          <MobileData>+91 1234567890</MobileData>
        </ContactData>
      </ContactInfo>
      <ServicesInfo>
        <HeadingTitle>Services</HeadingTitle>
        <UrlData>Social Media Organic Videos</UrlData>
        <UrlData>Product Video Production Company</UrlData>
        <UrlData>Video Ads Agency</UrlData>
        <UrlData>Facebook Ads</UrlData>
      </ServicesInfo>
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
  display: flex;
  flex-direction: row;
  height: 20px;
`;
const ContactInfo = styled.div`
  height: 250px;
  flex: 4;
`;

const ServicesInfo = styled.div`
  height: 250px;
  flex: 5;
  display: flex;
  flex-direction: column;
  padding-left: 50px;
`;

const HeadingTitle = styled.p`
  font-weight: 700;
  font-size: 20px;
  line-height: 23px;
  text-transform: capitalize;
  color: #ffffff;
  padding-bottom: 10px;
`;

const AddressData = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 23px;
  text-transform: capitalize;
  color: rgba(255, 255, 255, 0.7);
  padding: 10px 0;
`;

const EmailData = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 23px;
  text-transform: capitalize;
  color: rgba(255, 255, 255, 0.7);
  padding: 10px 0;
`;

const ContactData = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 0;
`;

const MobileData = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 23px;
  text-transform: capitalize;
  color: rgba(255, 255, 255, 0.7);
  padding-right: 10px;
`;

const UrlData = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 23px;
  text-transform: capitalize;
  color: rgba(255, 255, 255, 0.7);
  padding: 7.5px 0;
`;
