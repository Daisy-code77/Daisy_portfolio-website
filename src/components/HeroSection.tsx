import { Mail, Phone, MapPin, Github, Linkedin, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profileImage from '@/assets/profile-image.jpg';

const HeroSection = () => {
  const contactLinks = [
    { icon: Phone, text: '+91 9176215330', href: 'tel:+919176215330' },
    { icon: Mail, text: 'daisy11092004@gmail.com', href: 'mailto:daisy11092004@gmail.com' },
    { icon: Linkedin, text: 'LinkedIn', href: 'https://www.linkedin.com/in/rdaisy' },
    { icon: Github, text: 'GitHub', href: 'https://github.com/Daisy-code77' },
    { icon: Code, text: 'LeetCode', href: 'https://leetcode.com/Daisy_11/' },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Profile Image */}
          <div className="mb-8 scroll-reveal">
            <div className="relative w-48 h-48 mx-auto">
              <div className="absolute inset-0 gradient-bg rounded-full blur-md opacity-50"></div>
              <img
                src={profileImage}
                alt="Daisy R - Profile"
                className="relative w-full h-full rounded-full object-cover border-4 border-primary/20 hover-lift"
              />
            </div>
          </div>

          {/* Hero Content */}
          <div className="scroll-reveal">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="gradient-text">Daisy R</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground mb-6 max-w-3xl mx-auto">
              Computer Science Engineering Student | Software Developer | AI Enthusiast | Team Leader
            </h2>
            <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
              Passionate & self-driven CSE student with strong foundation in software development and problem-solving. Exploring real-world applications through research initiatives and hands-on projects.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 text-muted-foreground mb-8">
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <span>daisy11092004@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span>India</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <span>+91 9176215330</span>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center scroll-reveal">
            <Button
              size="lg"
              className="gradient-bg hover:opacity-90 transition-opacity px-8"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="glass-card border-primary/30 text-primary hover:bg-primary/10 px-8"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Projects
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;