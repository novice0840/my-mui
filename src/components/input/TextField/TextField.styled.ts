import styled from "styled-components";

export const Wrapper = styled.div<{ isActive: boolean }>`
  width: 223px;
  height: 56px;
  color: rgba(0, 0, 0, 0.6);
  padding: 16.5px 14px;
  position: relative;
  border: 1px solid rgba(0, 0, 0, 0.23);
  border-radius: 4px;
  cursor: text;

  &:hover {
    border: 1px solid rgba(0, 0, 0);
  }

  ${(props) => props.isActive && "border: 1px solid blue;"}
`;

export const Label = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(14px, 16px) scale(1);
  transition:
    color 200ms cubic-bezier(0, 0, 0.2, 1) 0ms,
    transform 200ms cubic-bezier(0, 0, 0.2, 1) 0ms,
    max-width 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
  z-index: 1;
  pointer-events: none;

  ${Wrapper}:focus-within & {
    transform: translate(14px, -10px) scale(0.8); /* label을 위로 이동하고 크기를 줄임 */
  }
`;

export const Input = styled.input`
  border: 0;

  &:focus {
    border: 0;
    outline: 0;
  }
`;
