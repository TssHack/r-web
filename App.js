import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
import { FaTelegram } from 'react-icons/fa';
import Home from './Home';
import Team from './Team';

const AppWrapper = styled.div`
  font-family: 'Poppins', sans-serif;
  background-color: #121212;
  color: #e0e0e0;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
`;

const Header = styled.header`
  background: linear-gradient(45deg, #00bfa5, #00897b);
  color: white;
  padding: 50px 20px;
  text-align: center;
  box-shadow: 0 0 20px rgba(0, 191, 165, 0.5);
`;

const Logo = styled.h1`
  font-size: 3rem;
  font-weight: bold;
`;

const SubTitle = styled.p`
  font-size: 1.2rem;
`;

const Slogan = styled.h2`
  color: #ffcc00;
  font-size: 2rem;
  font-weight: bold;
`;

const App = () => {
  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1500 },
  });

  return (
    <AppWrapper>
      <Router>
        <Header>
          <Logo>دستیار هوش مصنوعی صراط</Logo>
          <SubTitle>هوش مصنوعی قدرتمند برای پاسخگویی به نیازهای روزانه شما</SubTitle>
          <Slogan>راهی برای تسهیل زندگی شما</Slogan>
        </Header>
        <animated.div style={fadeIn}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/team" element={<Team />} />
          </Routes>
        </animated.div>
      </Router>
    </AppWrapper>
  );
};

export default App;
