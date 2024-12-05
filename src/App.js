import React from 'react';
import Navbar from './components/navbar';
import HeroSection from './components/HeroSection';
import DonationForm from './components/DonationForm';
import PartnerCarousel from './components/PartnerCarousel';
import ApproachSection from './components/ApproachSection';
import Footer from './components/Footer';
import StatisticsSection from './components/StatisticsSection';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar/>
      <main className="flex-grow">
        <div className='relative bg-cover bg-no-repeat px-6 md:px-20 py-16 md:py-32 flex flex-col md:flex-row items-center justify-between' 
             style={{ backgroundImage: "url('https://montreal.citynews.ca/wp-content/blogs.dir/sites/19/2021/01/homelessyouth16x9-scaled.jpg')" }}>
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className='z-10 text-center md:text-left w-full md:w-2/3 relative'>
            <h1 className='text-white font-bold text-4xl md:text-6xl mb-4'>Montreal Needs Your Help!</h1>
            <p className='text-white text-lg md:text-xl mb-6'>
              Montreal's homeless community doesn't have a good support system, we're trying to help them out.
            </p>
          </div>
          <DonationForm />
        </div>
        <PartnerCarousel/>
        <ApproachSection/>
        <StatisticsSection/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;