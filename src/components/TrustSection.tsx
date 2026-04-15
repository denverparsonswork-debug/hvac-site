import React from 'react';
import { motion } from 'framer-motion';
import { Star, Users, Award, ShieldCheck } from 'lucide-react';

const stats = [
  { label: "Happy Customers", value: "15,000+", icon: Users },
  { label: "Years Experience", value: "25+", icon: Award },
  { label: "Certified Techs", value: "50+", icon: ShieldCheck },
  { label: "Average Rating", value: "4.9/5", icon: Star },
];

const TrustSection: React.FC = () => {
  return (
    <section className="py-24 bg-primary text-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-accent rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
            >
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6 backdrop-blur-sm border border-white/10">
                <stat.icon className="w-8 h-8 text-ice-dark" />
              </div>
              <h3 className="text-4xl font-extrabold mb-2 tracking-tight">{stat.value}</h3>
              <p className="text-ice/60 font-semibold uppercase tracking-widest text-xs">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 bg-white/5 border border-white/10 rounded-3xl p-12 backdrop-blur-xl">
          <div className="grid lg:grid-cols-3 gap-12 items-center">
            <div className="lg:col-span-1">
              <h2 className="text-3xl font-bold mb-4">Trusted by the Pros.</h2>
              <p className="text-ice/60 mb-6">We are proud to be factory-authorized dealers for the world's leading HVAC brands.</p>
              <button className="text-accent font-bold hover:underline">View All Certifications →</button>
            </div>
            <div className="lg:col-span-2 flex flex-wrap justify-center lg:justify-end gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
               {/* Brand Logos Placeholder */}
               <div className="text-2xl font-black italic tracking-tighter">TRANE</div>
               <div className="text-2xl font-black italic tracking-tighter">CARRIER</div>
               <div className="text-2xl font-black italic tracking-tighter">LENNOX</div>
               <div className="text-2xl font-black italic tracking-tighter">RHEEM</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
