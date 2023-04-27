import { PlusOutlined } from '@ant-design/icons';
import {
  Button,
  Checkbox,
  Form,
  Input,
  Select,
  Upload,
} from 'antd';
import { useEffect, useState } from 'react';
import { uploadImage } from '../../api/uploadimg';
import { useParams } from 'react-router-dom';


const { TextArea } = Input;
const UpdateProduct = (props) => {
  const [fileList, setFileList] = useState([]);
  const [product,setproduct] = useState({})
  const[cate,setcate]= useState([]);
  const {id} = useParams()
  useEffect(()=>{
    const current = props.products.find((item)=>item._id===id)
    setproduct(current)
    setcate(props.cates)
  },[props])
  const onHandleSubmit = async (value)=>{
    const size = value.size.split(",");
    const colors = value.colors.split(",");
    if(fileList.length===0){
        const newproduct = {
            nameProduct:value.nameProduct,
            price:value.price,
            size:size,
            quantity:value.quantity,
            colors:colors,
            description:value.description,
            brand:value.brand,
            categoryId:value.categoryId,
            imgProduct:product?.imgProduct,
          }
          return props.onUpdate(newproduct,id)
    }else{
        const listImage = fileList.map((item)=>item.originFileObj);
        const img = await uploadImage(listImage);
        const newproduct = {
          nameProduct:value.nameProduct,
          price:value.price,
          size:size,
          quantity:value.quantity,
          colors:colors,
          description:value.description,
          brand:value.brand,
          categoryId:value.categoryId,
          imgProduct:img
        }
      return  props.onUpdate(newproduct,id)
    }
    
   
  }
  const [form] = Form.useForm();
  useEffect(()=>{
    setValue()
  },[product])

  const setValue =()=>{

    form.setFieldsValue({
        nameProduct:product?.nameProduct,
        price:product?.price,
        size:product?.size?.toString(),
        quantity:product?.quantity,
        colors:product?.colors?.toString(),
        description:product?.description,
        brand:product?.brand,
        categoryId:product?.categoryId
    })
  }
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
        <Form.Item label="Tên sản phẩm" name="nameProduct">
          <Input />
        </Form.Item>
        <Form.Item label="Giá" name="price">
          <Input type='number' />
        </Form.Item>
        <Form.Item label="Danh mục" name="categoryId">
          <Select>
          {cate.map((item)=>{
            return(<Select.Option value={item._id}>{item.nameCategory}</Select.Option>)
          })}
          </Select>
        </Form.Item>
        <Form.Item label="Size" name="size">
        <Input/>
        </Form.Item>
        <Form.Item label="Màu" name="colors">
          <Input />
        </Form.Item>
        <Form.Item label="Hãng" name="brand">
          <Input />
        </Form.Item>
        <Form.Item label="Số Lượng" name="quantity">
          <Input type='number'/>
        </Form.Item>
        <Form.Item label="Giới thiệu" style={{paddingRight:"10px"}} name="description">
          <TextArea rows={4} />
        </Form.Item>
        <Form.Item label="Upload" valuePropName="fileList" rules={[{ required: true }]}>
        <Upload beforeUpload={(files)=>{console.log(files);
                   return false}} listType="picture-card"  onChange={({ fileList: newFileList }) => setFileList(newFileList)}>
                    <div>
                        <PlusOutlined />
                        <div style={{ marginTop: 8 }}>Upload</div>
                    </div>
        </Upload>
        </Form.Item>
      <Form.Item label="Xác nhận">
        <Button type="primary" htmlType="submit">Xác nhận</Button>
      </Form.Item>
      </Form>
    </>
  );
};
export default UpdateProduct;