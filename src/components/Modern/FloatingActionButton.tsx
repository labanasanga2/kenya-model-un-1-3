import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle, ArrowUp, Phone, Mail, Calendar } from 'lucide-react';

const FloatingActionButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
        setShowScrollTop(window.pageYOffset > 800);
      } else {
        setIsVisible(false);
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const actionButtons = [
    {
      icon: Calendar,
      label: 'Register',
      action: () => window.location.href = '/registration',
      color: 'bg-primary hover:bg-primary-dark',
    },
    {
      icon: Mail,
      label: 'Contact',
      action: () => window.location.href = '/contact',
      color: 'bg-secondary hover:bg-secondary-dark',
    },
    {
      icon: Phone,
      label: 'Call',
      action: () => window.open('tel:+254700000000'),
      color: 'bg-chapter-green hover:bg-chapter-green-dark',
    },
  ];

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Scroll to Top Button */}
      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          className="rounded-full w-12 h-12 p-0 bg-muted hover:bg-muted-dark text-foreground shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          title="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </Button>
      )}

      {/* Action Buttons */}
      {isExpanded && (
        <div className="flex flex-col gap-3 animate-fade-in">
          {actionButtons.map((button, index) => {
            const Icon = button.icon;
            return (
              <div
                key={index}
                className="flex items-center gap-3 animate-slide-in-right"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="bg-background/90 backdrop-blur-sm text-foreground px-3 py-1 rounded-lg text-sm shadow-md whitespace-nowrap">
                  {button.label}
                </span>
                <Button
                  onClick={button.action}
                  className={`rounded-full w-12 h-12 p-0 ${button.color} text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110`}
                  title={button.label}
                >
                  <Icon className="w-5 h-5" />
                </Button>
              </div>
            );
          })}
        </div>
      )}

      {/* Main FAB */}
      <Button
        onClick={() => setIsExpanded(!isExpanded)}
        className={`rounded-full w-14 h-14 p-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 ${
          isExpanded 
            ? 'bg-red-500 hover:bg-red-600 rotate-45' 
            : 'bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary'
        } text-white`}
        title={isExpanded ? 'Close menu' : 'Quick actions'}
      >
        <MessageCircle className={`w-6 h-6 transition-transform duration-300 ${isExpanded ? 'rotate-45' : ''}`} />
      </Button>

      {/* Ripple Effect */}
      {isExpanded && (
        <div className="absolute bottom-0 right-0 w-14 h-14 rounded-full bg-primary/20 animate-ping" />
      )}
    </div>
  );
};

export default FloatingActionButton;