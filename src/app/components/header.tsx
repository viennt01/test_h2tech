import { Button, ConfigProvider, Flex, Typography } from "antd";
export default function HeaderContent() {
  const { Title } = Typography;

  return (

      <Flex align="center" justify="space-between" style={{ marginBottom: 16 }}>
        <Title
          style={{
            fontWeight: 500,
            fontSize: 20,
          }}
        >
          Content Management
        </Title>
        <Button
          style={{
            width: 165,
            height: 40,
            fontWeight: 700,
            fontSize: 13,
          }}
          type="primary"
          icon={<img src="/content/btn-header.png" />}
        >
          New UPLOAD
        </Button>
      </Flex>
  );
}
