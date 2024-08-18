import { MuiButtonProps } from "./MuiButton";
import { Wrapper } from "./Button.styled";

const Button = ({ label, ...rest }: MuiButtonProps) => {
  return <Wrapper {...rest}>{label}</Wrapper>;
};

export default Button;
