import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';

const InteractiveTestimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Kimani',
      role: 'Former Secretary General',
      university: 'University of Nairobi',
      image: '/images/profile-pictures/sarah-wanjiku.jpg',
      content: 'KMUN transformed my understanding of international relations and equipped me with leadership skills that have been invaluable in my diplomatic career.',
      rating: 5,
      year: '2023',
      achievement: 'Currently working at UN Kenya Office'
    },
    {
      id: 2,
      name: 'Michael Kiprotich',
      role: 'Former Deputy Secretary General',
      university: 'Strathmore University',
      image: '/images/profile-pictures/michael-kiprotich.jpg',
      content: 'The debate skills and cross-cultural understanding I gained at KMUN have been fundamental to my success in international business negotiations.',
      rating: 5,
      year: '2022',
      achievement: 'International Trade Consultant'
    },
    {
      id: 3,
      name: 'Grace Wanjiru',
      role: 'Former Communications Director',
      university: 'Kenyatta University',
      image: '/images/profile-pictures/default-female.jpg',
      content: 'KMUN\'s emphasis on research and public speaking prepared me exceptionally well for my role in international journalism and policy analysis.',
      rating: 5,
      year: '2021',
      achievement: 'BBC World Service Correspondent'
    },
    {
      id: 4,
      name: 'James Mwangi',
      role: 'Former President of GA',
      university: 'Moi University',
      image: '/images/profile-pictures/default-male.jpg',
      content: 'The network I built through KMUN and the diplomatic protocols I learned have been crucial in my career in international development.',
      rating: 5,
      year: '2020',
      achievement: 'UNDP Program Officer'
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-20 bg-gradient-to-br from-muted/30 to-primary/5 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-br from-secondary/10 to-transparent rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-primary/20 bg-primary/5">
            <Star className="w-4 h-4 mr-2 text-primary" />
            Success Stories
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-playfair">
            What Our <span className="gradient-text">Alumni</span> Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Hear from our graduates who are making their mark in diplomacy, business, and international relations worldwide.
          </p>
        </div>

        {/* Main Testimonial Card */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card className="group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-white/80 to-white/60 dark:from-gray-900/80 dark:to-gray-800/60 backdrop-blur-sm">
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-3 gap-8 items-center">
                {/* Profile Section */}
                <div className="text-center md:text-left">
                  <div className="relative inline-block mb-4">
                    <img
                      src={currentTestimonial.image}
                      alt={currentTestimonial.name}
                      className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-4 border-primary/20 group-hover:border-primary/40 transition-colors"
                      onError={(e) => {
                        e.currentTarget.src = '/images/profile-pictures/default-male.jpg';
                      }}
                    />
                    <div className="absolute -top-2 -right-2 bg-primary text-white rounded-full p-2">
                      <Quote className="w-4 h-4" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-1">{currentTestimonial.name}</h3>
                  <p className="text-primary font-medium mb-1">{currentTestimonial.role}</p>
                  <p className="text-sm text-muted-foreground mb-2">{currentTestimonial.university}</p>
                  <Badge variant="secondary" className="text-xs">
                    Class of {currentTestimonial.year}
                  </Badge>
                </div>

                {/* Testimonial Content */}
                <div className="md:col-span-2 space-y-6">
                  {/* Rating */}
                  <div className="flex justify-center md:justify-start gap-1">
                    {[...Array(currentTestimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-lg md:text-xl text-foreground leading-relaxed italic">
                    "{currentTestimonial.content}"
                  </blockquote>

                  {/* Achievement */}
                  <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-4">
                    <div className="text-sm font-medium text-primary mb-1">Current Achievement</div>
                    <div className="text-foreground">{currentTestimonial.achievement}</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <Button
            variant="outline"
            size="sm"
            onClick={prevTestimonial}
            className="rounded-full w-12 h-12 p-0 border-primary/20 hover:border-primary hover:bg-primary/10"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>

          {/* Dots Indicator */}
          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setIsAutoPlaying(false);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-primary scale-125'
                    : 'bg-primary/30 hover:bg-primary/50'
                }`}
              />
            ))}
          </div>

          <Button
            variant="outline"
            size="sm"
            onClick={nextTestimonial}
            className="rounded-full w-12 h-12 p-0 border-primary/20 hover:border-primary hover:bg-primary/10"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>

        {/* Auto-play Toggle */}
        <div className="text-center">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="text-muted-foreground hover:text-foreground"
          >
            {isAutoPlaying ? 'Pause' : 'Play'} Auto-rotation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default InteractiveTestimonials;