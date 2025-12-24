import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: "💻",
      skills: ["C", "C++", "Java", "JavaScript", "TypeScript", "SQL"],
      color: "bg-blue-500/20 text-blue-400 border-blue-400/30"
    },
    {
      title: "Web Development",
      icon: "🌐",
      skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
      color: "bg-green-500/20 text-green-400 border-green-400/30"
    },
    {
      title: "Mobile Development",
      icon: "📱",
      skills: ["Flutter", "React Native", "Cross-platform Development"],
      color: "bg-purple-500/20 text-purple-400 border-purple-400/30"
    },
    {
      title: "Databases & Cloud",
      icon: "☁️",
      skills: ["MongoDB", "PostgreSQL", "MySQL", "AWS", "Google Cloud", "Vercel", "CI/CD"],
      color: "bg-yellow-500/20 text-yellow-400 border-yellow-400/30"
    },
    {
      title: "Tools & Platforms",
      icon: "🛠️",
      skills: ["Git", "Figma", "VS Code", "ChatGPT", "GitHub"],
      color: "bg-orange-500/20 text-orange-400 border-orange-400/30"
    },
    {
      title: "Design & Research",
      icon: "🎨",
      skills: ["UI/UX Design", "Prototyping", "User Research", "Wireframing"],
      color: "bg-cyan-500/20 text-cyan-400 border-cyan-400/30"
    }
  ];

  return (
    <section id="skills" className="py-16 gradient-primary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-6 text-lg max-w-2xl mx-auto">
            A diverse toolkit for building modern, scalable solutions
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="bg-card border-border hover:border-accent/50 transition-all duration-300 group card-shadow animate-fade-in"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="text-2xl mr-3 animate-float" style={{animationDelay: `${index * 0.2}s`}}>
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-bold group-hover:text-accent transition-colors duration-200">
                    {category.title}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="outline" 
                      className={`${category.color} hover:scale-105 transition-transform duration-200`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
