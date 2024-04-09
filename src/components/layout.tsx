import React from "react";
import Header from "./header";
import Xizmatlar from "@/pages/xizmatlar/xizmatlar";

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
      <Xizmatlar />
    </>
  );
};

export default Layout;
