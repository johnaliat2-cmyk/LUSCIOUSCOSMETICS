import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

export default function Testimonials() {
  return (
    <section className="py-32 bg-bg-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <span className="text-gold-light uppercase tracking-[0.4em] text-xs font-bold mb-4 block">
            Client Experiences
          </span>
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
            Trusted by Excellence
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto text-lg font-light">
            Real stories from our clients who have experienced the Luscious Cosmetics transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="bg-card-dark p-10 rounded-3xl border border-white/5 relative group hover:border-gold-light/20 transition-all duration-500"
            >
              <Quote className="absolute top-8 right-8 text-gold-light/10 group-hover:text-gold-light/20 transition-colors" size={60} />
              
              <div className="flex mb-6 text-gold-light">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>

              <p className="text-white/80 text-lg font-light italic leading-relaxed mb-8 relative z-10">
                "{testimonial.text}"
              </p>

              <div>
                <h4 className="text-white font-serif font-bold text-xl">{testimonial.name}</h4>
                <p className="text-gold-light text-xs uppercase tracking-widest mt-1 opacity-70">
                  {testimonial.service}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
