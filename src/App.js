import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import HeroSection from './components/HeroSection';
import DonationForm from './components/DonationForm';
import PartnerCarousel from './components/PartnerCarousel';

function App() {
  return (
    <>
      <div className="App h-screen flex flex-col">
        <Navbar/>
        <div className='flex flex-1 relative'>
          <HeroSection />
          <div className='w-1/3 bg-gray-100 p-6'>
            <DonationForm />
          </div>
        </div>
      </div>
      <PartnerCarousel/>
      </>
  );
}

export default App;