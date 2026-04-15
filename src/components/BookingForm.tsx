import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Send } from 'lucide-react';

const BookingForm: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-ice-light rounded-[3rem] p-8 lg:p-16 border border-ice-dark/30 shadow-inner overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
          
          <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6 leading-tight">
                Ready to Experience <br />
                <span className="text-accent">Ultimate Comfort?</span>
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Fill out the form to schedule a service or request a free estimate. Our team will contact you within 30 minutes during business hours.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center border border-ice-dark">
                    <Calendar className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary">Easy Scheduling</h4>
                    <p className="text-sm text-slate-500">Pick a time that works for you.</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center border border-ice-dark">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary">Local Service</h4>
                    <p className="text-sm text-slate-500">Serving the entire metropolitan area.</p>
                  </div>
                </div>
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 lg:p-10 rounded-3xl shadow-xl border border-slate-100"
            >
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-400">First Name</label>
                    <input type="text" placeholder="John" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Last Name</label>
                    <input type="text" placeholder="Doe" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Service Type</label>
                  <select className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all appearance-none">
                    <option>AC Repair</option>
                    <option>Heating Service</option>
                    <option>Maintenance Visit</option>
                    <option>Free Estimate</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Message (Optional)</label>
                  <textarea rows={3} placeholder="Tell us about your issue..." className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all" />
                </div>

                <button type="button" className="btn-primary w-full flex items-center justify-center gap-2 py-4">
                  <Send className="w-5 h-5" />
                  Request Callback
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
