import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, MessageSquare, Mic, Target } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'ChatGPT AI Assistant Project',
      description: 'AI Based ChatGPT project with python, frontend and backend integration. Features advanced conversational AI capabilities with a modern user interface.',
      icon: MessageSquare,
      technologies: ['Python', 'Frontend', 'Backend', 'AI Integration', 'ChatGPT API'],
      githubUrl: 'https://github.com/Daisy-code77/Chatgpt_Assistant-Project',
      color: 'from-blue-500 to-purple-600'
    },
    {
      title: 'Speech-to-Text AI Assistant',
      description: 'Speech to text converting AI assistant powered by artificial intelligence and advanced python. Provides real-time voice recognition and processing.',
      icon: Mic,
      technologies: ['Python', 'AI/ML', 'Speech Recognition', 'Natural Language Processing'],
      githubUrl: 'https://github.com/Daisy-code77/Speech-to-text-ai-assistant_project',
      color: 'from-green-500 to-blue-600'
    },
    {
      title: 'MyOKR Project',
      description: 'MyOKR Web-Based OKR Dashboard with login and objective pages. A comprehensive goal-setting and tracking system for teams and individuals.',
      icon: Target,
      technologies: ['Web Development', 'Dashboard', 'User Authentication', 'Goal Tracking'],
      githubUrl: 'https://github.com/Daisy-code77/MyOKR-Assessment',
      color: 'from-purple-500 to-pink-600'
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <div className="w-20 h-1 gradient-bg mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in AI, web development, and software engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="scroll-reveal">
              <Card className="glass-card hover-lift h-full group">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${project.color} text-white`}>
                      <project.icon size={24} />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl group-hover:gradient-text transition-all duration-300">
                        {project.title}
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className="text-xs bg-secondary/60"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-3 pt-4">
                    <Button
                      size="sm"
                      className="flex-1 gradient-bg hover:opacity-90"
                      asChild
                    >
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github size={16} className="mr-2" />
                        View Code
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="glass-card"
                      asChild
                    >
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink size={16} />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 scroll-reveal">
          <Button
            variant="outline"
            size="lg"
            className="glass-card"
            asChild
          >
            <a
              href="https://github.com/Daisy-code77"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={20} className="mr-2" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;