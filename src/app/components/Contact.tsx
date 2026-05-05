import { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { motion } from 'motion/react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-[#FFF5E1] via-white to-[#FFE4B5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-block bg-gradient-to-r from-[#8B0000] to-[#FF6B00] text-white px-6 py-2 rounded-full mb-4"
          >
            <span style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}>GET IN TOUCH</span>
          </motion.div>
          <h2
            className="text-5xl md:text-6xl mb-4"
            style={{ fontFamily: 'Playfair Display, serif', fontWeight: 800 }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B0000] via-[#A52A2A] to-[#FF6B00]">
              Contact Us
            </span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#8B0000] to-[#FF6B00] mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3
              className="text-3xl mb-6"
              style={{ fontFamily: 'Playfair Display, serif', fontWeight: 800 }}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B0000] to-[#FF6B00]">
                Get in Touch
              </span>
            </h3>
            <div className="space-y-6">
              <div className="flex items-start bg-white rounded-2xl p-4 shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-gradient-to-br from-[#8B0000] to-[#FF6B00] p-2 rounded-full mr-4 flex-shrink-0">
                  <MapPin className="text-white" size={24} />
                </div>
                <div>
                  <h4
                    className="text-[#2B1B17] mb-1"
                    style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}
                  >
                    Address
                  </h4>
                  <p
                    className="text-[#2B1B17]"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    Main Road, Near Bus Stand<br />
                    Villupuram, Tamil Nadu - 605602
                  </p>
                </div>
              </div>

              <div className="flex items-start bg-white rounded-2xl p-4 shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-gradient-to-br from-[#FF6B00] to-[#FFD700] p-2 rounded-full mr-4 flex-shrink-0">
                  <Phone className="text-white" size={24} />
                </div>
                <div>
                  <h4
                    className="text-[#2B1B17] mb-1"
                    style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}
                  >
                    Phone
                  </h4>
                  <p
                    className="text-[#2B1B17]"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    +91 9367720136
                  </p>
                </div>
              </div>

              <div className="flex items-start bg-white rounded-2xl p-4 shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-gradient-to-br from-[#FFD700] to-[#FFA500] p-2 rounded-full mr-4 flex-shrink-0">
                  <Mail className="text-white" size={24} />
                </div>
                <div>
                  <h4
                    className="text-[#2B1B17] mb-1"
                    style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}
                  >
                    Email
                  </h4>
                  <p
                    className="text-[#2B1B17]"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    amburbiriyani@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-start bg-white rounded-2xl p-4 shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-gradient-to-br from-[#FFA500] to-[#8B0000] p-2 rounded-full mr-4 flex-shrink-0">
                  <Clock className="text-white" size={24} />
                </div>
                <div>
                  <h4
                    className="text-[#2B1B17] mb-1"
                    style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}
                  >
                    Opening Hours
                  </h4>
                  <p
                    className="text-[#2B1B17]"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    Lunch: 12:00 PM - 3:00 PM<br />
                    Dinner: 7:00 PM - 11:00 PM<br />
                    Open All Days
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-white to-[#FFF5E1] rounded-3xl p-8 shadow-2xl border-2 border-[#FF6B00]/30"
          >
            <h3
              className="text-3xl mb-6"
              style={{ fontFamily: 'Playfair Display, serif', fontWeight: 800 }}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B0000] to-[#FF6B00]">
                Send us a Message
              </span>
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-[#2B1B17]/20 focus:outline-none focus:border-[#FF6B00]"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-[#2B1B17]/20 focus:outline-none focus:border-[#FF6B00]"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                />
              </div>
              <div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Your Phone"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-[#2B1B17]/20 focus:outline-none focus:border-[#FF6B00]"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                />
              </div>
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-[#2B1B17]/20 focus:outline-none focus:border-[#FF6B00] resize-none"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#8B0000] to-[#FF6B00] text-white px-6 py-4 rounded-xl hover:from-[#FF6B00] hover:to-[#8B0000] transition-all shadow-xl transform hover:scale-105"
                style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
