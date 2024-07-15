import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './AdvanceSlider.css'; // Import your CSS file for styling

export default function SliderComponent() {
  /* slider button */
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
          dots: true,
          arrows: true
        }
      }
    ]
  };

  return (
    <div className="slider-container"> {/* Apply CSS container class */}
      <Slider {...settings}>
        <div className="slide-item">
          <img src="./images/slider1.jpg" alt="Slide 1" />
          <div className="slider-content">
            <h3>Advanced Crypto Concepts</h3>
            <p>Advanced crypto concepts delve deep into blockchain technology beyond its basics. It explores decentralized finance (DeFi), where blockchain transforms traditional financial systems by enabling peer-to-peer lending, borrowing, and trading without intermediaries. Smart contracts play a pivotal role, automating these financial transactions securely and transparently. DeFi platforms offer innovative opportunities like yield farming and liquidity provision, allowing users to earn rewards by staking their crypto assets. Understanding these concepts is crucial for anyone looking to harness the full potential of blockchain beyond cryptocurrencies, paving the way for a decentralized future in finance.</p>
          </div>
        </div>
        <div className="slide-item">
          <img src="./images/slider2.jpg" alt="Slide 2" />
          <div className="slider-content">
            <h3>Crypto Investment Strategies</h3>
            <p>Crypto investment strategies encompass various approaches tailored to different risk appetites and investment goals. HODLing, a popular strategy, involves holding onto digital assets for the long term despite market volatility, based on the belief in their future value appreciation. Staking allows investors to earn rewards by participating in network operations, securing blockchain networks while generating passive income. Yield farming optimizes returns through decentralized finance (DeFi) protocols by providing liquidity to pools and earning transaction fees. These strategies require careful analysis of market trends, technological advancements, and regulatory developments to mitigate risks effectively and capitalize on opportunities in the dynamic crypto market.</p>
          </div>
        </div>
        <div className="slide-item">
          <img src="./images/slider3.jpg" alt="Slide 3" />
          <div className="slider-content">
            <h3>Blockchain Security</h3>
            <p>Blockchain security focuses on safeguarding digital assets and transactions within decentralized ecosystems. It employs robust encryption methods to protect sensitive data and verify transactions securely on the blockchain. Multi-factor authentication (MFA) enhances user verification processes, adding layers of security beyond traditional passwords. Auditable transparency ensures that transactions are traceable and verifiable on public ledgers, maintaining integrity and trust in decentralized networks. As blockchain technology evolves, advancements in secure wallet storage and smart contract auditing are critical to mitigate risks such as hacks and vulnerabilities. By prioritizing these security measures, blockchain participants can confidently engage in decentralized applications (dApps) and transactions, contributing to the continued growth and adoption of blockchain technology.</p>
          </div>
        </div>
        <div className="slide-item">
          <img src="./images/slider4.png" alt="Slide 4" />
          <div className="slider-content">
            <h3>Decentralized Exchanges (DEX)</h3>
            <p>Decentralized exchanges (DEX) revolutionize cryptocurrency trading by eliminating intermediaries and enabling direct peer-to-peer transactions on blockchain networks. Unlike centralized exchanges, DEX platforms do not hold user funds, enhancing privacy and reducing transaction costs. Liquidity providers contribute assets to liquidity pools, earning rewards from trading fees while ensuring continuous liquidity for traders. Automated market makers (AMMs) facilitate seamless trades by algorithmically determining token prices based on supply and demand. Despite regulatory challenges and scalability issues, DEX platforms offer decentralized solutions that empower users with greater control over their digital assets and trading activities. Understanding DEX mechanisms and their benefits is crucial for navigating the evolving landscape of decentralized finance (DeFi) and blockchain-based trading platforms.</p>
          </div>
        </div>
        <div className="slide-item">
          <img src="./images/slider5.jpg" alt="Slide 5" />
          <div className="slider-content">
            <h3>Smart Contracts</h3>
            <p>Smart contracts are self-executing agreements with predefined rules written in code, automatically enforcing terms when specified conditions are met. These digital contracts operate on blockchain networks without intermediaries, offering transparent and tamper-proof transactions. Smart contracts have diverse applications across industries, from automating supply chain processes and verifying identities to enabling complex financial transactions in decentralized finance (DeFi). Ethereum, a leading blockchain platform for smart contracts, supports programmable money and decentralized applications (dApps), driving innovation in blockchain technology. As smart contract adoption grows, interoperability between blockchain networks and scalability solutions will shape their broader applications, revolutionizing global commerce and governance with secure, efficient, and trustless automation.</p>
          </div>
        </div>
        <div className="slide-item">
          <img src="./images/slider6.jpg" alt="Slide 6" />
          <div className="slider-content">
            <h3>Crypto Regulations</h3>
            <p>Crypto regulations navigate the legal landscape surrounding cryptocurrencies and blockchain technology, addressing their classification, taxation, and consumer protection measures. Governments and regulatory bodies worldwide are formulating policies to mitigate risks like money laundering and fraud while fostering innovation and investor confidence in digital assets. Compliance with anti-money laundering (AML) and know-your-customer (KYC) regulations is crucial for crypto exchanges and service providers to prevent illicit activities and ensure market integrity. Regulatory clarity is essential for stakeholders to navigate legal frameworks and participate responsibly in the growing crypto economy. As regulatory frameworks evolve, collaboration between industry stakeholders, policymakers, and regulators will shape a balanced approach that supports innovation while safeguarding market participants and promoting sustainable growth in the digital economy.</p>
          </div>
        </div>
      </Slider>
    </div>
  );
};


