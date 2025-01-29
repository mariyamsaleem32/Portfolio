import React, { useState } from "react";
import { Layout, Button, Switch, Row, Col, Typography, Card } from "antd";
import { GithubOutlined, LinkedinOutlined, DownloadOutlined, MailOutlined } from "@ant-design/icons";
import image from '../assets/myImage.jpg'; 

const { Header, Content, Footer } = Layout;
const { Title } = Typography;

const Dashboard = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleMode = (checked) => {
    setIsDarkMode(checked);
  };

  // Common style for links
  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    fontSize: '32px',
    fontStyle: 'italic',
    fontWeight: '400',
    margin: '15px'
  };

  return (
    <Layout className={isDarkMode ? "dark-mode" : ""}>
      <Header
        theme="dark"
        mode="horizontal"
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1,
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <a href="#about" style={linkStyle}>About</a>
        <a href="#resume" style={linkStyle}>Project</a>
        <a href="#skills" style={linkStyle}>Skills</a>
        <a href="#contact" style={linkStyle}>Contact</a>
      </Header>

      {/* Background Switch */}
      <div className="check">
      <Switch checked={isDarkMode} onChange={toggleMode} />
      <span style={{ marginLeft: "10px" }}>Dark Mode</span>
      </div>

      <Content style={{ padding: "50px 0" }} >
        <div className="about">
          <section id="about">
          <Title level={3} style={{color: isDarkMode ? "white" : "black" }}>Mariyam Saleem</Title>
          <p style={{color: isDarkMode ? "white" : "black" }}>Front-End Developer</p>
            <h1 style={{color: isDarkMode ? "white" : "black" }}>Hi all, I'm Mariyam Saleem <span role="img" aria-label="wave">👋</span></h1>
            <p style={{color: isDarkMode ? "white" : "black" }}>A front-end developer 🚀 with experience in building Web and Mobile applications using HTML, CSS, JavaScript, React, and Bootstrap.</p>
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
                <Button type="link" href="https://ephemeral-monstera-d13333.netlify.app/" target="_blank">Live Demo</Button>
              </Card>
            </Col>
            <Col xs={24} sm={12} md={8}>
              <Card hoverable>
                <Card.Meta title="ageCalculator" description="A age calculator using HTML, CSS, and JavaScript." />
                <Button type="link" href="https://github.com/mariyamsaleem32/age-calculator.git" target="_blank">GitHub</Button>
                <Button type="link" href="https://66ddd2b136036929eab837fb--heroic-fenglisu-b2e51b.netlify.app/" target="_blank">Live Demo</Button>
              </Card>
            </Col>
            <Col xs={24} sm={12} md={8}>
              <Card hoverable>
                <Card.Meta title="rock paper scissors" description="A classic game built with HTML, CSS, and JavaScript." />
                <Button type="link" href="https://github.com/mariyamsaleem32/rock-paper-scissors-game.git" target="_blank">GitHub</Button>
                <Button type="link" href="https://s-p-s-game.netlify.app/" target="_blank">Live Demo</Button>
              </Card>
            </Col>
          </Row>
          <br /><br />
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12} md={8}>
              <Card hoverable>
                <Card.Meta title="web page" description="A web page of deal card built with HTML, CSS, and bootStrap." />
                <Button type="link" href="https://github.com/mariyamsaleem32/deal-cart-website.git" target="_blank">GitHub</Button>
              </Card>
            </Col>
            <Col xs={24} sm={12} md={8}>
              <Card hoverable>
                <Card.Meta title="Stopwatch" description="A stopwatch application using HTML, CSS, and JavaScript." />
                <Button type="link" href="https://github.com/mariyamsaleem32/stop-watch.git" target="_blank">GitHub</Button>
                <Button type="link" href="https://wonderful-liger-03971f.netlify.app/" target="_blank">Live Demo</Button>
              </Card>
            </Col>
            <Col xs={24} sm={12} md={8}>
              <Card hoverable>
                <Card.Meta title="Tic-Tac-Toe" description="A classic game built with HTML, CSS, and JavaScript." />
                <Button type="link" href="https://github.com/mariyamsaleem32/Tic-Tac-Toe-game.git" target="_blank">GitHub</Button>
                <Button type="link" href="https://66ddd1d8366cded38203f37c--effulgent-sunflower-fe1c29.netlify.app/" target="_blank">Live Demo</Button>
              </Card>
            </Col>
          </Row>
        </div>
      </Content>

      {/* Skills Section */}
      <Content style={{ padding: "50px 0" }} id="skills">
        <div className="skills-container" style={{color: isDarkMode ? "white" : "black" }}>
          <Title level={2} style={{color: isDarkMode ? "white" : "black" }}>What I do</Title>
          <p>I'm a passionate front-end developer who loves creating interactive user interfaces with modern web technologies.</p>
        </div>
      </Content>

      {/* Proficiency Section */}
      <Content style={{ padding: "20px", backgroundColor: "#f9f9f9" }}>
        <div className="skills-container">
          <Title level={2}>Proficiency</Title>
          <Row>
            {["HTML", "CSS", "JavaScript", 'Firebase', 'React', "Bootstrap",'Ant Design'].map((skill) => (
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
        <div style={{ textAlign:'center', color: isDarkMode ? "white" : "black" }}>
          <Title level={2} style={{color: isDarkMode ? "white" : "black" }}>Reach Out to me!</Title>
          <p>Discuss a project or just want to say hi? My inbox is open for all.</p>
          <a href="https://github.com/mariyamsaleem32?tab=repositories"><GithubOutlined style={{ fontSize: "24px", margin: "10px" }} /></a>
          <a href="https://www.linkedin.com/in/mariyam-saleem-a227052b7/"><LinkedinOutlined style={{ fontSize: "24px", margin: "10px" }} /></a>
          <a href="mailto:mariyamsaleem87@gmail.com"><MailOutlined style={{ fontSize: "24px", margin: "10px" }} /></a>
        </div>
      </Content>
      <Footer
      style={{ textAlign: "center",color: isDarkMode ? "white" : "black", backgroundColor: isDarkMode ? "#011" : "white" }}>
        Created by Mariyam Saleem
    </Footer>
    </Layout>
  );
};

export default Dashboard;
