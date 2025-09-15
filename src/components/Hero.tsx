import React from 'react';
import { Download, MessageCircle, Mail, Linkedin, Github, FileText } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Profile Photo */}
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-primary-400 shadow-2xl glow-teal">
                <img
                  src="/IMG-kashif.jpg"
                  alt="Mohd Kashif Jamal"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary-400/20 to-transparent"></div>
            </div>
          </div>

          {/* Hero Content */}
          <div className="flex-1 text-center lg:text-left animate-slide-in-right">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight animate-fade-in-up">
              <span className="text-primary-400">MOHD KASHIF</span>
              <br />
              <span className="text-white">JAMAL</span>
            </h1>
            
            <h2 className="text-xl lg:text-2xl text-gray-300 mb-6 font-medium animate-fade-in animate-stagger-1">
              Data Analyst | Business Intelligence | Aspiring Data Scientist
            </h2>
            
            <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-2xl animate-fade-in animate-stagger-2">
              Unlocking growth by harnessing the power of AI, machine learning, and advanced analytics to transform raw data into smart, actionable strategies.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8 animate-zoom-in animate-stagger-3">
              <button
                onClick={scrollToContact}
                className="btn-primary px-8 py-4 rounded-xl flex items-center justify-center gap-3 shadow-lg text-lg font-semibold hover-lift"
              >
                <MessageCircle size={20} className="animate-bounce-slow" />
                Contact Me
              </button>
              <div className="flex gap-3">
                <a
                  href="https://docs.google.com/document/d/e/2PACX-1vTDhbB1QyBxH3FicUMKR-COJJfachc25jHd9JaiTwmv5JMdLTkUhftcUe12oNTBkie1tKfax6B4dc55/pub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary px-6 py-4 rounded-xl flex items-center justify-center gap-2 text-lg font-semibold hover-lift"
                >
                  <FileText size={18} className="float-animation" />
                  View
                </a>
                <a
                  href="https://docs.google.com/document/d/1aG8JiWQ65B7OkNnZ1saJXjrPkNr-QfQCG90k-XdsQak/export?format=pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary px-6 py-4 rounded-xl flex items-center justify-center gap-2 text-lg font-semibold hover-lift"
                >
                  <Download size={18} className="animate-bounce-slow" />
                  Download
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex flex-col sm:flex-row gap-6 text-gray-400 animate-slide-in-left animate-stagger-4">
              <a
                href="mailto:jmohdkashif@gmail.com"
                className="flex items-center gap-3 hover:text-primary-400 transition-all duration-300 hover:transform hover:scale-105 hover-glow"
              >
                <Mail size={20} className="float-animation animate-bounce-slow" />
                jmohdkashif@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/mohd-kashif-jamal-234990299"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-primary-400 transition-all duration-300 hover:transform hover:scale-105 hover-glow"
              >
                <Linkedin size={20} className="float-animation animate-stagger-1" />
                LinkedIn Profile
              </a>
              <a
                href="https://github.com/MohdKashif442"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-primary-400 transition-all duration-300 hover:transform hover:scale-105 hover-glow"
              >
                <Github size={20} className="float-animation animate-stagger-2" />
                GitHub Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;