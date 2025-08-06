// === PortfolioTabs.jsx ===
import React, { useState } from 'react';
import PortfolioCard from '../components/portfoliocards';

const tabs = ['Branding', 'Videos', 'Graphics', 'Web/UI'];

const portfolioData = {
  Branding: [],
  Videos: [],
  Graphics: [
    {
      image: '/projects/graphic1.jpg',
      description: 'CounterFix campaign flyer for brand awareness.',
      link: 'https://example.com/counterfix',
    },
    {
      image: '/projects/graphic2.jpg',
      description: 'Vantage Elite Rewards car giveaway design.',
      link: 'https://example.com/vantage',
    },
    {
      image: '/projects/graphic3.jpg',
      description: 'ToshiExchange promotional banner for crypto services.',
      link: 'https://example.com/toshi',
    },
  ],
  'Web/UI': [],
};

const PortfolioTabs = () => {
  const [activeTab, setActiveTab] = useState('Graphics');
  const projects = portfolioData[activeTab] || [];

  return (
    <div className="text-white bg-[#12061E] px-6 py-12 min-h-screen">
      <div className="flex justify-center flex-wrap mb-10 gap-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-3 border border-purple-500 text-lg font-medium rounded-md transition-all duration-300 ${
              activeTab === tab
                ? 'bg-purple-600 text-white shadow-md'
                : 'text-purple-400 hover:bg-purple-900'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap justify-center gap-8 transition-all duration-300">
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
          <p className="text-gray-300 text-center text-lg">No projects available in this category yet.</p>
        )}
      </div>
    </div>
  );
};

export default PortfolioTabs;


