import { Link } from 'react-router-dom';
import { Users, Calendar, BookOpen, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const QuickLinksSection = () => {
  const quickLinks = [
    {
      title: 'Committees',
      description: 'Explore our General Assembly, ICJ, and ILC committees',
      icon: Users,
      href: '/committees',
      color: 'from-primary to-primary-light',
    },
    {
      title: 'Annual Conference',
      description: 'Join us at UNON Gigiri for the premier Model UN event',
      icon: Calendar,
      href: '/conference',
      color: 'from-conference-blue to-primary',
    },
    {
      title: 'About KMUN',
      description: 'Learn about our mission, vision, and 23-year legacy',
      icon: BookOpen,
      href: '/about',
      color: 'from-chapter-green to-primary',
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 font-playfair">
            Discover KMUN
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our programs, join a chapter, and become part of Africa's premier Model UN network
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {quickLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <Link key={link.title} to={link.href} className="group">
                <Card className="committee-card group-hover:scale-105 h-full">
                  <CardHeader>
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${link.color} flex items-center justify-center mb-4`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {link.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {link.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center text-primary font-medium group-hover:translate-x-2 transition-transform">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="glass-card max-w-4xl mx-auto p-8">
            <h3 className="text-2xl font-bold mb-4 font-playfair">Ready to Join KMUN?</h3>
            <p className="text-muted-foreground mb-6 text-lg">
              Register for our 2026 conference and become part of Kenya's diplomatic future
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/registration">
                <Button variant="diplomatic">
                  Register as Delegate
                </Button>
              </Link>
              <Link to="/chapters">
                <Button variant="outline-diplomatic">
                  Find Your Chapter
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickLinksSection;