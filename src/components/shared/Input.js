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
  return (
    <>
      {label && (
        <Label marginBottom={labelMarginBottom}>
          {" "}
          {label}&nbsp;
          {required && <span style={{ color: "red", fontSize: 18 }}>*</span>}
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
  padding: 30px 20px;
  font-size: 18px;
  outline: none;
  width: 100%;
  height: 80px;
  color: #fff;
  background: #503b66;
  border-radius: 10px;
  box-sizing: border-box;
  margin-bottom: ${(props) => props.marginBottom || "6px"};
  ::placeholder,
  ::-webkit-input-placeholder {
    color: #ffffff;
    opacity: 0.5;
  }
`;

const Label = styled.label`
  font-weight: 700;
  line-height: 29px;
  margin-bottom: ${(props) => props.marginBottom || "20px"};
  font-size: ${(props) => props.fontSize || "25px"};
  color: #fff;
  display: ${(props) => props.display || "inline-block"};
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
