import { motion } from 'motion/react';
import { Award, ShieldCheck, Users, Sparkles } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

export default function About() {
  const highlights = [
    {
      icon: <ShieldCheck className="text-gold-light" size={32} />,
      title: "Medical Excellence",
      description: "Our treatments are performed by highly trained practitioners using only premium, medical-grade products."
    },
    {
      icon: <Award className="text-gold-light" size={32} />,
      title: "Bespoke Results",
      description: "We don't believe in one-size-fits-all. Every treatment plan is tailored to your unique facial anatomy."
    },
    {
      icon: <Users className="text-gold-light" size={32} />,
      title: "Private Sanctuary",
      description: "Enjoy your transformation in a discreet, high-end environment designed for your comfort and privacy."
    },
    {
      icon: <Sparkles className="text-gold-light" size={32} />,
      title: "Natural Aesthetic",
      description: "Our philosophy centers on 'natural enhancement'—refining your beauty without looking overdone."
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-bg-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24 md:mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gold-light uppercase tracking-[0.4em] text-xs font-bold mb-4 block">
              The Gold Standard
            </span>
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-8 leading-tight">
              Crafting Beauty with <br />
              <span className="italic font-normal">Surgical Precision</span>
            </h2>
            <p className="text-white/60 text-lg font-light leading-relaxed mb-8">
              Luscious Cosmetics was born from a vision to bridge the gap between clinical excellence and luxury aesthetics. 
              We believe that medical treatments should be an experience of rejuvenation, not just a procedure.
            </p>
            <p className="text-white/60 text-lg font-light leading-relaxed mb-12">
              Our clinic specializes in advanced facial aesthetics, skincare boosters, and wellness injections. 
              Led by master practitioners, we focus on subtle, sophisticated changes that leave you looking refreshed, 
              confident, and youthfully radiant.
            </p>
            <button 
              onClick={() => window.open(CONTACT_INFO.whatsapp, '_blank')}
              className="bg-gold-light hover:bg-gold text-bg-dark px-10 py-4 rounded-full text-sm font-bold uppercase tracking-widest transition-all duration-300"
            >
              Meet Our Specialists
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden border border-white/10 p-2">
              <img 
                src="https://res.cloudinary.com/didqabx8q/image/upload/q_auto/f_auto/v1778527548/667631440_122312999558796243_8872513887003806704_n_ndadr7.jpg" // Our beautiful clinic/result
                alt="Our Expert Results"
                className="w-full h-full object-cover rounded-[2.5rem]"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Floating Stats */}
            <div className="absolute -bottom-10 -left-10 bg-card-dark border border-white/10 p-8 rounded-3xl hidden md:block backdrop-blur-xl">
              <p className="text-4xl font-serif font-bold text-gold-light mb-1">5,000+</p>
              <p className="text-xs uppercase tracking-widest text-white/40">Successful Treatments</p>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-card-dark p-8 rounded-3xl border border-white/5 hover:border-gold-light/20 transition-all group"
            >
              <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-gold-light/10 transition-colors">
                {item.icon}
              </div>
              <h3 className="text-xl font-serif font-bold text-white mb-4">{item.title}</h3>
              <p className="text-white/40 text-sm font-light leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
