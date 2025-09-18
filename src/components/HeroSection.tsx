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
              Aspiring Full-Stack Developer | AI Enthusiast | Tech Speaker
            </h2>
            <div className="flex items-center justify-center gap-2 text-muted-foreground mb-8">
              <MapPin size={20} />
              <span>India</span>
            </div>
          </div>

          {/* Contact Links */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 scroll-reveal">
            {contactLinks.map((link, index) => (
              <Button
                key={index}
                variant="outline"
                size="sm"
                asChild
                className="glass-card hover-lift"
              >
                <a href={link.href} target="_blank" rel="noopener noreferrer">
                  <link.icon size={16} className="mr-2" />
                  {link.text}
                </a>
              </Button>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center scroll-reveal">
            <Button
              size="lg"
              className="gradient-bg hover:opacity-90 transition-opacity"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="glass-card"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;