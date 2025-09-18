import { Heart, Github, Linkedin, Code } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6">
          {/* Social Links */}
          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/Daisy-code77"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-secondary/20 hover:bg-secondary/30 transition-all hover-lift hover:text-gray-400"
              title="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/rdaisy"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-secondary/20 hover:bg-secondary/30 transition-all hover-lift hover:text-blue-400"
              title="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://leetcode.com/Daisy_11/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-secondary/20 hover:bg-secondary/30 transition-all hover-lift hover:text-yellow-400"
              title="LeetCode"
            >
              <Code size={20} />
            </a>
          </div>

          {/* Copyright */}
          <div className="space-y-2">
            <p className="text-muted-foreground text-sm flex items-center justify-center gap-2">
              Made with <Heart size={16} className="text-red-400 animate-pulse" /> by{' '}
              <span className="gradient-text font-medium">Daisy R</span>
            </p>
            <p className="text-muted-foreground text-xs">
              © {currentYear} Daisy R. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;