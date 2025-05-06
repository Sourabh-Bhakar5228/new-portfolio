import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import { Box, Typography } from '@mui/material';
import { styled, keyframes } from '@mui/system';

// Keyframes for rotation animation
const rotate = keyframes`
  from {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
`;

// Styled components for SkillsOrbit
const OrbitWrapper = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transformOrigin: 'center',
  animation: `${rotate} linear infinite`,
}));

const Orbit = styled(Box)(({ theme }) => ({
  border: '1px dashed rgba(255, 255, 255, 0.2)',
  borderRadius: '9999px',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
}));

const Label = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: '50%',
  transform: 'translate(-50%, -50%)',
  background: '#1e293b',
  color: 'white',
  padding: '4px 8px',
  borderRadius: '9999px',
  fontSize: '12px',
  whiteSpace: 'nowrap',
  [theme.breakpoints.down('sm')]: {
    fontSize: '10px',
    padding: '2px 6px',
  },
}));

const CenterDot = styled(Box)(({ theme }) => ({
  width: '16px',
  height: '16px',
  backgroundColor: 'white',
  borderRadius: '50%',
  margin: '0 auto 8px',
  [theme.breakpoints.down('sm')]: {
    width: '12px',
    height: '12px',
    marginBottom: '6px',
  },
}));

const SkillsOrbit = () => {
  const orbits = [
    { size: 150, duration: 12, label: 'HTML & CSS' },
    { size: 190, duration: 14, label: 'JavaScript & JQuery' },
    { size: 230, duration: 10, label: 'BootStrap or Tailwind CSS' },
    { size: 270, duration: 16, label: 'React Js' },
    { size: 310, duration: 13, label: 'Next Js' },
    { size: 350, duration: 11, label: 'Node Js' },
    { size: 390, duration: 15, label: 'Express Js' },
    { size: 430, duration: 18, label: 'Mongo DB' },
    { size: 470, duration: 17, label: 'AWS (Learning Phase)' },
    { size: 510, duration: 19, label: 'Linux OS (Learning Phase)' },
    { size: 550, duration: 20, label: 'MERN Stack Developer' },
    { size: 590, duration: 21, label: 'Next.js Developer' },
  ];

  return (
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        p: 2,
      }}
    >
      <Box
        sx={{
          position: 'relative',
          width: { xs: '100%', sm: '700px' },
          height: { xs: '100vw', sm: '700px' },
          maxWidth: '700px',
          maxHeight: '700px',
        }}
      >
        {/* Center Dot & Text */}
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            zIndex: 20,
            transform: 'translate(-50%, -50%)',
            color: 'common.white',
            textAlign: 'center',
          }}
        >
          <CenterDot />
          <Typography variant="body2" sx={{ fontWeight: 'semibold' }}>
            My Skills
          </Typography>
        </Box>

        {/* Orbits and Labels */}
        {orbits.map((orbit, index) => (
          <React.Fragment key={index}>
            <Orbit sx={{ width: orbit.size, height: orbit.size }} />
            <OrbitWrapper
              sx={{
                width: orbit.size,
                height: orbit.size,
                animationDuration: `${orbit.duration}s`,
              }}
            >
              <Label>{orbit.label}</Label>
            </OrbitWrapper>
          </React.Fragment>
        ))}
      </Box>
    </Box>
  );
};

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Sourabh Bhakar</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <SkillsOrbit />
      <Home2 />
    </section>
  );
}

export default Home;
