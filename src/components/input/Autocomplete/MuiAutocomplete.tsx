import { Autocomplete, AutocompleteProps } from "@mui/material";

type PickType = "options" | "renderInput" | "sx";
/*
  option: 각 칸에 들어갈 내용물의 배열

  renderInput: 각 칸에 들어갈 내용물을 담을 태그
*/

export type MuiAutocomplete = Pick<
  AutocompleteProps<{ label: string; year: number }, false, false, false>,
  PickType
>;

const MuiAutocomplete = ({ ...rest }: MuiAutocomplete) => {
  return <Autocomplete {...rest} />;
};

export default MuiAutocomplete;
