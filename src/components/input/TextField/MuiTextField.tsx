import { TextField, TextFieldProps } from "@mui/material";

const MuiTextField = ({ ...rest }: TextFieldProps) => {
  return <TextField {...rest} />;
};

export default MuiTextField;
