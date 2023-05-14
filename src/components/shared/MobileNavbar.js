import Image from "next/image";
import styled from "styled-components";
import Text from "./Text";
import { useRouter } from "next/router";
import { dropdownItems } from "@/data/MenuItems";
import Link from "next/link";
import { useState } from "react";
import { MenuItems } from "@/data/MenuItems";
import SocialMediaIcons from "./SocialMediaIcons";

const MobileNavbar = ({ isMobileNavbar, setIsMobileNavbar }) => {
  const router = useRouter();
  const [isCollapsed, setIsCollapsed] = useState(true);

  const onMenuClick = () => {
    setIsCollapsed(!isCollapsed);
  };

  const onClickLink = () => {
    setTimeout(() => {
      setIsMobileNavbar(false);
    }, 500);
  };

  return (
    <MobileNavbarContainer isMobileNavbar={isMobileNavbar}>
      <HeaderBar>
        <Link href={"/"} onClick={onClickLink}>
          <Image width={83} height={62} src="/logo.png" alt="Logo" />
        </Link>
        <Image
          onClick={() => setIsMobileNavbar(false)}
          width={20}
          height={20}
          src="/close.svg"
          alt="Close"
        />
      </HeaderBar>
      <Menu>
        <div
          style={{
            height: isCollapsed ? "20px" : "100%",
            overflow: "hidden",
          }}
        >
          <div
            onClick={() => {
              onMenuClick();
            }}
            className="w-full flex justify-between items-center pl-5 pr-12 h-[20px]"
          >
            <Text
              fontWeight={700}
              mobileFontSize={24}
              lineHeight={18}
              cursor="pointer"
              color="#F8EFFF"
            >
              Services
            </Text>
            <Image
              style={{
                objectFit: "contain",
                transform: isCollapsed ? "" : "rotate(180deg)",
                transition: "all 0.3s ease",
              }}
              width={14}
              height={14}
              src="/white-down-arrow.svg"
              alt="down-arrow"
            />
          </div>
          <CollapsedMenu>
            {dropdownItems?.map((item) => {
              return (
                <Link href={item?.link} onClick={onClickLink}>
                  <Text
                    fontSize={16}
                    mobileFontSize={16}
                    marginBottom={24}
                    color="#fff"
                    fontWeight={router?.pathname === item?.link ? 700 : "400"}
                  >
                    {item?.title}
                  </Text>
                </Link>
              );
            })}
          </CollapsedMenu>
        </div>

        {MenuItems?.map((item) => {
          return (
            <MenuItem isCollapsed={isCollapsed}>
              <Link href={item?.link} onClick={onClickLink}>
                <Text
                  fontWeight={700}
                  mobileFontSize={24}
                  lineHeight={18}
                  cursor="pointer"
                  color="#F8EFFF"
                >
                  {item?.title}
                </Text>
              </Link>
            </MenuItem>
          );
        })}
      </Menu>
      <div style={{ padding: "20px 18px" }}>
        <SocialMediaIcons isSidebar />
      </div>
      <ContactUs>
        <Text fontSize={16} fontWeight={700} marginBottom={14} color="#F8EFFF">
          Contact Us
        </Text>
        <div className="flex justify-between gap-2">
          <Text color="#F8EFFF">
            F-12/1, DLF Phase - 1, Sector 27, Golf Course Rd, Gurugram, Haryana
            122002
          </Text>
          <div className="flex flex-wrap">
            <Text color="#F8EFFF">contact@videoly.in</Text>
            <Text color="#F8EFFF">+91 1234567890</Text>
          </div>
        </div>
      </ContactUs>
      <hr style={{ backgroundColor: "#fff", opacity: "0.8", height: "1px" }} />
      <TermsAndCondition>
        <Text color="#F8EFFF">Terms and Conditions </Text>
        <Text marginLeft={40} color="#F8EFFF">
          Privacy Policy
        </Text>
        <Text color="#F8EFFF">Policy Disclaimer</Text>
      </TermsAndCondition>
    </MobileNavbarContainer>
  );
};
export default MobileNavbar;

const MobileNavbarContainer = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: ${(props) => (props.isMobileNavbar ? "0px" : "-100%")};
  z-index: 5;
  background-color: #8218ea;
  transition: all 0.5s ease-in-out;
  overflow: scroll;
`;

const HeaderBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 25px 27px 20px;
  margin-bottom: 13px;
`;

const Menu = styled.div``;

const MenuItem = styled.div`
  margin-top: 23px;
  padding: 10px 20px;
`;

const CollapsedMenu = styled.div`
  background-color: #24093f;
  padding: 20px 22px 1px 22px;
  margin-top: 20px;
  max-height: ${(props) => (props.isCollapsed ? "0px" : "100%")};
  transition: max-height 0.2s ease-out;
`;

const ContactUs = styled.div`
  padding: 20px 18px;
`;

const TermsAndCondition = styled.div`
  padding: 20px 18px;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 10px;
`;
