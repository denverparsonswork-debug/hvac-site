import React from 'react';
import { motion } from 'framer-motion';
import { Wind, Snowflake, Flame, Droplets, Zap, Home } from 'lucide-react';

const services = [
  {
    title: "Air Conditioning",
    desc: "Stay cool with our expert AC repair, installation, and seasonal maintenance.",
    icon: Snowflake,
    size: "lg",
    color: "bg-blue-50 text-blue-600"
  },
  {
    title: "Heating Systems",
    desc: "Furnace and heat pump services to keep you warm all winter.",
    icon: Flame,
    size: "sm",
    color: "bg-orange-50 text-orange-600"
  },
  {
    title: "Air Quality",
    desc: "Purifiers and filtration for healthy breathing.",
    icon: Wind,
    size: "sm",
    color: "bg-green-50 text-green-600"
  },
  {
    title: "Smart Thermostats",
    desc: "Energy-saving controls for your modern home.",
    icon: Zap,
    size: "sm",
    color: "bg-purple-50 text-purple-600"
  },
  {
    title: "Commercial HVAC",
    desc: "Full-scale solutions for businesses and offices.",
    icon: Home,
    size: "lg",
    color: "bg-slate-50 text-slate-600"
  },
  {
    title: "Duct Cleaning",
    desc: "Professional cleaning for efficient airflow.",
    icon: Droplets,
    size: "sm",
    color: "bg-cyan-50 text-cyan-600"
  }
];

const ServiceGrid: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Our Premium Services</h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            From emergency repairs to high-efficiency upgrades, we provide the full spectrum of comfort solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`bento-card flex flex-col justify-between ${
                service.size === 'lg' ? 'md:col-span-2' : 'md:col-span-1'
              }`}
            >
              <div>
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${service.color}`}>
                  <service.icon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2">{service.title}</h3>
                <p className="text-slate-500 leading-relaxed">{service.desc}</p>
              </div>
              <div className="mt-4 flex items-center text-accent font-bold cursor-pointer group">
                Learn More 
                <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceGrid;
