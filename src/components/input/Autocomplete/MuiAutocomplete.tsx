import { Autocomplete, AutocompleteProps } from "@mui/material";
import TextField from "@mui/material/TextField";

type PickType = "disablePortal" | "id" | "options" | "renderInput";

export interface MuiAutocomplete
  extends Pick<AutocompleteProps<{ label: string; year: number }, false, false, false>, PickType> {
  label?: string;
}

const MuiAutocomplete = ({ ...rest }: MuiAutocomplete) => {
  return <Autocomplete {...rest} />;
};

export default MuiAutocomplete;
