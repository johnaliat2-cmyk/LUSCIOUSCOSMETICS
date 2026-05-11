import { motion } from 'motion/react';

const galleryImages = [
  'https://res.cloudinary.com/didqabx8q/image/upload/q_auto/f_auto/v1778527759/690682078_122329131944796243_7628258328354361612_n_qaswwm.jpg',
  'https://res.cloudinary.com/didqabx8q/image/upload/q_auto/f_auto/v1778527747/691947636_17912871750388339_5451947352087070952_n_vsaaqv.jpg',
  'https://res.cloudinary.com/didqabx8q/image/upload/q_auto/f_auto/v1778527743/688516576_17912779485388339_7555635747097559824_n_svh6iv.jpg',
  'https://res.cloudinary.com/didqabx8q/image/upload/q_auto/f_auto/v1778527737/689494781_122327993528796243_3889567155007665996_n_s1hssn.jpg',
  'https://res.cloudinary.com/didqabx8q/image/upload/q_auto/f_auto/v1778527727/684165604_122325090278796243_2260563991325440960_n_h3xgiy.jpg',
  'https://res.cloudinary.com/didqabx8q/image/upload/q_auto/f_auto/v1778527956/684261752_122325090236796243_4854326325841346666_n_yngutf.jpg',
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-32 bg-bg-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <span className="text-gold-light uppercase tracking-[0.4em] text-xs font-bold mb-4 block">
            Visual Excellence
          </span>
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
            Results Gallery
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto text-lg font-light">
            Witness the precision of medical artistry. Each transformation is a testament to our commitment to natural, sophisticated results.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
          {galleryImages.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="relative aspect-square overflow-hidden rounded-2xl sm:rounded-[2rem] bg-card-dark group"
            >
              <img
                src={src}
                alt={`Transformation ${index + 1}`}
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4 sm:p-8">
                <span className="text-gold-light text-[10px] sm:text-xs uppercase tracking-widest font-bold">
                  Bespoke Transformation
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
