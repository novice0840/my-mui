import { ReactNode } from "react";
import { Wrapper } from "./StorybookWrapper.styled";

interface StorybookWrapperProps {
  children: ReactNode;
}

const StorybookWrapper = ({ children }: StorybookWrapperProps) => {
  return <Wrapper>{children}</Wrapper>;
};

export default StorybookWrapper;
