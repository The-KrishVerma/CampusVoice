import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'experience', 'projects', 'skills', 'coding-profiles', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'coding-profiles', label: 'Coding Profiles' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/80 backdrop-blur-md border-b border-border' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <img src="https://i.postimg.cc/50Sqj75b/Whats-App-Image-2025-06-30-at-3-07-10-PM.jpg" alt="Krish Verma Logo" style={{ height: '40px', transform: 'scale(1.5)', transformOrigin: 'left' }} />
          </div>
          
          <div className="hidden md:flex items-center space-x-12">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-base font-medium transition-colors duration-200 hover:text-accent ${
                  activeSection === item.id ? 'text-accent' : 'text-muted-foreground'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
          
          <Button 
            variant="outline" 
            className="hidden md:block border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-200"
            onClick={() => scrollToSection('contact')}
          >
            Get In Touch
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
