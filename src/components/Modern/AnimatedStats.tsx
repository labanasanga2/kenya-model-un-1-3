
import { useState, useEffect, useRef } from 'react';
import { Users, Globe, Calendar, Award, TrendingUp, BookOpen } from 'lucide-react';

const AnimatedStats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedValues, setAnimatedValues] = useState<Record<string, number>>({});
  const sectionRef = useRef<HTMLDivElement>(null);

  const stats = [
    { 
      icon: Users, 
      label: 'Active Delegates', 
      value: 1000, 
      suffix: '+',
      description: 'Students engaged across our network',
      color: 'from-blue-500 to-cyan-500',
      bgPattern: 'bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20'
    },
    { 
      icon: Globe, 
      label: 'Countries Represented', 
      value: 15, 
      suffix: '+',
      description: 'Nations participating in our conferences',
      color: 'from-green-500 to-emerald-500',
      bgPattern: 'bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20'
    },
    { 
      icon: Calendar, 
      label: 'Years of Excellence', 
      value: 23, 
      suffix: '',
      description: 'Continuous diplomatic education',
      color: 'from-purple-500 to-pink-500',
      bgPattern: 'bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20'
    },
    { 
      icon: Award, 
      label: 'University Chapters', 
      value: 30, 
      suffix: '+',
      description: 'Campuses with active KMUN presence',
      color: 'from-orange-500 to-red-500',
      bgPattern: 'bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20'
    },
    { 
      icon: TrendingUp, 
      label: 'Alumni Network', 
      value: 500, 
      suffix: '+',
      description: 'Graduates in leadership positions',
      color: 'from-indigo-500 to-purple-500',
      bgPattern: 'bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20'
    },
    { 
      icon: BookOpen, 
      label: 'Committee Simulations', 
      value: 12, 
      suffix: '',
      description: 'Diverse UN bodies represented',
      color: 'from-teal-500 to-green-500',
      bgPattern: 'bg-gradient-to-br from-teal-50 to-green-50 dark:from-teal-900/20 dark:to-green-900/20'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      stats.forEach((stat, index) => {
        setTimeout(() => {
          animateValue(stat.label, 0, stat.value, 2000);
        }, index * 200);
      });
    }
  }, [isVisible]);

  const animateValue = (key: string, start: number, end: number, duration: number) => {
    const startTime = performance.now();
    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = Math.floor(start + (end - start) * easeOutQuart);
      
      setAnimatedValues(prev => ({ ...prev, [key]: currentValue }));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  };

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-background via-muted/30 to-background relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-playfair">
            Our Impact in <span className="text-primary">Numbers</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Over two decades of empowering African youth through diplomatic education
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            const currentValue = animatedValues[stat.label] || 0;
            
            return (
              <div
                key={index}
                className={`group relative ${stat.bgPattern} p-8 rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Floating icon background */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-xl group-hover:scale-150 transition-all duration-500"></div>
                
                <div className="relative z-10">
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${stat.color} shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <div className="mb-4">
                    <div className="text-4xl md:text-5xl font-bold text-foreground font-playfair mb-2">
                      {currentValue}{stat.suffix}
                    </div>
                    <h3 className="text-xl font-semibold text-primary mb-2">
                      {stat.label}
                    </h3>
                    <p className="text-muted-foreground">
                      {stat.description}
                    </p>
                  </div>

                  {/* Progress bar animation */}
                  <div className="w-full bg-border/30 rounded-full h-1 overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r ${stat.color} transition-all duration-1000 ease-out`}
                      style={{ 
                        width: isVisible ? '100%' : '0%',
                        transitionDelay: `${index * 200}ms`
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AnimatedStats;
