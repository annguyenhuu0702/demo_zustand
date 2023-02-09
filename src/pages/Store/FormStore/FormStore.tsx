import { Button, Col, Form, Input, Row, Select, Tooltip } from "antd";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useStoreStore from "../../../zustand/store";
import "./index.scss";

const FormStore: React.FC = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const { id } = useParams();

  const { addStore, getStoreById, setStore, editStore, store } =
    useStoreStore();

  console.log(store);

  const onFinish = (values: any) => {
    if (store) {
      editStore({ ...store, ...values });
    } else {
      addStore({
        key: Math.random().toFixed(3),
        ...values,
      });
    }
    navigate("/");
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  useEffect(() => {
    if (id) {
      getStoreById(id);
    } else {
      setStore(null);
    }
  }, [getStoreById, setStore, id]);

  useEffect(() => {
    if (store) {
      form.setFieldsValue(store);
    } else {
      form.setFieldsValue({
        address: "",
        code_store: "",
        name_store: "",
        phone: "",
        province: "",
        coordinates: "",
        status: true,
      });
    }
  }, [form, store]);

  return (
    <main className="form-store">
      <div className="title">
        <span
          onClick={() => {
            navigate("/");
          }}
        >
          Cửa hàng
        </span>
        {!store ? <h3>Thêm cửa hàng</h3> : <h3>Cập nhật cửa hàng</h3>}
      </div>
      <Form
        className="cus-form"
        layout="vertical"
        form={form}
        autoComplete="off"
        initialValues={{
          address: "",
          code_store: "",
          name_store: "",
          phone: "",
          province: "",
          coordinates: "",
          status: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Row>
          <Col xl={18} className="content-left">
            <Row style={{ borderBottom: "1px solid #f3f4f6" }}>
              <Col xl={8} className="info">
                <h5>Thông tin cửa hàng</h5>
                <p>Thông tin chi tiết cửa hàng</p>
              </Col>
              <Col xl={16} className="main-content">
                <Row>
                  <Col xl={12}>
                    <Form.Item
                      label="Tên cửa hàng"
                      name="name_store"
                      rules={[
                        {
                          required: true,
                          message: "Please input your username!",
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col xl={8}>
                    <Form.Item
                      label="Mã cửa hàng"
                      name="code_store"
                      rules={[
                        {
                          required: true,
                          message: "Please input your username!",
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                  </Col>
                </Row>
                <Row>
                  <Col xl={12}>
                    <Form.Item label="Điện thoại" name="phone">
                      <Input />
                    </Form.Item>
                  </Col>
                </Row>
                <Row>
                  <Col xl={24}>
                    <div>
                      <Form.Item
                        label="Địa chỉ"
                        name="address"
                        style={{ marginBottom: "0" }}
                      >
                        <Input
                          addonAfter={
                            <Tooltip
                              placement="top"
                              title="Mở bản đồ Google Maps và tự động tới địa chỉ bạn nhập (để copy toạ độ Lat, Long).
                            Tìm hiểu thêm......."
                            >
                              <span>Google Maps</span>
                            </Tooltip>
                          }
                        />
                      </Form.Item>
                      <Form.Item
                        label=""
                        name="coordinates"
                        className="coordinates"
                      >
                        <Input addonBefore={<span>Tọa độ trên bản đồ</span>} />
                      </Form.Item>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col xl={8}>
                    <Form.Item label="Tỉnh / Thành Phố" name="province">
                      <Select
                        showSearch
                        allowClear
                        placeholder="Chọn"
                        options={[
                          {
                            value: "jack",
                            label: "Jack",
                          },
                          {
                            value: "lucy",
                            label: "Lucy",
                          },
                          {
                            value: "tom",
                            label: "Tom",
                          },
                        ]}
                      />
                    </Form.Item>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
          <Col xl={6} className="content-right">
            <Form.Item
              label="Trạng thái"
              name="status"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <Select
                placeholder="Có hiệu lực"
                options={[
                  {
                    value: true,
                    label: "Có hiệu lực",
                  },
                  {
                    value: false,
                    label: "Vô hiệu lực",
                  },
                ]}
              />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                size="large"
                style={{ width: "100%" }}
              >
                Lưu thông tin
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </main>
  );
};

export default FormStore;
