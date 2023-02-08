import { DeleteOutlined, ExclamationCircleOutlined } from "@ant-design/icons";
import { Popconfirm, Space, Table } from "antd";
import type { ColumnsType } from "antd/es/table";

const TableStore: React.FC = () => {
  interface DataType {
    key: string;
    code_store: string;
    name_store: string;
    address: string;
    phone: string;
    status: boolean;
  }

  const columns: ColumnsType<DataType> = [
    {
      title: "ID",
      dataIndex: "key",
      key: "id",
    },
    {
      title: "MÃ CỬA HÀNG",
      dataIndex: "code_store",
      key: "code_store",
    },
    {
      title: "TÊN CỬA HÀNG",
      dataIndex: "name_store",
      key: "name_store",
    },
    {
      title: "ĐỊA CHỈ",
      key: "address",
      dataIndex: "address",
    },
    {
      title: "ĐIỆN THOẠI",
      key: "phone",
      dataIndex: "phone",
    },
    {
      title: "TRẠNG THÁI",
      key: "status",
      dataIndex: "status",
      render: (text: string, row: DataType) => {
        return <div>{row.status === true ? "Có hiệu lực" : "Vô hiệu lực"}</div>;
      },
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
                // handleEditCategory(record);
              }}
            >
              Sửa
            </span>
            <Popconfirm
              placement="topRight"
              title={`Bạn có muốn xóa??`}
              // onConfirm={() => {
              //   confirm(record);
              // }}
              okText="Yes"
              cancelText="No"
            >
              <DeleteOutlined />
            </Popconfirm>
            <ExclamationCircleOutlined style={{ cursor: "pointer" }} />
          </Space>
        );
      },
    },
  ];

  const data: DataType[] = [
    {
      key: "1",
      code_store: "ONLINE",
      name_store: "Web Manoshop",
      address: "New York No. 1 Lake Park",
      phone: "0947836722",
      status: false,
    },
    {
      key: "2",
      code_store: "284LTK",
      name_store: "284LTK",
      address: "London No. 1 Lake Park",
      phone: "	0987656342",
      status: true,
    },
    {
      key: "3",
      code_store: "CHLLB",
      name_store: "Luỹ Bán Bích",
      address: "Sydney No. 1 Lake Park",
      phone: "0938204249",
      status: true,
    },
  ];

  return (
    <>
      <Table columns={columns} dataSource={data} pagination={false} />
    </>
  );
};

export default TableStore;
