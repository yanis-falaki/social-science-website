import React from 'react';

const StatisticsSection = () => {
  const statisticsData = [
    { 
      title: 'Homeless Population', 
      value: '4,600+', 
      description: 'Individuals experiencing homelessness in Montreal as of the latest count',
      icon: '🏠'
    },
    { 
      title: 'Chronic Homelessness', 
      value: '60%', 
      description: 'Of homeless individuals experiencing long-term housing insecurity',
      icon: '⏳'
    },
    { 
      title: 'Youth Homelessness', 
      value: '12%', 
      description: 'Of the homeless population are young adults aged 16-24',
      icon: '👥'
    },
    { 
      title: 'Shelter Capacity', 
      value: '95%', 
      description: 'Average occupancy rate of emergency shelters in the city',
      icon: '🛏️'
    }
  ];

  return (
    <div className='py-24 px-12 bg-gray-50'>
      <h1 className='text-5xl md:text-6xl text-center mb-16'>
        Homelessness in Montreal: The Numbers
      </h1>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
        {statisticsData.map((stat, index) => (
          <div 
            key={index} 
            className='bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center'
          >
            <div className='text-6xl mb-4'>{stat.icon}</div>
            <h2 className='text-3xl font-bold text-blue-800 mb-2'>{stat.value}</h2>
            <h3 className='text-xl font-semibold mb-3'>{stat.title}</h3>
            <p className='text-gray-600'>{stat.description}</p>
          </div>
        ))}
      </div>

      <div className='mt-16 text-center max-w-4xl mx-auto'>
        <p className='text-xl text-gray-700'>
          These statistics highlight the critical need for comprehensive solutions to address homelessness in Montreal. 
          Our two-step approach of providing affordable housing and job training aims to create lasting change 
          for individuals experiencing housing insecurity.
        </p>
      </div>
    </div>
  );
};

export default StatisticsSection;