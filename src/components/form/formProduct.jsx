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


const { TextArea } = Input;
const Formproduct = (props) => {
  const [fileList, setFileList] = useState([]);
  const[cate,setcate]= useState([]);
  useEffect(()=>{
    setcate(props.cates)
  },[props])
  const onHandleSubmit = async (value)=>{
    const size = value.size.split(",")
    const colors = value.colors.split(",")
    const listImage = fileList.map((item)=>item.originFileObj);
    console.log(listImage);
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
    props.onAdd(newproduct)
  }
  return (
    <>

      <Form
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
export default Formproduct;