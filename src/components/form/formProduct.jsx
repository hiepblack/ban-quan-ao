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
const { TextArea } = Input;
const normFile = (e) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};
const Formproduct = () => {
  const [fileList, setFileList] = useState([]);
  const[cate,setcate]= useState([]);
  useEffect(()=>{
    setcate()
  },[])
  const onHandleSubmit = ()=>{
    
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
        <Form.Item label="Tên sản phẩm">
          <Input />
        </Form.Item>
        <Form.Item label="Giá">
          <Input type='number' />
        </Form.Item>
        <Form.Item label="Danh mục">
          <Select>
            <Select.Option value="demo">Demo</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Size">
          <Select>
            <Select.Option value="demo">Size</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Màu">
          <Select>
            <Select.Option value="demo">Color</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Giới thiệu" style={{paddingRight:"10px"}}>
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