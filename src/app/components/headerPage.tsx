import { Avatar, Col, Flex, Layout, Row, Typography } from "antd";

export default function HeaderLayout() {
  const { Header } = Layout;
  const { Title, Text } = Typography;

  return (
    <Header
      style={{
        padding: "0 16px",
        background: "#f5f5f5",
        height: 99,
      }}
    >
      <Flex
        style={{ width: "100%", height: "100%" }}
        justify={"space-between"}
        align={"center"}
      >
        <Flex align={"center"} gap={"small"}>
          <img
            src="/header/header.png"
            alt="menu content"
            style={{ width: 18, height: 18 }}
          />
          <div style={{ fontWeight: 400, fontSize: 16, lineHeight: 22.4 }}>
            Content Management
          </div>
        </Flex>
        <Flex align={"center"} gap={24}>
          <Flex align={"center"} gap={"small"} justify={"center"}>
            <Avatar src="/header/avatar.jpeg" size={40} />
            <Row>
              <Col md={0} sm={0} lg={24} xs={0} span={24}>
                <Flex vertical gap={1}>
                  <Title
                    level={5}
                    style={{
                      fontWeight: 700,
                      fontSize: 13,
                      marginBottom: 0,
                    }}
                  >
                    Jack Kimber
                  </Title>
                  <Text
                    style={{
                      fontWeight: 400,
                      fontSize: 12,
                    }}
                  >
                    Content Manager
                  </Text>
                </Flex>
              </Col>
            </Row>
            <img
              src="/header/down.png"
              alt="menu content"
              style={{ width: 14, height: 7 }}
            />
          </Flex>
          <img
            src="/header/bel.png"
            alt="bel"
            style={{ width: 30, height: 30 }}
          />
        </Flex>
      </Flex>
    </Header>
  );
}
