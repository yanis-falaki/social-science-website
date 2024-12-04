import HeroImage from '../images/hero.jpg';

const HeroSection = () => {
  return (
    <div className='w-2/3 relative'>
      <div className='absolute inset-0 bg-black opacity-65 z-10'></div>
      <img 
        src={HeroImage} 
        alt="Description" 
        className="w-full h-full object-cover" 
      />
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-20'>
        <h1 className='text-5xl font-bold mb-4'>We Need Your Help!</h1>
        <p className='text-xl'>Montreal's homeless community doesn't have a good support system, we're trying to help them out.</p>
      </div>
    </div>
  );
};

export default HeroSection;