import React from "react";
import Header from "./header";

interface Props {
  title: string;
  children: React.ReactNode;
}

const Layout = (props: Props) => {
  return (
    <>
      <title>{props.title}</title>
      <Header />
      <div>{props.children}</div>
    </>
  );
};

export default Layout;
