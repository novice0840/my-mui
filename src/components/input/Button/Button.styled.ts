import styled from "styled-components";
import type { MuiButtonProps } from "./MuiButton";

const buttonVariant = {
  text: `
    border: 0; 
    padding: 6px 8px;
    `,
  outlined: `
    border: 1px solid rgba(25, 118, 210, 0.5); 
    padding: 5px 15px;`,
  contained: `
    color: #fff;
    background-color: #1976d2;
    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
    padding: 6px 16px;
    `,
};

const buttonSize = {
  small: `
        font-size: 0.8125rem;
    `,
  medium: `
        font-size: 0.875rem;

    `,
  large: `
        font-size: 0.9375rem;
    `,
};

// TODO: size, variant에 따른 padding 값
// small text 4 5
// small outlined 3 9
// small contained 4 10

// medium text 6 8
// medium outlined 5 15
// medium contained 6 16

// large text 8 11
// large outlined 7 21
// large contained 8 22

export const Wrapper = styled.button<MuiButtonProps>`
  background-color: transparent;
  border: 0;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: 500;
  line-height: 1.75;
  letter-spacing: 0.02857em;
  text-transform: uppercase;
  border-radius: 4px;

  color: ${(props) => props.theme.color[props.color || "primary"]};
  ${(props) => buttonVariant[props.variant || "text"]};
  ${(props) => buttonSize[props.size || "medium"]};
`;
