import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { SERVICES_DATA, CONTACT_INFO } from '../constants';
import { Send, CheckCircle2 } from 'lucide-react';
import { useLocation } from 'react-router-dom';

export default function BookingForm() {
  const location = useLocation();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    message: ''
  });

  useEffect(() => {
    if (location.state && location.state.service) {
      setFormData(prev => ({ ...prev, service: location.state.service }));
    }
  }, [location.state]);

  const allServices = SERVICES_DATA.flatMap(cat => cat.services);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you'd send this to a backend or use EmailJS
    // For now, we'll show success and provide a WhatsApp link with pre-filled info
    setSubmitted(true);
    
    // Optional: Auto-redirect to WhatsApp with info after a delay
    const text = `Hi Luscious Cosmetics! I'd like to book an appointment.

*Details:*
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Service: ${formData.service || 'General Consultation'}
Preferred Date: ${formData.date || 'TBD'}
Preferred Time: ${formData.time || 'TBD'}

*Message:*
${formData.message || 'No additional details.'}`;

    const encodedText = encodeURIComponent(text);
    setTimeout(() => {
       window.open(`https://wa.me/447474459008?text=${encodedText}`, '_blank');
    }, 2000);
  };

  if (submitted) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-card-dark border border-gold-light/20 p-12 rounded-[2.5rem] text-center max-w-lg w-full"
        >
          <div className="w-20 h-20 bg-gold-light/10 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle2 size={40} className="text-gold-light" />
          </div>
          <h2 className="text-3xl font-serif font-bold text-white mb-4">Request Sent</h2>
          <p className="text-white/60 mb-8 font-light">
            Thank you, {formData.name}. We have received your booking request. 
            Redirecting you to WhatsApp to finalize your preferred time...
          </p>
          <div className="animate-pulse text-gold-light text-xs uppercase tracking-widest font-bold">
            Redirecting...
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <section className="py-20 bg-bg-dark min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-gold-light uppercase tracking-[0.4em] text-xs font-bold mb-4 block">
            Reservation
          </span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
            Book Your Journey
          </h1>
          <p className="text-white/50 max-w-xl mx-auto text-lg font-light">
            Complete the form below to request a consultation or specific treatment. 
            Our team will contact you shortly to confirm.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-card-dark border border-white/5 rounded-[2.5rem] p-8 md:p-12 shadow-2xl"
        >
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-gold-light font-bold">Full Name</label>
                <input
                  required
                  type="text"
                  placeholder="Your name"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-gold-light/50 transition-colors"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-gold-light font-bold">Phone Number</label>
                <input
                  required
                  type="tel"
                  placeholder="Your phone"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-gold-light/50 transition-colors"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-gold-light font-bold">Email Address</label>
                <input
                  required
                  type="email"
                  placeholder="Your email"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-gold-light/50 transition-colors"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-gold-light font-bold">Desired Treatment</label>
                <select
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-gold-light/50 transition-colors appearance-none"
                  value={formData.service}
                  onChange={(e) => setFormData({...formData, service: e.target.value})}
                >
                  <option value="" disabled className="bg-bg-dark">Select a treatment</option>
                  <optgroup label="Consultation" className="bg-bg-dark">
                    <option value="General Consultation" className="bg-bg-dark">Full Face Consultation</option>
                  </optgroup>
                  {SERVICES_DATA.map(cat => (
                    <optgroup key={cat.title} label={cat.title} className="bg-bg-dark">
                      {cat.services.map(s => (
                        <option key={s.name} value={s.name} className="bg-bg-dark">{s.name} ({s.price})</option>
                      ))}
                    </optgroup>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-gold-light font-bold">Preferred Date</label>
                <input
                  required
                  type="date"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-gold-light/50 transition-colors"
                  value={formData.date}
                  onChange={(e) => setFormData({...formData, date: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-gold-light font-bold">Preferred Time</label>
                <input
                  required
                  type="time"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-gold-light/50 transition-colors"
                  value={formData.time}
                  onChange={(e) => setFormData({...formData, time: e.target.value})}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-gold-light font-bold">Additional Details</label>
              <textarea
                placeholder="Tell us about your goals..."
                rows={4}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-gold-light/50 transition-colors resize-none"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full gold-gradient text-bg-dark py-5 rounded-2xl font-bold uppercase tracking-[0.2em] flex items-center justify-center space-x-3 group"
            >
              <span>Secure Your Appointment</span>
              <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </motion.button>
            
            <p className="text-center text-white/30 text-[10px] uppercase tracking-widest">
              By submitting, you agree to our privacy policy regarding medical consultation.
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
