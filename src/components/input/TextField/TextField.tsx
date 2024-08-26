import { MuiTextFieldProps } from "./MuiTextField";
import { Wrapper, Label, Input } from "./TextField.styled";

const TextField = ({ label, defaultValue, ...rest }: MuiTextFieldProps) => {
  return (
    <Wrapper>
      <Label>{label}</Label>
      <Input type="text" value={defaultValue as string} />
    </Wrapper>
  );
};

export default TextField;
