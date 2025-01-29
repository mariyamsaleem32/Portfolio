import React, {useState} from "react";
import { Layout, Button, Switch, Row, Col, Typography, Card } from "antd";
import { GithubOutlined, LinkedinOutlined, DownloadOutlined, MailOutlined } from "@ant-design/icons";
// import { Link } from "react-router-dom";

import image from '../assets/myImage.jpg'; 

const { Content,Footer  } = Layout;
const { Title, Paragraph } = Typography;
  
const Dashboard = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleMode = (checked) => {
    setIsDarkMode(checked);
  };

  return (
    <Layout className={isDarkMode ? "dark-mode" : ""}>
      {/* Header Section */}
     
      {/* Background Switch */}
      <div className="check">
        <Switch checked={isDarkMode} onChange={toggleMode} />
        <span style={{ marginLeft: "10px" }}>Dark Mode</span>
      </div>

      {/* About Section */}
      <Content style={{ padding: "50px 0" }}>
        <div className="about">
          <section id="about">
          <Title level={3} style={{ color: "white" }}>Mariyam Saleem</Title>
          <p style={{ color: "white" }}>Front-End Developer</p>
            <h1>Hi all, I'm Mariyam Saleem <span role="img" aria-label="wave">👋</span></h1>
            <p>A front-end developer 🚀 with experience in building Web and Mobile applications using HTML, CSS, JavaScript, and Bootstrap.</p>
          </section>
          <div className="image">
            <img src={image} alt="Mariyam Saleem" style={{ borderRadius: '50%', width: '150px', height: '150px' }} />
          </div>
        </div>
      </Content>

      {/* Resume Section */}
      <section id="resume" style={{ textAlign: "center", padding: "20px" }}>
        <Button type="primary" icon={<MailOutlined />} href="mailto:mariyamsaleem87@gmail.com">Contact Me</Button>
        <Button type="default" icon={<DownloadOutlined />} href="/resume.pdf" download="Mariyam_Saleem_Resume" style={{ marginLeft: "10px" }}>Download Resume</Button>
      </section>

      {/* Open Source Projects Section */}
      <Content style={{ padding: "50px 0", backgroundColor: "#f9f9f9" }}>
        <div className="source">
          <Title level={2}>Open Source Projects</Title>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12} md={8}>
              <Card hoverable>
                <Card.Meta title="Calculator" description="A calculator built with HTML, CSS, and JavaScript." />
                <Button type="link" href="https://github.com/mariyamsaleem32/calculator.git" target="_blank">GitHub</Button>
              </Card>
            </Col>
            <Col xs={24} sm={12} md={8}>
              <Card hoverable>
                <Card.Meta title="Stopwatch" description="A stopwatch application using HTML, CSS, and JavaScript." />
                <Button type="link" href="https://github.com/mariyamsaleem32/stop-watch.git" target="_blank">GitHub</Button>
              </Card>
            </Col>
            <Col xs={24} sm={12} md={8}>
              <Card hoverable>
                <Card.Meta title="Tic-Tac-Toe" description="A classic game built with HTML, CSS, and JavaScript." />
                <Button type="link" href="https://github.com/mariyamsaleem32/Tic-Tac-Toe-game.git" target="_blank">GitHub</Button>
              </Card>
            </Col>
          </Row>
        </div>
      </Content>

      {/* Skills Section */}
      <Content style={{ padding: "50px 0" }}>
        <div className="skills-container">
          <Title level={2}>What I do</Title>
          <p>I'm a passionate front-end developer who loves creating interactive user interfaces with modern web technologies.</p>
        </div>
      </Content>

      {/* Proficiency Section */}
      <Content style={{ padding: "20px", backgroundColor: "#f9f9f9" }}>
        <div className="skills-container">
          <Title level={2}>Proficiency</Title>
          <Row>
            {["HTML", "CSS", "JavaScript", "Bootstrap"].map((skill) => (
              <Col span={6} key={skill} style={{ marginBottom: "20px" }}>
                <Card>
                  <Card.Meta title={skill} />
                  <div className="placeholder" style={{ width: "75%", height: "10px", backgroundColor: "#4CAF50" }}></div>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </Content>

      {/* Contact Section */}
      <Content style={{ padding: "50px 0" }} id="contact">
        <div style={{ textAlign: "center" }}>
          <Title level={2}>Reach Out to me!</Title>
          <p>Discuss a project or just want to say hi? My inbox is open for all.</p>
          <a href="https://github.com/mariyamsaleem32?tab=repositories"><GithubOutlined style={{ fontSize: "24px", margin: "10px" }} /></a>
          <a href="https://www.linkedin.com/in/mariyam-saleem-a227052b7/"><LinkedinOutlined style={{ fontSize: "24px", margin: "10px" }} /></a>
          <a href="mailto:mariyamsaleem87@gmail.com"><MailOutlined style={{ fontSize: "24px", margin: "10px" }} /></a>
        </div>
      </Content>
      <Footer
      style={{ textAlign: "center", backgroundColor: isDarkMode ? "#333" : "#fff" }}>
        Created by Mariyam Saleem
    </Footer>
    </Layout>
  );
};

export default Dashboard;
