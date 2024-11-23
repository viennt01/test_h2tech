import {
  Button,
  ConfigProvider,
  Dropdown,
  Flex,
  Input,
  MenuProps,
  Space,
} from "antd";
import {
  SearchOutlined,
  TagsFilled,
  SortAscendingOutlined,
  DownOutlined,
  UserOutlined,
} from "@ant-design/icons";
export default function Fillter() {
  const items: MenuProps["items"] = [
    {
      label: "1st menu item",
      key: "1",
      icon: <UserOutlined />,
    },
    {
      label: "2nd menu item",
      key: "2",
      icon: <UserOutlined />,
    },
    {
      label: "3rd menu item",
      key: "3",
      icon: <UserOutlined />,
      danger: true,
    },
    {
      label: "4rd menu item",
      key: "4",
      icon: <UserOutlined />,
      danger: true,
      disabled: true,
    },
  ];

  const menuProps = {
    items,
  };

  return (
    <Flex align="center" justify="space-between" style={{ marginBottom: 16 }}>
      <Flex gap={"small"}>
        <ConfigProvider
          theme={{
            components: {
              Input: {
                colorIcon: "rgb(37,99,235)",
                colorIconHover: "rgb(37,99,235)",
                hoverBorderColor: "rgb(37,99,235)",
                colorTextPlaceholder: "rgb(37,99,235)",
                colorBorder: "rgb(37,99,235)",
              },
            },
          }}
        >
          <Input
            size="large"
            placeholder="Search Resources"
            prefix={<SearchOutlined style={{ color: "rgb(37,99,235)" }} />}
          />
        </ConfigProvider>
        <Input
          size="large"
          placeholder="Search by Tags..."
          suffix={<TagsFilled />}
        />
      </Flex>
      <Flex gap={"small"}>
        <Button
          style={{
            width: 81,
            height: 40,
            fontWeight: 400,
            fontSize: 16,
            color: "#828282",
          }}
          type="text"
          icon={<SortAscendingOutlined />}
        >
          Sort
        </Button>
        <Dropdown menu={menuProps}>
          <Button
            style={{
              width: 110,
              height: 40,
              fontWeight: 400,
              fontSize: 16,
              color: "#333333",
            }}
          >
            <Space>
              Button
              <DownOutlined />
            </Space>
          </Button>
        </Dropdown>
      </Flex>
    </Flex>
  );
}
