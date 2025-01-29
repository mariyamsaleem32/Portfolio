import { Link } from "react-router-dom";
import {  Layout, theme } from 'antd';
import '../App.css';
const { Header, Content } = Layout;


const AppLayout = ({children}) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{
        height: '100vh'
    }}>
     <Header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1,
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
          {/* <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
         /> */}
         <div>
            <Link to={'/'}  style={{
            color:'white',
           textDecoration:'none',
           fontSize:'32px',
           fontStyle:'italic',
           fontWeight:'400px'
           }}>Home</Link>
         </div>
      </Header>
      <Content
        style={{
          padding: '0 48px',
          margin: '15px',
          fontSize: '38px',
          textAlign: 'center',
          fontStyle:'italic',
          fontWeight: 'bolder',
        }}
      >
        <div
          style={{
            padding: 24,
            minHeight: 550,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          {children}
        </div>
      </Content>
    </Layout>
  );
};
export default AppLayout;