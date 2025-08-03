import { Link } from 'react-router-dom';
import { Globe, Mail, Phone, MapPin, Twitter, Instagram, Linkedin, Facebook } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'About KMUN', href: '/about' },
    { name: 'Committees', href: '/committees' },
    { name: 'Annual Conference', href: '/conference' },
    { name: 'Registration', href: '/registration' },
  ];

  const chapters = [
    { name: 'University of Nairobi', href: '/chapters' },
    { name: 'Kenyatta University', href: '/chapters' },
    { name: 'Strathmore University', href: '/chapters' },
    { name: 'USIU-Africa', href: '/chapters' },
  ];

  const socialLinks = [
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
    { name: 'Facebook', icon: Facebook, href: '#' },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
                <Globe className="h-6 w-6 text-secondary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-bold font-playfair">KMUN</h3>
                <p className="text-sm text-primary-foreground/80">Kenya Model United Nations</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 text-sm">
              Empowering African youth through diplomatic education and international collaboration since 2001.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className="w-8 h-8 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-colors"
                    aria-label={link.name}
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/80 hover:text-secondary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Chapters */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Featured Chapters</h4>
            <ul className="space-y-2">
              {chapters.map((chapter) => (
                <li key={chapter.name}>
                  <Link
                    to={chapter.href}
                    className="text-primary-foreground/80 hover:text-secondary transition-colors text-sm"
                  >
                    {chapter.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-secondary" />
                <span className="text-primary-foreground/80 text-sm">
                  UNON Gigiri, Nairobi, Kenya
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-secondary" />
                <a
                  href="mailto:info@kmun.org"
                  className="text-primary-foreground/80 hover:text-secondary transition-colors text-sm"
                >
                  info@kmun.org
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-secondary" />
                <a
                  href="tel:+254700000000"
                  className="text-primary-foreground/80 hover:text-secondary transition-colors text-sm"
                >
                  +254 700 000 000
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary-foreground/60 text-sm">
            © 2024 Kenya Model United Nations. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-primary-foreground/60 hover:text-secondary text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-primary-foreground/60 hover:text-secondary text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;