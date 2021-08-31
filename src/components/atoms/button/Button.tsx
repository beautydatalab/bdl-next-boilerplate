import { ButtonHTMLAttributes } from "react";

import styled from "styled-components";

const StyledButton = styled.button``;

const Button = (props: ButtonHTMLAttributes<HTMLButtonElement>) => (
  <StyledButton {...props} />
);

export default Button;
