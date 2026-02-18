/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Phone, 
  Menu, 
  X, 
  CheckCircle, 
  Clock, 
  Shield, 
  Wrench, 
  Droplets, 
  Flame, 
  Search, 
  Hammer, 
  Building2, 
  Star, 
  ArrowRight,
  MapPin,
  Mail
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
    }, 1500);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="font-sans text-slate-900 bg-white antialiased selection:bg-blue-100 selection:text-blue-900">
      {/* Sticky Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <div className="bg-blue-700 p-2 rounded-lg">
                <Wrench className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-900 leading-none">PRECISION</h1>
                <p className="text-xs font-bold text-blue-700 tracking-widest uppercase">PLUMBING</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollToSection('services')} className="text-sm font-medium text-slate-600 hover:text-blue-700 transition-colors">Services</button>
              <button onClick={() => scrollToSection('why-us')} className="text-sm font-medium text-slate-600 hover:text-blue-700 transition-colors">Why Us</button>
              <button onClick={() => scrollToSection('about')} className="text-sm font-medium text-slate-600 hover:text-blue-700 transition-colors">About</button>
              <button onClick={() => scrollToSection('testimonials')} className="text-sm font-medium text-slate-600 hover:text-blue-700 transition-colors">Reviews</button>
            </nav>

            {/* CTA & Mobile Menu Toggle */}
            <div className="flex items-center gap-4">
              <a 
                href="tel:+15551234567" 
                className="hidden md:flex items-center gap-2 text-slate-900 font-bold hover:text-blue-700 transition-colors"
              >
                <div className="bg-blue-100 p-2 rounded-full">
                  <Phone className="w-4 h-4 text-blue-700" />
                </div>
                <span>(555) 123-4567</span>
              </a>
              <button 
                onClick={() => scrollToSection('contact')}
                className="hidden md:block bg-blue-700 hover:bg-blue-800 text-white px-6 py-2.5 rounded-lg font-semibold transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                Get Estimate
              </button>
              
              <button 
                className="md:hidden p-2 text-slate-600 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-colors"
                onClick={toggleMenu}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-b border-slate-200 overflow-hidden"
            >
              <div className="px-4 py-6 space-y-4">
                <button onClick={() => scrollToSection('services')} className="block w-full text-left px-4 py-2 text-lg font-medium text-slate-900 hover:bg-slate-50 rounded-lg">Services</button>
                <button onClick={() => scrollToSection('why-us')} className="block w-full text-left px-4 py-2 text-lg font-medium text-slate-900 hover:bg-slate-50 rounded-lg">Why Us</button>
                <button onClick={() => scrollToSection('about')} className="block w-full text-left px-4 py-2 text-lg font-medium text-slate-900 hover:bg-slate-50 rounded-lg">About</button>
                <button onClick={() => scrollToSection('testimonials')} className="block w-full text-left px-4 py-2 text-lg font-medium text-slate-900 hover:bg-slate-50 rounded-lg">Reviews</button>
                <div className="pt-4 border-t border-slate-100">
                  <a href="tel:+15551234567" className="flex items-center justify-center gap-2 w-full bg-slate-100 text-slate-900 font-bold py-3 rounded-lg mb-3">
                    <Phone className="w-5 h-5" />
                    (555) 123-4567
                  </a>
                  <button 
                    onClick={() => scrollToSection('contact')}
                    className="w-full bg-blue-700 text-white font-bold py-3 rounded-lg shadow-md"
                  >
                    Get Free Estimate
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Hero Section */}
      <section className="relative pt-28 pb-20 lg:pt-36 lg:pb-32 bg-slate-900 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1581244277943-fe4a9c777189?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Professional plumber working" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/60 to-slate-900/90"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            {/* Hero Content */}
            <div className="text-center lg:text-left space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/50 border border-blue-700/50 text-blue-300 text-sm font-medium mb-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                Available 24/7 for Emergencies
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
                Precision Plumbing <br/>
                <span className="text-blue-500">Done Right the First Time.</span>
              </h1>
              
              <p className="text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0">
                Fast, reliable plumbing services for homes and businesses. We fix it properly so you don't have to worry.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-lg shadow-lg shadow-blue-900/20 transition-all transform hover:-translate-y-1"
                >
                  Get a Free Estimate
                </button>
                <a 
                  href="tel:+15551234567"
                  className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/10 text-white rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
              </div>

              <div className="pt-6 flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-8 text-sm font-medium text-slate-400">
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-blue-500" />
                  <span>Licensed & Insured</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-blue-500" />
                  <span>24/7 Emergency</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-blue-500" />
                  <span>5-Star Rated</span>
                </div>
              </div>
            </div>

            {/* Lead Capture Form */}
            <div id="contact" className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 lg:p-10 border border-slate-100">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-slate-900">Request Service Now</h3>
                <p className="text-slate-600 mt-1">Fast response. 100% satisfaction guaranteed.</p>
              </div>

              {formStatus === 'success' ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center animate-in fade-in zoom-in duration-300">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h4 className="text-xl font-bold text-green-900 mb-2">Request Received!</h4>
                  <p className="text-green-700">We'll call you shortly to confirm your appointment.</p>
                  <button 
                    onClick={() => setFormStatus('idle')}
                    className="mt-6 text-sm font-semibold text-green-800 hover:text-green-900 underline"
                  >
                    Send another request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      required
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">Phone</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        required
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                      <input 
                        type="email" 
                        id="email" 
                        required
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-slate-700 mb-1">Service Needed</label>
                    <div className="relative">
                      <select 
                        id="service" 
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all appearance-none bg-white"
                      >
                        <option>Emergency Repair</option>
                        <option>Drain Cleaning</option>
                        <option>Water Heater</option>
                        <option>Leak Detection</option>
                        <option>Pipe Repair</option>
                        <option>General Plumbing</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-slate-500">
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd"></path></svg>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Short Message</label>
                    <textarea 
                      id="message" 
                      rows={3}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all resize-none"
                      placeholder="Describe your issue..."
                    ></textarea>
                  </div>

                  <button 
                    type="submit"
                    disabled={formStatus === 'submitting'}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-200 transition-all transform active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {formStatus === 'submitting' ? (
                      <>
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      'Request Service Now'
                    )}
                  </button>
                  
                  <p className="text-xs text-center text-slate-400 mt-4">
                    No spam. Your information is kept private.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-blue-700 font-bold tracking-wide uppercase text-sm mb-3">What We Do</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Our Plumbing Services</h3>
            <p className="text-lg text-slate-600">From minor leaks to major installations, our expert team handles it all with precision and care.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                icon: <Clock className="w-8 h-8 text-red-500" />, 
                title: "Emergency Repairs", 
                desc: "24/7 rapid response for burst pipes, severe leaks, and urgent plumbing disasters." 
              },
              { 
                icon: <Droplets className="w-8 h-8 text-blue-500" />, 
                title: "Drain Cleaning", 
                desc: "Professional unclogging and cleaning for slow drains, backups, and sewer lines." 
              },
              { 
                icon: <Flame className="w-8 h-8 text-orange-500" />, 
                title: "Water Heater Services", 
                desc: "Repair, maintenance, and installation of tank and tankless water heater systems." 
              },
              { 
                icon: <Search className="w-8 h-8 text-teal-500" />, 
                title: "Leak Detection", 
                desc: "Advanced technology to locate and fix hidden leaks behind walls or underground." 
              },
              { 
                icon: <Wrench className="w-8 h-8 text-slate-500" />, 
                title: "Pipe Repair", 
                desc: "Fixing corroded, damaged, or noisy pipes to prevent water damage and restore flow." 
              },
              { 
                icon: <Building2 className="w-8 h-8 text-indigo-500" />, 
                title: "Residential & Commercial", 
                desc: "Comprehensive plumbing solutions for both homeowners and business properties." 
              }
            ].map((service, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-slate-100"
              >
                <div className="bg-slate-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h4>
                <p className="text-slate-600 leading-relaxed mb-6">{service.desc}</p>
                <button onClick={() => scrollToSection('contact')} className="text-blue-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all group">
                  Learn more <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg transition-all transform hover:-translate-y-1"
            >
              Schedule Your Service Today
            </button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-us" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-blue-700 font-bold tracking-wide uppercase text-sm mb-3">Why Choose Us</h2>
              <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">The Precision Difference</h3>
              <p className="text-lg text-slate-600 mb-10">We don't just fix pipes; we build trust. Here is why thousands of local homeowners choose Precision Plumbing.</p>

              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { icon: <Shield className="w-6 h-6 text-blue-600" />, title: "Licensed & Insured", desc: "Fully certified professionals for your peace of mind." },
                  { icon: <CheckCircle className="w-6 h-6 text-blue-600" />, title: "Upfront Pricing", desc: "No hidden fees. You know the price before we start." },
                  { icon: <Clock className="w-6 h-6 text-blue-600" />, title: "Same-Day Service", desc: "Fast scheduling to get your home back to normal." },
                  { icon: <Hammer className="w-6 h-6 text-blue-600" />, title: "Experienced Techs", desc: "Skilled plumbers with years of hands-on experience." },
                  { icon: <Phone className="w-6 h-6 text-blue-600" />, title: "24/7 Emergency", desc: "We are always available when you need us most." },
                  { icon: <Star className="w-6 h-6 text-blue-600" />, title: "Satisfaction Guaranteed", desc: "We stand behind our work with a 100% guarantee." },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="flex-shrink-0 mt-1">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">{item.title}</h4>
                      <p className="text-sm text-slate-600 mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2 relative">
              <div className="absolute -inset-4 bg-blue-100 rounded-3xl transform rotate-3"></div>
              <img 
                src="https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Happy plumber with thumbs up" 
                className="relative rounded-2xl shadow-2xl w-full object-cover h-[500px]"
              />
              <div className="absolute bottom-8 left-8 bg-white p-6 rounded-xl shadow-xl max-w-xs">
                <div className="flex items-center gap-1 text-yellow-400 mb-2">
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                </div>
                <p className="font-bold text-slate-900">"Best plumbing service I have ever used!"</p>
                <p className="text-sm text-slate-500 mt-2">- Sarah J., Local Resident</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-blue-400 font-bold tracking-wide uppercase text-sm mb-3">About Us</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold mb-6">Locally Owned & Dedicated to Quality</h3>
            <p className="text-xl text-slate-300 leading-relaxed mb-8">
              Founded in 2010, Precision Plumbing has grown from a single van to a fleet of trusted professionals. 
              We are locally owned and operated, which means we care deeply about our community and our reputation. 
              Our commitment is simple: provide honest, high-quality work at a fair price. When you call us, 
              you are calling a neighbor who cares.
            </p>
            <div className="flex justify-center gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-500 mb-1">15+</div>
                <div className="text-sm text-slate-400 uppercase tracking-wider">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-500 mb-1">5k+</div>
                <div className="text-sm text-slate-400 uppercase tracking-wider">Jobs Completed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-500 mb-1">24/7</div>
                <div className="text-sm text-slate-400 uppercase tracking-wider">Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-blue-700 font-bold tracking-wide uppercase text-sm mb-3">Testimonials</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900">What Our Customers Say</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Michael Chen",
                role: "Homeowner",
                text: "I had a burst pipe at 2 AM on a Sunday. Precision Plumbing was there in 45 minutes and fixed it fast. Lifesavers!",
                stars: 5
              },
              {
                name: "Jessica Williams",
                role: "Business Owner",
                text: "We use Precision for all our restaurant's plumbing needs. They are professional, clean, and always on time. Highly recommend.",
                stars: 5
              },
              {
                name: "Robert Davis",
                role: "Homeowner",
                text: "Honest pricing and great work. The technician explained everything clearly and didn't try to upsell me. Will definitely use again.",
                stars: 5
              }
            ].map((review, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                <div className="flex gap-1 text-yellow-400 mb-4">
                  {[...Array(review.stars)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <p className="text-slate-600 mb-6 italic">"{review.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center font-bold text-slate-500">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">{review.name}</div>
                    <div className="text-xs text-slate-500 uppercase">{review.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Call Section */}
      <section className="py-20 bg-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">Need Emergency Plumbing Help?</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Don't wait for water damage to get worse. We are available 24/7 for urgent plumbing issues.
          </p>
          <a 
            href="tel:+15551234567"
            className="inline-flex items-center gap-3 bg-white text-blue-700 px-10 py-5 rounded-xl font-bold text-xl shadow-xl hover:bg-blue-50 transition-all transform hover:-translate-y-1"
          >
            <Phone className="w-6 h-6" />
            Call (555) 123-4567
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-16 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="bg-blue-700 p-1.5 rounded-lg">
                  <Wrench className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-white">PRECISION</span>
              </div>
              <p className="mb-6">
                Professional plumbing services you can trust. Licensed, insured, and ready to help.
              </p>
              <div className="flex gap-4">
                {/* Social placeholders */}
                <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors cursor-pointer">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                </div>
                <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors cursor-pointer">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6">Contact Info</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-blue-500 flex-shrink-0" />
                  <span>123 Plumber Lane,<br/>Cityville, ST 12345</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-blue-500 flex-shrink-0" />
                  <a href="tel:+15551234567" className="hover:text-white transition-colors">(555) 123-4567</a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-blue-500 flex-shrink-0" />
                  <a href="mailto:info@precisionplumbing.com" className="hover:text-white transition-colors">info@precisionplumbing.com</a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6">Service Areas</h4>
              <ul className="space-y-2">
                <li>Downtown</li>
                <li>Westside</li>
                <li>North Hills</li>
                <li>Suburban Valley</li>
                <li>River District</li>
                <li>East Lake</li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6">Business Hours</h4>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span>Mon - Fri:</span>
                  <span className="text-white">7:00 AM - 7:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday:</span>
                  <span className="text-white">8:00 AM - 5:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday:</span>
                  <span className="text-white">Emergency Only</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-800 text-center text-sm">
            <p>&copy; {new Date().getFullYear()} Precision Plumbing. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

