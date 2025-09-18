import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building, Users, Heart, Code, Globe, GraduationCap } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      title: 'Founder – Women coding Training',
      period: 'January 2025–Present',
      icon: Users,
      type: 'Leadership',
      points: [
        'Self-launched weekend programming classes for women without laptops.',
        'Created accessible curriculum using open-source tools and mobile-based coding.',
        'Mentored 30+ students; enabled career exploration and digital independence.'
      ]
    },
    {
      title: 'Software Development Intern - Cognifyz Technologies',
      location: 'Maharashtra, India',
      period: 'July 2025-August 2025',
      icon: Code,
      type: 'Internship',
      points: [
        'Working on coding, testing, and maintaining software solutions in live projects.',
        'Applying strong programming skills to deliver efficient and scalable applications.',
        'Collaborating with cross-functional teams to ensure quality software development.'
      ]
    },
    {
      title: 'Trainee – Oracle IT Job Readiness Skills Course',
      location: 'Hyderabad',
      period: 'August 2024-January 2025',
      icon: Building,
      type: 'Training',
      points: [
        'Received expert mentorship from Oracle developers.',
        'Completed industry-standard soft skill and career readiness certification.',
        'Built real-world software projects through experiential learning.'
      ]
    },
    {
      title: 'Trainee – Aspire Leadership Program',
      location: 'New York, USA',
      period: 'June 2024–Present',
      icon: Globe,
      type: 'Leadership',
      points: [
        'Gained cross-cultural leadership experience and global team collaboration.',
        'Received personal mentorship recognition and tech-conference excellence badge.',
        'Networked with peers from 15+ countries on tech-for-impact projects.'
      ]
    },
    {
      title: 'Volunteer – Udayan Care',
      location: 'Delhi HQ',
      period: '2021–Present',
      icon: Heart,
      type: 'Volunteer',
      points: [
        'Spearheaded student club engagement and skill-building workshops.',
        'Led the most active team; received praise for enhancing campus communication.',
        'Promoted education access and hosted public speaking sessions.'
      ]
    },
    {
      title: 'Intern – Nobel Learning PBC',
      location: 'Washington, USA',
      period: 'August 2025–Present',
      icon: GraduationCap,
      type: 'Internship',
      points: [
        'Interned with focus on leadership, communication, and global impact.',
        'Gaining hands-on skills in web design, IT troubleshooting, and publicspeaking.',
        'Enhancing cross-cultural collaboration and facilitation through experiential learning.'
      ]
    }
  ];

  const getIconColor = (type: string) => {
    switch (type) {
      case 'Leadership': return 'text-purple-400';
      case 'Internship': return 'text-blue-400';
      case 'Training': return 'text-green-400';
      case 'Volunteer': return 'text-pink-400';
      default: return 'text-gray-400';
    }
  };

  const getBadgeColor = (type: string) => {
    switch (type) {
      case 'Leadership': return 'bg-purple-500/20 text-purple-300';
      case 'Internship': return 'bg-blue-500/20 text-blue-300';
      case 'Training': return 'bg-green-500/20 text-green-300';
      case 'Volunteer': return 'bg-pink-500/20 text-pink-300';
      default: return 'bg-gray-500/20 text-gray-300';
    }
  };

  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Leadership & Experience</span>
          </h2>
          <div className="w-20 h-1 gradient-bg mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <div key={index} className="scroll-reveal">
              <Card className="glass-card hover-lift h-full">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg bg-secondary/20 ${getIconColor(exp.type)}`}>
                      <exp.icon size={24} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <CardTitle className="text-lg leading-tight">
                          {exp.title}
                        </CardTitle>
                        <Badge className={`shrink-0 ${getBadgeColor(exp.type)}`}>
                          {exp.type}
                        </Badge>
                      </div>
                      {exp.location && (
                        <p className="text-sm text-muted-foreground mb-1">{exp.location}</p>
                      )}
                      <p className="text-sm text-primary font-medium">{exp.period}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {exp.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0"></span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;