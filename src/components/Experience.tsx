import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Experience = () => {
  const experiences = [
    {
      title: "App Development Volunteer",
      period: "Sep 2024 – Dec 2024",
      type: "Volunteer",
      description: [
        "Built cross-platform mobile apps using Flutter and React Native",
        "Designed and optimized responsive, user-friendly UI for better accessibility",
        "Collaborated with teams to deliver impactful mobile solutions"
      ],
      technologies: ["Flutter", "React Native", "UI/UX Design", "Mobile Development"]
    },
    {
      title: "Out of Context Hackathon - UI/UX Designer",
      period: "Dec 2024",
      type: "Competition",
      description: [
        "Created wireframes and interactive prototypes in a 48-hour sprint using Figma",
        "Focused on inclusive, user-friendly designs for diverse audiences",
        "Collaborated with developers to ensure design feasibility and implementation"
      ],
      technologies: ["Figma", "UI/UX Design", "Prototyping", "User Research"]
    }
  ];

  return (
    <section id="experience" className="py-16 gradient-primary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-6 text-lg max-w-2xl mx-auto">
            Building expertise through hands-on projects and collaborative experiences
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-accent/30 hidden md:block"></div>
            
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative animate-fade-in" style={{animationDelay: `${index * 0.2}s`}}>
                  {/* Timeline dot */}
                  <div className="absolute left-4 w-4 h-4 bg-accent rounded-full border-4 border-background hidden md:block glow-accent"></div>
                  
                  <Card className="md:ml-16 bg-card border-border hover:border-accent/50 transition-all duration-300 group card-shadow">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                        <div>
                          <h3 className="text-xl font-bold group-hover:text-accent transition-colors duration-200">
                            {exp.title}
                          </h3>
                          <p className="text-accent font-medium">{exp.period}</p>
                        </div>
                        <Badge 
                          variant="outline" 
                          className="border-accent text-accent mt-2 md:mt-0 w-fit"
                        >
                          {exp.type}
                        </Badge>
                      </div>
                      
                      <ul className="space-y-2 mb-4">
                        {exp.description.map((item, i) => (
                          <li key={i} className="text-muted-foreground flex items-start">
                            <span className="text-accent mr-2 mt-1">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                      
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, i) => (
                          <Badge key={i} variant="secondary" className="bg-muted/50">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;