import type { MenuProps } from "antd";
import { Layout, Menu } from "antd";
import React from "react";
import SideBar from "./sideBar/sideBar";
const { Header, Sider } = Layout;

export const DefaultLayout: React.FC = ({ children }: any) => {
  const items1: MenuProps["items"] = ["1", "2", "3"].map((key) => ({
    key,
    label: `nav ${key}`,
  }));
  return (
    <section>
      <Header className="header" style={{ background: "fff" }}>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={items1}
        />
      </Header>
      <div style={{ display: "flex" }}>
        <SideBar />
        {children}
      </div>
    </section>
  );
};

export default DefaultLayout;
