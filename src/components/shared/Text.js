import styled from "styled-components";

const Text = styled.p`
  font-size: ${(props) => (props.fontSize || 18) + "px"};
  padding: ${(props) => props.padding};
  margin: ${(props) => (props.margin || 0) + "px"};
  margin-bottom: ${(props) => (props.marginBottom || 0) + "px"};
  margin-right: ${(props) => (props.marginRight || 0) + "px"};
  margin-left: ${(props) => (props.marginLeft || 0) + "px"};
  margin-top: ${(props) => (props.marginTop || 0) + "px"};
  color: ${(props) => props.color || "#000"};
  cursor: ${(props) => (props.cursor ? "pointer" : "default")};
  font-weight: ${(props) => props.fontWeight || "400"};
  text-decoration: ${(props) => props.textDecoration || "none"};
  text-transform: ${(props) => (props.uppercase ? "uppercase" : "normal")};
  text-align: ${(props) => props.textAlign};
  font-family: ${(props) => props.fontFamily || "GT Walsheim Pro"};
  line-height: ${(props) =>
    (props.lineHeight || (props.fontSize || 18) + 8) + "px"};
  @media (max-width: 500px) {
    font-size: ${(props) => (props.fontSize || 14) + "px"};
    margin-bottom: ${(props) =>
      (props.mobileMarginBottom || props.marginBottom || 0) + "px"};
  }
`;

export default Text;
