import React from 'react';
import Hero from './Hero';
import DancingBlob from '../../components/DancingBlob';

const Home = () => {
  return (
    <div className="bg-gradient-to-b from-transparent via-transparent to-[#662451]/10 animate-gradient min-h-screen">
      <section>
        <Hero />
      </section>
      <div className="hidden md:block w-full max-w-7xl mx-auto mt-12 sm:mt-20 md:mt-28 animate-bounce px-4">
        <DancingBlob />
      </div>
    </div>
  );
};

export default Home;