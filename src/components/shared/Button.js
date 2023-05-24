import Image from "next/image";
import styled from "styled-components";

const Button = ({
  type = 'default',
  value,
  width,
  height,
  borderRadius,
  backgroundColor,
  color,
  rightArrow = false,
  ...rest
}) => {
  if (type === 'text') {
    return (
      <TextLinkContainer
        color={color}
        {...rest}
      >
        {value}
      </TextLinkContainer>
    );
  }

  return (
    <ButtonContainer
      width={width}
      height={height}
      borderRadius={borderRadius}
      backgroundColor={backgroundColor}
      color={color}
      rightArrow={rightArrow}
      {...rest}
    >
      <span className="flex justify-center items-center">
        {value}
        {rightArrow && (
          <Image
            className="ml-4"
            width={15}
            height={15}
            src={"/rightArrow.svg"}
            alt="right-arrow"
          />
        )}
      </span>
    </ButtonContainer>
  );
};
export default Button;

const ButtonContainer = styled.button`
  display: inline-block;
  justify-content: center;
  align-items: center;
  border: 2px solid #8218ea;
  width: ${(props) => props.width || "257px"};
  height: ${(props) => props.height || "50px"};
  background-color: ${(props) => props.backgroundColor || "#8218ea"};
  color: ${(props) => props.color || "#fff"};
  border-radius: ${(props) => props.borderRadius || "25px"};
  margin-top: ${(props) => props.marginTop || "0px"};
  font-size: ${(props) => props.fontsize || "16px"};
  font-weight: ${(props) => props.fontWeight || "700"};
  transition: transform 0.2s ease-in-out;
  /* &:hover ${BtnText} {
    font-size: 18px;
  } */

  @media (max-width: 768px) {
    max-width: ${(props) => props.width || "235px"};
    width: 100%;
    height: 50px;
  }

  @media (max-width: 375px) {
    font-size: 12px;
  }
`;
const TextLinkContainer = styled.span`
  color: ${(props) => props.color || "#8218EA"};
  margin-top: ${(props) => props.marginTop || "0px"};
  font-size: ${(props) => props.fontsize || "16px"};
  font-weight: ${(props) => props.fontWeight || "bold"};
  @media (max-width: 375px) {
    font-size: 12px;
  }
`;