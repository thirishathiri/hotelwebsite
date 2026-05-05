import { useState, useEffect } from 'react';
import { Menu, X, Phone, Sparkles } from 'lucide-react';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-2xl' : 'bg-white/95 backdrop-blur-md shadow-lg'}`}>
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-[#FF6B00] to-[#FFA500] text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-sm">
          <div className="flex items-center gap-2">
            <Phone size={14} />
            <span style={{ fontFamily: 'Poppins, sans-serif' }}>+91 9367720136</span>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <Sparkles size={14} className="text-[#FFD700]" />
            <span style={{ fontFamily: 'Poppins, sans-serif' }}>Lunch: 12PM-3PM | Dinner: 7PM-11PM</span>
          </div>
        </div>
      </div>

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 transform hover:scale-105 transition-transform">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-[#FFD700] to-[#FF6B00] rounded-full flex items-center justify-center shadow-lg">
                <span className="text-2xl">🍛</span>
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold text-[#8B0000] drop-shadow-sm" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Ambur Biriyani
                </h1>
                <p className="text-xs text-[#FF6B00]" style={{ fontFamily: 'Poppins, sans-serif' }}>Authentic South Indian Flavors</p>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-[#2B1B17] hover:text-[#FF6B00] transition-all transform hover:scale-110 relative group" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500 }}>
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FF6B00] group-hover:w-full transition-all"></span>
            </button>
            <button onClick={() => scrollToSection('about')} className="text-[#2B1B17] hover:text-[#FF6B00] transition-all transform hover:scale-110 relative group" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500 }}>
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FF6B00] group-hover:w-full transition-all"></span>
            </button>
            <button onClick={() => scrollToSection('menu')} className="text-[#2B1B17] hover:text-[#FF6B00] transition-all transform hover:scale-110 relative group" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500 }}>
              Menu
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FF6B00] group-hover:w-full transition-all"></span>
            </button>
            <button onClick={() => scrollToSection('gallery')} className="text-[#2B1B17] hover:text-[#FF6B00] transition-all transform hover:scale-110 relative group" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500 }}>
              Gallery
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FF6B00] group-hover:w-full transition-all"></span>
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-[#2B1B17] hover:text-[#FF6B00] transition-all transform hover:scale-110 relative group" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500 }}>
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FF6B00] group-hover:w-full transition-all"></span>
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-[#8B0000] to-[#FF6B00] text-white px-8 py-3 rounded-full hover:from-[#FF6B00] hover:to-[#8B0000] transition-all shadow-xl transform hover:scale-110 hover:shadow-2xl"
              style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
            >
              Order Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-[#8B0000] p-2 bg-[#FFF5E1] rounded-lg"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 bg-white/95 backdrop-blur-lg rounded-b-2xl shadow-lg">
            <div className="flex flex-col space-y-4 p-4">
              <button onClick={() => scrollToSection('home')} className="text-[#2B1B17] hover:text-[#FF6B00] transition-colors text-left py-2 px-4 rounded-lg hover:bg-[#FFF5E1]" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500 }}>
                Home
              </button>
              <button onClick={() => scrollToSection('about')} className="text-[#2B1B17] hover:text-[#FF6B00] transition-colors text-left py-2 px-4 rounded-lg hover:bg-[#FFF5E1]" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500 }}>
                About
              </button>
              <button onClick={() => scrollToSection('menu')} className="text-[#2B1B17] hover:text-[#FF6B00] transition-colors text-left py-2 px-4 rounded-lg hover:bg-[#FFF5E1]" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500 }}>
                Menu
              </button>
              <button onClick={() => scrollToSection('gallery')} className="text-[#2B1B17] hover:text-[#FF6B00] transition-colors text-left py-2 px-4 rounded-lg hover:bg-[#FFF5E1]" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500 }}>
                Gallery
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-[#2B1B17] hover:text-[#FF6B00] transition-colors text-left py-2 px-4 rounded-lg hover:bg-[#FFF5E1]" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500 }}>
                Contact
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-[#8B0000] to-[#FF6B00] text-white px-6 py-3 rounded-full hover:from-[#FF6B00] hover:to-[#8B0000] transition-all shadow-xl w-fit"
                style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
              >
                Order Now
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
