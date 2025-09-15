import React from 'react';
import { Users, Target } from 'lucide-react';

const Leadership = () => {
  const achievements = [
    {
      icon: <Users className="w-8 h-8 text-primary-400" />,
      title: "Core Team Member – Google Developer Student Club (GDSC)",
      description: "Organized sessions on OOPs, Web Design, Java Basics, and GitHub fundamentals. Led technical workshops and mentored fellow students in programming concepts.",
      impact: "Educated 100+ students"
    },
    {
      icon: <Target className="w-8 h-8 text-primary-400" />,
      title: "Sponsorship Management Head – College Fest",
      description: "Managed corporate outreach & fundraising initiatives. Successfully secured partnerships with multiple companies and coordinated event sponsorships.",
      impact: "Raised significant funding"
    }
  ];

  return (
    <section id="leadership" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Leadership & <span className="text-primary-400">Achievements</span>
          </h2>
          <div className="w-24 h-1 bg-primary-400 mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-dark-850/50 p-8 rounded-xl border border-dark-700 hover:border-primary-400/50 transition-all duration-300 hover:transform hover:scale-105 hover-lift animate-slide-in-left"
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 animate-bounce-slow">
                  {achievement.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3 animate-fade-in-up">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed animate-fade-in-up animate-stagger-1">
                    {achievement.description}
                  </p>
                  <div className="inline-block bg-primary-400/20 text-primary-400 px-3 py-1 rounded-full text-sm font-semibold hover-glow animate-fade-in-up animate-stagger-2">
                    {achievement.impact}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;