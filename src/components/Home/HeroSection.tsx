import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Users, Globe, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-unon.jpg';

const HeroSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Conference date: March 2026 (example date)
  const conferenceDate = new Date('2026-03-15T09:00:00');

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = conferenceDate.getTime() - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, [conferenceDate]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="UNON Conference Hall"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-playfair">
            Kenya Model
            <span className="block text-secondary">United Nations</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Empowering African youth through diplomatic education, 
            international collaboration, and global leadership development since 2001.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/registration">
              <Button size="lg" variant="diplomatic" className="text-lg px-8 py-4">
                Join KMUN 2026
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/about">
              <Button 
                size="lg" 
                variant="outline-diplomatic"
                className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary"
              >
                Learn More
              </Button>
            </Link>
          </div>

          {/* Countdown Timer */}
          <div className="glass-card max-w-2xl mx-auto p-6">
            <h3 className="text-white text-xl font-semibold mb-4 flex items-center justify-center">
              <Calendar className="mr-2 h-5 w-5 text-secondary" />
              Next Conference Countdown
            </h3>
            <div className="grid grid-cols-4 gap-4 text-center">
              {[
                { label: 'Days', value: timeLeft.days },
                { label: 'Hours', value: timeLeft.hours },
                { label: 'Minutes', value: timeLeft.minutes },
                { label: 'Seconds', value: timeLeft.seconds },
              ].map((item) => (
                <div key={item.label} className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl md:text-3xl font-bold text-secondary">
                    {item.value.toString().padStart(2, '0')}
                  </div>
                  <div className="text-white/80 text-sm">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="absolute bottom-8 left-0 right-0">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Users, number: '30+', label: 'University Chapters' },
              { icon: Globe, number: '1000+', label: 'Active Delegates' },
              { icon: Calendar, number: '23', label: 'Years of Excellence' },
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="glass-card text-center p-4 animate-slide-in-right">
                  <Icon className="h-8 w-8 text-secondary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">{stat.number}</div>
                  <div className="text-white/80 text-sm">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;