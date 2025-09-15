import React from 'react';
import { Download, FileText } from 'lucide-react';

const Resume = () => {
  return (
    <section id="resume" className="py-24 px-4 sm:px-6 lg:px-8 bg-particles relative">
      <div className="max-w-7xl mx-auto text-center">
        <div className="mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 animate-fade-in">
            <span className="text-primary-400">Resume</span>
          </h2>
          <div className="section-divider w-32 mx-auto mb-8"></div>
        </div>

        <div className="glass p-16 rounded-3xl max-w-3xl mx-auto card-hover animate-slide-up">
          <div className="mb-10">
            <div className="relative inline-block mb-8 animate-zoom-in">
              <FileText className="w-20 h-20 text-primary-400 mx-auto pulse-glow animate-bounce-slow" />
              <div className="absolute inset-0 bg-primary-400/20 rounded-full blur-xl animate-scale-pulse"></div>
            </div>
            <h3 className="text-3xl font-bold text-white mb-6 animate-fade-in-up animate-stagger-1">
              View & Download My Resume
            </h3>
            <p className="text-gray-400 mb-10 text-lg leading-relaxed max-w-xl mx-auto animate-fade-in-up animate-stagger-2">
              Get a comprehensive overview of my skills, experience, and achievements in data analytics and business analysis.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up animate-stagger-3">
            <a
              href="https://docs.google.com/document/d/e/2PACX-1vTDhbB1QyBxH3FicUMKR-COJJfachc25jHd9JaiTwmv5JMdLTkUhftcUe12oNTBkie1tKfax6B4dc55/pub"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 btn-secondary px-10 py-4 rounded-2xl shadow-2xl text-lg font-bold hover-lift animate-slide-in-left"
            >
              <FileText size={24} className="float-animation" />
              View Resume
            </a>
            <a
              href="https://docs.google.com/document/d/1aG8JiWQ65B7OkNnZ1saJXjrPkNr-QfQCG90k-XdsQak/export?format=pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 btn-primary px-10 py-4 rounded-2xl shadow-2xl text-lg font-bold hover-lift animate-slide-in-right"
            >
              <Download size={24} className="animate-bounce-slow" />
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;