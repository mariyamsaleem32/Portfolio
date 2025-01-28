import React, { useState } from "react";
import { Layout, Menu, Button, Switch, Card, Typography } from "antd";
import { GithubOutlined, LinkedinOutlined, DownloadOutlined } from "@ant-design/icons";
import { Container, Row, Col } from 'react-bootstrap';  
import '../App.css';

const { Header, Content, Footer } = Layout;
const { Title, Paragraph } = Typography;

const Dashboard = () => {
  // State for dark/light mode toggle
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMode = (checked) => {
    setIsDarkMode(checked);
  };

  return (
    <>
    <Layout className={isDarkMode ? "dark-mode" : ""}>
      {/* Header Section */}
      <Header>
        <Container>
          <Row className="align-items-center">
            <Col xs={12} md={6}>
              <Title level={3} style={{ color: "white" }}>Mariyam Saleem</Title>
              <p style={{ color: "white" }}>Web Developer</p>
            </Col>
            <Col xs={12} md={6} className="text-md-end">
              <Menu theme={isDarkMode ? "dark" : "light"} mode="horizontal">
                <Menu.Item icon={<LinkedinOutlined />}>
                  <a href="https://www.linkedin.com/in/mariyam-saleem-a227052b7/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </Menu.Item>
                <Menu.Item icon={<GithubOutlined />}>
                  <a href="https://github.com/mariyamsaleem32" target="_blank" rel="noopener noreferrer">GitHub</a>
                </Menu.Item>
              </Menu>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Button icon={<DownloadOutlined />} href="/resume.pdf" download="Mariyam_Saleem_Resume">Download Resume</Button>
          </Row>
        </Container>
      </Header>

      {/* About Me Section */}
      <Content style={{ padding: "50px 0" }}>
        <Container>
          <Title level={2}>About Me</Title>
          <Row className="justify-content-center">
            <Col xs={12} md={6} className="text-center">
              <img
                src="path/to/your/image.jpg"
                alt="Mariyam Saleem"
                style={{ borderRadius: '50%', width: '150px', height: '150px' }}
              />
            </Col>
          </Row>
          <Paragraph className="text-center">
            Hi! I am Mariyam Saleem, a passionate Web Developer with a keen interest in becoming a Full-Stack Developer. I specialize in front-end technologies like React, but I am always eager to expand my knowledge in backend development. I am dedicated to creating user-friendly and visually appealing web applications.
          </Paragraph>
        </Container>
      </Content>

      {/* Skills Section */}
      <Content style={{ padding: "50px 0", background: isDarkMode ? "#333" : "#fff" }}>
        <Container>
          <Title level={2}>Skills</Title>
          <Row>
            {["HTML", "CSS", "JavaScript", "React", "Git", "Firebase", "Bootstrap"].map((skill) => (
              <Col xs={12} sm={6} md={4} key={skill} className="mb-4">
                <Card className="text-center">
                  <Card.Body>
                    <Card.Title>{skill}</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </Content>

      {/* Toggle Dark/Light Mode */}
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <Switch checked={isDarkMode} onChange={toggleMode} />
        <span style={{ marginLeft: "10px" }}>Dark Mode</span>
      </div>

      {/* Footer */}
      <Footer style={{ textAlign: "center", background: isDarkMode ? "#333" : "#fff" }}>
        Created by Mariyam Saleem
      </Footer>
    </Layout>
    </> );
};

export default Dashboard;
