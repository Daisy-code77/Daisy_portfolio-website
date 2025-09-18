import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone, MapPin, Github, Linkedin, Code, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const contactInfo = [
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 9176215330',
      href: 'tel:+919176215330'
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'daisy11092004@gmail.com',
      href: 'mailto:daisy11092004@gmail.com'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'India',
      href: '#'
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/rdaisy',
      color: 'hover:text-blue-400'
    },
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/Daisy-code77',
      color: 'hover:text-gray-400'
    },
    {
      icon: Code,
      label: 'LeetCode',
      href: 'https://leetcode.com/Daisy_11/',
      color: 'hover:text-yellow-400'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}`);
    
    const mailtoLink = `mailto:daisy11092004@gmail.com?subject=${subject}&body=${body}`;
    window.open(mailtoLink);

    toast({
      title: "Message prepared!",
      description: "Your email client should open with the message ready to send.",
    });

    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <div className="w-20 h-1 gradient-bg mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or just having a chat about technology and innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="scroll-reveal">
            <Card className="glass-card hover-lift h-fit">
              <CardHeader>
                <CardTitle className="gradient-text text-2xl">Let's Connect</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Contact Info */}
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.href}
                      className="flex items-center gap-4 p-3 rounded-lg bg-secondary/20 hover:bg-secondary/30 transition-colors group"
                    >
                      <div className="p-2 rounded-lg bg-primary/20 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <info.icon size={20} />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{info.label}</p>
                        <p className="font-medium">{info.value}</p>
                      </div>
                    </a>
                  ))}
                </div>

                {/* Social Links */}
                <div className="pt-6 border-t border-border/30">
                  <p className="text-sm font-medium mb-4">Follow me on</p>
                  <div className="flex gap-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-3 rounded-lg bg-secondary/20 hover:bg-secondary/30 transition-all hover-lift ${social.color}`}
                        title={social.label}
                      >
                        <social.icon size={20} />
                      </a>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="scroll-reveal">
            <Card className="glass-card hover-lift">
              <CardHeader>
                <CardTitle className="gradient-text text-2xl">Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-secondary/20 border-border/30 focus:border-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-secondary/20 border-border/30 focus:border-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="bg-secondary/20 border-border/30 focus:border-primary resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full gradient-bg hover:opacity-90"
                    size="lg"
                  >
                    <Send size={18} className="mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;