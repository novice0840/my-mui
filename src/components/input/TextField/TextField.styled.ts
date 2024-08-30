import styled from "styled-components";

export const Wrapper = styled.div<{ isFocus: boolean }>`
  width: 223px;
  height: 56px;
  color: rgba(0, 0, 0, 0.6);
  position: relative;
  cursor: text;
  padding: 16.5px 14px;
`;

export const InputOutline = styled.div<{ isFocus: boolean }>`
  width: inherit;
  height: inherit;
  position: absolute;
  top: 0;
  left: 0;
  border: 1px solid rgba(0, 0, 0, 0.23);
  border-radius: 4px;
  &:hover {
    ${(props) => !props.isFocus && "border: 1px solid rgba(0, 0, 0);"}
  }

  ${(props) => props.isFocus && "border: 2px solid #1976d2;"}
`;

export const Label = styled.label<{ isBlank: boolean; isFocus: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  transform-origin: left top;
  transform: translate(14px, 16px) scale(1);
  transition:
    color 200ms cubic-bezier(0, 0, 0.2, 1) 0ms,
    transform 200ms cubic-bezier(0, 0, 0.2, 1) 0ms,
    max-width 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
  z-index: 1;
  pointer-events: none;

  /* Input에 focus가 되어 있거나 Input에 text에 남아있는 경우 라벨은 위쪽으로 이동한다 */
  ${(props) =>
    (props.isFocus || !props.isBlank) &&
    `
    transform: translate(9px, -9px) scale(0.75);
    padding: 0 5px;
    background-color: white;
  `}

  ${(props) =>
    props.isFocus &&
    `
    color: #1976d2;
  `}
`;

export const Input = styled.input`
  border: 0;

  &:focus {
    border: 0;
    outline: 0;
  }
`;
