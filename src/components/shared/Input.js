import { useIsMobile } from "@/utils/general";
import React from "react";
import styled from "styled-components";

const Input = ({
  type = "text",
  label,
  error,
  errorMsg,
  required = false,
  maxLength,
  errorTop = false,
  onChange = () => {},
  onBlur = () => {},
  labelMarginBottom,
  ...rest
}) => {
  const isMobile = useIsMobile();
  return (
    <>
      {label && (
        <Label marginBottom={labelMarginBottom}>
          {" "}
          {label}&nbsp;
          {required && (
            <span style={{ color: "red", fontSize: isMobile ? 14 : 18 }}>
              *
            </span>
          )}
        </Label>
      )}
      <InputStyle
        {...rest}
        isError={error}
        type={type}
        style={{ position: "relative" }}
        onChange={onChange}
        onBlur={onBlur}
        maxLength={maxLength}
      />
      {error && <ErrorStyle errorTop={errorTop}>{errorMsg}</ErrorStyle>}
    </>
  );
};

export default Input;

const InputStyle = styled.input.attrs((props) => ({
  row: 20,
  maxlength: props.maxLength,
  htmlFor: props.htmlFor,
}))`
  max-width: 100%;
  padding: 17px 20px;
  font-size: 16px;
  outline: none;
  width: 100%;
  height: 50px;
  color: #797979;
  background: #f2f2f2;
  border-radius: 5px;
  box-sizing: border-box;
  margin-bottom: ${(props) => props.marginBottom || "0px"};
  ::placeholder,
  ::-webkit-input-placeholder {
    color: #797979;
  }

  @media (max-width: 768px) {
    height: 40px;
    padding: 12px;
    font-size: 14px;
    margin: 0;
  }
`;

const Label = styled.label`
  font-weight: 700;
  line-height: 29px;
  margin-bottom: ${(props) => props.marginBottom || "14px"};
  font-size: ${(props) => props.fontSize || "18px"};
  color: #000;
  display: ${(props) => props.display || "inline-block"};

  @media (max-width: 768px) {
    font-size: 14px;
    margin-bottom: 8px;
  }
`;

const ErrorStyle = styled.span`
  font-size: ${(props) => (props.fontSize || 14) + "px"};
  margin: 0px;
  margin-bottom: ${(props) => (props.marginBottom || 5) + "px"};
  color: #dd3d3c;
  font-weight: normal;
  letter-spacing: 0.03em;

  ${(props) =>
    props.errorTop &&
    css`
      position: absolute;
      top: 0;
      right: 15px;
    `};
`;
