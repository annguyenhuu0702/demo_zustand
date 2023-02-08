import { Button, Form, Tabs } from "antd";
import "antd/dist/reset.css";
import { useNavigate } from "react-router-dom";
import "./index.scss";
import TableStore from "./TableStore";

const Store: React.FC = () => {
  const navigate = useNavigate();
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  const onChange = (key: string) => {
    console.log(key);
  };

  const itemTabs = [
    {
      label: "Tất cả",
    },
  ];

  const handleAddStore = () => {
    navigate("/store/add");
  };
  return (
    <main style={{ width: "100%" }}>
      <section className="header-top">
        <h3 className="title">Danh sách cửa hàng</h3>
        <Button type="primary" onClick={handleAddStore}>
          Thêm mới
        </Button>
      </section>
      <section style={{ background: "#f3f4f6 " }}>
        <div className="tabs-cus">
          <Tabs
            onChange={onChange}
            type="card"
            items={itemTabs.map((item: any) => {
              return {
                label: item.label,
                key: item.label,
                children: "",
              };
            })}
          />
          <div className="tabs-filter">
            <Form
              name="basic"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              style={{ maxWidth: 600 }}
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            ></Form>
            <span>Bộ lọc tìm kiếm...</span>
          </div>
        </div>
      </section>
      <section className="table-cus">
        <TableStore />
      </section>
    </main>
  );
};

export default Store;
