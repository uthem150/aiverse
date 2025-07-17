import type { ReactNode } from "react";
import { StyledLayout, StyledContent } from "./Layout.style";
import Header from "../Header/Header";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <StyledLayout>
      <Header />
      <StyledContent>{children}</StyledContent>
    </StyledLayout>
  );
};

export default Layout;
