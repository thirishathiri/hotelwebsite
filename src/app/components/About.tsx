import { ChefHat, Heart, Award } from 'lucide-react';
import { motion } from 'motion/react';

export function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-white via-[#FFF5E1] to-[#FFE4B5] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-[#FF6B00]/20 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-[#8B0000]/20 to-transparent rounded-full blur-3xl" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-[#8B0000] to-[#FF6B00] text-white px-6 py-2 rounded-full mb-4">
            <span style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}>OUR STORY</span>
          </div>
          <h2
            className="text-5xl md:text-6xl mb-4"
            style={{ fontFamily: 'Playfair Display, serif', fontWeight: 800 }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B0000] via-[#A52A2A] to-[#FF6B00]">
              About Us
            </span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#8B0000] to-[#FF6B00] mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B00] to-[#8B0000] rounded-2xl transform rotate-3" />
            <img
              src="https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxjaGlja2VuJTIwYmlyeWFuaSUyMGluZGlhbiUyMGZvb2R8ZW58MXx8fHwxNzc2NjgyNTUzfDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Biriyani"
              className="w-full h-96 object-cover rounded-2xl shadow-2xl relative z-10 transform hover:scale-105 transition-transform duration-300"
            />
          </motion.div>
          <div>
            <p
              className="text-lg text-[#2B1B17] mb-6 leading-relaxed"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Welcome to Manis Dum Biriyani, where tradition meets taste. We specialize in authentic South Indian cuisine with a focus on our signature Dum Biriyani, prepared using age-old traditional cooking methods.
            </p>
            <p
              className="text-lg text-[#2B1B17] mb-8 leading-relaxed"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Every dish is crafted with fresh ingredients, premium spices, and years of culinary expertise to ensure you experience the true essence of South Indian flavors.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-gradient-to-br from-[#8B0000] to-[#FF6B00] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg transform hover:scale-110 transition-transform">
                  <ChefHat className="text-white" size={32} />
                </div>
                <h3 className="text-[#2B1B17] mb-1" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}>
                  Traditional Cooking
                </h3>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-gradient-to-br from-[#FF6B00] to-[#FFD700] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg transform hover:scale-110 transition-transform">
                  <Heart className="text-white" size={32} />
                </div>
                <h3 className="text-[#2B1B17] mb-1" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}>
                  Fresh Ingredients
                </h3>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-gradient-to-br from-[#FFD700] to-[#FFA500] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg transform hover:scale-110 transition-transform">
                  <Award className="text-white" size={32} />
                </div>
                <h3 className="text-[#2B1B17] mb-1" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}>
                  Quality Taste
                </h3>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Owner Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-[#FFF5E1] via-white to-[#FFE4B5] rounded-3xl p-8 md:p-12 shadow-2xl border border-[#FF6B00]/20"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">

            {/* LEFT CONTENT */}
            <div className="flex-1 text-center md:text-left max-w-xl">
              <div className="inline-block bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-[#2B1B17] px-4 py-1 rounded-full mb-4">
                <span className="font-semibold">FOUNDER</span>
              </div>

              <h3 className="text-4xl mb-4 font-extrabold font-serif">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B0000] to-[#FF6B00]">
                  S. MANIKANDAN
                </span>
              </h3>

              <p className="text-sm text-[#FF6B00] mb-4 font-semibold">
                BBA Hotel Management
              </p>

              <p className="text-lg text-[#2B1B17] leading-relaxed">
                Started in 2020, Mani’s Biriyani was founded with a vision to deliver authentic Ambur-style flavors to food lovers.
Rooted in traditional cooking techniques, we focus on preserving the true essence of South Indian cuisine.
Every dish is prepared using carefully selected ingredients to ensure rich taste and consistent quality.
Our passion for excellence drives us to maintain high standards in both flavor and service.
Over the years, we have built a strong reputation as a trusted destination for biriyani lovers.
We continue to serve memorable dining experiences that celebrate tradition, quality, and hospitality.
              </p>
            </div>

            {/* RIGHT IMAGE */}
            <div className="flex-1 flex justify-center">
              <div className="relative w-[300px] sm:w-[350px] h-[420px] sm:h-[450px]">

                {/* BACKGROUND */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#FF6B00] to-[#FFD700] rounded-2xl rotate-[-4deg]" />

                {/* IMAGE */}
                <img
                  src="assets/images/founderphoto.png"
                  alt="Founder"
                  className="absolute inset-0 w-full h-full object-cover object-center rounded-2xl shadow-2xl transition-transform duration-300 hover:scale-105"
                />

              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
