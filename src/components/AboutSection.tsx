import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap, MapPin } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">About Me</span>
          </h2>
          <div className="w-20 h-1 gradient-bg mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Summary */}
          <div className="scroll-reveal">
            <Card className="glass-card hover-lift">
              <CardHeader>
                <CardTitle className="gradient-text text-2xl">Profile Summary</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground leading-relaxed space-y-4">
                <p>
                  I am a passionate and self-driven Computer Science Engineering student with 
                  a strong foundation in software development and problem-solving. I've hands-on 
                  projects in areas like full-stack development, AI, and automation, and I'm 
                  currently exploring real-world applications through research initiatives.
                </p>
                <p>
                  My keen interest in technology, eagerness to learn, and ability to quickly 
                  adapt to new tools and environments make me a valuable asset in any software 
                  development team. I believe this internship will be a great opportunity to 
                  contribute meaningfully while sharpening my skills in a dynamic, growth-focused 
                  environment.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Education */}
          <div className="scroll-reveal">
            <Card className="glass-card hover-lift">
              <CardHeader>
                <CardTitle className="gradient-text text-2xl flex items-center gap-2">
                  <GraduationCap size={28} />
                  Education
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="border-l-4 border-primary/30 pl-6">
                  <h3 className="text-xl font-semibold text-foreground">
                    B.E Computer Science and Engineering
                  </h3>
                  <p className="text-primary font-medium">Current CGPA: 8.5</p>
                  <p className="text-muted-foreground">
                    T.J.S ENGINEERING COLLEGE (Autonomous, Anna University)
                  </p>
                </div>

                <div className="border-l-4 border-primary/30 pl-6">
                  <h3 className="text-xl font-semibold text-foreground">
                    Computer Science with Mathematics
                  </h3>
                  <p className="text-muted-foreground">
                    LOUDER'S GIRLS MATRICULATION HR.SEC.SCHOOL
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Languages */}
        <div className="mt-12 scroll-reveal">
          <Card className="glass-card hover-lift">
            <CardHeader>
              <CardTitle className="gradient-text text-2xl text-center">Languages</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="p-4 rounded-lg bg-secondary/20">
                  <h3 className="font-semibold text-foreground mb-2">Tamil</h3>
                  <p className="text-sm text-muted-foreground">Fluent - Speak, Read, Write</p>
                </div>
                <div className="p-4 rounded-lg bg-secondary/20">
                  <h3 className="font-semibold text-foreground mb-2">English</h3>
                  <p className="text-sm text-muted-foreground">Fluent - Speak, Read, Write</p>
                </div>
                <div className="p-4 rounded-lg bg-secondary/20">
                  <h3 className="font-semibold text-foreground mb-2">Hindi</h3>
                  <p className="text-sm text-muted-foreground">Basic Understanding</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;