import React from 'react';
import { Code, Database, BarChart, Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code className="w-8 h-8 text-primary-400" />,
      title: "Programming",
      skills: ["Python", "SQL", "HTML", "CSS", "JavaScript"]
    },
    {
      icon: <Wrench className="w-8 h-8 text-primary-400" />,
      title: "Tools & Platforms",
      skills: ["Power BI", "Tableau", "Excel", "MySQL", "PostgreSQL"]
    },
    {
      icon: <Database className="w-8 h-8 text-primary-400" />,
      title: "Libraries",
      skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn"]
    },
    {
      icon: <BarChart className="w-8 h-8 text-primary-400" />,
      title: "Core Skills",
      skills: ["Data Visualization", "Business Analysis", "Data Cleaning", "Reporting"]
    }
  ];

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 animate-fade-in">
            Technical <span className="text-primary-400">Expertise</span>
          </h2>
          <div className="section-divider w-32 mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 animate-slide-up">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="glass p-8 rounded-2xl card-hover hover-lift animate-zoom-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-6 float-animation animate-bounce-slow">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-semibold text-white mb-6 animate-fade-in-up animate-stagger-1">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-3 justify-center animate-fade-in-up animate-stagger-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="inline-block bg-dark-700/50 text-gray-300 px-4 py-2 rounded-full text-sm hover:bg-primary-400 hover:text-dark-950 transition-all duration-300 cursor-default border border-primary-400/20 hover:border-primary-400 hover-lift"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;