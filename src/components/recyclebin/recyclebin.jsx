import React, { useEffect, useState } from 'react';

import { PlusOutlined,DeleteOutlined } from '@ant-design/icons';
import { Button, Col, DatePicker, Drawer, Form, Input, Table, Image, Space ,Popconfirm ,message} from 'antd';
import { deleteproduct } from '../../api/products';




const Recycle = (props) => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

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
            <Popconfirm
        title="Bạn có chắc muốn xóa sản phẩm này?"
        onConfirm={()=>onRemove(record._id)}
        okText="oke"
        cancelText="Hủy"
        >
        <Button>Xóa</Button>
      </Popconfirm>
          
      <Popconfirm
        title="Bạn có chắc muốn khôi phục lại sản phẩm này?"
        onConfirm={()=>recyclebin(record._id)}
        okText="oke"
        cancelText="Hủy"
        >
        <Button>Khôi phục</Button>
      </Popconfirm>
        </Space>
      ),
    },
  ];
  const [data,setproducts] = useState([]);
  const recyclebin =(id)=>{
    const spam = {
      id:id,
      status: "true"
    }
    props.onStatus(spam)
  }
  const onRemove =(id)=>{
    const current = data.filter((item)=>item._id!==id)
    message.success("Xóa thành công")
    deleteproduct(id).then(()=>setproducts(current))
  }
  useEffect(()=>{
    const product = props.data.filter((item)=>item.status==="fales")
    setproducts(product)
  },[props])
  return (
    <>
      <Button type="primary" onClick={showDrawer} icon={<DeleteOutlined />}>
        Thùng rác
      </Button>
      <Drawer
        title="Thùng rác"
        width={700}
        onClose={onClose}
        open={open}
        bodyStyle={{ paddingBottom: 80 }}
        extra={
          <Space>
            <Button onClick={onClose}>Cancel</Button>
          </Space>
        }
      >
        <Table  columns={columns} dataSource={data} pagination={{pageSize:5}}/>
      </Drawer>
    </>
  );
};

export default Recycle;