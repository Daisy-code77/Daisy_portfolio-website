import { GraduationCap, MapPin, Calendar } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const EducationSection = () => {
  const education = [
    {
      institution: "T.J.S ENGINEERING COLLEGE",
      subtitle: "(Autonomous, Anna University)",
      degree: "B.E Computer Science and Engineering",
      cgpa: "8.5",
      location: "Chennai, India",
      period: "2022 - 2026",
      type: "Bachelor's Degree"
    },
    {
      institution: "LOUDER'S GIRLS MATRICULATION HR.SEC.SCHOOL",
      degree: "Higher Secondary Certificate",
      major: "Computer Science with Mathematics",
      location: "Chennai, India", 
      period: "2020 - 2022",
      type: "Higher Secondary"
    }
  ];

  return (
    <section id="education" className="py-20 bg-background/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Education</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My academic journey in Computer Science and Engineering
          </p>
        </div>

        <div className="grid gap-8 max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <Card key={index} className="glass-card hover-lift scroll-reveal">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="flex-shrink-0 p-2 gradient-bg rounded-lg">
                        <GraduationCap className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground">
                          {edu.institution}
                        </h3>
                        {edu.subtitle && (
                          <p className="text-sm text-muted-foreground mt-1">
                            {edu.subtitle}
                          </p>
                        )}
                      </div>
                    </div>
                    
                    <div className="ml-11">
                      <h4 className="text-lg font-semibold text-primary mb-2">
                        {edu.degree}
                      </h4>
                      
                      {edu.major && (
                        <p className="text-muted-foreground mb-2">
                          Major: {edu.major}
                        </p>
                      )}
                      
                      {edu.cgpa && (
                        <p className="text-muted-foreground mb-3">
                          Current CGPA: <span className="font-semibold text-primary">{edu.cgpa}</span>
                        </p>
                      )}
                      
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{edu.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{edu.period}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4 md:mt-0 ml-11 md:ml-0">
                    <span className="inline-block px-3 py-1 text-xs font-medium gradient-bg text-white rounded-full">
                      {edu.type}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;