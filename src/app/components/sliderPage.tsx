import { Col, Layout, Menu, Row, theme } from "antd";

import { HomeOutlined, FolderOpenOutlined } from "@ant-design/icons";

export default function SliderLayout() {
  const { Sider } = Layout;
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Sider
      breakpoint="lg"
      width="256px"
      collapsedWidth="80"
      collapsible
      trigger={null}
      style={{ borderRadius: 10, backgroundColor: colorBgContainer }}
    >
      <div
        style={{
          height: 99,
          width: "100%",
          position: "relative",
          backgroundColor: "white",
        }}
      >
        <div
          style={{
            content: '""',
            position: "absolute",
            bottom: 0,
            left: 0,
            height: "1px",
            width: "100%",
            background:
              "linear-gradient(to right, rgba(224,225,225,0), rgba(0,0,0,0.5), rgba(224,225,225,0))",
          }}
        ></div>
      </div>
      <Row>
        <Col md={0} sm={0} lg={24} xs={0} span={24}>
          <div
            style={{
              height: 45,
              alignItems: "center",
              display: "flex",
              paddingLeft: 28,
              fontWeight: 700,
              fontSize: 14,
              lineHeight: 21,
            }}
          >
            School Resources
          </div>
        </Col>
      </Row>
      <Menu
        theme="light"
        mode="inline"
        defaultSelectedKeys={["1"]}
        items={[
          {
            key: "1",
            icon: <HomeOutlined />,
            label: (
              <div style={{ fontWeight: 700, fontSize: 13 }}>
                Content Management
              </div>
            ),
          },
          {
            key: "2",
            icon: <FolderOpenOutlined />,
            label: (
              <div style={{ fontWeight: 700, fontSize: 13 }}>
                Course Managamen
              </div>
            ),
          },
        ]}
      />
    </Sider>
  );
}
