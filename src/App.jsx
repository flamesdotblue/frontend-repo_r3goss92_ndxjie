import React from 'react';
import Hero from './components/Hero';
import FeatureGrid from './components/FeatureGrid';
import Workflow from './components/Workflow';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen w-full bg-slate-950 text-white">
      <Hero />
      <FeatureGrid />
      <Workflow />
      <CTA />
    </div>
  );
}

export default App;
