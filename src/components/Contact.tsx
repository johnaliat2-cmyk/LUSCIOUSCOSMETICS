import { motion } from 'motion/react';
import { Instagram, Facebook, Phone, MessageCircle, MapPin } from 'lucide-react';
import { CONTACT_INFO } from '../constants';
import { Link } from 'react-router-dom';

export default function Contact() {
  return (
    <section id="contact" className="py-32 bg-bg-dark border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20">
          <div className="lg:w-1/2">
            <span className="text-gold-light uppercase tracking-[0.4em] text-xs font-bold mb-4 block">
              Connect With Excellence
            </span>
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-8">
              Let's Refine <br />Your Beauty
            </h2>
            <p className="text-white/50 text-lg font-light leading-relaxed mb-12">
              Experience the gold standard in aesthetic medicine. Consult with our expert 
              practitioners to design your bespoke journey.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <a 
                href={CONTACT_INFO.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="bg-card-dark p-8 rounded-3xl border border-white/5 hover:border-gold-light/20 transition-all group lg:scale-100 scale-100"
              >
                <Instagram className="text-gold-light mb-4 group-hover:scale-110 transition-transform" size={32} />
                <h3 className="text-xs uppercase tracking-widest text-white/40 mb-2 font-bold">Instagram</h3>
                <p className="text-white text-base sm:text-lg font-medium tracking-wide break-all">@{CONTACT_INFO.instagram}</p>
              </a>

              <a 
                href={`tel:${CONTACT_INFO.phone}`}
                className="bg-card-dark p-8 rounded-3xl border border-white/5 hover:border-gold-light/20 transition-all group"
              >
                <Phone className="text-gold-light mb-4 group-hover:scale-110 transition-transform" size={32} />
                <h3 className="text-xs uppercase tracking-widest text-white/40 mb-2">Phone</h3>
                <p className="text-white font-medium">{CONTACT_INFO.phone}</p>
              </a>
              
              <a 
                href={CONTACT_INFO.facebook}
                target="_blank"
                rel="noreferrer"
                className="bg-card-dark p-8 rounded-3xl border border-white/5 hover:border-gold-light/20 transition-all group"
              >
                <Facebook className="text-gold-light mb-4 group-hover:scale-110 transition-transform" size={32} />
                <h3 className="text-xs uppercase tracking-widest text-white/40 mb-2">Facebook</h3>
                <p className="text-white font-medium">Luscious Cosmetics</p>
              </a>

              <a 
                href={CONTACT_INFO.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="bg-card-dark p-8 rounded-3xl border border-white/5 hover:border-gold-light/20 transition-all group"
              >
                <MessageCircle className="text-gold-light mb-4 group-hover:scale-110 transition-transform" size={32} />
                <h3 className="text-xs uppercase tracking-widest text-white/40 mb-2">WhatsApp</h3>
                <p className="text-white font-medium">Quick Booking</p>
              </a>
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="bg-card-dark p-1 rounded-[30px] sm:rounded-[40px] border border-white/10 overflow-hidden h-full">
              <div className="relative h-[400px] sm:h-full min-h-[350px]">
                <img 
                  src="https://images.unsplash.com/photo-1512290923902-8a9f81dc20df?auto=format&fit=crop&q=80&w=1000" // Aesthetics clinical image
                  alt="Our Clinic"
                  className="w-full h-full object-cover opacity-60 rounded-[28px] sm:rounded-[38px]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-transparent to-transparent" />
                
                <div className="absolute bottom-6 sm:bottom-12 left-6 sm:left-12 right-6 sm:right-12 bg-bg-dark/80 backdrop-blur-xl border border-white/10 p-6 sm:p-10 rounded-2xl sm:rounded-3xl">
                  <div className="flex items-center space-x-4 sm:space-x-6 mb-6 sm:mb-8">
                    <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gold-light/20 flex items-center justify-center shrink-0">
                      <MapPin className="text-gold-light" size={20} sm:size={28} />
                    </div>
                    <div>
                      <h4 className="text-gold-light text-[10px] sm:text-xs uppercase tracking-widest font-bold mb-1">Our Flagship Location</h4>
                      <p className="text-white text-base sm:text-xl font-serif">Bespoke In-Clinic Consultation</p>
                    </div>
                  </div>
                  
                  <Link 
                    to="/book"
                    className="w-full bg-gold-light hover:bg-gold text-bg-dark py-3 sm:py-4 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-[0.2em] transition-all duration-300 text-center flex items-center justify-center"
                  >
                    Schedule Transformation
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
