import React from 'react';
import { Award, Star, Trophy } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      icon: <Award className="w-8 h-8 text-primary-400" />,
      title: "Data Analytics Virtual Internship",
      issuer: "Deloitte (Forage)",
      year: "2024",
      type: "Professional Certification"
    },
    {
      icon: <Star className="w-8 h-8 text-primary-400" />,
      title: "SQL Hacker – 3 Star",
      issuer: "HackerRank",
      year: "2024",
      type: "Technical Achievement"
    },
    {
      icon: <Trophy className="w-8 h-8 text-primary-400" />,
      title: "Data Analytics Internship Certificate",
      issuer: "Codsoft",
      year: "2024",
      type: "Internship Completion"
    }
  ];

  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-primary-400">Certifications</span>
          </h2>
          <div className="w-24 h-1 bg-primary-400 mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-dark-850/50 p-6 rounded-xl border border-dark-700 hover:border-primary-400/50 transition-all duration-300 hover:transform hover:scale-105 text-center hover-lift animate-zoom-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="mb-4 flex justify-center animate-bounce-slow">
                {cert.icon}
              </div>
              
              <h3 className="text-lg font-bold text-white mb-2 animate-fade-in-up animate-stagger-1">
                {cert.title}
              </h3>
              
              <p className="text-primary-400 font-semibold mb-2 animate-fade-in-up animate-stagger-2">
                {cert.issuer}
              </p>
              
              <div className="flex justify-between items-center text-sm text-gray-400 animate-fade-in-up animate-stagger-3">
                <span>{cert.year}</span>
                <span className="bg-dark-700 px-2 py-1 rounded-full text-xs hover-glow">
                  {cert.type}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;