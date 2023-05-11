import React, { Fragment } from "react";
import Image from "next/image";
import styled from "styled-components";
import { SocialMediaHandles, services } from "../data/FooterData";
import Heading from "./shared/Heading";
import Text from "./shared/Text";
import Link from "next/link";
import SocialMediaIcons from "./shared/SocialMediaIcons";

const Footer = () => {
  return (
    <FooterContainer>
      <Block1>
        <BrandInfo>
          <Image width={100} height={75} src="/logo.png" alt="logo" />
          <SocialMediaIcons />
        </BrandInfo>
        <ContactInfo>
          <Heading fontSize={20} lineHeight={23} marginBottom={25} color="#fff">
            Contact Us
          </Heading>
          <Text
            fontSize={18}
            lineHeight={23}
            marginBottom={32}
            color="rgba(255, 255, 255, 0.7);"
          >
            F-12/1, DLF Phase - 1, Sector 27, Golf Course Rd, Gurugram, Haryana
            122002
          </Text>
          <Link href="mailto:contact@videoly.in" style={{ marginBottom: 25 }}>
            <Text
              fontSize={18}
              lineHeight={23}
              marginBottom={25}
              color="rgba(255, 255, 255, 0.7);"
              textTransform="capitalize"
              cursor="pointer"
              display="inline-block"
            >
              contact@videoly.in
            </Text>
          </Link>
          <div className="flex">
            <Link href="tel:+91 1234567890" style={{ marginBottom: 25 }}>
              <Text
                fontSize={18}
                lineHeight={23}
                marginBottom={25}
                color="rgba(255, 255, 255, 0.7);"
                textTransform="capitalize"
                cursor="pointer"
              >
                +91 1234567890,&nbsp;
              </Text>
            </Link>
            <Link href="tel:+91 14334567890" style={{ marginBottom: 25 }}>
              <Text
                fontSize={18}
                lineHeight={23}
                marginBottom={25}
                color="rgba(255, 255, 255, 0.7);"
                textTransform="capitalize"
                cursor="pointer"
              >
                +91 14334567890
              </Text>
            </Link>
          </div>
        </ContactInfo>
        <ServicesInfo>
          <Heading fontSize={20} lineHeight={23} marginBottom={25} color="#fff">
            Services
          </Heading>

          {services?.map((item) => {
            return (
              <Fragment key={item?.id}>
                <Link href={item?.link} style={{ marginBottom: 20 }}>
                  <Text
                    fontSize={18}
                    lineHeight={23}
                    color="rgba(255, 255, 255, 0.7);"
                    textTransform="capitalize"
                    cursor="pointer"
                  >
                    {item?.title}
                  </Text>
                </Link>
              </Fragment>
            );
          })}
        </ServicesInfo>
      </Block1>
      <Block2>
        <Text
          fontSize={18}
          lineHeight={23}
          fontWeight={500}
          color="rgba(255, 255, 255, 0.7);"
          textTransform="capitalize"
          cursor="pointer"
        >
          © Videoly 2022 All Rights Reserved
        </Text>
        <div className="flex gap-8">
          <Link href="/">
            <Text
              fontSize={18}
              lineHeight={23}
              fontWeight={500}
              color="rgba(255, 255, 255, 0.7);"
              textTransform="capitalize"
              cursor="pointer"
            >
              Terms & Conditions
            </Text>
          </Link>
          <Link href="/">
            <Text
              fontSize={18}
              lineHeight={23}
              fontWeight={500}
              color="rgba(255, 255, 255, 0.7);"
              textTransform="capitalize"
              cursor="pointer"
            >
              Privacy
            </Text>
          </Link>
          <Link href="/">
            <Text
              fontSize={18}
              lineHeight={23}
              fontWeight={500}
              color="rgba(255, 255, 255, 0.7);"
              textTransform="capitalize"
              cursor="pointer"
            >
              Policy Disclaimer
            </Text>
          </Link>
        </div>
      </Block2>
    </FooterContainer>
  );
};
export default Footer;

const FooterContainer = styled.div`
  padding: 50px 120px 35px 120px;
  background: #24093f;

  @media (max-width: 768px) {
    padding: 34px 20px 20px 20px;
  }
`;

const Block1 = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-evenly;
  max-width: 100%;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Block2 = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const BrandInfo = styled.div`
  height: 250px;
  flex: 3;

  @media (max-width: 768px) {
    text-align: center;
  }
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
