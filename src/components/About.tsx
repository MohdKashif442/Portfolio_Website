import React from 'react';
import { BarChart3, Database, TrendingUp } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <BarChart3 className="w-8 h-8 text-primary-400" />,
      title: "Data Analytics",
      description: "Excel, SQL, Power BI, Tableau"
    },
    {
      icon: <Database className="w-8 h-8 text-primary-400" />,
      title: "Data Science",
      description: "Python, Pandas, NumPy, Matplotlib, Seaborn"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-primary-400" />,
      title: "Business Intelligence",
      description: "Data Cleaning, Visualization, Reporting, KPI Insights"
    }
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-particles relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 animate-fade-in">
            About <span className="text-primary-400">Me</span>
          </h2>
          <div className="section-divider w-32 mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center animate-slide-up">
          <div className="animate-slide-in-left">
            <h3 className="text-3xl font-bold text-white mb-6 gradient-text animate-fade-in-up">
              My Data Journey
            </h3>
            <p className="text-gray-300 text-xl leading-relaxed mb-8 font-light animate-fade-in-up animate-stagger-1">
              My journey began with a curiosity to uncover hidden stories within raw data. Over time, I have grown into a data professional who connects technical analysis with real-world business impact. From cleaning and visualizing datasets to performing advanced analytics and exploring machine learning applications, I thrive on turning complexity into clarity.
            </p>
            <p className="text-gray-300 text-xl leading-relaxed mb-8 font-light animate-fade-in-up animate-stagger-2">
              Beyond analytics, I enjoy learning new tools, experimenting with AI-driven solutions, and sharing knowledge with aspiring data enthusiasts. For me, data is more than numbers—it's a way to drive smarter decisions and meaningful change for organizations of all sizes.
            </p>
          </div>

          <div className="grid gap-8 animate-slide-in-right">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="glass p-8 rounded-2xl card-hover border-3 border-primary-400 hover:border-primary-300 transition-all duration-300 shadow-lg hover:shadow-2xl glow-teal hover-lift animate-zoom-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 float-animation animate-bounce-slow">
                    {highlight.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-3 animate-fade-in-up animate-stagger-1">
                      {highlight.title}
                    </h3>
                    <p className="text-gray-400 text-lg animate-fade-in-up animate-stagger-2">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;