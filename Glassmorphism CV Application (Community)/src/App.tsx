import React from 'react';
import { BubbleBackground } from './components/BubbleBackground';
import { CVComponent } from './components/CVComponent';

export default function App() {
  return (
    <div className="min-h-screen relative overflow-x-hidden">
      {/* Multi-layered background */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" />
      <div className="fixed inset-0 bg-gradient-to-tr from-blue-900/50 via-transparent to-indigo-900/50" />
      <div className="fixed inset-0 bg-gradient-to-bl from-purple-900/30 via-transparent to-pink-900/30" />
      
      {/* Animated background elements */}
      <BubbleBackground />
      
      {/* Content */}
      <div className="relative z-10">
        <CVComponent />
      </div>
      
      {/* Bottom gradient overlay */}
      <div className="fixed bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900/50 to-transparent pointer-events-none" />
    </div>
  );
}