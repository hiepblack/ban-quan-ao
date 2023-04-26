import {
    AppstoreOutlined,

    MenuFoldOutlined,
    MailOutlined,
    MenuUnfoldOutlined
  } from '@ant-design/icons';
  import { Button, Menu ,Sider} from 'antd';
  import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
  function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }
  const items = [
    getItem('Quản lí sản phẩm', 'sub1', <MailOutlined />, [
      getItem('Danh sách sản phẩm', '1'),
      getItem('Thêm mới sản phẩm', '2'),
    ]),
    getItem('Quản lí danh mục', 'sub2', <AppstoreOutlined />, [
      getItem('Danh sách danh mục', '3'),
      getItem('Thêm mới danh mục', '4'),
      
    ]),
  ];
  const SliderBar = () => {
    const [collapsed, setCollapsed] = useState(false);
    const navigate = useNavigate()
    const toggleCollapsed = () => {
      setCollapsed(!collapsed);
      
    };
    const nextpage = (e)=>{
     if(e.key==="1"){
      return navigate("/admin/productManager")
     }if(e.key==="2"){
      return navigate("/admin/AddnewProduct")
     }if(e.key==="3"){
      return navigate("/admin/CateManager")
     }
    }
    return (
      <div
        style={{
          width: "full",
        }}
      >
        <Button
          type="primary"
          onClick={toggleCollapsed}
          style={{
            marginBottom: 16,
          }}
        >
          {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </Button>
        <Sider trigger={null} collapsible collapsed={collapsed}>
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          trigger={null}
          mode="inline"
          theme="light"
          items={items}
          onClick={nextpage}
        />
        </Sider>
      </div>
    );
  };
  export default SliderBar