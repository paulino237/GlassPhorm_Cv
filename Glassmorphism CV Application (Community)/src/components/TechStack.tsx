import React from 'react';

interface TechItem {
  name: string;
  level: 'Expert' | 'Advanced' | 'Intermediate';
  color: string;
  icon: string;
}

interface TechStackProps {
  technologies: TechItem[];
}

export function TechStack({ technologies }: TechStackProps) {
  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Expert':
        return 'bg-gradient-to-br from-green-400 to-emerald-500';
      case 'Advanced':
        return 'bg-gradient-to-br from-blue-400 to-indigo-500';
      case 'Intermediate':
        return 'bg-gradient-to-br from-yellow-400 to-orange-500';
      default:
        return 'bg-gradient-to-br from-gray-400 to-gray-500';
    }
  };

  const getLevelBadgeColor = (level: string) => {
    switch (level) {
      case 'Expert':
        return 'text-green-300 bg-green-500/20 border-green-400/30';
      case 'Advanced':
        return 'text-blue-300 bg-blue-500/20 border-blue-400/30';
      case 'Intermediate':
        return 'text-yellow-300 bg-yellow-500/20 border-yellow-400/30';
      default:
        return 'text-gray-300 bg-gray-500/20 border-gray-400/30';
    }
  };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
      {technologies.map((tech, index) => (
        <div
          key={index}
          className="group glass-ultra-thin rounded-2xl p-6 hover:scale-105 transition-all duration-300 hover:glass-medium relative overflow-hidden"
        >
          {/* Background glow effect */}
          <div className={`absolute inset-0 ${tech.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl blur-xl`} />
          
          {/* Content */}
          <div className="relative z-10 flex flex-col items-center text-center">
            {/* Tech Icon/Symbol */}
            <div className={`w-16 h-16 ${getLevelColor(tech.level)} rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
              <span className="text-2xl font-bold text-white">{tech.icon}</span>
            </div>
            
            {/* Tech Name */}
            <h3 className="text-white font-semibold text-lg mb-2 text-display">{tech.name}</h3>
            
            {/* Level Badge */}
            <span className={`text-xs font-medium px-3 py-1 rounded-full border ${getLevelBadgeColor(tech.level)}`}>
              {tech.level}
            </span>
          </div>
          
          {/* Hover shimmer effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 rounded-2xl" />
        </div>
      ))}
    </div>
  );
}