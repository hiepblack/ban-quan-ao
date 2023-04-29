import { Space, Table, Tag,Button } from 'antd';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';



const TableCate = (props) => {
  const onRemove =(id)=>{
    props.onRemoveCate(id)
  }
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
          <Button onClick={()=>nextpage(record._id)}>Cập nhật</Button>
          <Button onClick={()=>onRemove(record._id)}>Xóa</Button>
        </Space>
      ),
    },
  ];
  const [data,setcates] = useState([])
  const naviagte = useNavigate()
  const nextpage =(id)=>{
    naviagte(""+id)
}
  useEffect(()=>{
    setcates(props.cates)
  },[props])
  return(
    <Table style={{width:"full", paddingRight:"15px"}} columns={columns} dataSource={data} />
  )
};
export default TableCate;