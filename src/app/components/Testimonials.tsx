import { Star, Quote } from 'lucide-react';
import { motion } from 'motion/react';

export function Testimonials() {
  const testimonials = [
    {
      name: 'Rajesh Kumar',
      rating: 5,
      feedback: 'The best biriyani I have ever tasted! The flavors are authentic and remind me of home-cooked meals. Highly recommend!'
    },
    {
      name: 'Priya Sharma',
      rating: 5,
      feedback: 'Amazing food quality and great service. The chicken 65 is absolutely delicious. Will definitely order again!'
    },
    {
      name: 'Arjun Reddy',
      rating: 5,
      feedback: 'Manis Dum Biriyani never disappoints. The mutton biriyani is perfectly cooked with tender meat and aromatic rice.'
    },
    {
      name: 'Lakshmi Nair',
      rating: 5,
      feedback: 'Love their dosas and chutneys! Fresh ingredients and authentic South Indian taste. A must-try for everyone!'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-white via-[#FFF5E1] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-block bg-gradient-to-r from-[#8B0000] to-[#FF6B00] text-white px-6 py-2 rounded-full mb-4"
          >
            <span style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}>CUSTOMER REVIEWS</span>
          </motion.div>
          <h2
            className="text-5xl md:text-6xl mb-4"
            style={{ fontFamily: 'Playfair Display, serif', fontWeight: 800 }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B0000] via-[#A52A2A] to-[#FF6B00]">
              What Our Customers Say
            </span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#8B0000] to-[#FF6B00] mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => {
            const gradients = [
              'from-[#8B0000] to-[#A52A2A]',
              'from-[#FF6B00] to-[#FFA500]',
              'from-[#A52A2A] to-[#FF6B00]',
              'from-[#FFD700] to-[#FF6B00]'
            ];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl p-6 shadow-2xl hover:shadow-[0_20px_60px_rgba(139,0,0,0.3)] transition-all transform hover:-translate-y-2 duration-300 relative overflow-hidden"
              >
                <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${gradients[index]}`} />
                <div className="flex justify-between items-start mb-4">
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="text-[#FFD700] fill-[#FFD700]"
                        size={22}
                      />
                    ))}
                  </div>
                  <Quote className="text-[#FF6B00]/20" size={40} />
                </div>
                <p
                  className="text-[#2B1B17] mb-6 leading-relaxed"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  {testimonial.feedback}
                </p>
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${gradients[index]} flex items-center justify-center shadow-lg`}>
                    <span className="text-white text-xl" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700 }}>
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <p
                    className="text-[#8B0000]"
                    style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
                  >
                    {testimonial.name}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
