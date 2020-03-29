import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';

const { Header, Sider, Content } = Layout;

export default function HomePage() {
  const [collapsed, setCollapsed] = React.useState(false);

  const onToggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div id="layout-custom-trigger">
      <Layout style={{ minHeight: '100vh' }}>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          {!collapsed ? 
            <div className="logo" style={{textAlign:'center', color: '#fff', fontSize: '15px', padding: '5px'}}>
              React Boilerplate 4.1
            </div> : 
            <div className="logo" style={{textAlign:'center', color: '#fff', fontSize: '15px', padding: '5px'}}>
              RB
            </div>
          }
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <UserOutlined />
              <span>nav 1</span>
            </Menu.Item>
            <Menu.Item key="2">
              <VideoCameraOutlined />
              <span>nav 2</span>
            </Menu.Item>
            <Menu.Item key="3">
              <UploadOutlined />
              <span>nav 3</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ paddingLeft: '20px' }}>
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: onToggle,
            })}
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
            <FormattedMessage {...messages.header} />
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}
