import { Button, Col, Form, Input, Row } from "antd";

type Props = Partial<{
  onClose: any;
}>;

const FilterForm = ({ onClose }: Props) => {
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item label="Từ khóa">
          <Input placeholder="Mã, tên cửa hàng" />
        </Form.Item>
        <Row>
          <Col xs={8} style={{ textAlign: "right" }}>
            <Button htmlType="button" onClick={() => onClose()} type="link">
              Đóng
            </Button>
          </Col>
          <Col xs={16}>
            <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
              Tìm kiếm
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default FilterForm;
