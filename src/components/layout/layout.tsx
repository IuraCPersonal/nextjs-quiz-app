import React from "react";
import MainNavigation from "./main-navigation";

interface Props {
  children: string | JSX.Element | JSX.Element[];
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <React.Fragment>
      <MainNavigation />
      <main className="min-h-full">{children}</main>
    </React.Fragment>
  );
};

export default Layout;
