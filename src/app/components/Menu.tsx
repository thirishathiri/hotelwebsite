export function Menu() {
  const menuCategories = [
    {
      title: 'Biriyani Specials',
      icon: '🍛',
      gradient: 'from-[#8B0000] to-[#A52A2A]',
      items: [
        { name: 'Chicken Dum Biriyani', price: '₹180', popular: true },
        { name: 'Mutton Biriyani', price: '₹250', popular: true },
        { name: 'Egg Biriyani', price: '₹120' },
        { name: 'Prawns Biriyani', price: '₹280' },
        { name: 'Fish Biriyani', price: '₹220' },
        { name: 'Vegetable Biriyani', price: '₹140' },
        { name: 'Paneer Biriyani', price: '₹160' }
      ]
    },
    {
      title: 'South Indian Tiffin',
      icon: '🥞',
      gradient: 'from-[#FF6B00] to-[#FFA500]',
      items: [
        { name: 'Idly (3 pcs)', price: '₹30' },
        { name: 'Masala Dosa', price: '₹60', popular: true },
        { name: 'Plain Dosa', price: '₹50' },
        { name: 'Onion Dosa', price: '₹65' },
        { name: 'Rava Dosa', price: '₹70' },
        { name: 'Ghee Roast', price: '₹80' },
        { name: 'Pongal', price: '₹55' },
        { name: 'Vada (2 pcs)', price: '₹35' },
        { name: 'Upma', price: '₹45' }
      ]
    },
    {
      title: 'Parotta & Breads',
      icon: '🫓',
      gradient: 'from-[#D2691E] to-[#CD853F]',
      items: [
        { name: 'Parotta (1 pc)', price: '₹20' },
        { name: 'Coin Parotta', price: '₹70' },
        { name: 'Kerala Parotta', price: '₹25' },
        { name: 'Chapathi (2 pcs)', price: '₹50' },
        { name: 'Poori (3 pcs)', price: '₹55' },
        { name: 'Naan', price: '₹40' },
        { name: 'Butter Naan', price: '₹50' }
      ]
    },
    {
      title: 'Non-Veg Curries',
      icon: '🍲',
      gradient: 'from-[#8B0000] to-[#FF6B00]',
      items: [
        { name: 'Chicken Curry', price: '₹150', popular: true },
        { name: 'Mutton Curry', price: '₹220' },
        { name: 'Fish Curry', price: '₹180' },
        { name: 'Prawns Curry', price: '₹250' },
        { name: 'Chicken Chettinad', price: '₹170' },
        { name: 'Mutton Chettinad', price: '₹240' },
        { name: 'Egg Curry', price: '₹90' }
      ]
    },
    {
      title: 'Veg Curries',
      icon: '🥘',
      gradient: 'from-[#228B22] to-[#32CD32]',
      items: [
        { name: 'Paneer Butter Masala', price: '₹140' },
        { name: 'Mushroom Masala', price: '₹130' },
        { name: 'Mixed Veg Curry', price: '₹110' },
        { name: 'Dal Fry', price: '₹90' },
        { name: 'Palak Paneer', price: '₹135' },
        { name: 'Kadai Vegetables', price: '₹120' }
      ]
    },
    {
      title: 'Starters',
      icon: '🍗',
      gradient: 'from-[#DC143C] to-[#FF4500]',
      items: [
        { name: 'Chicken 65', price: '₹140', popular: true },
        { name: 'Pepper Chicken', price: '₹160' },
        { name: 'Chicken Lollipop', price: '₹180' },
        { name: 'Chicken Pakoda', price: '₹150' },
        { name: 'Fish Fry', price: '₹200' },
        { name: 'Prawns Fry', price: '₹240' },
        { name: 'Mutton Chukka', price: '₹230' }
      ]
    },
    {
      title: 'Rice Varieties',
      icon: '🍚',
      gradient: 'from-[#FFD700] to-[#FFA500]',
      items: [
        { name: 'Steamed Rice', price: '₹60' },
        { name: 'Jeera Rice', price: '₹80' },
        { name: 'Ghee Rice', price: '₹90' },
        { name: 'Curd Rice', price: '₹70' },
        { name: 'Lemon Rice', price: '₹75' },
        { name: 'Tomato Rice', price: '₹75' }
      ]
    },
    {
      title: 'Beverages',
      icon: '🍹',
      gradient: 'from-[#FF1493] to-[#FF69B4]',
      items: [
        { name: 'Fresh Lime Juice', price: '₹50' },
        { name: 'Watermelon Juice', price: '₹60' },
        { name: 'Mango Juice', price: '₹70' },
        { name: 'Buttermilk', price: '₹30' },
        { name: 'Lassi', price: '₹60' },
        { name: 'Filter Coffee', price: '₹40' },
        { name: 'Tea', price: '₹25' },
        { name: 'Soft Drinks', price: '₹30' }
      ]
    }
  ];

  return (
    <section id="menu" className="py-20 bg-gradient-to-br from-[#FFF5E1] via-white to-[#FFE4B5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-[#8B0000] to-[#FF6B00] text-white px-6 py-2 rounded-full mb-4">
            <span style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}>EXPLORE OUR DELICIOUS</span>
          </div>
          <h2
            className="text-5xl md:text-6xl mb-4"
            style={{ fontFamily: 'Playfair Display, serif', fontWeight: 800 }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B0000] via-[#A52A2A] to-[#FF6B00]">
              Our Menu
            </span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#8B0000] to-[#FF6B00] mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2 duration-300 border-2 border-transparent hover:border-[#FF6B00]"
            >
              <div className={`bg-gradient-to-r ${category.gradient} rounded-2xl p-4 mb-6 shadow-lg`}>
                <div className="flex items-center text-white">
                  <span className="text-5xl mr-3">{category.icon}</span>
                  <h3
                    className="text-2xl"
                    style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700 }}
                  >
                    {category.title}
                  </h3>
                </div>
              </div>
              <div className="space-y-3">
                {category.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="flex justify-between items-center border-b border-[#2B1B17]/10 pb-3 hover:bg-[#FFF5E1] px-2 py-1 rounded-lg transition-colors relative"
                  >
                    <span
                      className="text-[#2B1B17] flex items-center gap-2"
                      style={{ fontFamily: 'Poppins, sans-serif' }}
                    >
                      {item.name}
                      {item.popular && (
                        <span className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-[#2B1B17] text-xs px-2 py-0.5 rounded-full" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}>
                          Popular
                        </span>
                      )}
                    </span>
                    <span
                      className="text-[#FF6B00] min-w-fit"
                      style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
                    >
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
