import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  const projectData = [
    {
      title: "NewsCloud",
      description: "A news aggregation platform that collects real-time news headlines from an API, generates AI-powered summaries, and allows users to browse news by categories and search news using keywords.",
      technologies: ["React", "News API", "JavaScript"],
      liveLink: "https://the-newscloud.vercel.app/",
      codeLink: "https://github.com/The-KrishVerma/NewsCloud.git"
    },
    {
      title: "CampusVoice",
      description: "A full-stack blogging platform that uses Google Gemini AI to automatically generate content and allows users to write blogs with rich text editing, image uploads, draft saving, and category-based organization.",
      technologies: ["MongoDB", "React", "Node.js"],
      liveLink: "https://the-campusvoice.vercel.app/",
      codeLink: "https://github.com/The-KrishVerma/CampusVoice.git"
    },
    {
      title: "Coming Soon",
      description: "Working on a new and exciting project. Stay tuned for more updates!",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
      status: "Coming Soon"
    }
  ];

  return (
    <section id="projects" className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-6 text-lg max-w-2xl mx-auto">
            Exploring ideas and building solutions through code
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map((project, index) => (
            <Card 
              key={index} 
              className="bg-card border-border hover:border-accent/50 transition-all duration-300 group card-shadow animate-fade-in"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <CardContent className="p-6">
                <div className="aspect-video bg-muted rounded-lg mb-4 flex items-center justify-center group-hover:bg-muted/80 transition-colors duration-200">
                  <div className="text-2xl font-bold opacity-50 group-hover:opacity-70 transition-opacity duration-200">
                    {project.title}
                  </div>
                </div>
                
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold group-hover:text-accent transition-colors duration-200">
                    {project.title}
                  </h3>
                  {project.status && (
                    <Badge 
                      variant="outline" 
                      className="border-accent text-accent text-xs"
                    >
                      {project.status}
                    </Badge>
                  )}
                </div>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <Badge key={i} variant="secondary" className="bg-muted/50">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1 border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                    onClick={() => project.liveLink && window.open(project.liveLink, '_blank')}
                    disabled={!project.liveLink}
                  >
                    View Project
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="text-muted-foreground hover:text-accent"
                    onClick={() => project.codeLink && window.open(project.codeLink, '_blank')}
                    disabled={!project.codeLink}
                  >
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
