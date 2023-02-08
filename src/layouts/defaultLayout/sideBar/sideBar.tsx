import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Layout, Menu, theme } from "antd";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./index.scss";

const { Header, Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("Bán hàng", "/", <PieChartOutlined />),
  getItem("Tồn kho", "2", <DesktopOutlined />),
  getItem("Nhân sự", "sub1", <UserOutlined />),
  getItem("Giao hàng", "sub2", <TeamOutlined />),
  getItem("Báo caó", "9", <FileOutlined />),
];

const Sidebar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleContent = (item: any) => {
    navigate(item.key);
  };

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider className="custom-aside">
        <div />
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
          onClick={handleContent}
          selectedKeys={[location.pathname]}
        />
      </Sider>
      <Layout className="site-layout">
        <Header style={{ padding: 0, background: colorBgContainer }} />
      </Layout>
    </Layout>
  );
};

export default Sidebar;
