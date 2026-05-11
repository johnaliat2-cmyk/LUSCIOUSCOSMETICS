import { CONTACT_INFO } from '../constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-bg-dark border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <div className="flex items-center space-x-3 justify-center md:justify-start">
              <img 
                src="https://res.cloudinary.com/didqabx8q/image/upload/q_auto/f_auto/v1778527479/282fa78d-3143-44f5-9a94-869d46f09907_qcv2ia.jpg" 
                alt="Luscious Cosmetics Logo" 
                className="w-10 h-10 object-cover rounded-full border border-white/10"
              />
              <div className="flex items-center space-x-2 text-center md:text-left">
                <span className="text-3xl font-script text-gold-light leading-none">
                  Luscious
                </span>
                <span className="text-xl font-script text-white/90 pt-1 leading-none">
                  Cosmetics
                </span>
              </div>
            </div>
            <p className="text-white/30 text-xs mt-2 font-light text-center md:text-left md:ml-13">
              Premium Medical Aesthetics • Est. 2026
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 md:gap-8">
            <a href="#" className="text-xs uppercase tracking-widest text-white/50 hover:text-gold-light transition-colors">Privacy</a>
            <a href="#" className="text-xs uppercase tracking-widest text-white/50 hover:text-gold-light transition-colors">Terms</a>
            <a href="#" className="text-xs uppercase tracking-widest text-white/50 hover:text-gold-light transition-colors">Accessibility</a>
          </div>

          <div className="text-center md:text-right">
            <p className="text-white/50 text-[10px] sm:text-xs tracking-widest uppercase">
              &copy; {currentYear} Luscious Cosmetics. <br className="sm:hidden" /> ALL RIGHTS RESERVED.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
