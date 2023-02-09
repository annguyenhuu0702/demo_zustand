import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Button, InputNumber, Popover, Space } from "antd";

const CustomPagination = () => {
  return (
    <Space>
      <span>
        <LeftOutlined />
      </span>
      <Popover
        placement="bottom"
        trigger="click"
        content={() => {
          return (
            <div style={{ width: 200 }}>
              <InputNumber
                addonBefore="Tới trang"
                addonAfter=" / 1"
                defaultValue={1}
              />
            </div>
          );
        }}
      >
        <Button type="text">Trang 1 / 1</Button>
      </Popover>
      <span>
        <RightOutlined />
      </span>
    </Space>
  );
};

export default CustomPagination;
