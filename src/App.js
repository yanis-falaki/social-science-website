import React from 'react';
import Navbar from './components/navbar';
import HeroSection from './components/HeroSection';
import DonationForm from './components/DonationForm';
import PartnerCarousel from './components/PartnerCarousel';
import ApproachSection from './components/ApproachSection';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar/>
      <main className="flex-grow">
        <div className='flex relative'>
          <HeroSection />
          <div className='w-1/3 bg-gray-100 p-6'>
            <DonationForm />
          </div>
        </div>
        <PartnerCarousel/>
        <ApproachSection/>
      </main>
    </div>
  );
}

export default App;