
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Users, Globe, Star, Calendar, ChevronDown } from 'lucide-react';

const ModernHero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const floatingElements = [
    { icon: Users, delay: '0s', x: '10%', y: '20%' },
    { icon: Globe, delay: '2s', x: '80%', y: '30%' },
    { icon: Star, delay: '4s', x: '15%', y: '70%' },
    { icon: Calendar, delay: '6s', x: '85%', y: '80%' },
  ];

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-background via-primary/5 to-secondary/10">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient Orbs with Mouse Parallax */}
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-full blur-3xl animate-pulse"
          style={{
            top: `${20 + mousePosition.y * 0.05}%`,
            left: `${10 + mousePosition.x * 0.03}%`,
            animationDelay: '0s',
          }}
        />
        <div 
          className="absolute w-80 h-80 bg-gradient-to-r from-chapter-green/25 to-conference-blue/25 rounded-full blur-3xl animate-pulse"
          style={{
            top: `${60 + mousePosition.y * 0.03}%`,
            right: `${15 + mousePosition.x * 0.02}%`,
            animationDelay: '3s',
          }}
        />
        
        {/* Floating Icons */}
        {floatingElements.map((element, index) => {
          const Icon = element.icon;
          return (
            <div
              key={index}
              className="absolute animate-bounce opacity-20 hover:opacity-40 transition-opacity duration-300"
              style={{
                left: element.x,
                top: element.y,
                animationDelay: element.delay,
                animationDuration: '3s',
              }}
            >
              <Icon className="w-8 h-8 text-primary" />
            </div>
          );
        })}
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.5) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          {/* Announcement Badge */}
          <div className={`mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <Badge variant="outline" className="px-6 py-3 text-sm border-primary/20 bg-primary/5 backdrop-blur-sm hover:bg-primary/10 transition-colors group">
              <Star className="w-4 h-4 mr-2 text-primary animate-spin" style={{ animationDuration: '3s' }} />
              25th Session Registration Now Open
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Badge>
          </div>

          {/* Main Heading */}
          <h1 className={`text-5xl md:text-7xl lg:text-8xl font-bold mb-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="bg-gradient-to-r from-foreground via-primary to-secondary bg-clip-text text-transparent leading-tight block">
              Kenya Model
            </span>
            <span className="bg-gradient-to-r from-chapter-green via-conference-blue to-primary bg-clip-text text-transparent leading-tight block font-playfair">
              United Nations
            </span>
          </h1>

          {/* Subtitle */}
          <p className={`text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Empowering the next generation of <span className="text-primary font-semibold">diplomatic leaders</span> through 
            immersive Model UN experiences across Kenya's premier universities.
          </p>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <Button 
              size="lg" 
              className="group bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Join KMUN Today
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="group border-2 border-primary/20 hover:border-primary hover:bg-primary/5 px-8 py-4 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-105"
            >
              <Calendar className="mr-2 w-5 h-5" />
              2025 Conference
            </Button>
          </div>

          {/* Stats */}
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {[
              { value: '25+', label: 'Universities', color: 'text-primary' },
              { value: '500+', label: 'Active Members', color: 'text-chapter-green' },
              { value: '2000+', label: 'Alumni Network', color: 'text-conference-blue' },
              { value: '24', label: 'Years Excellence', color: 'text-secondary' },
            ].map((stat, index) => (
              <div key={index} className="group hover:scale-110 transition-transform duration-300">
                <div className={`text-3xl md:text-4xl font-bold ${stat.color} mb-2 group-hover:animate-pulse`}>
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Scroll Indicator */}
          <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="animate-bounce">
              <ChevronDown className="w-6 h-6 text-muted-foreground" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernHero;
