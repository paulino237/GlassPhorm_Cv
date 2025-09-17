import React from 'react';

export function BubbleBackground() {
  const bubbles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: Math.random() * 120 + 40,
    left: Math.random() * 100,
    animationDelay: Math.random() * 15,
    animationDuration: Math.random() * 15 + 20,
    blur: Math.random() * 10 + 5,
    opacity: Math.random() * 0.4 + 0.1,
  }));

  const floatingElements = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    size: Math.random() * 200 + 100,
    left: Math.random() * 100,
    top: Math.random() * 100,
    animationDelay: Math.random() * 10,
  }));

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Animated bubbles */}
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className="absolute rounded-full bubble-float"
          style={{
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            left: `${bubble.left}%`,
            animationDelay: `${bubble.animationDelay}s`,
            animationDuration: `${bubble.animationDuration}s`,
            background: `radial-gradient(circle at 30% 30%, 
              rgba(138, 180, 248, ${bubble.opacity}),
              rgba(168, 85, 247, ${bubble.opacity * 0.8}),
              rgba(59, 130, 246, ${bubble.opacity * 0.6})
            )`,
            filter: `blur(${bubble.blur}px)`,
            boxShadow: `
              0 8px 32px rgba(59, 130, 246, 0.2),
              inset 0 1px 0 rgba(255, 255, 255, 0.3)
            `,
          }}
        />
      ))}

      {/* Static floating elements for depth */}
      {floatingElements.map((element) => (
        <div
          key={`static-${element.id}`}
          className="absolute rounded-full gentle-pulse"
          style={{
            width: `${element.size}px`,
            height: `${element.size}px`,
            left: `${element.left}%`,
            top: `${element.top}%`,
            animationDelay: `${element.animationDelay}s`,
            background: `radial-gradient(circle at 40% 40%, 
              rgba(99, 102, 241, 0.05),
              rgba(168, 85, 247, 0.03),
              transparent
            )`,
            filter: 'blur(40px)',
          }}
        />
      ))}

      {/* Gradient overlays for more depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5" />
      <div className="absolute inset-0 bg-gradient-to-tl from-indigo-500/3 via-transparent to-pink-500/3" />
    </div>
  );
}