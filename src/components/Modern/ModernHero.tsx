
import { useState, useEffect } from 'react';
import { ArrowRight, Globe, Users, Calendar, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const ModernHero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      title: "Kenya Model United Nations",
      subtitle: "Empowering Africa's Future Diplomats",
      description: "Join the premier platform for diplomatic education in Africa. Experience authentic UN simulations and build international leadership skills.",
      cta: "Begin Your Journey",
      stats: "2024 Conference"
    },
    {
      title: "30+ University Chapters",
      subtitle: "Connected Across East Africa",
      description: "From Nairobi to Kampala, our network spans the continent, fostering regional cooperation and understanding.",
      cta: "Find Your Chapter",
      stats: "Growing Network"
    },
    {
      title: "1000+ Alumni Leaders",
      subtitle: "Shaping Tomorrow's World",
      description: "Our graduates lead in diplomacy, business, and civil society across Africa and beyond.",
      cta: "Join Alumni",
      stats: "Success Stories"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const stats = [
    { icon: Globe, label: 'Countries', value: '15+' },
    { icon: Users, label: 'Delegates', value: '1000+' },
    { icon: Calendar, label: 'Years Active', value: '23+' },
    { icon: Award, label: 'Committees', value: '12+' }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-primary-dark to-secondary">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-secondary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary-light/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-un-gold/20 rounded-full blur-2xl animate-float"></div>
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-4 h-4 bg-white/10 rotate-45 animate-float`}
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 2) * 40}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${4 + i}s`
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main content with slide animation */}
        <div className="mb-12 transition-all duration-1000 ease-in-out transform">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 font-playfair animate-fade-in-up">
            {slides[currentSlide].title.split(' ').map((word, index) => (
              <span
                key={index}
                className="inline-block mr-4 animate-slide-in-right"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {word}
              </span>
            ))}
          </h1>
          
          <p className="text-xl md:text-2xl text-secondary mb-4 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            {slides[currentSlide].subtitle}
          </p>
          
          <p className="text-lg text-white/80 mb-8 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
            {slides[currentSlide].description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.9s' }}>
            <Link to="/registration">
              <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 transform hover:scale-105 transition-all duration-300 shadow-xl">
                {slides[currentSlide].cta}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/about">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary transform hover:scale-105 transition-all duration-300">
                Learn More
              </Button>
            </Link>
          </div>
        </div>

        {/* Animated stats section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="glass-card p-6 text-center transform hover:scale-105 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${1.2 + index * 0.1}s` }}
              >
                <Icon className="h-8 w-8 text-secondary mx-auto mb-2" />
                <div className="text-2xl font-bold text-white font-playfair">{stat.value}</div>
                <div className="text-sm text-white/80">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Slide indicators */}
        <div className="flex justify-center space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-secondary w-8' : 'bg-white/30'
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default ModernHero;
