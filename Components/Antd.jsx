import {
    AppstoreOutlined,
    ContainerOutlined,
    DesktopOutlined,
    MailOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    PieChartOutlined,
     HomeOutlined,
     ProjectOutlined,UserOutlined,
  } from '@ant-design/icons';
  import { Button, Menu } from 'antd';
  import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
  import React, { useState } from 'react';
import Hero from './Hero';
  
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
    getItem('Home', '1', <HomeOutlined />),
    getItem('About', '2', <UserOutlined />),
    getItem('projects', '3', <ProjectOutlined />),
    getItem('contact', '4', <MailOutlined />),


  ];
  
  const App = () => {
    const [collapsed, setCollapsed] = useState(false);
  
    const toggleCollapsed = () => {
      setCollapsed(!collapsed);
    };
  
    return (
      <div
       className=' absolute h-screen w-screen'
      >
        <Button
          type="primary"
          onClick={toggleCollapsed}
           className='fixed left-96'
        >
          {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </Button>
        <Menu
        className='fixed top-64'
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
          inlineCollapsed={collapsed}
          items={items}
        />
      </div>
    );
  };
  
  export default App;