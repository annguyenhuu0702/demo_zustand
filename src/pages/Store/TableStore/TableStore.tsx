import { DeleteOutlined, ExclamationCircleOutlined } from "@ant-design/icons";
import { Popconfirm, Space, Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import { useNavigate } from "react-router-dom";
import useStoreStore, { Istore } from "../../../zustand/store";

const TableStore: React.FC = () => {
  const navigate = useNavigate();
  const { stores, deleteStore } = useStoreStore();

  const handleStore = (record: any) => {
    navigate(`/store/edit/${record.key}`);
  };

  const confirm = (record: any) => {
    deleteStore(record.key);
  };

  const columns: ColumnsType<any> = [
    {
      title: "ID",
      dataIndex: "key",
      key: "id",
      width: 80,
    },
    {
      title: "MÃ CỬA HÀNG",
      dataIndex: "code_store",
      key: "code_store",
      width: 120,
    },
    {
      title: "TÊN CỬA HÀNG",
      dataIndex: "name_store",
      key: "name_store",
      width: 440,
    },
    {
      title: "ĐỊA CHỈ",
      key: "address",
      dataIndex: "address",
      width: 440,
    },
    {
      title: "ĐIỆN THOẠI",
      key: "phone",
      dataIndex: "phone",
      width: 120,
    },
    {
      title: "TRẠNG THÁI",
      key: "status",
      dataIndex: "status",
      render: (text: string, row: Istore) => {
        return <div>{row.status === true ? "Có hiệu lực" : "Vô hiệu lực"}</div>;
      },
      width: 110,
    },
    {
      title: "",
      key: "action",
      dataIndex: "action",
      render: (text: string, record: any) => {
        return (
          <Space size="middle">
            <span
              style={{
                cursor: "pointer",
                color: "rgb(1, 104, 250",
              }}
              onClick={() => {
                handleStore(record);
              }}
            >
              Sửa
            </span>
            <Popconfirm
              placement="topRight"
              title={`Bạn có muốn xóa??`}
              onConfirm={() => {
                confirm(record);
              }}
              okText="Yes"
              cancelText="No"
            >
              <DeleteOutlined className="icon-delete" />
            </Popconfirm>
            <ExclamationCircleOutlined style={{ cursor: "pointer" }} />
          </Space>
        );
      },
    },
  ];

  return (
    <>
      <Table
        columns={columns}
        dataSource={stores}
        pagination={false}
        size="small"
        tableLayout="fixed"
      />
    </>
  );
};

export default TableStore;
