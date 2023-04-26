 import { Space, Table, Tag ,Image} from 'antd';
import { useEffect, useState } from 'react';
const columns = [
  {
    title: 'Name',
    dataIndex: 'nameProduct',
    key: 'name',
    
  },
  {
    title: 'Image',
    dataIndex: 'imgProduct',
    key: 'imgProduct',
    render: (img) => <Image width={100} src={img[0]}/>,
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
  },
  {
    title: 'Size',
    dataIndex: 'size',
    key: 'size',
    render:(item)=> item.map((size)=><p>{size}</p>)
  },
  {
    title: 'Màu',
    dataIndex: 'colors',
    key: 'colors',
    render:(item)=> item.map((color)=><p>{color}</p>)
  },
  {
    title: 'Số lượng',
    dataIndex: 'quantity',
    key: 'quantity',
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
const TableProduct = (props) => {
  const [data,setproducts] = useState([])
  useEffect(()=>{
    setproducts(props.products)
  },[props])
  console.log(data);
  return(
    <Table  columns={columns} dataSource={data} pagination={{pageSize:5}}/>
  )
}
export default TableProduct;