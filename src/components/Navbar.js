import Image from "next/image";
import styled from "styled-components";
import Button from "./shared/Button";
import { MenuItems, dropdownItems } from "@/data/MenuItems";
import Text from "./shared/Text";
import { useRouter } from "next/router";
import { Fragment, useRef, useState } from "react";
import Link from "next/link";
import { useOutsideClick } from "@/utils/general";

const Navbar = () => {
  const router = useRouter();
  const [isDropdown, setDropdown] = useState(false);

  const wrapperRef = useRef(null);
  useOutsideClick(wrapperRef, () => {
    setDropdown(false);
  });

  return (
    <NavContainer>
      <LogoBlock>
        <Link href="/">
          <Image width={132} height={100} src="/logo.png" alt="logo" />
        </Link>
      </LogoBlock>
      <MenuBlock ref={wrapperRef} className="prevent-select">
        {MenuItems?.map((item, index) => {
          return (
            <div
              className="mr-[24px] flex gap-1 cursor-pointer"
              onClick={() => {
                if (item?.title === "Services") {
                  setDropdown(!isDropdown);
                }
              }}
            >
              <MenuItem key={index}>{item?.title}</MenuItem>
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
        <Button value="Contact Us" width="146px" height="50px" />
        {isDropdown && (
          <Dropdown>
            {dropdownItems?.map((item, index) => {
              return (
                <Link href={item?.link} key={index}>
                  <Text
                    className="hover:text-[#8218EA]"
                    fontSize={16}
                    lineHeight={18}
                    fontWeight={500}
                    cursor="pointer"
                    color={router?.pathname === item?.link ? "#8218EA" : "#000"}
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
  );
};
export default Navbar;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px 120px 18px 120px;
  background: linear-gradient(180deg, #f4eaff 0%, #ffffff 96.64%);
`;
const LogoBlock = styled.div``;
const MenuBlock = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;
const MenuItem = styled.div`
  /* margin-right: 24px; */
  font-weight: 700;
  font-size: 16px;
  line-height: 18px;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;

const Dropdown = styled.div`
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
