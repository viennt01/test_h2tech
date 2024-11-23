"use client";
import React from "react";
import { ConfigProvider, Layout, theme } from "antd";
import HeaderContent from "./components/header";
import Fillter from "./components/fillter";
import ContentBody from "./components/content";
import HeaderLayout from "./components/headerPage";
import SliderLayout from "./components/sliderPage";

const { Content } = Layout;
const App: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <ConfigProvider
      theme={{
        components: {
          Menu: {
            itemSelectedColor: "rgb(255,255,255)",
            itemSelectedBg: "rgb(59,110,248)",
            itemColor: "rgb(79,79,79)",
            controlHeightLG: 50,
          },
        },
      }}
    >
      <Layout style={{ minHeight: "100vh", padding: "10px" }}>
        <SliderLayout />
        <Layout>
          <HeaderLayout />
          <Content
            style={{
              margin: "0 16px",
              padding: 24,
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <HeaderContent />
            <Fillter />
            <ContentBody />
          </Content>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
};

export default App;
