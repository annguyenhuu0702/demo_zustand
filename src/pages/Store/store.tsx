import { Button, Popover, Tabs } from "antd";
import "antd/dist/reset.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomPagination from "./CustomPagination";
import FilterForm from "./FilterForm";
import "./index.scss";
import TableStore from "./TableStore";

const Store: React.FC = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState<boolean>(false);

  const onChange = (key: string) => {
    console.log(key);
  };

  const itemTabs = [
    {
      label: "Tất cả",
    },
  ];

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen);
  };

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
      <section
        style={{
          background: "#f3f4f6",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
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
            <Popover
              content={<FilterForm onClose={handleClose} />}
              placement="bottomLeft"
              trigger="click"
              open={open}
              onOpenChange={handleOpenChange}
            >
              <span>Bộ lọc tìm kiếm...</span>
            </Popover>
          </div>
        </div>
        <div style={{ marginRight: 24 }}>
          <CustomPagination />
        </div>
      </section>
      <section className="table-cus">
        <TableStore />
      </section>
    </main>
  );
};

export default Store;
