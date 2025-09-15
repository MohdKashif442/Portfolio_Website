import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Data Analyst Intern",
      company: "Codsoft",
      period: "Jun 2025 – Jul 2025",
      location: "Remote",
      achievements: [
        "Cleaned, transformed, and analyzed business datasets",
        "Built dashboards and visual reports in Power BI showcasing sales trends & KPIs",
        "Delivered insights that improved reporting efficiency"
      ]
    },
    {
      title: "Data Analytics Intern",
      company: "Unified Mentor",
      period: "2025",
      location: "Remote",
      achievements: [
        "Conducted Stock Market Analysis by analyzing trading datasets to identify price trends & stock performance",
        "Performed Supply Chain Analysis to track product flow, bottlenecks, and optimize delivery strategies",
        "Created visual reports & recommendations supporting business optimization"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Professional <span className="text-primary-400">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-primary-400 mx-auto mb-8"></div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-dark-850/50 p-8 rounded-xl border border-dark-700 hover:border-primary-400/50 transition-all duration-300 hover-lift animate-slide-in-left"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="mb-4 lg:mb-0">
                  <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-3 animate-fade-in-up">
                    <Briefcase className="w-6 h-6 text-primary-400 float-animation" />
                    {exp.title}
                  </h3>
                  <p className="text-xl text-primary-400 font-semibold mb-2 animate-fade-in-up animate-stagger-1">
                    {exp.company}
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 text-gray-400 animate-fade-in-up animate-stagger-2">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 animate-bounce-slow" />
                    {exp.period}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 float-animation" />
                    {exp.location}
                  </div>
                </div>
              </div>
              
              <ul className="space-y-3 animate-fade-in-up animate-stagger-3">
                {exp.achievements.map((achievement, achievementIndex) => (
                  <li
                    key={achievementIndex}
                    className="text-gray-300 flex items-start gap-3 animate-fade-in-up"
                    style={{ animationDelay: `${0.4 + achievementIndex * 0.1}s` }}
                  >
                    <span className="w-2 h-2 bg-primary-400 rounded-full mt-2 flex-shrink-0 animate-scale-pulse"></span>
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;