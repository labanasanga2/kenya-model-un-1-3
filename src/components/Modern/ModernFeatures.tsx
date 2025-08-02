
import { useState } from 'react';
import { 
  Users, 
  Globe, 
  BookOpen, 
  Award, 
  MessageSquare, 
  Calendar,
  ChevronRight,
  Play,
  ExternalLink
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const ModernFeatures = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const mainFeatures = [
    {
      icon: Globe,
      title: 'Global Diplomatic Training',
      description: 'Experience authentic UN simulations with real-world scenarios',
      details: 'Engage in complex international negotiations, draft resolutions, and develop critical thinking skills through immersive Model UN experiences.',
      color: 'from-blue-500 to-cyan-500',
      image: '/api/placeholder/600/400',
      link: '/committees'
    },
    {
      icon: Users,
      title: 'Pan-African Network',
      description: 'Connect with future leaders across 15+ countries',
      details: 'Build lasting relationships with peers from across the continent, fostering regional cooperation and understanding.',
      color: 'from-green-500 to-emerald-500',
      image: '/api/placeholder/600/400',
      link: '/chapters'
    },
    {
      icon: Award,
      title: 'Leadership Development',
      description: 'Develop skills for tomorrow\'s challenges',
      details: 'Master public speaking, negotiation, research, and diplomatic protocol through hands-on experience and mentorship.',
      color: 'from-purple-500 to-pink-500',
      image: '/api/placeholder/600/400',
      link: '/about'
    }
  ];

  const quickFeatures = [
    {
      icon: Calendar,
      title: 'Annual Conference',
      description: 'Join 1000+ delegates at UNON',
      action: 'Register Now',
      link: '/conference',
      color: 'bg-gradient-to-r from-orange-500 to-red-500'
    },
    {
      icon: BookOpen,
      title: 'Research Resources',
      description: 'Access comprehensive guides',
      action: 'Explore Library',
      link: '/resources',
      color: 'bg-gradient-to-r from-indigo-500 to-purple-500'
    },
    {
      icon: MessageSquare,
      title: 'Mentorship Program',
      description: 'Learn from experienced diplomats',
      action: 'Find Mentor',
      link: '/mentorship',
      color: 'bg-gradient-to-r from-teal-500 to-green-500'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-playfair">
            Why Choose <span className="text-primary">KMUN</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the unique opportunities that make KMUN Africa's premier diplomatic education platform
          </p>
        </div>

        {/* Main Features - Interactive Showcase */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Feature Cards */}
            <div className="space-y-6">
              {mainFeatures.map((feature, index) => {
                const Icon = feature.icon;
                const isActive = activeFeature === index;
                
                return (
                  <Card
                    key={index}
                    className={`group cursor-pointer transition-all duration-500 hover:shadow-2xl border-2 ${
                      isActive 
                        ? 'border-primary shadow-xl scale-105' 
                        : 'border-border/50 hover:border-primary/50'
                    }`}
                    onClick={() => setActiveFeature(index)}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className={`p-3 rounded-xl bg-gradient-to-r ${feature.color} shadow-lg transition-transform duration-300 ${isActive ? 'scale-110' : 'group-hover:scale-105'}`}>
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                            {feature.title}
                          </h3>
                          <p className="text-muted-foreground mb-3">
                            {feature.description}
                          </p>
                          <div className={`overflow-hidden transition-all duration-500 ${
                            isActive ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                          }`}>
                            <p className="text-sm text-muted-foreground mb-4">
                              {feature.details}
                            </p>
                            <Link to={feature.link}>
                              <Button variant="outline" size="sm" className="group/btn">
                                Learn More
                                <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                              </Button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Feature Preview */}
            <div className="relative">
              <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl border border-border/50">
                <div className={`w-full h-full bg-gradient-to-br ${mainFeatures[activeFeature].color} flex items-center justify-center relative group cursor-pointer`}>
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="relative z-10 text-center text-white">
                    <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Play className="h-10 w-10 ml-1" />
                    </div>
                    <h4 className="text-xl font-bold mb-2">Watch Demo</h4>
                    <p className="text-white/80">See {mainFeatures[activeFeature].title} in action</p>
                  </div>
                </div>
              </div>
              
              {/* Feature indicators */}
              <div className="flex justify-center mt-6 space-x-2">
                {mainFeatures.map((_, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === activeFeature 
                        ? `bg-gradient-to-r ${mainFeatures[index].color} w-8` 
                        : 'bg-border hover:bg-muted-foreground'
                    }`}
                    onClick={() => setActiveFeature(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Quick Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {quickFeatures.map((feature, index) => {
            const Icon = feature.icon;
            const isHovered = hoveredCard === index;
            
            return (
              <Card
                key={index}
                className="group relative overflow-hidden border-0 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className={`absolute inset-0 ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                <CardHeader className="text-center pb-2 relative z-10">
                  <div className={`inline-flex p-4 rounded-xl ${feature.color} shadow-lg mx-auto mb-4 transition-transform duration-300 ${isHovered ? 'scale-110 rotate-3' : ''}`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {feature.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="text-center relative z-10">
                  <Link to={feature.link}>
                    <Button 
                      variant="outline" 
                      className="group/btn hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    >
                      {feature.action}
                      <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover/btn:scale-110" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ModernFeatures;
