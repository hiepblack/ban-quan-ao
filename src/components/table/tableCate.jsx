import { Space, Table, Tag } from 'antd';
import { useEffect, useState } from 'react';
const columns = [
  {
    title: 'Name',
    dataIndex: 'nameCategory',
    key: 'name'
  },
  {
    title: 'Số Lượng sản phẩm',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];

const TableCate = (props) => {
  const [data,setcates] = useState([])
  useEffect(()=>{
    setcates(props.cates)
  },[props])
  console.log(data)
  return(
    <Table style={{width:"full", paddingRight:"15px"}} columns={columns} dataSource={data} />
  )
};
export default TableCate;