import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Clock, Gauge, Thermometer } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Background Shapes */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-ice/50 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[400px] h-[400px] bg-accent/10 rounded-full blur-3xl opacity-30" />

      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10 pt-20">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent font-bold text-sm mb-6 border border-accent/20">
            <ShieldCheck className="w-4 h-4" />
            24/7 Emergency Service Available
          </div>
          <h1 className="text-5xl lg:text-7xl font-extrabold text-primary tracking-tight leading-tight mb-6">
            Keep Your Home <br />
            <span className="text-accent underline decoration-ice-dark underline-offset-8 decoration-4">Perfectly</span> Controlled.
          </h1>
          <p className="text-xl text-slate-600 mb-8 max-w-lg leading-relaxed">
            Professional HVAC installation, repair, and maintenance for residential and commercial spaces. Trusted by 15,000+ happy homeowners.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="btn-primary text-lg px-8">Schedule Free Estimate</button>
            <button className="flex items-center justify-center gap-2 px-8 py-3 rounded-lg border-2 border-slate-200 font-bold hover:bg-slate-50 transition-colors">
              Our Maintenance Plans
            </button>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-6 opacity-60">
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
              <Clock className="w-5 h-5 text-accent mb-2" />
              <span className="text-xs font-bold uppercase tracking-wider">Fast Response</span>
            </div>
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
              <ShieldCheck className="w-5 h-5 text-accent mb-2" />
              <span className="text-xs font-bold uppercase tracking-wider">Certified Team</span>
            </div>
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
              <Gauge className="w-5 h-5 text-accent mb-2" />
              <span className="text-xs font-bold uppercase tracking-wider">High Efficiency</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="aspect-square bg-slate-100 rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
            {/* Placeholder for high-quality HVAC image */}
            <div className="w-full h-full bg-gradient-to-br from-primary to-accent-hover flex items-center justify-center">
              <div className="text-white text-center p-8">
                <Thermometer className="w-32 h-32 mx-auto mb-4 opacity-20" />
                <p className="text-sm font-medium opacity-50 uppercase tracking-[0.2em]">Service Excellence</p>
              </div>
            </div>
          </div>
          
          {/* Floating Card */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-2xl border border-slate-100 max-w-xs"
          >
            <div className="flex items-center gap-4 mb-3">
              <div className="p-2 bg-green-100 rounded-full">
                <ShieldCheck className="w-6 h-6 text-green-600" />
              </div>
              <span className="font-bold text-primary">A+ BBB Rating</span>
            </div>
            <p className="text-sm text-slate-500 italic">"The most reliable team I've ever used. My AC was fixed within 2 hours!"</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
