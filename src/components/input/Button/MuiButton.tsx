import { Button, ButtonProps } from "@mui/material";

type PickType = "variant" | "color" | "disabled" | "fullWidth" | "size";

export interface MuiButtonProps extends Pick<ButtonProps, PickType> {
  label?: string;
}

const MuiButton = ({ label, ...rest }: MuiButtonProps) => {
  return <Button {...rest}>{label}</Button>;
};

export default MuiButton;
