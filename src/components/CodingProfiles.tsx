import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Code2, Trophy, Zap, ExternalLink, Award, Target, Star } from 'lucide-react';

const CodingProfiles = () => {
  const profiles = [
    {
      name: 'LeetCode',
      icon: <Code2 className="w-8 h-8 text-orange-400" />,
      link: 'https://leetcode.com/u/_KrishVerma_/',
      skills: ['500+ Problems Solved'],
      summary: 'Solved 500+ problems',
      color: 'bg-orange-500/20 text-orange-400 border-orange-400/30'
    },
    {
      name: 'Codeforces',
      icon: <Zap className="w-8 h-8 text-blue-400" />,
      link: 'https://codeforces.com/profile/_KrishVerma_',
      skills: ['Pupil Rank'],
      summary: '1200+ Rated (Pupil)',
      color: 'bg-blue-500/20 text-blue-400 border-blue-400/30'
    },
    {
      name: 'CodeChef',
      icon: <Trophy className="w-8 h-8 text-green-400" />,
      link: 'https://www.codechef.com/users/krish_verma636',
      skills: ['3 Star Rating'],
      summary: '1600+ Rated (3 Star)',
      color: 'bg-green-500/20 text-green-400 border-green-400/30'
    }
  ];

  return (
    <section id="coding-profiles" className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Coding <span className="text-gradient">Profiles</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-6 text-lg max-w-2xl mx-auto">
            My journey in competitive programming and problem-solving.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {profiles.map((profile, index) => (
            <Card 
              key={index}
              className="bg-card border-border hover:border-accent/50 transition-all duration-300 group card-shadow animate-fade-in flex flex-col items-center text-center"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <CardContent className="p-6 flex flex-col items-center flex-grow">
                <div className="flex flex-col items-center mb-4">
                  <div className="text-2xl mb-2 animate-float" style={{animationDelay: `${index * 0.2}s`}}>
                    {profile.icon}
                  </div>
                  <h3 className="text-2xl font-bold group-hover:text-accent transition-colors duration-200">
                    {profile.name}
                  </h3>
                </div>
                
                <div className="flex flex-col items-center gap-2">
                  {profile.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="outline" 
                      className={`${profile.color} hover:scale-105 transition-transform duration-200`}
                    >
                      {profile.name === 'CodeChef' && skill.includes('Star') && <Star className="w-4 h-4 mr-1" />}
                      {skill}
                    </Badge>
                  ))}
                </div>

                <p className="text-muted-foreground text-base mt-4 text-center">{profile.summary}</p>

                <div className="mt-auto pt-4">
                    <Button asChild variant="outline" className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground group-hover:shadow-lg transition-all duration-300">
                        <a href={profile.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                            View Profile <ExternalLink className="w-4 h-4" />
                        </a>
                    </Button>
                </div>

              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-6 bg-card/30 backdrop-blur-md border border-white/10 rounded-2xl px-8 py-4">
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-accent" />
              <span className="text-sm text-muted-foreground">Total Contests:</span>
              <span className="font-bold text-foreground">50+</span>
            </div>
            <div className="w-16 h-px bg-border sm:w-px sm:h-6"></div>
            <div className="flex items-center gap-2">
              <Target className="w-5 h-5 text-accent" />
              <span className="text-sm text-muted-foreground">Problems Solved:</span>
              <span className="font-bold text-foreground">500+</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CodingProfiles;
