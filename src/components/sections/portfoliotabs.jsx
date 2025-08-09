import React, { useState } from 'react';
import PortfolioCard from '../portfoliocards';
import {pelifts,heroimage,fiftyreign,Fhemfelhomes,
Phoenixcover,ur9group,Smiggle1,Smiggle2,Smiggle3,Smiggle4,RWA,DECOT,
Austinport, } from "../images";
const tabs = ['All', 'Branding', 'Websites', 'Graphics', 'Web/UI'];

const portfolioData = {




  
  Websites : [
    {
      image: ur9group,
      description: 'UR9 Group',
      link: 'https://ur9group.com',
    },
    {
      image: Phoenixcover,
      description: 'Phoenixs Tech, Poland',
      link: 'https://phoenixstech.com',
    },
    {
      image: Austinport,
      description: 'Personal Portfolio',
      link: 'https://austinosaz.vercel.app',
    },


    {
      image: RWA,
      description: 'Renaissance Web3 African (ongoing)',
      link: 'https://renaissanceweb3afrik.com/',
    },

    {
      image: DECOT,
      description: 'Decot Tech',
      link: 'https://decot-technology.com/',
    },
  ],
  Branding: [
    {
      image: '',
      description: 'Brand kit design for crypto startup.',
      link: 'https://example.com/branding1',
    },
    {
      image: '',
      description: 'Logo redesign for SaaS company.',
      link: 'https://example.com/branding2',
    },
  ],
  Graphics: [
    {
      image: '/projects/graphic1.jpg',
      description: 'Social media flyer for campaign.',
      link: 'https://example.com/graphic1',
    },
  ],
  'Web/UI': [
    {
      image: '/projects/webui1.jpg',
      description: 'Dashboard UI for analytics platform.',
      link: 'https://example.com/webui1',
    },
    {
      image: '/projects/webui2.jpg',
      description: 'Portfolio site for designer.',
      link: 'https://example.com/webui2',
    },

    
  ],
};

const PortfolioTabs = () => {
  const [activeTab, setActiveTab] = useState('All');

  // Combine all projects if 'All' is selected
  const projects =
    activeTab === 'All'
      ? Object.values(portfolioData).flat()
      : portfolioData[activeTab] || [];

  return (
    <div className=" text-white px-6 md:px-20 mx-auto mt-6 py-20">
      {/* Tabs */}
      <div className="flex flex-wrap justify-center mb-10 gap-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-8 py-3 border text-sm md:text-lg rounded-2xl shadow-md transition-all duration-300 ${
              activeTab === tab
                ? 'bg-gradient-to-r from-Primarycolor to-Primarycolor2  text-white border-Primarycolor1 hover:bg-Secondarycolor'
                : 'text-textcolor border-Primarycolor hover:bg-Secondarycolor hover:text-white'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Grid layout */}
<div className='mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 py-16 items-center'>




        {projects.length > 0 ? (
          projects.map((item, index) => (
            <PortfolioCard
              key={index}
              image={item.image}
              alt={`${activeTab} ${index + 1}`}
              description={item.description}
              link={item.link}
              delay={index * 0.1}
            />
          ))
        ) : (
          <p className="text-center col-span-full text-gray-300 text-lg">
            No projects in this category.
          </p>
        )}
      
</div>

      
    </div>
  );
};

export default PortfolioTabs;
