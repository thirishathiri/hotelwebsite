import { motion } from 'motion/react';
import { Camera } from 'lucide-react';

export function Gallery() {
  const images = [
    {
      url: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxjaGlja2VuJTIwYmlyeWFuaSUyMHJpY2V8ZW58MXx8fHwxNzc2Njg0NTk5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      alt: 'Ambur Chicken Biriyani'
    },
    {
      url: 'https://images.unsplash.com/photo-1743615467363-250466982515?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxtYXNhbGElMjBkb3NhJTIwaW5kaWFuJTIwYnJlYWtmYXN0fGVufDF8fHx8MTc3NjY4NDU5OHww&ixlib=rb-4.1.0&q=80&w=1080',
      alt: 'Masala Dosa with Chutneys'
    },
    {
      url: 'https://images.unsplash.com/photo-1756757077703-26dc3ba7e853?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb3V0aCUyMGluZGlhbiUyMGlkbGklMjB2YWRhJTIwc2FtYmFyfGVufDF8fHx8MTc3NjY4NDU5OHww&ixlib=rb-4.1.0&q=80&w=1080',
      alt: 'Vada with Sambar'
    },
    {
      url: 'https://images.unsplash.com/photo-1742281258189-3b933879867a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB0aGFsaSUyMG1lYWx8ZW58MXx8fHwxNzc2NjAwNTg3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      alt: 'South Indian Thali'
    },
    {
      url: 'https://images.unsplash.com/photo-1697155406055-2db32d47ca07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlja2VuJTIwYmlyeWFuaSUyMHJpY2V8ZW58MXx8fHwxNzc2Njg0NTk5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      alt: 'Biriyani Cooking Pot'
    },
    {
      url: 'https://images.unsplash.com/photo-1619714604882-db1396d4a718?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBwYXJvdHRhJTIwYnJlYWR8ZW58MXx8fHwxNzc2Njg0NTk5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      alt: 'Parotta with Curry'
    },
    {
      url: 'https://images.unsplash.com/photo-1692616726788-08f0359d9c27?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxzb3V0aCUyMGluZGlhbiUyMGlkbGklMjB2YWRhJTIwc2FtYmFyfGVufDF8fHx8MTc3NjY4NDU5OHww&ixlib=rb-4.1.0&q=80&w=1080',
      alt: 'Idli Vada Platter'
    },
    {
      url: 'https://images.unsplash.com/photo-1708146464361-5c5ce4f9abb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXNhbGElMjBkb3NhJTIwaW5kaWFuJTIwYnJlYWtmYXN0fGVufDF8fHx8MTc3NjY4NDU5OHww&ixlib=rb-4.1.0&q=80&w=1080',
      alt: 'Crispy Dosa'
    },
    {
      url: 'https://images.unsplash.com/photo-1742281257687-092746ad6021?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxpbmRpYW4lMjB0aGFsaSUyMG1lYWx8ZW58MXx8fHwxNzc2NjAwNTg3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      alt: 'Complete Thali Meal'
    },
    {
      url: 'https://images.unsplash.com/photo-1599043513900-ed6fe01d3833?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxjaGlja2VuJTIwYmlyeWFuaSUyMHJpY2V8ZW58MXx8fHwxNzc2Njg0NTk5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      alt: 'Biriyani with Raita'
    },
    {
      url: 'https://images.unsplash.com/photo-1683533678059-63c6a0e9e3ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxzb3V0aCUyMGluZGlhbiUyMGlkbGklMjB2YWRhJTIwc2FtYmFyfGVufDF8fHx8MTc3NjY4NDU5OHww&ixlib=rb-4.1.0&q=80&w=1080',
      alt: 'Idli Stack'
    },
    {
      url: 'https://images.unsplash.com/photo-1655979284091-eea0e93405ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxpbmRpYW4lMjBwYXJvdHRhJTIwYnJlYWR8ZW58MXx8fHwxNzc2Njg0NTk5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      alt: 'Layered Parotta'
    },
    {
      url: 'https://images.unsplash.com/photo-1694849789325-914b71ab4075?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxtYXNhbGElMjBkb3NhJTIwaW5kaWFuJTIwYnJlYWtmYXN0fGVufDF8fHx8MTc3NjY4NDU5OHww&ixlib=rb-4.1.0&q=80&w=1080',
      alt: 'Golden Dosa'
    },
    {
      url: 'https://images.unsplash.com/photo-1691171047312-d809eccef46d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxjaGlja2VuJTIwYmlyeWFuaSUyMHJpY2V8ZW58MXx8fHwxNzc2Njg0NTk5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      alt: 'Biriyani Special'
    },
    {
      url: 'https://images.unsplash.com/photo-1730191843435-073792ba22bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxzb3V0aCUyMGluZGlhbiUyMGlkbGklMjB2YWRhJTIwc2FtYmFyfGVufDF8fHx8MTc3NjY4NDU5OHww&ixlib=rb-4.1.0&q=80&w=1080',
      alt: 'Medu Vada'
    },
    {
      url: 'https://images.unsplash.com/photo-1742281257707-0c7f7e5ca9c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxpbmRpYW4lMjB0aGFsaSUyMG1lYWx8ZW58MXx8fHwxNzc2NjAwNTg3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      alt: 'Rice Thali Varieties'
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-gradient-to-br from-[#FFF5E1] via-[#FFE4B5] to-[#FFDAB9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#8B0000] to-[#FF6B00] text-white px-6 py-2 rounded-full mb-4"
          >
            <Camera size={20} />
            <span style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}>FOOD PHOTOGRAPHY</span>
          </motion.div>
          <h2
            className="text-5xl md:text-6xl mb-4"
            style={{ fontFamily: 'Playfair Display, serif', fontWeight: 800 }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B0000] via-[#A52A2A] to-[#FF6B00]">
              Gallery
            </span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#8B0000] to-[#FF6B00] mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#8B0000]/80 to-[#FF6B00]/80 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center">
                <span className="text-white text-lg" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}>
                  {image.alt}
                </span>
              </div>
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-64 object-cover group-hover:scale-125 transition-transform duration-500"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
