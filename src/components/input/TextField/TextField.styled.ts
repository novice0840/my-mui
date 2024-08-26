import styled from "styled-components";

export const Wrapper = styled.div`
  color: rgba(0, 0, 0, 0.6);
  padding: 16.5px 14px;
  position: relative;
  border: black 1px solid;
`;

export const Label = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(14px, 16px) scale(1);

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
