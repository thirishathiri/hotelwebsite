import { Leaf, Star, DollarSign, Clock } from 'lucide-react';
import { motion } from 'motion/react';

export function WhyChooseUs() {
  const features = [
    {
      icon: Leaf,
      title: 'Fresh Ingredients',
      description: 'We use only the freshest ingredients sourced daily for the best quality'
    },
    {
      icon: Star,
      title: 'Authentic Taste',
      description: 'Traditional recipes passed down through generations for authentic flavors'
    },
    {
      icon: DollarSign,
      title: 'Affordable Prices',
      description: 'Premium quality food at prices that won\'t break the bank'
    },
    {
      icon: Clock,
      title: 'Fast Service',
      description: 'Quick preparation and delivery without compromising on quality'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#8B0000] via-[#A52A2A] to-[#FF6B00] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#FFD700]/20 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#FFA500]/20 to-transparent rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-block bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-[#2B1B17] px-6 py-2 rounded-full mb-4"
          >
            <span style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}>OUR COMMITMENT</span>
          </motion.div>
          <h2
            className="text-5xl md:text-6xl text-white mb-4"
            style={{ fontFamily: 'Playfair Display, serif', fontWeight: 800 }}
          >
            Why Choose Us
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-white to-[#FFD700] mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const gradients = [
              'from-[#FFD700] to-[#FFA500]',
              'from-[#FF6B00] to-[#FF8C00]',
              'from-[#32CD32] to-[#00CED1]',
              'from-[#FF1493] to-[#FF69B4]'
            ];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className={`bg-gradient-to-br ${gradients[index]} w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4 shadow-2xl transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-300`}>
                  <Icon className="text-white" size={48} />
                </div>
                <h3
                  className="text-2xl text-white mb-3"
                  style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
                >
                  {feature.title}
                </h3>
                <p
                  className="text-[#FFF5E1] text-lg"
                  style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 300 }}
                >
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
