import { Award, Trophy, FileCheck, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AwardsSection = () => {
  const awards = [
    {
      title: "Best Paper Award",
      organization: "IEEE Conference on AI Applications",
      year: "2024",
      description: "Recognized for outstanding research in AI-driven software development",
      icon: Trophy,
      category: "Research"
    },
    {
      title: "Dean's List Recognition",
      organization: "T.J.S Engineering College",
      year: "2023",
      description: "Academic excellence with CGPA above 8.5",
      icon: Star,
      category: "Academic"
    },
    {
      title: "Google Developer Student Club Lead",
      organization: "Google Developers",
      year: "2023",
      description: "Selected to lead and organize developer community events",
      icon: Award,
      category: "Leadership"
    },
    {
      title: "National Level Coding Competition Winner",
      organization: "TechFest India",
      year: "2023",
      description: "First place in algorithmic programming competition",
      icon: Trophy,
      category: "Competition"
    },
    {
      title: "AWS Certified Cloud Practitioner",
      organization: "Amazon Web Services",
      year: "2023",
      description: "Certified in cloud computing fundamentals and AWS services",
      icon: FileCheck,
      category: "Certification"
    },
    {
      title: "Women in Tech Scholarship",
      organization: "Tech Foundation",
      year: "2022",
      description: "Merit-based scholarship for encouraging women in technology",
      icon: Award,
      category: "Scholarship"
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      Research: "bg-blue-500/10 text-blue-400 border-blue-500/20",
      Academic: "bg-green-500/10 text-green-400 border-green-500/20",
      Leadership: "bg-purple-500/10 text-purple-400 border-purple-500/20",
      Competition: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
      Certification: "bg-red-500/10 text-red-400 border-red-500/20",
      Scholarship: "bg-pink-500/10 text-pink-400 border-pink-500/20"
    };
    return colors[category as keyof typeof colors] || "bg-gray-500/10 text-gray-400 border-gray-500/20";
  };

  return (
    <section id="awards" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Awards & Certificates</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Recognition for academic excellence, leadership, and technical achievements
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {awards.map((award, index) => (
            <Card key={index} className="glass-card hover-lift scroll-reveal group">
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 p-3 gradient-bg rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <award.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="font-bold text-foreground leading-tight">
                        {award.title}
                      </h3>
                      <span className="text-sm font-medium text-primary flex-shrink-0">
                        {award.year}
                      </span>
                    </div>
                    <p className="text-sm font-medium text-muted-foreground mb-3">
                      {award.organization}
                    </p>
                  </div>
                </div>
                
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {award.description}
                </p>
                
                <div className="flex justify-end">
                  <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full border ${getCategoryColor(award.category)}`}>
                    {award.category}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;