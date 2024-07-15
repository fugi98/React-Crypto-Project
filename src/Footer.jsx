// src/Footer.js
import React from 'react';
import "./Footer.css";
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: rgba(var(--bs-black-rgb), var(--bs-bg-opacity));
  color: #fff;
  padding: 40px 60px;
  text-align: center;
`;

const FooterInner = styled.div`
  display: flex;
  grid-template-columns: auto 1fr;
  grid-gap: 40px;
  justify-items: center;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    display: flex;
    flex-direction: column;
  }
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: justify;
  @media (max-width: 768px) {
    text-align: justify;;

  }
`;

const SectionTitle = styled.h4`
  margin-bottom: 9px;
  font-size: 28px;
  font-weight: 700;
`;

const SectionItem = styled.p`
  margin: 2px;
  color: #aaa;
  font-weight:100;
  font-size: 1.2rem;
  @media (max-width: 768px) {
    text-align: justify;
    font-size: 1rem;
  }
  @media (max-width: 600px) {
    text-align: justify;
    font-size: 0.89rem;
  }
`;

const Disclaimer = styled.p`
  margin-top: 30px;
  font-size: 14px;
  color: #aaa;
  @media (max-width: 600px) {
    font-size: 10px;
  }
`;

export default function Footer() {
  return (
    <FooterContainer>
      <FooterInner className="footerInner">
        <img
          src="./images/logo.jpg" // Replace with your logo URL
          width="100"
          height="100"
          className="d-inline-block align-top"
          alt="Logo"
        />
        <FooterSection>
          <SectionTitle>BlockSavvy</SectionTitle>
          <SectionItem>Empowering Crypto Learners</SectionItem>
          <SectionItem>Your trusted source for blockchain knowledge and insights.</SectionItem>
        </FooterSection>
        <FooterSection className="footerContent">
          <SectionItem><a href="/privacy-policy" className="footer-link">Privacy Policy</a></SectionItem>
          <SectionItem><a href="/terms" className="footer-link">Terms & Conditions</a></SectionItem>
          <SectionItem><a href="/disclaimer" className="footer-link">Disclaimer</a></SectionItem>
        </FooterSection>
      </FooterInner>
      <Disclaimer>
        Disclaimer: Crypto Products, Virtual Digital Assets, and NFTs are unregulated and can be highly risky...
      </Disclaimer>
      <Disclaimer>
        &copy; 2024 BlockSavvy. All rights reserved.
      </Disclaimer>
    </FooterContainer>
  );
};

