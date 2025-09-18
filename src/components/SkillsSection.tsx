import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Users, Brain, Settings } from 'lucide-react';

const SkillsSection = () => {
  const technicalSkills = [
    'Python', 'JavaScript', 'Data Structure', 'Algorithms', 'Computer Networks',
    'Operating System', 'Database Management', 'System Design', 'Gen AI Basics',
    'Software Development', 'Web Development', 'AI Tools (ChatGPT, GitHub Copilot, Google Colab)',
    'Data Analysis Basics', 'Linux System Basics'
  ];

  const softSkills = [
    'Leadership & Team Collaboration', 'Effective Public Speaking', 
    'Strategic Problem Solving', 'Time Management & Self-Motivation',
    'Clear Communication (Written & Verbal)', 'Quick Learner & Adaptable to New Tech'
  ];

  const skillCategories = [
    {
      title: 'Technical Skills',
      icon: Code,
      skills: technicalSkills,
      color: 'from-blue-500 to-purple-600'
    },
    {
      title: 'Soft Skills',
      icon: Users,
      skills: softSkills,
      color: 'from-purple-500 to-pink-600'
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Skills & Expertise</span>
          </h2>
          <div className="w-20 h-1 gradient-bg mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="scroll-reveal">
              <Card className="glass-card hover-lift h-full">
                <CardHeader>
                  <CardTitle className="gradient-text text-2xl flex items-center gap-3">
                    <category.icon size={28} />
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="px-3 py-2 text-sm bg-secondary/60 hover:bg-secondary transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Awards & Certificates */}
        <div className="mt-16 scroll-reveal">
          <Card className="glass-card hover-lift">
            <CardHeader>
              <CardTitle className="gradient-text text-2xl text-center flex items-center justify-center gap-3">
                <Settings size={28} />
                Awards & Certificates
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  'Student All-Rounder Award (2019)',
                  'School Public Leader Award (2020)',
                  'Excellent Speech Awards (2020, 2021)',
                  'Best Student Award (2020)',
                  'World Record Participation – Plogathon (2024)',
                  'NGO media Department Representative of the year (2025)',
                  'Oracle IT Readiness Certification (2024)',
                  'Aspire Global Leadership Completion Badge (2024)',
                  'Data Analysis Course Completion certificate (2025)',
                  'IOT Course Completion certificate (2025)',
                  'UI & UX Course Completion certificate (2025)',
                  'DATA VISUALISATION Job Simulation certificate from TATA ROUP',
                  'SOFTWARE ENGINEERING job simulation from ELECTRONIC ARTS (USA, California)',
                  'ChatGPT and Generative AI course completion (2025)'
                ].map((award, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-lg bg-secondary/20 border border-border/30 hover:border-primary/30 transition-colors"
                  >
                    <p className="text-sm font-medium text-foreground">{award}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;