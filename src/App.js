import React from 'react';
import LayoutHeader from './components/LayoutHeader';
import HeroSection from './components/HeroSection';
import ResearchSection from './components/ResearchSection';
import ChartsSection from './components/ChartsSection';
import TeamSection from './components/TeamSection';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="bg-black text-white min-h-screen font-sans">
      <LayoutHeader />
      <main>
        <HeroSection />
        <ResearchSection />
        <ChartsSection />
        <TeamSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;