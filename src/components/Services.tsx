import { motion } from 'motion/react';
import { SERVICES_DATA } from '../constants';
import { CheckCircle2, Zap, Sparkles, Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const categoryIcons = {
  filler: <Sparkles className="text-gold-light" size={24} />,
  botox: <Zap className="text-gold-light" size={24} />,
  'advanced-botox': <CheckCircle2 className="text-gold-light" size={24} />,
  treatments: <Heart className="text-gold-light" size={24} />,
};

export default function Services() {
  const navigate = useNavigate();
  return (
    <section id="services" className="py-32 bg-bg-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-gold-light uppercase tracking-[0.4em] text-xs font-bold mb-4 block"
          >
            Exceptional Aesthetics
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-serif font-bold text-white mb-6"
          >
            Our Services Menu
          </motion.h2>
          <p className="text-white/50 max-w-2xl mx-auto text-lg font-light">
            Discover a curated selection of elite treatments designed for precision results and a refined, natural aesthetic.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {SERVICES_DATA.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-card-dark border border-white/5 rounded-3xl p-8 md:p-12 hover:border-gold-light/20 transition-all duration-500 group"
            >
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-gold-light/10 transition-colors duration-500">
                  {categoryIcons[category.type]}
                </div>
                <div>
                  <h3 className="text-2xl font-serif font-bold text-white">{category.title}</h3>
                  <p className="text-xs text-gold-light uppercase tracking-widest mt-1 opacity-70">
                    Premium Selections
                  </p>
                </div>
              </div>

              <p className="text-white/40 mb-10 text-sm leading-relaxed italic">
                {category.description}
              </p>

              <div className="space-y-6">
                {category.services.map((service) => (
                  <div 
                    key={service.name}
                    className="flex flex-col space-y-1 group/item cursor-pointer"
                    onClick={() => navigate('/book', { state: { service: service.name } })}
                  >
                    <div className="flex items-end justify-between">
                      <h4 className="text-lg text-white/90 group-hover/item:text-gold-light transition-colors">
                        {service.name}
                      </h4>
                      <div className="flex-grow border-b border-white/5 mb-1.5 mx-4" />
                      <span className="text-lg font-bold text-white tracking-widest">
                        {service.price}
                      </span>
                    </div>
                    {service.description && (
                      <p className="text-xs text-white/30 font-light italic">
                        {service.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => navigate('/book')}
                className="mt-12 w-full py-4 rounded-xl border border-gold-light/20 text-gold-light text-xs font-bold uppercase tracking-[0.2em] hover:bg-gold-light hover:text-bg-dark transition-all duration-300"
              >
                Inquire & Book
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
