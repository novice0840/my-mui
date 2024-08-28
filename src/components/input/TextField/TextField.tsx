import { useRef, useState } from "react";
import { MuiTextFieldProps } from "./MuiTextField";
import { Wrapper, Label, Input } from "./TextField.styled";

const TextField = ({ label, defaultValue, ...rest }: MuiTextFieldProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
      setIsActive(true);
    }
  };

  const handleFocus = () => {
    // setIsActive(true);
  };

  const handleBlur = () => {
    setIsActive(false);
  };

  return (
    <Wrapper onClick={handleClick} isActive={isActive}>
      <Label>{label}</Label>
      <Input
        type="text"
        ref={inputRef}
        value={defaultValue as string}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </Wrapper>
  );
};

export default TextField;
