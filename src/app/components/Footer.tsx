import { Facebook, Instagram, Twitter, Youtube, Heart } from 'lucide-react';

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-[#2B1B17] via-[#3D2314] to-[#2B1B17] text-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-[#FF6B00]/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-[#8B0000]/10 to-transparent rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[#FFD700] to-[#FF6B00] rounded-full flex items-center justify-center shadow-lg">
                <span className="text-2xl">🍛</span>
              </div>
              <h3
                className="text-2xl"
                style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700 }}
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] to-[#FF6B00]">
                  Ambur Biriyani
                </span>
              </h3>
            </div>
            <p
              className="text-[#FFF5E1] mb-6 leading-relaxed"
              style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 300 }}
            >
              Bringing you the authentic taste of South Indian cuisine with every bite.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="bg-gradient-to-br from-[#FF6B00] to-[#8B0000] p-3 rounded-full hover:from-[#FFD700] hover:to-[#FF6B00] transition-all shadow-lg transform hover:scale-110">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-gradient-to-br from-[#FF6B00] to-[#8B0000] p-3 rounded-full hover:from-[#FFD700] hover:to-[#FF6B00] transition-all shadow-lg transform hover:scale-110">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-gradient-to-br from-[#FF6B00] to-[#8B0000] p-3 rounded-full hover:from-[#FFD700] hover:to-[#FF6B00] transition-all shadow-lg transform hover:scale-110">
                <Twitter size={20} />
              </a>
              <a href="#" className="bg-gradient-to-br from-[#FF6B00] to-[#8B0000] p-3 rounded-full hover:from-[#FFD700] hover:to-[#FF6B00] transition-all shadow-lg transform hover:scale-110">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="text-xl mb-4"
              style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700 }}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] to-[#FF6B00]">
                Quick Links
              </span>
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  className="text-[#FFF5E1] hover:text-[#FF6B00] transition-colors"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-[#FFF5E1] hover:text-[#FF6B00] transition-colors"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('menu')}
                  className="text-[#FFF5E1] hover:text-[#FF6B00] transition-colors"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  Menu
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('gallery')}
                  className="text-[#FFF5E1] hover:text-[#FF6B00] transition-colors"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-[#FFF5E1] hover:text-[#FF6B00] transition-colors"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h4
              className="text-xl mb-4"
              style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700 }}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] to-[#FF6B00]">
                Opening Hours
              </span>
            </h4>
            <ul className="space-y-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
              <li className="text-[#FFF5E1]">
                <span className="text-[#FF6B00]">Lunch:</span> 12:00 PM - 3:00 PM
              </li>
              <li className="text-[#FFF5E1]">
                <span className="text-[#FF6B00]">Dinner:</span> 7:00 PM - 11:00 PM
              </li>
              <li className="text-[#FFF5E1]">
                <span className="text-[#FF6B00]">Open:</span> All Days
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#FFF5E1]/20 mt-8 pt-8 text-center">
          <p
            className="text-[#FFF5E1] flex items-center justify-center gap-2"
            style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 300 }}
          >
            © 2026 Ambur Biriyani. Made with <Heart className="text-[#FF6B00] fill-[#FF6B00] animate-pulse" size={18} /> All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
