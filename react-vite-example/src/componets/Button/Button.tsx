import styled from "styled-components";

const StyledButton = styled.button`
  background-color: ${(props) => (props.color ? props.color : "gray")};
`;

const Button = ({ children, color }) => {
  return <StyledButton color={color}>{children}</StyledButton>;
};

export { Button };
