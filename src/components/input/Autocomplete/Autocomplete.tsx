import type { MuiAutocomplete } from "./MuiAutocomplete";
import { Wrapper } from "./Autocomplete.styled";

const Autocomplete = ({ ...rest }: MuiAutocomplete) => {
  return (
    <Wrapper {...rest}>
      <label></label>
      <input type="text" />
    </Wrapper>
  );
};

export default Autocomplete;
