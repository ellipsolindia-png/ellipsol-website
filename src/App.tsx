import { useState } from 'react';
import { Sun, Zap, Factory, TrendingDown, ArrowRight, MapPin, Mail, Phone, Calendar, Play } from 'lucide-react';
import { config, getGoogleFormUrl, getGoogleCalendarUrl } from './config';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 to-stone-100">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-orange-500/20">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Sun className="w-8 h-8 text-orange-500" />
              <span className="text-xl font-bold text-white">SolarHeat<span className="text-orange-500">.</span></span>
            </div>
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-stone-200 hover:text-orange-500 transition-colors">Home</button>
              <button onClick={() => scrollToSection('technology')} className="text-stone-200 hover:text-orange-500 transition-colors">Technology</button>
              <button onClick={() => scrollToSection('assessment')} className="text-stone-200 hover:text-orange-500 transition-colors">Assessment</button>
              <button onClick={() => scrollToSection('contact')} className="text-stone-200 hover:text-orange-500 transition-colors">Contact</button>
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-stone-900 to-orange-950">
          <img
            src={config.images.heroBackground}
            alt="Solar Concentrator"
            className="w-full h-full object-cover opacity-40"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
            }}
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40"></div>

        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight">
            Industrial Heat<span className="text-orange-500">.</span>
            <br />
            <span className="bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent">
              Re-Engineered
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-stone-300 mb-4 max-w-3xl mx-auto">
            Lowest-cost solar steam & hot water — powered by air, not steel
          </p>

          <p className="text-lg text-stone-400 mb-12 max-w-2xl mx-auto">
            Delivering industrial grade steam and hot water at costs lower than fossil fuel boilers
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => scrollToSection('assessment')}
              className="group px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-orange-500/50 transition-all transform hover:scale-105 flex items-center gap-2"
            >
              Get Free Assessment
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => scrollToSection('technology')}
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full font-semibold text-lg border-2 border-white/20 hover:bg-white/20 hover:border-orange-500/50 transition-all"
            >
              See How It Works
            </button>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-b from-transparent to-stone-50 h-32"></div>
      </section>

      <section className="py-20 bg-gradient-to-b from-stone-50 to-white relative overflow-hidden">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>

        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all border border-stone-200 hover:border-orange-300 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-orange-500/30">
                  <TrendingDown className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-stone-900 mb-2">Lowest Cost Heat</h3>
                <p className="text-stone-600">Cheaper than fossil fuels</p>
              </div>
            </div>

            <div className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all border border-stone-200 hover:border-orange-300 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-orange-500/30">
                  <Sun className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-stone-900 mb-2">Air-Based SolarTech</h3>
                <p className="text-stone-600">Ultra-light, inflatable system</p>
              </div>
            </div>

            <div className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all border border-stone-200 hover:border-orange-300 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-orange-500/30">
                  <Factory className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-stone-900 mb-2">Industry Ready</h3>
                <p className="text-stone-600">Built for factories</p>
              </div>
            </div>

            <div className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all border border-stone-200 hover:border-orange-300 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-orange-500/30">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-stone-900 mb-2">50% Fuel Savings</h3>
                <p className="text-stone-600">Immediate cost reduction</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="technology" className="py-20 bg-gradient-to-b from-white to-stone-50 relative overflow-hidden">
        <div className="absolute top-20 right-10 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-stone-900 mb-6">
              How It <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">Works</span>
            </h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
              Revolutionary air-based solar concentrator technology delivering ultra-low cost industrial heat
            </p>
          </div>

          <div className="space-y-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 order-2 md:order-1">
                <div className="bg-white rounded-3xl p-8 shadow-lg border border-stone-200 hover:border-orange-300 transition-colors">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-orange-500/30">
                      <span className="text-white font-bold text-xl">1</span>
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-stone-900 mb-2">Solar Concentration</h3>
                      <p className="text-stone-600 text-lg">Parabolic concentrators capture and focus sunlight to generate intense heat using air-based inflatable structures. The concentrated solar energy reaches temperatures suitable for industrial applications.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative group overflow-hidden rounded-3xl shadow-2xl border-4 border-white bg-stone-200 order-1 md:order-2">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-orange-600/20 group-hover:from-orange-500/30 group-hover:to-orange-600/30 transition-all z-10"></div>
                <img
                  src={config.images.solarConcentration}
                  alt="Solar Concentration"
                  className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.parentElement!.innerHTML = '<div class="w-full aspect-video flex items-center justify-center bg-gradient-to-br from-orange-500/20 to-stone-400"><p class="text-stone-600 text-center p-4">Solar Concentration Image</p></div>';
                  }}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="relative group overflow-hidden rounded-3xl shadow-2xl border-4 border-white bg-stone-200">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-orange-600/20 group-hover:from-orange-500/30 group-hover:to-orange-600/30 transition-all z-10"></div>
                <img
                  src={config.images.heatTransfer}
                  alt="Heat Transfer"
                  className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.parentElement!.innerHTML = '<div class="w-full aspect-video flex items-center justify-center bg-gradient-to-br from-orange-500/20 to-stone-400"><p class="text-stone-600 text-center p-4">Heat Transfer Image</p></div>';
                  }}
                />
              </div>
              <div className="space-y-6">
                <div className="bg-white rounded-3xl p-8 shadow-lg border border-stone-200 hover:border-orange-300 transition-colors">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-orange-500/30">
                      <span className="text-white font-bold text-xl">2</span>
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-stone-900 mb-2">Heat Transfer</h3>
                      <p className="text-stone-600 text-lg">Concentrated solar energy efficiently heats a transfer medium, which produces high-temperature steam or hot water. This process is consistent, reliable, and requires minimal maintenance compared to traditional boilers.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 order-2 md:order-1">
                <div className="bg-white rounded-3xl p-8 shadow-lg border border-stone-200 hover:border-orange-300 transition-colors">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-orange-500/30">
                      <span className="text-white font-bold text-xl">3</span>
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-stone-900 mb-2">Steam Generation</h3>
                      <p className="text-stone-600 text-lg">The heated transfer medium generates industrial-grade steam at the exact specifications needed for your processes. The system seamlessly integrates with existing infrastructure, reducing fuel consumption by up to 50%.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative group overflow-hidden rounded-3xl shadow-2xl border-4 border-white bg-stone-200 order-1 md:order-2">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-orange-600/20 group-hover:from-orange-500/30 group-hover:to-orange-600/30 transition-all z-10"></div>
                <img
                  src={config.images.steamGeneration}
                  alt="Steam Generation"
                  className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.parentElement!.innerHTML = '<div class="w-full aspect-video flex items-center justify-center bg-gradient-to-br from-orange-500/20 to-stone-400"><p class="text-stone-600 text-center p-4">Steam Generation Image</p></div>';
                  }}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="relative group overflow-hidden rounded-3xl shadow-2xl border-4 border-white bg-stone-900">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-orange-600/20 group-hover:from-orange-500/30 group-hover:to-orange-600/30 transition-all z-10"></div>
                <video
                  src={config.videos.technologyDemo}
                  className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-500"
                  controls
                  controlsList="nodownload"
                />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="bg-orange-500 rounded-full p-4 group-hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 text-white fill-white" />
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="bg-white rounded-3xl p-8 shadow-lg border border-stone-200 hover:border-orange-300 transition-colors">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-orange-500/30">
                      <span className="text-white font-bold text-xl">4</span>
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-stone-900 mb-2">Technology in Action</h3>
                      <p className="text-stone-600 text-lg">Watch our revolutionary solar concentrator technology in action. See how the air-based system operates efficiently in real industrial environments, delivering consistent, clean heat with zero emissions and maximum cost savings.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-stone-900 to-black rounded-3xl p-12 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-white mb-4">Why Air-Based Technology?</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <h4 className="text-xl font-bold text-orange-400 mb-2">Ultra-Lightweight</h4>
                  <p className="text-stone-300">Inflatable structures reduce installation costs and structural requirements</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <h4 className="text-xl font-bold text-orange-400 mb-2">Scalable</h4>
                  <p className="text-stone-300">Easily expand capacity as your industrial heat needs grow</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <h4 className="text-xl font-bold text-orange-400 mb-2">Cost-Effective</h4>
                  <p className="text-stone-300">Lower capital and operational costs compared to traditional systems</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="assessment" className="min-h-screen py-20 bg-gradient-to-b from-stone-50 to-white relative overflow-hidden">
        <div className="absolute bottom-20 left-10 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl"></div>

        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-stone-900 mb-6">
              Free Energy <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">Savings Assessment</span>
            </h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
              Discover how much you can save by switching to solar industrial heat. Book your complimentary assessment today.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl p-12 border border-stone-200 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-orange-500/10 to-transparent rounded-full blur-2xl"></div>

            <div className="relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div className="text-center p-6 bg-stone-50 rounded-2xl">
                  <div className="text-4xl font-bold text-orange-500 mb-2">Free</div>
                  <div className="text-stone-600">No Cost Assessment</div>
                </div>
                <div className="text-center p-6 bg-stone-50 rounded-2xl">
                  <div className="text-4xl font-bold text-orange-500 mb-2">24h</div>
                  <div className="text-stone-600">Quick Response Time</div>
                </div>
                <div className="text-center p-6 bg-stone-50 rounded-2xl">
                  <div className="text-4xl font-bold text-orange-500 mb-2">50%</div>
                  <div className="text-stone-600">Average Fuel Savings</div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-stone-900 to-black rounded-2xl p-8 mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">What's Included:</h3>
                <ul className="space-y-3 text-stone-300">
                  <li className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span>Detailed analysis of your current energy consumption</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span>Custom solar heat system design for your facility</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span>Projected savings and ROI calculation</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span>Implementation timeline and investment breakdown</span>
                  </li>
                </ul>
              </div>

              <a
                href={getGoogleFormUrl()}
                target={getGoogleFormUrl() !== '#' ? '_blank' : undefined}
                rel={getGoogleFormUrl() !== '#' ? 'noopener noreferrer' : undefined}
                className="group block w-full py-6 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full font-bold text-xl text-center hover:shadow-2xl hover:shadow-orange-500/50 transition-all transform hover:scale-105"
                onClick={(e) => {
                  if (getGoogleFormUrl() === '#') {
                    e.preventDefault();
                    alert('Please configure your Google Form ID in src/config.ts');
                  }
                }}
              >
                <span className="flex items-center justify-center gap-3">
                  Book Free Assessment Now
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </span>
              </a>

              <p className="text-center text-stone-500 mt-6 text-sm">
                Fill out a quick form with your facility details and we'll get back to you within 24 hours
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="min-h-screen py-20 bg-gradient-to-b from-white to-stone-100 relative overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-stone-900 mb-6">
              Get In <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">Touch</span>
            </h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
              Ready to transform your industrial heat system? Let's discuss your energy needs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-stone-900 to-black rounded-3xl p-12 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/20 rounded-full blur-2xl"></div>

                <div className="relative z-10">
                  <h3 className="text-3xl font-bold text-white mb-8">Visit Our Office</h3>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-orange-500/30">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-white mb-1">Address</h4>
                        <p className="text-stone-300">123 Solar Park Avenue<br />Industrial Zone, Tech City<br />PIN: 560001</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-orange-500/30">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-white mb-1">Email</h4>
                        <p className="text-stone-300">contact@solarheat.com<br />sales@solarheat.com</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-orange-500/30">
                        <Phone className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-white mb-1">Phone</h4>
                        <p className="text-stone-300">+91 123 456 7890<br />+91 098 765 4321</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-lg border border-stone-200">
                <h3 className="text-2xl font-bold text-stone-900 mb-4">Office Hours</h3>
                <div className="space-y-3 text-stone-600">
                  <div className="flex justify-between py-2 border-b border-stone-200">
                    <span>Monday - Friday</span>
                    <span className="font-semibold">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-stone-200">
                    <span>Saturday</span>
                    <span className="font-semibold">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span>Sunday</span>
                    <span className="font-semibold text-orange-500">Closed</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-3xl p-10 shadow-lg border border-stone-200">
                <h3 className="text-2xl font-bold text-stone-900 mb-6">Schedule an Energy Audit</h3>

                <div className="space-y-4">
                  <a
                    href="https://calendar.google.com/calendar/u/0/r/eventedit?text=Energy+Audit+-+In-Person&duration=15"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full group block bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-2xl p-6 hover:shadow-xl hover:shadow-orange-500/30 transition-all transform hover:scale-105"
                  >
                    <div className="flex items-center justify-between">
                      <div className="text-left">
                        <div className="font-bold text-xl mb-1">In-Person Meeting</div>
                        <div className="text-orange-100 text-sm">Visit us at our office</div>
                      </div>
                      <Calendar className="w-8 h-8 group-hover:scale-110 transition-transform" />
                    </div>
                  </a>

                  <a
                    href="https://calendar.google.com/calendar/u/0/r/eventedit?text=Energy+Audit+-+Virtual+Meeting&duration=15"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full group block bg-stone-100 text-stone-900 rounded-2xl p-6 hover:bg-stone-200 border-2 border-stone-200 hover:border-orange-300 transition-all"
                  >
                    <div className="flex items-center justify-between">
                      <div className="text-left">
                        <div className="font-bold text-xl mb-1">Virtual Meeting</div>
                        <div className="text-stone-600 text-sm">Connect via video call</div>
                      </div>
                      <Calendar className="w-8 h-8 group-hover:scale-110 transition-transform" />
                    </div>
                  </a>
                </div>

                <div className="mt-8 p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl border border-orange-200">
                  <h4 className="font-bold text-stone-900 mb-2">Why Schedule an Audit?</h4>
                  <ul className="space-y-2 text-sm text-stone-700">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                      On-site evaluation of your facility
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                      Precise energy consumption analysis
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                      Custom system design recommendations
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                      Detailed ROI calculations
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-br from-stone-900 to-black rounded-3xl p-8 relative overflow-hidden">
                <div className="absolute bottom-0 right-0 w-48 h-48 bg-orange-500/20 rounded-full blur-2xl"></div>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-white mb-4">Ready to Slash Your Energy Costs?</h3>
                  <p className="text-stone-300 mb-6">Join hundreds of industries already saving with our solar heat technology.</p>
                  <button
                    onClick={() => scrollToSection('assessment')}
                    className="w-full py-4 bg-orange-500 text-white rounded-xl font-semibold hover:bg-orange-600 transition-colors"
                  >
                    Book Free Assessment
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Sun className="w-6 h-6 text-orange-500" />
                <span className="text-lg font-bold">SolarHeat<span className="text-orange-500">.</span></span>
              </div>
              <p className="text-stone-400 text-sm">Ultra-low cost industrial heat powered by air-based solar concentrator technology.</p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-stone-400 text-sm">
                <li><button onClick={() => scrollToSection('home')} className="hover:text-orange-500 transition-colors">Home</button></li>
                <li><button onClick={() => scrollToSection('technology')} className="hover:text-orange-500 transition-colors">Technology</button></li>
                <li><button onClick={() => scrollToSection('assessment')} className="hover:text-orange-500 transition-colors">Assessment</button></li>
                <li><button onClick={() => scrollToSection('contact')} className="hover:text-orange-500 transition-colors">Contact</button></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-stone-400 text-sm">
                <li>Solar Steam Generation</li>
                <li>Hot Water Systems</li>
                <li>Energy Audits</li>
                <li>Custom Solutions</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Connect</h4>
              <ul className="space-y-2 text-stone-400 text-sm">
                <li>contact@solarheat.com</li>
                <li>+91 123 456 7890</li>
                <li>123 Solar Park Avenue</li>
                <li>Industrial Zone, Tech City</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-stone-800 pt-8 text-center text-stone-500 text-sm">
            <p>&copy; 2024 SolarHeat. All rights reserved. Powered by renewable energy.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
