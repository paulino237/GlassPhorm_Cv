import React from 'react';
import { GlassCard } from './GlassCard';
import { SkillBar } from './SkillBar';
import { TechStack } from './TechStack';
import { Portfolio } from './Portfolio';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  Award, 
  Briefcase, 
  GraduationCap, 
  Download, 
  ExternalLink, 
  Star,
  User,
  Code,
  FolderOpen
} from 'lucide-react';

export function CVComponent() {
  const skills = [
    { name: 'Flutter', level: 95 },
    { name: 'React / Next.js', level: 92 },
    { name: '.NET / C#', level: 88 },
    { name: 'Node.js / API REST', level: 85 },
    { name: 'UX / UI', level: 80 },
    { name: 'AWS / Firebase', level: 82 },
  ];

  const techStack = [
    { name: 'Flutter', level: 'Expert' as const, color: 'from-cyan-400 to-blue-500', icon: '🟦' },
    { name: 'React', level: 'Expert' as const, color: 'from-blue-500 to-indigo-600', icon: '⚛️' },
    { name: 'Next.js', level: 'Advanced' as const, color: 'from-gray-700 to-gray-900', icon: '▲' },
    { name: '.NET / C#', level: 'Advanced' as const, color: 'from-purple-500 to-fuchsia-600', icon: '♯' },
    { name: 'Node.js', level: 'Advanced' as const, color: 'from-green-500 to-green-700', icon: '🟢' },
    { name: 'Firebase', level: 'Advanced' as const, color: 'from-amber-500 to-orange-600', icon: '🔥' },
    { name: 'PostgreSQL', level: 'Intermediate' as const, color: 'from-blue-600 to-indigo-700', icon: '🐘' },
    { name: 'MongoDB', level: 'Intermediate' as const, color: 'from-emerald-500 to-green-600', icon: '🍃' },
    { name: 'AWS', level: 'Intermediate' as const, color: 'from-orange-500 to-yellow-600', icon: '☁️' },
    { name: 'MySQL', level: 'Intermediate' as const, color: 'from-sky-400 to-blue-500', icon: '🗄️' },
  ];

  const projects = [
    {
      title: 'Applications Web/Mobile diverses',
      description: 'Sélection de projets réalisés (web et mobile) avec intégration CI/CD, bases de données cloud et interfaces modernes.',
      technologies: ['Flutter', 'React', 'Next.js', 'Node.js', 'Firebase', 'PostgreSQL', 'AWS'],
      period: '2021 - Présent',
      type: 'Web App' as const,
      status: 'Completed' as const,
      githubUrl: 'https://github.com/example'
    }
  ];

  const experience = [
    {
      position: 'Développeur Senior Web/Mobile',
      company: 'Escrutin',
      period: 'Sept. 2025 - Maintenant',
      description: 'Pilotage technique, développement d’applications web et mobiles, encadrement et bonnes pratiques. Focus Flutter, React, .NET et AWS.',
      highlights: ['Flutter', 'Dart', 'React.js', '.NET', 'C#', 'AWS', 'Management']
    },
    {
      position: 'Développeur Web et Mobile (Hybride)',
      company: 'SOSAN',
      period: '2025 - Sept. 2025',
      description: 'Développement d’applications web et mobiles, intégration Firebase et bases de données, collaboration multi-équipes.',
      highlights: ['Flutter', 'Dart', 'React.js', 'Node.js', 'Next.js', 'Firebase', 'PostgreSQL']
    },
    {
      position: 'Développeur Web et Mobile (Plein temps)',
      company: 'Niovarjobs',
      period: '2021 - Déc. 2024',
      description: 'Conception et développement de solutions web/mobile, APIs RESTful, intégrations Cloud, qualité et performance.',
      highlights: ['Flutter', 'Dart', 'React.js', '.NET', 'C#', 'Node.js', 'REST', 'AWS']
    },
    {
      position: 'Développeur Web et Mobile (Freelance)',
      company: 'Ongoo, KBSL, Yarid, Boashop, Sxylo, Pharmzone',
      period: 'Projets variés',
      description: 'Réalisations freelance: apps web et mobiles, intégrations backend et déploiements cloud.',
      highlights: ['Flutter', 'React.js', 'Node.js', 'Next.js', 'Firebase', 'PostgreSQL']
    }
  ];

  const education = [
    {
      degree: 'Licence en Analyse / Programmation',
      school: 'Université Saint Jean Paul II',
      period: '2024',
      description: 'Parcours orienté développement d’applications et ingénierie logicielle.',
      grade: ''
    },
    {
      degree: 'Baccalauréat en Sciences Physiques et Mathématiques',
      school: 'LYBEK',
      period: '2021',
      description: 'Formation scientifique avec spécialisation mathématiques et physique.',
      grade: ''
    }
  ];

  const languages = [
    { name: 'Français', level: 'Courant' },
    { name: 'Anglais', level: 'Professionnel' },
  ];

  const tools = ['Android Studio', 'GitHub', 'Visual Studio', 'Firebase', 'MongoDB Atlas', 'AWS'];

  return (
    <div className="min-h-screen p-4 md:p-8 space-y-8 max-w-7xl mx-auto">
      {/* Header Section */}
      <GlassCard variant="thick" className="p-8 md:p-12 text-center slide-in-up">
        <div className="relative">
          {/* Profile Image */}
          <div className="w-40 h-40 mx-auto mb-8 rounded-full bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 p-1 shadow-2xl">
            <div className="w-full h-full rounded-full glass-medium flex items-center justify-center">
              <span className="text-5xl font-bold text-white tracking-wider text-display">MF</span>
            </div>
          </div>
          
          {/* Name and Title */}
          <div className="mb-8">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-white bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent tracking-tight text-display">
              MIGUEL FOSSO
            </h1>
            <div className="glass-medium rounded-2xl px-6 py-3 inline-block mb-6">
              <p className="text-xl md:text-2xl text-white/90 font-semibold text-display">Développeur Senior Web/Mobile</p>
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <button className="glass-medium rounded-2xl px-6 py-3 flex items-center gap-2 text-white hover:scale-105 transition-all group">
              <Download className="w-5 h-5 group-hover:animate-bounce" />
              <span className="font-semibold text-display">Télécharger le CV</span>
            </button>
            <a href="https://www.linkedin.com/in/miguel-fosso" target="_blank" rel="noreferrer" className="glass-medium rounded-2xl px-6 py-3 flex items-center gap-2 text-white hover:scale-105 transition-all group">
              <ExternalLink className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              <span className="font-semibold text-display">Voir LinkedIn</span>
            </a>
          </div>
        </div>
      </GlassCard>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="space-y-8">
          {/* Contact */}
          <GlassCard variant="medium" className="p-8 slide-in-up stagger-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 glass-ultra-thin rounded-xl">
                <Mail className="w-6 h-6 text-blue-400" />
              </div>
              <h2 className="text-2xl font-bold text-white text-display">Contacts</h2>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-3 glass-ultra-thin rounded-xl hover:glass-medium transition-all">
                <Mail className="w-5 h-5 text-blue-400" />
                <div>
                  <p className="text-white/60 text-sm">E-mail</p>
                  <p className="text-white/90 font-medium">cocdog11@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 glass-ultra-thin rounded-xl hover:glass-medium transition-all">
                <Phone className="w-5 h-5 text-green-400" />
                <div>
                  <p className="text-white/60 text-sm">Téléphone</p>
                  <p className="text-white/90 font-medium">Cliquez ici</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 glass-ultra-thin rounded-xl hover:glass-medium transition-all">
                <ExternalLink className="w-5 h-5 text-sky-400" />
                <div>
                  <p className="text-white/60 text-sm">LinkedIn</p>
                  <a href="https://www.linkedin.com/in/miguel-fosso" target="_blank" rel="noreferrer" className="text-white/90 font-medium underline">linkedin.com/in/miguel-fosso</a>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 glass-ultra-thin rounded-xl hover:glass-medium transition-all">
                <ExternalLink className="w-5 h-5 text-purple-400" />
                <div>
                  <p className="text-white/60 text-sm">GitHub</p>
                  <a href="#" className="text-white/90 font-medium underline">Mon GitHub</a>
                </div>
              </div>
            </div>
          </GlassCard>

          {/* Education */}
          <GlassCard variant="medium" className="p-8 slide-in-up stagger-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 glass-ultra-thin rounded-xl">
                <GraduationCap className="w-6 h-6 text-yellow-400" />
              </div>
              <h2 className="text-2xl font-bold text-white text-display">Éducation</h2>
            </div>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="glass-ultra-thin rounded-2xl p-6">
                  <div className="flex items-center justify-between mb-3">
                    <div className="glass-ultra-thin rounded-full px-3 py-1">
                      <span className="text-white/80 text-sm font-semibold">{edu.grade || '—'}</span>
                    </div>
                    <span className="text-white/60 flex items-center gap-2 text-sm">
                      <Calendar className="w-4 h-4" />
                      {edu.period}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 text-display">{edu.degree}</h3>
                  <p className="text-purple-300 font-semibold mb-2">{edu.school}</p>
                  <p className="text-white/80 text-sm">{edu.description}</p>
                </div>
              ))}
            </div>
          </GlassCard>

          {/* About Me */}
          <GlassCard variant="medium" className="p-8 slide-in-up stagger-3">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 glass-ultra-thin rounded-xl">
                <User className="w-6 h-6 text-blue-400" />
              </div>
              <h2 className="text-2xl font-bold text-white text-display">À propos</h2>
            </div>
            <p className="text-white/85 leading-relaxed text-body">
              Passionné par le développement web et mobile, et fort d’une expertise dans les technologies et outils ci-dessous, je candidate avec conviction auprès de votre entreprise. En tant que développeur senior, je mets mes compétences pointues au service de vos projets innovants.
            </p>
          </GlassCard>

          {/* Languages & Tools */}
          <GlassCard variant="medium" className="p-8 slide-in-up stagger-3">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 glass-ultra-thin rounded-xl">
                <Award className="w-6 h-6 text-emerald-400" />
              </div>
              <h2 className="text-2xl font-bold text-white text-display">Langues & Logiciels</h2>
            </div>
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                {languages.map((l, i) => (
                  <span key={i} className="glass-ultra-thin rounded-lg px-3 py-1 text-sm text-white/80 font-medium">
                    {l.name} — {l.level}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-2">
                {tools.map((t, i) => (
                  <span key={i} className="glass-ultra-thin rounded-lg px-3 py-1 text-sm text-white/80 font-medium">
                    #{t}
                  </span>
                ))}
              </div>
            </div>
          </GlassCard>
        </div>

        {/* Right Column */}
        <div className="lg:col-span-2 space-y-8">
          {/* Work Experience */}
          <GlassCard variant="medium" className="p-8 slide-in-up stagger-4">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 glass-ultra-thin rounded-xl">
                <Briefcase className="w-6 h-6 text-green-400" />
              </div>
              <h2 className="text-2xl font-bold text-white text-display">Expériences</h2>
            </div>
            <div className="space-y-8">
              {experience.map((job, index) => (
                <div key={index} className="relative pl-8 pb-8 last:pb-0">
                  {/* Timeline line */}
                  <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-blue-400/50 to-purple-400/50" />
                  
                  {/* Timeline dot */}
                  <div className="absolute left-[-8px] top-2 w-4 h-4 glass-medium rounded-full border-2 border-blue-400/50" />
                  
                  <div className="glass-ultra-thin rounded-2xl p-6">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                      <h3 className="text-xl font-bold text-white text-display">{job.position}</h3>
                      <span className="text-white/60 flex items-center gap-2 text-sm">
                        <Calendar className="w-4 h-4" />
                        {job.period}
                      </span>
                    </div>
                    <p className="text-blue-300 font-semibold mb-3">{job.company}</p>
                    <p className="text-white/85 mb-4 leading-relaxed text-body">{job.description}</p>
                    
                    {/* Skills tags */}
                    <div className="flex flex-wrap gap-2">
                      {job.highlights.map((highlight, hIndex) => (
                        <span key={hIndex} className="glass-ultra-thin rounded-lg px-3 py-1 text-sm text-white/80 font-medium">
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>

          {/* Skills */}
          <GlassCard variant="medium" className="p-8 slide-in-up stagger-5">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 glass-ultra-thin rounded-xl">
                <Star className="w-6 h-6 text-purple-400" />
              </div>
              <h2 className="text-2xl font-bold text-white text-display">Compétences</h2>
            </div>
            <div>
              {skills.map((skill, index) => (
                <React.Fragment key={index}>
                  <SkillBar 
                    skill={skill.name} 
                    level={skill.level}
                    delay={index * 200}
                  />
                </React.Fragment>
              ))}
            </div>
          </GlassCard>

          {/* Tech Stack */}
          <GlassCard variant="medium" className="p-8 slide-in-up stagger-6">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 glass-ultra-thin rounded-xl">
                <Code className="w-6 h-6 text-orange-400" />
              </div>
              <h2 className="text-2xl font-bold text-white text-display">Tech Stack</h2>
            </div>
            <TechStack technologies={techStack} />
          </GlassCard>

          {/* My Portfolio */}
          <GlassCard variant="medium" className="p-8 slide-in-up stagger-7">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 glass-ultra-thin rounded-xl">
                <FolderOpen className="w-6 h-6 text-cyan-400" />
              </div>
              <h2 className="text-2xl font-bold text-white text-display">Portfolio</h2>
            </div>
            <Portfolio projects={projects} />
          </GlassCard>
        </div>
      </div>
    </div>
  );
}