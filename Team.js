import React from 'react';
import styled from 'styled-components';
import { FaTelegram } from 'react-icons/fa';

const TeamSection = styled.section`
  padding: 40px;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 15px;
  margin-top: 30px;
`;

const TeamMember = styled.div`
  background: #00bfa5;
  color: #121212;
  margin: 20px;
  padding: 20px;
  border-radius: 10px;
  display: inline-block;
  width: 250px;
  text-align: center;
  box-shadow: 0 0 10px rgba(0, 191, 165, 0.5);
`;

const MemberImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 15px;
`;

const MemberName = styled.h4`
  margin-top: 10px;
  font-size: 1.2rem;
`;

const MemberRole = styled.p`
  font-size: 1rem;
`;

const MemberLink = styled.a`
  color: white;
  font-size: 1.1rem;
  text-decoration: none;
  display: block;
  margin-top: 10px;
`;

const Team = () => {
  return (
    <TeamSection>
      <h2>👨‍💻 تیم توسعه</h2>
      <div>
        <TeamMember>
          <MemberImage src="ehsan.jpg" alt="Ehsan Fazli" />
          <MemberName>احسان فضلی</MemberName>
          <MemberRole>برنامه‌نویس</MemberRole>
          <MemberLink href="https://t.me/ehsanfazli" target="_blank">
            <FaTelegram /> @ehsanfazli
          </MemberLink>
        </TeamMember>
        <TeamMember>
          <MemberImage src="fateme.jpg" alt="Fateme Faridi" />
          <MemberName>فاطمه فریدی</MemberName>
          <MemberRole>مدیریت پروژه</MemberRole>
          <MemberLink href="https://t.me/fateme" target="_blank">
            <FaTelegram /> @fateme
          </MemberLink>
        </TeamMember>
        <TeamMember>
          <MemberImage src="ali.jpg" alt="Ali Beigi" />
          <MemberName>علی بیگی</MemberName>
          <MemberRole>طراح گرافیک</MemberRole>
          <MemberLink href="https://t.me/nexel" target="_blank">
            <FaTelegram /> @nexel
          </MemberLink>
        </TeamMember>
        <TeamMember>
          <MemberImage src="amin.jpg" alt="Amin Esqat" />
          <MemberName>امین اسقاط</MemberName>
          <MemberRole>طراح ایده</MemberRole>
          <MemberLink href="https://t.me/amin" target="_blank">
            <FaTelegram /> @amin
          </MemberLink>
        </TeamMember>
      </div>
    </TeamSection>
  );
};

export default Team;
