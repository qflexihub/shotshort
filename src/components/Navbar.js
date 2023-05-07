import Image from "next/image";
import * as React from "react";
import styled from "styled-components";
import Button from "./shared/Button";
import { MenuItems } from "@/data/MenuItems";

const Navbar = () => {
  return (
    <NavContainer>
      <LogoBlock>
        <Image width={132} height={100} src="/logo.png" alt="logo" />
      </LogoBlock>
      <MenuBlock>
        {MenuItems?.map((item, index) => {
          return <MenuItem key={index}>{item?.title}</MenuItem>;
        })}
        <Button value="Contact Us" width="146px" height="50px" />
      </MenuBlock>
    </NavContainer>
  );
};
export default Navbar;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* padding: 18px 120px 18px 120px; */
  background: linear-gradient(180deg, #f4eaff 0%, #ffffff 96.64%);
`;
const LogoBlock = styled.div``;
const MenuBlock = styled.div`
  display: flex;
  align-items: center;
`;
const MenuItem = styled.div`
  margin-right: 24px;
  font-weight: 700;
  font-size: 16px;
  line-height: 18px;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;
