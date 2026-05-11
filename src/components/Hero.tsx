import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { CONTACT_INFO } from '../constants';
import { Link, useNavigate } from 'react-router-dom';

export default function Hero() {
  const navigate = useNavigate();
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=2000" // High-quality aesthetic skin close-up
          alt="Luxury Aesthetics"
          className="w-full h-full object-cover opacity-40 scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bg-dark/80 via-transparent to-bg-dark" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="block text-gold-light uppercase tracking-[0.4em] text-sm font-medium mb-6">
            Elite Services
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-8xl font-serif font-bold text-white mb-8 leading-[1.1]">
            Expert Care. <br />
            <span className="italic font-normal">Effortless Beauty.</span>
          </h1>
          <p className="text-lg md:text-xl text-white/60 font-light leading-relaxed mb-12 max-w-2xl mx-auto">
            Experience the pinnacle of medical-grade aesthetics in a private, 
            high-end environment designed for those who demand uncompromising excellence.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button 
              onClick={() => navigate('/services')}
              className="bg-gold-light hover:bg-gold text-bg-dark px-10 py-4 rounded-full text-sm font-bold uppercase tracking-widest transition-all duration-300 w-full sm:w-auto font-bold"
            >
              Enter & View Services
            </button>
            <Link
              to="/book"
              className="border border-white/20 hover:border-gold-light/50 hover:text-gold-light px-10 py-4 rounded-full text-sm font-bold uppercase tracking-widest transition-all duration-300 w-full sm:w-auto text-center flex items-center justify-center font-bold"
            >
              Book Consultation
            </Link>
          </div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/30"
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
}
