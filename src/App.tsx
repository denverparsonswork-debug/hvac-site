import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServiceGrid from './components/ServiceGrid';
import TrustSection from './components/TrustSection';
import BookingForm from './components/BookingForm';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <ServiceGrid />
        <TrustSection />
        <BookingForm />
      </main>
      
      <footer className="bg-slate-50 py-12 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-6 opacity-40">
            <span className="text-xl font-bold tracking-tight text-primary">
              Elite<span className="text-accent">HVAC</span>
            </span>
          </div>
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} Elite HVAC Services. Licensed, Bonded, and Insured. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
