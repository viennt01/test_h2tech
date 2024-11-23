import {
  Button,
  Col,
  Dropdown,
  Flex,
  MenuProps,
  Pagination,
  Row,
  Typography,
} from "antd";
import {
  EditOutlined,
  LaptopOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import styles from "./custom-pagination.module.css";
import { useState } from "react";
export default function ContentBody() {
  const { Title, Text } = Typography;
  const [hoveredId, setHoveredId] = useState<number>(0);

  const data = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
    { id: 8 },
  ];

  const items: MenuProps["items"] = [
    {
      label: "View Resources",
      key: "1",
      icon: <LaptopOutlined />,
    },
    {
      label: "Edit Resources",
      key: "2",
      icon: <EditOutlined />,
    },
    {
      label: "version history",
      key: "3",
      icon: <DeleteOutlined />,
      danger: true,
    },
  ];

  const menuProps = {
    items,
  };

  return (
    <div>
      <Row gutter={[16, 16]}>
        {data.map((item) => (
          <Col
            id={`${item.id}`}
            xxl={6}
            xl={8}
            lg={12}
            md={12}
            sm={24}
            span={24}
            onMouseEnter={() => {
              setHoveredId(item.id);
            }}
            onMouseLeave={() => {
              setHoveredId(0);
            }}
            style={{ cursor: "pointer" }}
          >
            <Flex
              vertical
              style={{
                width: "100%",
                border: `1px solid ${
                  hoveredId !== item.id ? "#CBCBCB" : "#3B6EF8"
                }`,
                borderRadius: 16,
                padding: 16,
                boxShadow:
                  hoveredId === item.id
                    ? "0 4px 8px rgba(59, 110, 248, 0.3)"
                    : "none",
                transition: "box-shadow 0.3s ease-in-out",
              }}
            >
              <Flex
                style={{ width: "100%" }}
                align="ceter"
                justify="space-between"
              >
                <Title
                  style={{
                    fontWeight: 600,
                    fontSize: 16,
                    margin: 0,
                    textAlign: "center",
                    justifyContent: "center",
                  }}
                >
                  Unit 1 - Page 1 & 2
                </Title>
                <Dropdown menu={menuProps}>
                  <Button type="text">
                    <img
                      src="/content/tab.png"
                      alt="menu content"
                      style={{ width: 18, height: 18 }}
                    />
                  </Button>
                </Dropdown>
              </Flex>
              <Text
                style={{
                  fontWeight: 300,
                  fontSize: 10,
                }}
              >
                Version 1
              </Text>
              <img
                src="/content/content.png"
                alt="menu content"
                style={{
                  borderRadius: 16,
                  margin: "16px 0",
                }}
              />
              <Flex align="center" justify="space-between">
                <Button
                  style={{
                    width: 141,
                    height: 34,
                    color: hoveredId !== item.id ? "#172B4D" : "#3B6EF8",
                    borderColor: hoveredId !== item.id ? "" : "#3B6EF8",
                    fontWeight: 700,
                    fontSize: 12,
                    paddingRight: "40px",
                  }}
                >
                  Quick review
                </Button>
                <img
                  src={
                    hoveredId !== item.id
                      ? "/content/inactive.png"
                      : "/content/active.png"
                  }
                  alt="menu content"
                />
              </Flex>
            </Flex>
          </Col>
        ))}
      </Row>
      <Flex align="center" justify="flex-end" style={{ marginTop: 16 }}>
        <Pagination total={50} />
      </Flex>
    </div>
  );
}
