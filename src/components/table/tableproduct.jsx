 import { Space, Table, Tag ,Image,Button,Popconfirm} from 'antd';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { updateProductstatus } from '../../api/products';
import Recycle from '../recyclebin/recyclebin';

const TableProduct = (props) => {
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
          <Button onClick={()=>nextpage(record._id)}>Cập nhật</Button>
      <Popconfirm
        title="Bạn có chắc muốn xóa sản phẩm này?"
        onConfirm={()=>recyclebin(record._id)}
        okText="Xóa"
        cancelText="Hủy"
        >
        <Button>Chuyển thùng rác</Button>
      </Popconfirm>
        </Space>
      ),
    },
  ];
  const [data,setproducts] = useState([]);
  const recyclebin =(id)=>{
    const spam = {
      id:id,
      status: "fales"
    }
    props.onStatus(spam)
  }
  const naviagte = useNavigate()
  const nextpage =(id)=>{
      naviagte(""+id)
  }
  useEffect(()=>{
    const product = props.products.filter((item)=>item.status!=="fales")
    setproducts(product)
  },[props])
  return(
    <>
      <div><Recycle data={props.products} onStatus={props.onStatus}/></div>
      <Table  columns={columns} dataSource={data} pagination={{pageSize:5}}/>
    </>
    
  )
}
export default TableProduct;