import React from 'react';
import QuestCard from './QuestCard';
import Quest2 from './QuestCard2';
import AirdropSection from './AirdropSection';
import CardGrid from './CardGrid';
import Card2 from './Cards2';
import styled from 'styled-components';
import './ContentSection.css';
import { useEffect } from 'react';
import SliderComponent from './AdvanceSlider';


//Cards 2 section
const Cards2 = styled.div`
  background-color: #08080800;
  color: #fff;
  padding: 20px;
  text-align: center;
  min-height: 95vh;
`;

const Title2 = styled.h1`
  margin-bottom: 20px;
`;

const cards2 = [
  {
    image: process.env.PUBLIC_URL + '/images/card5.jpg',
    title: 'Web3 + Degen Glossary',
    description: 'Your own crypto dictionary',
  },
  // Add more cards if needed
];

export default function ContentSection({ tab })  {
  useEffect(() => {
    const createDots = () => {
      const numDots = 150;
      const background = document.querySelector('.background');

      for (let i = 0; i < numDots; i++) {
        const dot = document.createElement('div');
        dot.className = 'dot';

        const size = Math.random() * 1 + 2;
        dot.style.width = `${size}px`;
        dot.style.height = `${size}px`;

        dot.style.top = `${Math.random() * 100}%`;
        dot.style.left = `${Math.random() * 100}%`;

        dot.style.animationDuration = `${Math.random() * 20 + 5}s`;
        dot.style.animationDelay = `${Math.random() * 2}s`;

        background.appendChild(dot);
      }
    };

    createDots();
  }, []);

  // first quest
  const quests = [
    {
      imageSrc: process.env.PUBLIC_URL + './images/bit2.gif',
      details: 'What is Cryptocurrency?',
      tasks: 100,
    },
    {
      imageSrc: process.env.PUBLIC_URL + './images/bg.gif',
      details: 'Setting up your own Wallet',
      tasks:100
    },
    {
      imageSrc: process.env.PUBLIC_URL + './images/bit3.gif',
      details: 'Understanding Blockchain',
      tasks: 100
    },
    {
      imageSrc: process.env.PUBLIC_URL + './images/bit4.gif',
      details: 'NFTs and their Importance',
      tasks: 100
    },
    {
      imageSrc: process.env.PUBLIC_URL + './images/bit5.gif',
      details: 'Crypto Security Best Practices',
      tasks: 100
    },
  ];

  //Second Quest Section
  const quests2 = [
    {
      imageSrc: process.env.PUBLIC_URL + './images/bit7.gif',
      details: 'Introduction to Altcoins',
      tasks: 100
    },
    {
      imageSrc: process.env.PUBLIC_URL + './images/bit8.gif',
      details: 'Decentralized Finance (DeFi)',
      tasks: 100
    },
    {
      imageSrc: process.env.PUBLIC_URL + './images/bit9.gif',
      details: 'Staking and Yield Farming',
      tasks: 100
    },
    {
      imageSrc: process.env.PUBLIC_URL + './images/bit10.gif',
      details: 'Understanding Smart Contracts',
      tasks: 100
    },
    {
      imageSrc: process.env.PUBLIC_URL + './images/bit11.gif',
      details: 'Securing Your Crypto Assets',
      tasks: 100
    },
  ];

  // Cards 
  const cards = [
    {
      image: process.env.PUBLIC_URL + './images/card1.jpg',
      title: 'Planning Your Retirement with Crypto',
    },
    {
      image: process.env.PUBLIC_URL + './images/card2.png',
      title: 'Understanding Bitcoin Supply',
    },
    {
      image: process.env.PUBLIC_URL + './images/card3.png',
      title: 'How Uniswap Works',
    },
    {
      image: process.env.PUBLIC_URL + './images/card4.jpg',
      title: 'Identifying Promising Crypto Projects',
    },
  ];

  const handleClickMain = () => {
    window.open('https://www.coinbase.com/learn/crypto-basics', '_blank');
  };

  const handleClickSecondary = () => {
    window.open('https://www.mygreatlearning.com/academy/learn-for-free/courses/cryptocurrency-for-beginners', '_blank');
  };

  const getContent = () => {
    switch (tab) {
      case 'essentials':
        return (
          <div className="content">

          {/*  Crypto Section1 */}
            <div className="cryptoSection">
              <div className="sidebar">
                <div className="topSideBar">
                  <img src="./images/bit1.gif" alt="Ape" />
                  <div className="topSideBar-details">
                    <h2>Basics of Crypto</h2>
                    <p>Learn the fundamentals of cryptocurrencies, including their history, technology, and key concepts.</p>
                  </div>
                </div>
                <hr className="underline" />
                <div className="quests">
                  {quests.map((quest, index) => (
                    <QuestCard key={index} {...quest} />
                  ))}
                </div>
              </div>
              <div className="main-content">
                <div className="learn">
                  <img src="./images/cryptkola.jpg" alt="Learn Crypto" />
                  <p>Discover a comprehensive guide to the basics of crypto.</p>
                  <button onClick={handleClickMain}>Learn More</button>
                </div>
              </div>
            </div>

          {/* Crypto Section 2 */}
            <div className="cryptoSection2">
              <div className="sidebar2">
                <div className="topSideBar2">
                  <img src="./images/bit6.gif" alt="Unicorn" />
                  <div className="topSideBar-details2">
                    <h2>Learn More About Crypto</h2>
                    <p>Deepen your understanding of cryptocurrencies with advanced topics and insights.</p>
                  </div>
                </div>
                <hr className="underline2" />
                <div className="quests2">
                  {quests2.map((quest, index) => (
                    <Quest2 key={index} {...quest} />
                  ))}
                </div>
              </div>
              <div className="main-content2">
                <div className="learn2">
                  <img src="./images/cryptcat.jpg" alt="More about crypto" />
                  <p>Explore a comprehensive course on cryptocurrency for beginners with Great Learning Academy.</p>
                  <button onClick={handleClickSecondary}>Learn More</button>
                </div>
              </div>
            </div>

          {/* Airdrop Section */}
            <AirdropSection />

            <hr className="underline2" />
            {/* Top Crypto creater and projects */} 
            <CardGrid cards={cards} />

            <hr className="underline2" />

            {/* Crypto Dictionay */}

            <Cards2>
              <Title2>Crypto Dictionary</Title2>
              {cards2.map((card, index) => (
                <Card2 key={index} {...card} />
              ))}
            </Cards2>
          </div>
        );

        /*  Advanced crypto section */

      case 'advanced':
        return (
          <div className="content">
            <h2>Advanced Content</h2>
            <div className="video-wrapper">
            <iframe 
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/jLgK-SKaSww?si=JEYpuGHKD8NENIum&amp;controls=0" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerpolicy="strict-origin-when-cross-origin" 
            allowfullscreen></iframe>
            </div>
            <p>Explore advanced topics in cryptocurrency, and more.</p>


          
            {/* Advance slider */}
            <SliderComponent />

            <hr className="underline2" />

            {/* Crypto Dictionay */}

            <Cards2>
              <Title2>Crypto Dictionary</Title2>
              {cards2.map((card, index) => (
                <Card2 key={index} {...card} />
              ))}
            </Cards2>

          </div>
        );
      default:
        return <div className="content">Default Content</div>;
    }
  };

  return (
    <section className="content-section">
      <div className="background"></div>
      {getContent()}
    </section>
  );
};


