import React from 'react';
import { ExternalLink, Github, Calendar } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  period: string;
  type: 'Web App' | 'Mobile App' | 'E-commerce' | 'SaaS' | 'Landing Page';
  status: 'Completed' | 'In Progress';
  liveUrl?: string;
  githubUrl?: string;
}

interface PortfolioProps {
  projects: Project[];
}

export function Portfolio({ projects }: PortfolioProps) {
  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Web App':
        return 'bg-blue-500/20 text-blue-300 border-blue-400/30';
      case 'Mobile App':
        return 'bg-purple-500/20 text-purple-300 border-purple-400/30';
      case 'E-commerce':
        return 'bg-green-500/20 text-green-300 border-green-400/30';
      case 'SaaS':
        return 'bg-orange-500/20 text-orange-300 border-orange-400/30';
      case 'Landing Page':
        return 'bg-pink-500/20 text-pink-300 border-pink-400/30';
      default:
        return 'bg-gray-500/20 text-gray-300 border-gray-400/30';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-emerald-500/20 text-emerald-300 border-emerald-400/30';
      case 'In Progress':
        return 'bg-yellow-500/20 text-yellow-300 border-yellow-400/30';
      default:
        return 'bg-gray-500/20 text-gray-300 border-gray-400/30';
    }
  };

  return (
    <div className="grid lg:grid-cols-2 gap-8">
      {projects.map((project, index) => (
        <div
          key={index}
          className="group glass-medium rounded-3xl p-8 hover:glass-thick transition-all duration-300 relative overflow-hidden"
        >
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Content */}
          <div className="relative z-10">
            {/* Header */}
            <div className="flex items-start justify-between mb-6">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-2 text-display group-hover:text-blue-300 transition-colors">
                  {project.title}
                </h3>
                <div className="flex items-center gap-3 mb-4">
                  <span className={`text-xs font-medium px-3 py-1 rounded-full border ${getTypeColor(project.type)}`}>
                    {project.type}
                  </span>
                  <span className={`text-xs font-medium px-3 py-1 rounded-full border ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                </div>
              </div>
              
              {/* Action buttons */}
              <div className="flex gap-2 ml-4">
                {project.liveUrl && (
                  <button className="glass-ultra-thin rounded-lg p-2 hover:glass-medium transition-all group/btn">
                    <ExternalLink className="w-4 h-4 text-white/70 group-hover/btn:text-blue-400 transition-colors" />
                  </button>
                )}
                {project.githubUrl && (
                  <button className="glass-ultra-thin rounded-lg p-2 hover:glass-medium transition-all group/btn">
                    <Github className="w-4 h-4 text-white/70 group-hover/btn:text-purple-400 transition-colors" />
                  </button>
                )}
              </div>
            </div>
            
            {/* Period */}
            <div className="flex items-center gap-2 mb-4">
              <Calendar className="w-4 h-4 text-white/50" />
              <span className="text-white/70 text-sm">{project.period}</span>
            </div>
            
            {/* Description */}
            <p className="text-white/85 leading-relaxed mb-6 text-body">
              {project.description}
            </p>
            
            {/* Technologies */}
            <div className="space-y-3">
              <h4 className="text-white/90 font-medium text-sm uppercase tracking-wider">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="glass-ultra-thin rounded-lg px-3 py-1 text-sm text-white/80 font-medium hover:glass-medium transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          {/* Hover border glow */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -m-px" 
               style={{ padding: '1px' }}>
            <div className="w-full h-full rounded-3xl bg-transparent" />
          </div>
        </div>
      ))}
    </div>
  );
}