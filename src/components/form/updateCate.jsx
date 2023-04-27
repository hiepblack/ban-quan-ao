import { PlusOutlined } from '@ant-design/icons';
import {
  Button,
  Form,
  Input,
} from 'antd';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
const UpdateCate = (props) => {
    const [cate,setcate] = useState({})
    const {id} = useParams()
    useEffect(()=>{
        const current = props.cates.find((item)=>item._id===id);
        console.log(current)
        setcate(current)
    },[props])
  const onHandleSubmit =(value)=>{
      props.onUpdateCate(value,id)
  }
  const [form]= Form.useForm();
  const setValue = ()=>{
    form.setFieldsValue({
        _id:cate?._id,
        nameCategory:cate?.nameCategory
    })
  }
  useEffect(()=>{
    setValue()
  },[cate])
  return (
    <>

      <Form
      form={form}
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        style={{
          maxWidth: 600,
        }}
        onFinish={onHandleSubmit}
      >
        <Form.Item label="Tên Danh mục" name="nameCategory">
          <Input />
        </Form.Item>
      <Form.Item label="Xác nhận">
        <Button type="primary" htmlType="submit">Xác nhận</Button>
      </Form.Item>
      </Form>
    </>
  );
};
export default UpdateCate;