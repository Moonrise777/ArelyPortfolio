import { useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code, Palette, Sparkles, Download, Menu, X, Contact } from 'lucide-react';

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
//  const [activeSection, setActiveSection] = useState('home');

const projects = [
    {
      title: "Wordy",
      description: "A minimalist game inspired by Wordle, bilingual (🇪🇸/🇺🇸), with unlimited random words and user authentication.",
      tech: ["React", "Vite", "Firebase", "Tailwind CSS", "Sass"],
      image: "https://i.postimg.cc/PfKf4xNb/Wordy.png",
      github: "https://github.com/Moonrise777/Wordy",
      demo: "https://moonrise777.github.io/Wordy/"
    },
    {
      title: "StayInn",
      description: "A conceptual platform for booking stays, whose architecture is designed to serve as a template for similar projects.",
      tech: ["CSS", "TypeScript", "HTML", "JavaScript"],
      image: "https://i.postimg.cc/YqgpcdNX/StayInn.png",
      github: "https://github.com/UnGuille/proyectofinal-angular",
      demo: "https://proyectofinal-angular.vercel.app/"
    },
    {
      title: "Quartz Obsidian",
      description: "A system to automatically convert and publish my Obsidian notes as a fast and modern website, using the Quartz platform.",
      tech: ["Obsidian", "Quartz", "JavaScript", "TypeScript", "Markdown", "HTML", "SCSS"],
      image: "https://i.postimg.cc/zv9vBJnd/Quartz.png",
      github: "https://github.com/Moonrise777/Quartz_Obsidian",
      demo: "https://moonrise777.github.io/Quartz_Obsidian/"
    }
  ];

  const skills = [
    { name: "React", level: 90 },
    { name: "JavaScript", level: 80 },
    { name: "CSS/Sass", level: 90 },
    { name: "Node.js", level: 90 },
    { name: "Tailwind CSS", level: 85 },
    { name: "Git", level: 90 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-slate-900/80 backdrop-blur-md z-50 border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <a href="#home" className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Arely's Portfolio 
            </a>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-purple-400 transition relative group"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-400 group-hover:w-full transition-all"></span>
                </a>
              ))}
            </div>

            <a
              href="#contact"
              className="hidden md:block bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-2 rounded-full hover:shadow-lg hover:shadow-purple-500/50 transition transform hover:scale-105"
            >
              Hire Me !
            </a>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden"
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-900 border-t border-purple-500/20">
            <div className="px-4 py-4 space-y-3">
              {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block hover:text-purple-400 transition"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16">
        <div className="max-w-7xl mx-auto text-center mt-8">
        <div className="mb-8 relative inline-block">
          <div className="relative group">
            {/* Círculo de fondo animado */}
            <div className="absolute inset-0 w-40 h-40 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 animate-pulse opacity-75 blur-xl"></div>
            
            {/* Foto de perfil */}
            <img 
              src="./resources/profile.jpg" 
              alt="Arely - Web Developer" 
              className="relative w-48 h-48 rounded-full mx-auto object-cover shadow-2xl transition transform group-hover:scale-105 group-hover:-rotate-12"
            />
            
            {/* Icono de brillo */}
            <Sparkles className="absolute -bottom-2 -right-2 text-yellow-400 animate-bounce w-8 h-8" />
          </div>
        </div>


          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hi! I'm <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">Arely</span> 
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Computer Systems Engineer & Front-End Developer
          </p>
          
          <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto">
            Passionate about creating beautiful and functional web experiences. 
            Specializing in React, Sass, and modern web technologies. 
            Let's build something amazing together! 💻✨
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="#projects"
              className="bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition transform hover:scale-105 flex items-center justify-center gap-2"
            >
              View My Work <ExternalLink className="w-5 h-5" />
            </a>
            <a href="#contact"
              className="border-2 border-purple-500 px-8 py-4 rounded-full font-semibold hover:bg-purple-500/10 transition flex items-center justify-center gap-2">
              <Contact className="w-5 h-5" /> Contact Me!
            </a>

          </div>

          {/* Social Links */}
          <div className="flex gap-6 justify-center mb-5">
            <a href="https://github.com/Moonrise777" target="_blank" className="hover:text-purple-400 transition transform hover:scale-110">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com/in/arely-zuleika" target="_blank" className="hover:text-purple-400 transition transform hover:scale-110">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:arelyzuleika@gmail.com" target="_blank" className="hover:text-purple-400 transition transform hover:scale-110">
              <Mail className="w-6 h-6" />
            </a>
          </div>

        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            About <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Me</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                Passionate web developer and Computer Systems Engineering student. 
                I love turning complex ideas into creative and user-friendly websites that make an impact.
                Let's build your dream website together!
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                I specialize in React, Sass, CSS, and various modern web technologies. 
                My goal is to become a professional Web Designer, crafting beautiful 
                experiences that users love.
              </p>
              <div className="flex gap-4">
                <div className="bg-purple-500/20 p-4 rounded-lg flex-1 text-center border border-purple-500/30">
                  <Code className="w-8 h-8 mx-auto mb-2 text-purple-400" />
                  <p className="font-bold text-2xl">20+</p>
                  <p className="text-gray-400">Projects</p>
                </div>
                <div className="bg-pink-500/20 p-4 rounded-lg flex-1 text-center border border-pink-500/30">
                  <Palette className="w-8 h-8 mx-auto mb-2 text-pink-400" />
                  <p className="font-bold text-2xl">100+</p>
                  <p className="text-gray-400">Designs</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 p-8 rounded-2xl border border-purple-500/30">
              <h3 className="text-2xl font-bold mb-6">What I Do</h3>
              <div className="space-y-4">
                {[
                  { icon: "🎨", title: "UI/UX Design", desc: "Creating beautiful and intuitive interfaces" },
                  { icon: "⚡", title: "Web Development", desc: "Building fast and responsive websites" },
                  { icon: "📱", title: "Responsive Design", desc: "Ensuring perfect experience on all devices" }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <span className="text-3xl">{item.icon}</span>
                    <div>
                      <h4 className="font-bold text-lg">{item.title}</h4>
                      <p className="text-gray-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            My <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <div key={i} className="bg-slate-800/50 rounded-2xl overflow-hidden border border-purple-500/20 hover:border-purple-500/50 transition group">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="text-gray-400 mb-4 text-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, j) => (
                      <span key={j} className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a href={project.github} target="_blank" className="text-sm hover:text-purple-400 transition flex items-center gap-1" >
                      <Github className="w-4 h-4" /> Code
                    </a>
                    <a href={project.demo} target="_blank" className="text-sm hover:text-purple-400 transition flex items-center gap-1">
                      <ExternalLink className="w-4 h-4" /> Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            My <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Skills</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {skills.map((skill, i) => (
              <div key={i} className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-semibold">{skill.name}</span>
                  <span className="text-purple-400">{skill.level}%</span>
                </div>
                <div className="h-3 bg-slate-700 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-6 text-center">
            {[
              "HTML5 & CSS3",
              "JavaScript (ES6+)",
              "React & Next.js",
              "Tailwind CSS",
              "Git & GitHub",
              "Responsive Design",
              "Figma & Canva",
              "Node.js",
              "TypeScript"
            ].map((tech, i) => (
              <div key={i} className="bg-slate-800/50 p-4 rounded-lg border border-purple-500/20 hover:border-purple-500/50 transition">
                <p className="font-semibold">{tech}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Let's Work <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Together</span>
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Have a project in mind? Let's create something amazing!
          </p>
          
          <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 p-12 rounded-3xl border border-purple-500/30">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <Mail className="w-8 h-8 mx-auto mb-3 text-purple-400" />
                <p className="font-semibold">Email</p>
                <p className="text-gray-400 text-sm">arelyzuleika@gmail.com</p>
              </div>
              <div>
                <a href="https://github.com/Moonrise777" target='_blank'>
                <Github className="w-8 h-8 mx-auto mb-3 text-purple-400" />
                <p className="font-semibold">GitHub</p>
                <p className="text-gray-400 text-sm">@Moonrise777</p>
                </a>

              </div>
              <div>
                <a href="https://linkedin.com/in/arely-zuleika" target='_blank'>
                <Linkedin className="w-8 h-8 mx-auto mb-3 text-purple-400" />
                <p className="font-semibold">LinkedIn</p>
                <p className="text-gray-400 text-sm">@arely-zuleika</p>
                </a>
              </div>

            </div>
            <div className="flex justify-center">
                <a href="./resources/cv.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-purple-500 px-8 py-4 rounded-full font-semibold hover:bg-purple-500/10 transition flex items-center justify-center gap-2">
                  <Download className="w-5 h-5" /> Download CV
                </a>
              </div>
            
            <a
              href="mailto:arelyzuleika@gmail.com"
              className="mt-4 inline-block bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition transform hover:scale-105"
            >
              Send me an Email!
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-purple-500/20">
        <div className="max-w-7xl mx-auto text-center text-gray-400">
          <p>© 2025 Arely Zuleika. Designed with 💜 and React</p>
        </div>
      </footer>
    </div>
  );
}