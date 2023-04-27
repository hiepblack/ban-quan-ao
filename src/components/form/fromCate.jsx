import { PlusOutlined } from '@ant-design/icons';
import {
  Button,
  Checkbox,
  Form,
  Input,
  Select,
  Upload,
} from 'antd';
const Formcate = (props) => {
  const onHandleSubmit =(value)=>{
      props.onAddCate(value)
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
export default Formcate;