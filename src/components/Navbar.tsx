import { motion, AnimatePresence } from 'motion/react';
import { Instagram, Phone, Facebook, MessageCircle, Menu, X } from 'lucide-react';
import { CONTACT_INFO } from '../constants';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'Contact', href: '/contact' },
  ];

  const navigate = useNavigate();

  const handleBookNow = () => {
    setIsOpen(false);
    navigate('/book');
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-bg-dark/80 backdrop-blur-md border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-1.5 sm:space-x-3 group shrink-0">
          <img 
            src="https://res.cloudinary.com/didqabx8q/image/upload/q_auto/f_auto/v1778527479/282fa78d-3143-44f5-9a94-869d46f09907_qcv2ia.jpg" 
            alt="Luscious Cosmetics Logo" 
            className="w-10 h-10 sm:w-12 sm:h-12 object-cover rounded-full border border-gold-light/20"
          />
          <div className="flex items-center space-x-1.5 sm:space-x-2">
            <span className="text-2xl sm:text-4xl font-script text-gold-light group-hover:text-gold transition-colors leading-none">
              Luscious
            </span>
            <span className="hidden sm:block text-2xl font-script text-white/90 pt-2 leading-none">
              Cosmetics
            </span>
          </div>
        </Link>

        <div className="hidden lg:flex items-center space-x-6 xl:space-x-10">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              className={({ isActive }) => 
                `text-[13px] uppercase tracking-wider transition-all duration-300 whitespace-nowrap ${
                  isActive ? 'text-gold-light border-b border-gold-light/50 pb-1' : 'text-white/70 hover:text-gold-light'
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center space-x-4">
          <button
            onClick={handleBookNow}
            className="hidden sm:block bg-gold-light hover:bg-gold text-bg-dark px-6 xl:px-8 py-2.5 rounded-full text-[11px] font-bold uppercase tracking-widest transition-all duration-300 transform hover:scale-105 active:scale-95 whitespace-nowrap shrink-0"
          >
            Book Now
          </button>
          
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-gold-light p-2 transition-transform active:scale-90"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-card-dark border-b border-white/5 overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) => 
                    `text-lg uppercase tracking-widest py-2 transition-colors ${
                      isActive ? 'text-gold-light' : 'text-white/70'
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
              <div className="pt-4 flex flex-col space-y-4">
                <button
                  onClick={handleBookNow}
                  className="w-full bg-gold-light text-bg-dark py-4 rounded-xl text-sm font-bold uppercase tracking-widest"
                >
                  Book Appointment
                </button>
                <a href={CONTACT_INFO.whatsapp} target="_blank" rel="noreferrer" className="text-gold-light flex items-center justify-center space-x-2 py-2">
                  <MessageCircle size={20} />
                  <span className="text-sm font-bold uppercase tracking-widest">WhatsApp Inquiries</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
