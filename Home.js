import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Section = styled.section`
  padding: 40px;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.8);
  margin: 30px;
  border-radius: 15px;
  box-shadow: 0 0 20px rgba(0, 191, 165, 0.5);
`;

const Button = styled.button`
  background: #00bfa5;
  color: #121212;
  padding: 10px 20px;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
  transition: all 0.3s ease;

  &:hover {
    background: #00897b;
    transform: scale(1.1);
  }
`;

const Home = () => {
  return (
    <Section>
      <h2>درباره دستیار هوش مصنوعی صراط</h2>
      <p>
        دستیار هوش مصنوعی صراط برای حل مشکلات روزمره شما طراحی شده است. با استفاده از این ربات، شما می‌توانید از
        ویژگی‌های مختلف مانند:
        <ul>
          <li>اعلام زمان دقیق شمسی، قمری و میلادی</li>
          <li>پیگیری مرسوله‌ها با کد رهگیری</li>
          <li>مترجم جملات و متون از انگلیسی به فارسی</li>
          <li>دریافت حدیث رندوم</li>
        </ul>
      </p>
      <Link to="/team">
        <Button>اعضای تیم</Button>
      </Link>
    </Section>
  );
};

export default Home;
