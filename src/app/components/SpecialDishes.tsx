import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';

export function SpecialDishes() {
  const dishes = [
    {
      name: 'Chicken Dum Biriyani',
      description: 'Aromatic basmati rice layered with tender chicken, slow-cooked with traditional spices in the dum style',
      price: '₹180',
      image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlja2VuJTIwYmlyeWFuaSUyMGluZGlhbiUyMGZvb2R8ZW58MXx8fHwxNzc2NjgyNTUzfDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      name: 'Mutton Biriyani',
      description: 'Premium mutton pieces marinated in rich spices, layered with fragrant saffron rice',
      price: '₹250',
      image: 'https://images.unsplash.com/photo-1631515242808-497c3fbd3972?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxjaGlja2VuJTIwYmlyeWFuaSUyMGluZGlhbiUyMGZvb2R8ZW58MXx8fHwxNzc2NjgyNTUzfDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      name: 'Chicken 65',
      description: 'Crispy fried chicken tossed in a spicy, tangy masala with curry leaves and green chilies',
      price: '₹140',
      image: 'https://images.unsplash.com/photo-1710508774177-7ac2f3492675?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBjaGlja2VuJTIwNjUlMjBzcGljeXxlbnwxfHx8fDE3NzY2ODI1NTR8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      name: 'Parotta with Curry',
      description: 'Flaky, layered parotta served with your choice of rich, flavorful chicken or mutton curry',
      price: '₹120',
      image: 'https://images.unsplash.com/photo-1707448829764-9474458021ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBjdXJyeSUyMG1hc2FsYXxlbnwxfHx8fDE3NzY2ODI1NjB8MA&ixlib=rb-4.1.0&q=80&w=1080'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#8B0000] via-[#A52A2A] to-[#FF6B00] relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FFD700] rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-[#2B1B17] px-6 py-2 rounded-full mb-4"
          >
            <Sparkles size={20} />
            <span style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}>CHEF'S RECOMMENDATION</span>
          </motion.div>
          <h2
            className="text-5xl md:text-6xl text-white mb-4"
            style={{ fontFamily: 'Playfair Display, serif', fontWeight: 800 }}
          >
            Our Special Dishes
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#FFD700] to-white mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {dishes.map((dish, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-[0_20px_60px_rgba(255,107,0,0.4)] transition-all transform hover:-translate-y-3 duration-300 group"
            >
              <div className="h-56 overflow-hidden relative">
                <div className="absolute top-3 right-3 bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-[#2B1B17] px-3 py-1 rounded-full z-10 flex items-center gap-1">
                  <Sparkles size={14} />
                  <span style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: '12px' }}>Special</span>
                </div>
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
              <div className="p-6">
                <h3
                  className="text-xl mb-2"
                  style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700 }}
                >
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B0000] to-[#FF6B00]">
                    {dish.name}
                  </span>
                </h3>
                <p
                  className="text-sm text-[#2B1B17] mb-4 leading-relaxed"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  {dish.description}
                </p>
                <div className="flex justify-between items-center">
                  <span
                    className="text-3xl"
                    style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800 }}
                  >
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B00] to-[#FFD700]">
                      {dish.price}
                    </span>
                  </span>
                  <button className="bg-gradient-to-r from-[#8B0000] to-[#FF6B00] text-white px-4 py-2 rounded-full text-sm hover:from-[#FF6B00] hover:to-[#8B0000] transition-all shadow-lg transform hover:scale-105" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}>
                    Order Now
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
