import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code2, 
  Terminal, 
  Cpu, 
  Globe, 
  Moon, 
  Sun,
  Menu,
  X,
  Send,
  CheckCircle
} from 'lucide-react';

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [formStatus, setFormStatus] = useState('idle');

  // Toggle Dark Mode
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Handle Scroll to highlight nav
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition && (element.offsetTop + element.offsetHeight) > scrollPosition) {
          setActiveSection(section);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId) => {
    setIsMenuOpen(false);
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormStatus('sending');
    // Simulate network request
    setTimeout(() => {
      setFormStatus('success');
      setTimeout(() => setFormStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-slate-900 text-slate-100' : 'bg-slate-50 text-slate-900'}`}>
      
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${darkMode ? 'bg-slate-900/90 border-b border-slate-800' : 'bg-white/90 border-b border-slate-200'} backdrop-blur-sm`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => handleNavClick('home')}>
              <Code2 className="h-8 w-8 text-blue-500" />
              <span className="ml-2 text-xl font-bold tracking-tight">DevPortfolio</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {['Home', 'About', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => handleNavClick(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors hover:text-blue-500 ${activeSection === item.toLowerCase() ? 'text-blue-500' : ''}`}
                >
                  {item}
                </button>
              ))}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-full transition-colors ${darkMode ? 'hover:bg-slate-800 text-yellow-400' : 'hover:bg-slate-100 text-slate-600'}`}
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`mr-4 p-2 rounded-full ${darkMode ? 'text-yellow-400' : 'text-slate-600'}`}
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md hover:bg-slate-800 focus:outline-none"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden absolute w-full bg-inherit border-b border-slate-800 shadow-xl">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {['Home', 'About', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => handleNavClick(item.toLowerCase())}
                  className="block w-full text-left px-3 py-2 rounded-md text-base font-medium hover:text-blue-500"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 lg:pt-32 pb-16 lg:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col md:flex-row items-center">
        <div className="flex-1 text-center md:text-left">
          <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-blue-500 uppercase bg-blue-500/10 rounded-full">
            Full Stack Developer
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight mb-6">
            Building digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">experiences</span> that matter.
          </h1>
          <p className={`mt-4 text-xl max-w-2xl mx-auto md:mx-0 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            I design and build accessible, pixel-perfect, and performant web applications. Passionate about UI/UX and clean code.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button 
              onClick={() => handleNavClick('projects')}
              className="px-8 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/25"
            >
              View My Work
            </button>
            <button 
              onClick={() => handleNavClick('contact')}
              className={`px-8 py-3 rounded-lg border font-medium transition-colors ${darkMode ? 'border-slate-700 hover:bg-slate-800' : 'border-slate-300 hover:bg-slate-100'}`}
            >
              Contact Me
            </button>
          </div>
          <div className="mt-10 flex items-center justify-center md:justify-start space-x-6">
            <a href="#" className={`transition-colors ${darkMode ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'}`}>
              <Github size={24} />
            </a>
            <a href="#" className={`transition-colors ${darkMode ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'}`}>
              <Linkedin size={24} />
            </a>
            <a href="#" className={`transition-colors ${darkMode ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'}`}>
              <Mail size={24} />
            </a>
          </div>
        </div>
        <div className="flex-1 mt-12 md:mt-0 relative flex justify-center">
            {/* Abstract Tech Visual */}
            <div className="relative w-72 h-72 sm:w-96 sm:h-96">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
                <div className={`relative w-full h-full rounded-2xl border-2 flex items-center justify-center rotate-3 transition-transform hover:rotate-0 duration-500 ${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'}`}>
                    <div className="text-center p-8">
                        <Terminal className="w-16 h-16 mx-auto text-blue-500 mb-4" />
                        <div className="font-mono text-sm opacity-70">
                            &gt; npm install success<br/>
                            &gt; git commit -m "Launch"<br/>
                            &gt; git push origin main
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* About & Skills Section */}
      <section id="about" className={`py-20 ${darkMode ? 'bg-slate-800/50' : 'bg-slate-100'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">About & Skills</h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Who I am</h3>
              <p className={`mb-6 leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                I'm a passionate developer based in the cloud. I specialize in building web applications that are not only functional but also visually appealing and user-friendly. 
              </p>
              <p className={`mb-6 leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                With a background in computer science and years of hands-on experience, I thrive on solving complex problems and learning new technologies. When I'm not coding, you can find me contributing to open source or exploring the latest tech trends.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
               {/* Skill Cards */}
               {[
                 { icon: <Globe className="w-6 h-6" />, title: "Frontend", skills: "React, Vue, Tailwind" },
                 { icon: <Cpu className="w-6 h-6" />, title: "Backend", skills: "Node.js, Python, Go" },
                 { icon: <Terminal className="w-6 h-6" />, title: "DevOps", skills: "Docker, AWS, CI/CD" },
                 { icon: <Code2 className="w-6 h-6" />, title: "Tools", skills: "Git, VS Code, Figma" }
               ].map((skill, index) => (
                 <div key={index} className={`p-6 rounded-xl border transition-all hover:-translate-y-1 ${darkMode ? 'bg-slate-900 border-slate-700 hover:border-blue-500/50' : 'bg-white border-slate-200 hover:border-blue-500/50 shadow-sm'}`}>
                    <div className="text-blue-500 mb-3">{skill.icon}</div>
                    <h4 className="font-bold mb-1">{skill.title}</h4>
                    <p className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>{skill.skills}</p>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
            <p className={`max-w-2xl mx-auto ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              A selection of projects I've worked on recently.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className={`group rounded-2xl overflow-hidden border transition-all duration-300 hover:shadow-2xl ${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200 shadow-lg'}`}>
                <div className="h-48 overflow-hidden bg-slate-700 relative">
                    {/* Placeholder for project image */}
                    <div className="absolute inset-0 flex items-center justify-center text-slate-500 font-mono">
                        Project Preview {item}
                    </div>
                    <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/20 transition-colors duration-300"></div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold">Project Name {item}</h3>
                    <div className="flex space-x-3">
                      <a href="#" className="hover:text-blue-500"><Github size={20} /></a>
                      <a href="#" className="hover:text-blue-500"><ExternalLink size={20} /></a>
                    </div>
                  </div>
                  <p className={`mb-4 text-sm ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                    A brief description of the project goes here. Explain the problem it solves and the technologies used to build it.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['React', 'Node.js', 'MongoDB'].map((tag) => (
                      <span key={tag} className={`text-xs px-3 py-1 rounded-full ${darkMode ? 'bg-slate-900 text-blue-400' : 'bg-slate-100 text-blue-600'}`}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <a href="#" className="inline-flex items-center font-medium text-blue-500 hover:text-blue-400 transition-colors">
              View Full Project Archive <ExternalLink className="ml-2 w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-20 ${darkMode ? 'bg-slate-900' : 'bg-slate-50'}`}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`rounded-2xl p-8 md:p-12 border ${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200 shadow-xl'}`}>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
              <p className={darkMode ? 'text-slate-400' : 'text-slate-600'}>
                Have a project in mind or want to say hi? My inbox is always open.
              </p>
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                  <input 
                    type="text" 
                    id="name"
                    required
                    className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all ${darkMode ? 'bg-slate-900 border-slate-600 placeholder-slate-500' : 'bg-slate-50 border-slate-300'}`}
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email"
                    required
                    className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all ${darkMode ? 'bg-slate-900 border-slate-600 placeholder-slate-500' : 'bg-slate-50 border-slate-300'}`}
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows="4" 
                  required
                  className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all ${darkMode ? 'bg-slate-900 border-slate-600 placeholder-slate-500' : 'bg-slate-50 border-slate-300'}`}
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={formStatus === 'sending' || formStatus === 'success'}
                className={`w-full py-4 rounded-lg font-bold text-white transition-all transform hover:-translate-y-1 ${
                  formStatus === 'success' ? 'bg-emerald-500' : 'bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-500/30'
                }`}
              >
                {formStatus === 'idle' && (
                  <span className="flex items-center justify-center">Send Message <Send className="ml-2 w-4 h-4"/></span>
                )}
                {formStatus === 'sending' && 'Sending...'}
                {formStatus === 'success' && (
                  <span className="flex items-center justify-center">Message Sent! <CheckCircle className="ml-2 w-5 h-5"/></span>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 border-t ${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="font-bold text-xl tracking-tight">DevPortfolio</span>
          </div>
          <div className={`text-sm ${darkMode ? 'text-slate-500' : 'text-slate-500'}`}>
            © {new Date().getFullYear()} All rights reserved. Built with React & Tailwind.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
