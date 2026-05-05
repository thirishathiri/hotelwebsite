import { motion } from 'motion/react';
import { Phone, ShoppingBag } from 'lucide-react';

export function CTA() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-[#8B0000] via-[#A52A2A] via-[#FF6B00] to-[#FFA500] relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#FFD700] rounded-full blur-3xl opacity-20 animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl opacity-20 animate-pulse" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded-full mb-6 border-2 border-white/30">
            <span style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}>LIMITED TIME OFFER</span>
          </div>

          <h2
            className="text-5xl md:text-7xl text-white mb-6 drop-shadow-2xl"
            style={{ fontFamily: 'Playfair Display, serif', fontWeight: 800, lineHeight: 1.2 }}
          >
            Order Your Favorite<br />
            <span className="text-[#FFD700]">Ambur Biriyani Today</span>
          </h2>

          <p
            className="text-2xl md:text-3xl text-white mb-10 drop-shadow-lg"
            style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 400 }}
          >
            Experience the authentic taste of South India<br />
            delivered fresh to your doorstep
          </p>

          <div className="flex flex-wrap gap-6 justify-center">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-[#2B1B17] px-12 py-5 rounded-full text-xl hover:from-[#FFA500] hover:to-[#FFD700] transition-all shadow-2xl flex items-center gap-3"
              style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800 }}
            >
              <ShoppingBag size={28} />
              Order Now
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = "tel:+919367720136"}  
              className="bg-white/20 backdrop-blur-md border-2 border-white text-white px-12 py-5 rounded-full text-xl hover:bg-white hover:text-[#8B0000] transition-all shadow-2xl flex items-center gap-3"
              style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800 }}
            >
              <Phone size={28} />
              Call Us
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
