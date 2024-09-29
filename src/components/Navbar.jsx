import { useState, useEffect } from 'react';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'blog'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getButtonClass = (section) => {
    return `p-2 rounded-lg transition duration-300 ${
      activeSection === section
        ? 'bg-[#7878804D]'
        : 'hover:bg-[#7878804D]'
    }`;
  };

  return (
    <nav className="navbar font-display">
      {/* Home Link */}
      <div className="fixed top-0 left-0 p-4 text-[#7B3E19] font-bold">
        <button
          onClick={() => scrollToSection('home')}
          className={`${getButtonClass('home')} text-[calc(2vw+0.75rem)] font-bold leading-none bg-[rgba(255,255,255,0.15)] backdrop-blur-md border border-[rgba(255,255,255,0.18)] shadow-md w-50% max-w-[20rem]`}
        >
          Home
        </button>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 flex justify-center items-center text-[#7B3E19]">
        <div className="flex justify-center items-center bg-[rgba(255,255,255,0.15)] backdrop-blur-md border border-[rgba(255,255,255,0.18)] rounded-lg shadow-md p-3 w-50% max-w-[42rem]">
          <div className="flex flex-wrap lg:gap-24 md:gap-16 sm:gap-12 xsm:gap-10 xxsm:gap-8 xxxsm:gap-4 text-[calc(2vw+0.75rem)] font-bold leading-none whitespace-nowrap">
            <button onClick={() => scrollToSection('about')} className={getButtonClass('about')}>About</button>
            <button onClick={() => scrollToSection('projects')} className={getButtonClass('projects')}>Projects</button>
            <button onClick={() => scrollToSection('blog')} className={getButtonClass('blog')}>Blog</button>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 280px) {
          .navbar div {
            padding: 1.5px;
          }
          .navbar div .flex {
            flex-direction: column;
            text-[calc(4vw+1rem)];
          }
        }
      `}</style>
    </nav>
  );
}
