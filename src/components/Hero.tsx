import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { ArrowDown, Calendar, Download, Github, Linkedin, Mail, MapPin, Sparkles } from 'lucide-react';
import krishProfile from '@/assets/krish-profile-new.jpg';
import { useIsMobile } from '@/hooks/use-mobile';

const Hero = () => {
  const isMobile = useIsMobile();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="h-auto flex items-center gradient-hero relative overflow-hidden pt-24 pb-16">
      {/* Enhanced animated background elements */}
      

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Enhanced Left Content */}
          <div className="animate-fade-in space-y-8">
            {/* Status Badge */}
            <Badge variant="outline" className="border-accent text-accent bg-accent/10 backdrop-blur-sm w-fit">
              <Calendar className="w-3 h-3 mr-1" />
              Available for Opportunities
            </Badge>

            <div>
              <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
                Krish Verma,
                <span className="block text-gradient mt-2">Tech Enthusiast</span>
              </h1>
              <div className="flex items-center gap-2 text-muted-foreground mb-6">
                <MapPin size={16} />
                <span>IIIT Allahabad • B.Tech IT Student</span>
              </div>
            </div>

            <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
              Passionate about solving real-world problems through technology. Building the future with <span className="text-accent font-medium">code</span>, <span className="text-accent font-medium">innovation</span>, and <span className="text-accent font-medium">creativity</span>.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground glow-accent group" onClick={() => scrollToSection('projects')}>
                <Sparkles className="w-4 h-4 mr-2 group-hover:animate-spin" />
                View My Work
              </Button>
              <Button variant="outline" size="lg" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground group" onClick={() => scrollToSection('contact')}>
                <Mail className="w-4 h-4 mr-2" />
                Get In Touch
              </Button>
              <Button asChild size="lg" variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground group">
                <a href="/Krish_Verma_Resume.pdf" download>
                  <Download className="w-4 h-4 mr-2" />
                  Download CV
                </a>
              </Button>
            </div>

            {/* Quick Links */}
            <div className="flex flex-col md:flex-row items-center gap-2 pt-6">
              <Button variant="ghost" size="lg" className="text-muted-foreground hover:text-accent hover:bg-accent/10" asChild>
                <a href="https://github.com/The-KrishVerma" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <Github size={22} />
                  <span className="text-lg font-medium">GitHub</span>
                </a>
              </Button>
              <Button variant="ghost" size="lg" className="text-muted-foreground hover:text-accent hover:bg-accent/10" asChild>
                <a href="https://www.linkedin.com/in/the-krishverma/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <Linkedin size={22} />
                  <span className="text-lg font-medium">LinkedIn</span>
                </a>
              </Button>
              <Button variant="ghost" size="lg" className="text-muted-foreground hover:text-accent hover:bg-accent/10" asChild>
                <a href="mailto:krishverma060306@gmail.com" className="flex items-center gap-2">
                  <Mail size={22} />
                  <span className="text-lg font-medium">Email</span>
                </a>
              </Button>
            </div>
          </div>

          {/* Enhanced Right Content */}
          <div className="relative animate-slide-up">
            <div className="relative">
              <div className="relative bg-card/50 backdrop-blur-md rounded-3xl p-3 card-shadow border border-white/10">
                <div className="absolute inset-0 bg-gradient-accent rounded-3xl blur-xl opacity-20"></div>
                <div className="relative group">
                  <img src={krishProfile} alt="Krish Verma - Professional Profile" className="w-80 h-auto rounded-2xl object-cover mx-auto transform transition-all duration-500 hover:scale-105 hover:rotate-1 animate-photo-load-in" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-2xl opacity-100 group-hover:opacity-80 transition-opacity duration-300"></div>
                </div>
              </div>
              <Card className="absolute -top-6 -right-6 bg-card/80 backdrop-blur-md border-accent/20"></Card>
              <Card className="absolute -bottom-6 -left-6 bg-card/80 backdrop-blur-md border-accent/20" style={{ animationDelay: '0.5s' }}></Card>
              <Card className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-card/80 backdrop-blur-md border-accent/20" style={{ animationDelay: '1s' }}></Card>
            </div>
          </div>
        </div>

        
      </div>
    </section>
  );
};

export default Hero;
