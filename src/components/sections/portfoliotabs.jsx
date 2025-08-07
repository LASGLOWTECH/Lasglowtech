import React, { useState } from 'react';
import PortfolioCard from '../portfoliocards';
import { Graphic1,Graphic2, Web1, Mobile1 } from "../images";
const tabs = ['All', 'Branding', 'Videos', 'Graphics', 'Web/UI'];

const portfolioData = {
  Branding: [
    {
      image: Graphic1,
      description: 'Brand kit design for crypto startup.',
      link: 'https://example.com/branding1',
    },
    {
      image: Graphic2,
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
  Web : [
    {
      image: '/projects/web1.jpg',
      description: 'Corporate website for tech company.',
      link: 'https://example.com/web1',
    },
    {
      image: '/projects/graphic2.jpg',
      description: 'Event poster for virtual summit.',
      link: 'https://example.com/graphic2',
    },
    {
      image: '/projects/graphic3.jpg',
      description: 'Giveaway banner for ecommerce brand.',
      link: 'https://example.com/graphic3',
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
<div className='mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 py-16 items-center'>




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
