import Image from "next/image";
import styled from "styled-components";
import Button from "./shared/Button";
import { MenuItems, dropdownItems } from "@/data/MenuItems";
import Text from "./shared/Text";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import Link from "next/link";
import { useIsMobile, useOutsideClick } from "@/utils/general";
import Header from "./Header";
import InfoCard from "./shared/InfoCard";
import { services } from "@/data/ServicesData";
import { CaseStudyHeader } from "@/data/CaseStudyData";
import MobileNavbar from "./shared/MobileNavbar";

const Navbar = () => {
  const router = useRouter();
  const isMobile = useIsMobile();
  const [isDropdown, setDropdown] = useState(false);
  const [isMobileNavbar, setIsMobileNavbar] = useState(false);

  const wrapperRef = useRef(null);
  useOutsideClick(wrapperRef, () => {
    setDropdown(false);
  });

  const pagesWithGradiant = ["/", "/case-study"];

  return (
    <>
      <NavWrapper
        backgroundColor={router.pathname == "/contact-us" ? "#24093f" : "#fff"}
        isGradiant={pagesWithGradiant.includes(router.pathname) ? true : false}
      >
        <NavContainer>
          <MobileMenuIcon
            onClick={() => {
              setIsMobileNavbar(true);
            }}
          >
            <Image
              width={24}
              height={19}
              src="/mobile-menu.svg"
              alt="Mobile-menu"
            />
          </MobileMenuIcon>
          <LogoBlock>
            <Link href="/">
              <Image
                width={isMobile ? 83 : 132}
                height={isMobile ? 62 : 100}
                src="/logo.png"
                alt="logo"
              />
            </Link>
          </LogoBlock>
          <MenuBlock ref={wrapperRef} className="prevent-select">
            <div
              className="mr-[24px] flex gap-1 cursor-pointer items-center"
              onClick={() => {
                setDropdown(!isDropdown);
              }}
            >
              <Text
                fontWeight={700}
                fontSize={16}
                lineHeight={18}
                cursor="pointer"
                color={router.pathname == "/contact-us" ? "#fff" : "#000"}
                // style={{ transition: "transform 0.2s ease-in-out" }}
                // className="hover:scale-110"
              >
                Services
              </Text>
              <Image
                style={{ objectFit: "contain" }}
                width={8}
                height={8}
                src="/down-arrow.png"
                alt="down-arrow"
              />
            </div>
            {MenuItems?.map((item) => {
              return (
                <div
                  key={item?.id}
                  className="mr-[24px] flex gap-1 cursor-pointer"
                  onClick={() => {
                    if (item?.title === "Services") {
                      setDropdown(!isDropdown);
                    }
                  }}
                >
                  <Link href={item?.link}>
                    <Text
                      fontWeight={700}
                      fontSize={16}
                      lineHeight={18}
                      cursor="pointer"
                      color={
                        router?.pathname === item?.link
                          ? "#8218EA"
                          : router.pathname == "/contact-us"
                          ? "#fff"
                          : "#000"
                      }
                      style={{ transition: "transform 0.2s ease-in-out" }}
                      className="hover:scale-110"
                    >
                      {item?.title}
                    </Text>
                  </Link>
                  {item?.title === "Services" && (
                    <Image
                      style={{ objectFit: "contain" }}
                      width={8}
                      height={8}
                      src="/down-arrow.png"
                      alt="down-arrow"
                    />
                  )}
                </div>
              );
            })}
            <Button
              onClick={() => router.push("/contact-us")}
              value="Contact Us"
              width="146px"
              height="50px"
            />
            {isDropdown && (
              <Dropdown>
                {dropdownItems?.map((item) => {
                  return (
                    <Link href={item?.link} key={item?.id}>
                      <Text
                        className="hover:text-[#8218EA]"
                        fontSize={16}
                        lineHeight={18}
                        fontWeight={500}
                        cursor="pointer"
                        color={
                          router?.pathname === item?.link ? "#8218EA" : "#000"
                        }
                      >
                        {item?.title}
                      </Text>
                    </Link>
                  );
                })}
              </Dropdown>
            )}
          </MenuBlock>
        </NavContainer>
        {router.pathname === "/" && <Header />}
        {router.pathname === "/case-study" && (
          <InfoCard data={CaseStudyHeader} imageRight={true} />
        )}
      </NavWrapper>

      <MobileNavbar
        isMobileNavbar={isMobileNavbar}
        setIsMobileNavbar={setIsMobileNavbar}
      />
    </>
  );
};
export default Navbar;

const NavWrapper = styled.div`
  background: ${(props) =>
    props?.isGradiant
      ? "linear-gradient(180deg, #f4eaff 0%, #ffffff 96.64%)"
      : props.backgroundColor};
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px 120px 18px 120px;
  @media (max-width: 768px) {
    padding: 10px 20px 10px 20px;
  }
`;
const LogoBlock = styled.div`
  @media (max-width: 768px) {
    margin: auto;
  }
`;
const MenuBlock = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  @media (max-width: 768px) {
    display: none;
  }
`;
const MenuItem = styled.div`
  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;

const Dropdown = styled.div`
  width: 232px;
  padding: 25px;
  background-color: #fff;
  box-shadow: 0px 0px 120px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  position: absolute;
  display: grid;
  gap: 14px;
  top: 48px;
  z-index: 999;
`;

const MobileMenuIcon = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;
