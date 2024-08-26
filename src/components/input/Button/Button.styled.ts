import styled from "styled-components";
import type { MuiButtonProps } from "./MuiButton";

const buttonVariant = {
  text: `
    border: 0; 
    `,
  outlined: `
    border: 1px solid rgba(25, 118, 210, 0.5); 
  `,
  contained: `
    color: #fff;
    background-color: #1976d2;
    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
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

const buttonPadding = {
  small: {
    text: "padding: 4px 5px;",
    outlined: "padding: 3px 9px;",
    contained: "padding: 4px 10px;",
  },
  medium: {
    text: "padding: 6px 8px;",
    outlined: "padding: 5px 15px;",
    contained: "padding: 6px 16px;",
  },
  large: {
    text: "padding: 8px 11px;",
    outlined: "padding: 7px 21px;",
    contained: "padding: 8px 22px;",
  },
};

const buttonDisabled = {
  text: `
    color: rgba(0, 0, 0, 0.26);
  `,
  outlined: `
    color: rgba(0, 0, 0, 0.26);
    border: 1px solid rgba(0, 0, 0, 0.12);
  `,
  contained: `
    color: rgba(0, 0, 0, 0.26);
    box-shadow: none;
    background-color: rgba(0, 0, 0, 0.12);
  `,
};

export const Wrapper = styled.button<MuiButtonProps>`
  background-color: transparent;
  border: 0;
  text-transform: uppercase;
  border-radius: 4px;

  color: ${(props) => props.theme.color[props.color || "primary"]};
  ${(props) => buttonVariant[props.variant || "text"]};
  ${(props) => buttonSize[props.size || "medium"]};
  ${(props) => buttonPadding[props.size || "medium"][props.variant || "text"]}
  ${(props) => props.fullWidth && "width: 100%;"}
  ${(props) => props.disabled && buttonDisabled[props.variant || "text"]}
`;
