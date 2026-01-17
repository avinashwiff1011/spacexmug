import { Rocket } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-border py-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Rocket className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium tracking-wider-custom uppercase">
              Interstellar Supply Co.
            </span>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Specifications</a>
            <a href="#" className="hover:text-primary transition-colors">Materials</a>
            <a href="#" className="hover:text-primary transition-colors">Sustainability</a>
            <a href="#" className="hover:text-primary transition-colors">Contact Mission Control</a>
          </nav>

          {/* Copyright */}
          <p className="text-xs text-muted-foreground/60 tracking-wide">
            © 2026 Interstellar Supply Co.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
