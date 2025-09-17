import React, { useEffect, useState } from 'react';

interface SkillBarProps {
  skill: string;
  level: number;
  delay?: number;
}

export function SkillBar({ skill, level, delay = 0 }: SkillBarProps) {
  const [animatedLevel, setAnimatedLevel] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedLevel(level);
    }, delay);

    return () => clearTimeout(timer);
  }, [level, delay]);

  return (
    <div className="mb-6 group">
      <div className="flex justify-between items-center mb-3">
        <span className="text-white/95 font-medium tracking-wide">{skill}</span>
        <div className="glass-ultra-thin rounded-full px-3 py-1">
          <span className="text-white/80 text-sm font-semibold">{level}%</span>
        </div>
      </div>
      
      <div className="relative">
        {/* Background track */}
        <div className="w-full h-3 glass-ultra-thin rounded-full overflow-hidden">
          {/* Progress bar */}
          <div 
            className="h-full rounded-full transition-all duration-2000 ease-out relative overflow-hidden"
            style={{ 
              width: `${animatedLevel}%`,
              background: `linear-gradient(90deg, 
                rgba(59, 130, 246, 0.9) 0%,
                rgba(99, 102, 241, 0.9) 35%,
                rgba(168, 85, 247, 0.9) 70%,
                rgba(236, 72, 153, 0.9) 100%
              )`,
              boxShadow: `
                0 2px 8px rgba(59, 130, 246, 0.3),
                inset 0 1px 0 rgba(255, 255, 255, 0.3)
              `
            }}
          >
            {/* Shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
          </div>
        </div>
        
        {/* Glow effect */}
        <div 
          className="absolute top-0 h-3 rounded-full transition-all duration-2000 ease-out opacity-50 blur-sm"
          style={{ 
            width: `${animatedLevel}%`,
            background: `linear-gradient(90deg, 
              rgba(59, 130, 246, 0.6) 0%,
              rgba(99, 102, 241, 0.6) 35%,
              rgba(168, 85, 247, 0.6) 70%,
              rgba(236, 72, 153, 0.6) 100%
            )`
          }}
        />
      </div>
    </div>
  );
}