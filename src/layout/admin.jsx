import {
  MenuFoldOutlined,
  MenuUnfoldOutlined ,
  MailOutlined,
  AppstoreOutlined,
  AreaChartOutlined

} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
import { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
const { Header, Sider, Content } = Layout;

const AdminLayout = () => {

  function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate()
  const nextpage = (e)=>{
    if(e.key==="0"){
      return navigate("/admin")
     }
    if(e.key==="1"){
     return navigate("/admin/productManager")
    }if(e.key==="2"){
     return navigate("/admin/addNewProduct")
    }if(e.key==="3"){
     return navigate("/admin/CateManager")
    }if(e.key==="4"){
      return navigate("/admin/addNewCate")
     }
   }
   const items = [
    getItem('Thống kê', '0', <AreaChartOutlined />),
    getItem('Quản lí sản phẩm', 'sub1', <MailOutlined />, [
      getItem('Danh sách sản phẩm', '1'),
      getItem('Thêm mới sản phẩm', '2'),
    ]),
    getItem('Quản lí danh mục', 'sub2', <AppstoreOutlined />, [
      getItem('Danh sách danh mục', '3'),
      getItem('Thêm mới danh mục', '4'),
      
    ]),
  ];
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed} style={{backgroundColor:"#FFFF", width:'350px'}}>
        <div className="logo" style={{textAlign:"center"}}>
        <img src="https://www.pngmart.com/files/21/Admin-Profile-Vector-PNG-Clipart.png" style={{width:"50px" ,height:"50px",marginBottom:"20px"}} alt="" />
        </div>
        <Menu
          theme="light"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={items}
          onClick={nextpage}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: "#FFFF",
           
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <Outlet/>
        </Content>
      </Layout>
    </Layout>
  );
};
export default AdminLayout;