import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative bg-black text-white min-h-screen flex items-center justify-center">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')] bg-cover bg-center opacity-20"></div>
      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <div className="flex justify-center mb-6">

        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tighter">
          DETECCIÓN DE  <span className="text-red-500">MUONES</span> <br/>EN PARAGUAY
        </h1>
        <p className="text-xl text-gray-400 mb-8 font-light max-w-2xl mx-auto">
          Investigación científica sobre el comportamiento de los muones en la atmósfera paraguaya. <br/>
        </p>
        <div className="flex justify-center space-x-4">
        </div>
      </div>
    </section>
  );
};

export default HeroSection;