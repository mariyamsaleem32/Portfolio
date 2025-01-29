import {  Layout, theme } from 'antd';
import '../App.css';
const {Content } = Layout;


const AppLayout = ({children}) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{
        height: '100vh'
    }}>
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