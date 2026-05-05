import { motion } from 'motion/react';

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Image */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1589302168068-964664d93dc0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlja2VuJTIwYmlyeWFuaSUyMGluZGlhbiUyMGZvb2R8ZW58MXx8fHwxNzc2NjgyNTUzfDA&ixlib=rb-4.1.0&q=80&w=1080)',
        }}
      />

      {/* Gradient Overlay - Multiple layers for premium look */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#8B0000]/80 via-[#2B1B17]/70 to-[#FF6B00]/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/60 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white mb-6 drop-shadow-2xl"
          style={{ fontFamily: 'Playfair Display, serif', fontWeight: 800, lineHeight: 1.2 }}
        >
          Authentic <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] via-[#FFA500] to-[#FF6B00]">Ambur Biriyani</span> Experience
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-2xl sm:text-3xl md:text-4xl text-white mb-10 drop-shadow-lg"
          style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 400 }}
        >
          Taste the richness of traditional flavors
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <button
            onClick={() => scrollToSection('menu')}
            className="bg-gradient-to-r from-[#FF6B00] to-[#FF8C00] text-white px-10 py-4 rounded-full text-lg hover:from-[#FF8C00] hover:to-[#FF6B00] transition-all shadow-2xl transform hover:scale-110"
            style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
          >
            View Menu
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="bg-white/10 backdrop-blur-md border-2 border-white text-white px-10 py-4 rounded-full text-lg hover:bg-white hover:text-[#8B0000] transition-all shadow-2xl transform hover:scale-110"
            style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
          >
            Order Now
          </button>
        </motion.div>
      </div>
    </section>
  );
}
