import React from 'react';
import { ExternalLink, Github, Database, ShoppingCart, FileText } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      icon: <Database className="w-8 h-8 text-primary-400" />,
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Zepto SQL Data Analysis",
      description: "Analyzed 12K+ delivery records across 6 cities using SQL queries. Identified repeat customer rates, optimized delivery zones, and provided data-driven insights.",
      technologies: ["SQL", "Data Analysis", "Business Intelligence"],
      githubLink: "https://github.com/MohdKashif442/Zepto_SQL_data_analysis.sql",
      projectLink: "https://github.com/MohdKashif442/Zepto_SQL_data_analysis.sql"
    },
    {
      icon: <ShoppingCart className="w-8 h-8 text-primary-400" />,
      image: "https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Walmart Sales Data Analysis",
      description: "Processed 6,500+ transactions using SQL. Found Branch C contributed 36.7% of gross income and Electronics was the top category. Suggested business strategies via SQL-based insights.",
      technologies: ["SQL", "Data Processing", "Business Strategy"],
      githubLink: "https://github.com/MohdKashif442/-Walmart-Sales-Data-Analysis-Project",
      projectLink: "https://github.com/MohdKashif442/-Walmart-Sales-Data-Analysis-Project"
    },
  ];

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 bg-particles relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 animate-fade-in">
            Data Analytics <span className="text-primary-400">Projects</span>
          </h2>
          <div className="section-divider w-32 mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 animate-slide-up">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass rounded-3xl card-hover group overflow-hidden hover-lift animate-zoom-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden animate-fade-in">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950/90 via-transparent to-transparent"></div>
                <div className="absolute top-6 left-6 pulse-glow rounded-full p-3 bg-dark-950/50 backdrop-blur-sm animate-bounce-slow">
                  {project.icon}
                </div>
              </div>
              
              <div className="p-8 animate-fade-in-up animate-stagger-1">
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary-400 transition-colors duration-300 animate-fade-in-up">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 mb-6 leading-relaxed text-lg animate-fade-in-up animate-stagger-2">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-3 mb-8 animate-fade-in-up animate-stagger-3">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-primary-400/10 text-primary-400 px-4 py-2 rounded-full text-sm font-medium border border-primary-400/30 hover-lift animate-zoom-in"
                      style={{ animationDelay: `${0.5 + techIndex * 0.1}s` }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-6 animate-fade-in-up animate-stagger-4">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-400 hover:text-primary-400 transition-all duration-300 hover:transform hover:scale-105 font-medium hover-glow"
                  >
                    <Github size={20} className="float-animation" />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;