import React, { Component } from 'react'
import { Router, Link } from 'react-router'
import { Layout, Menu, Breadcrumb, Icon } from 'antd'
const { SubMenu } = Menu
const { Header, Content, Sider } = Layout
import 'antd/dist/antd.css'
import '../css/index.less'

export default class index extends Component {
  render() {
    const { children } = this.props
    return (
      <Layout>
        <Header className="header">System</Header>
        <div className="topMenu">
          <Menu
            theme="light"
            mode="horizontal"
            style={{ lineHeight: '32px' }}
          >
            <Menu.Item key="/">首页</Menu.Item>
            <Menu.Item key={'/draggable'}>拖拽功能</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
          </Menu>
        </div>
        <Layout>
          <Sider width={200} style={{ background: '#fff' }}>
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%', borderRight: 0 }}
            >
              <SubMenu key="sub1" title={<span><Icon type="user" />subnav 1</span>}/>
              <SubMenu key="sub2" title={<span><Icon type="laptop" />subnav 2</span>}/>
              <SubMenu key="sub3" title={<span><Icon type="notification" />subnav 3</span>}/>
            </Menu>
          </Sider>
          <Layout style={{ padding: '24px' }}>
            <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
              {children}
            </Content>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}