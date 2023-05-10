import Image from "next/image";
import styled from "styled-components";
import Text from "./Text";
import { useRouter } from "next/router";
import { dropdownItems } from "@/data/MenuItems";
import Link from "next/link";
import { useState } from "react";
import { MenuItems } from "@/data/MenuItems";

const MobileNavbar = ({ onClose }) => {
  const router = useRouter();
  const [isCollapsed, setIsCollapsed] = useState(true);

  const onMenuClick = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <MobileNavbarContainer>
      <HeaderBar>
        <Image width={83} height={62} src="/logo.png" alt="Logo" />
        <Image
          onClick={onClose}
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
                <Link href={item?.link}>
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
              <Text
                fontWeight={700}
                mobileFontSize={24}
                lineHeight={18}
                cursor="pointer"
                color="#F8EFFF"
              >
                {item?.title}
              </Text>
            </MenuItem>
          );
        })}
      </Menu>
    </MobileNavbarContainer>
  );
};
export default MobileNavbar;

const MobileNavbarContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  z-index: 2;
  background-color: #8218ea;
`;

const HeaderBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 25px 27px 20px;
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
