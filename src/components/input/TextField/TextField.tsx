import { useRef, useState } from "react";
import { MuiTextFieldProps } from "./MuiTextField";
import { Wrapper, Label, Input, InputOutline } from "./TextField.styled";

const TextField = ({ label }: MuiTextFieldProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocus, setIsFocus] = useState(false);
  const isBlank = inputRef.current ? inputRef.current?.value === "" : true;

  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
      setIsFocus(true);
    }
  };

  const handleBlur = () => {
    setIsFocus(false);
  };

  return (
    <Wrapper onClick={handleClick} isFocus={isFocus}>
      <Label isBlank={isBlank} isFocus={isFocus}>
        {label}
      </Label>
      <Input type="text" ref={inputRef} onBlur={handleBlur} />
      <InputOutline isFocus={isFocus} />
    </Wrapper>
  );
};

export default TextField;
