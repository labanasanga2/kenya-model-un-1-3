import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Send, CheckCircle, Sparkles, Bell } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setEmail('');
      
      toast({
        title: "Successfully subscribed! 🎉",
        description: "You'll receive updates about KMUN conferences and events.",
      });

      // Reset success state after 3 seconds
      setTimeout(() => setIsSuccess(false), 3000);
    }, 1500);
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-chapter-green/10">
        <div className="absolute inset-0">
          {/* Floating Elements */}
          <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-2xl animate-float" />
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-gradient-to-br from-secondary/20 to-transparent rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-gradient-to-br from-chapter-green/15 to-transparent rounded-full blur-3xl animate-pulse" />
          
          {/* Sparkle Effects */}
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-ping"
              style={{
                top: `${20 + (i * 15)}%`,
                left: `${10 + (i * 12)}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: '3s',
              }}
            >
              <Sparkles className="w-4 h-4 text-primary/30" />
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Card className="group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-white/90 to-white/70 dark:from-gray-900/90 dark:to-gray-800/70 backdrop-blur-sm">
          <CardContent className="p-8 md:p-12 text-center">
            {/* Header */}
            <div className="mb-8">
              <Badge variant="outline" className="mb-4 border-primary/20 bg-primary/5 group-hover:bg-primary/10 transition-colors">
                <Bell className="w-4 h-4 mr-2 text-primary animate-bounce" />
                Stay Connected
              </Badge>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-4 font-playfair">
                Get the Latest <span className="gradient-text">KMUN Updates</span>
              </h2>
              
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Be the first to know about upcoming conferences, registration deadlines, 
                and exclusive opportunities in the world of Model UN.
              </p>
            </div>

            {/* Newsletter Form */}
            <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-8">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-12 h-12 border-primary/20 focus:border-primary bg-background/50 backdrop-blur-sm"
                    required
                    disabled={isSubmitting || isSuccess}
                  />
                </div>
                
                <Button
                  type="submit"
                  disabled={isSubmitting || isSuccess || !email}
                  className={`h-12 px-6 rounded-lg transition-all duration-300 ${
                    isSuccess 
                      ? 'bg-green-500 hover:bg-green-600' 
                      : 'bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary'
                  } text-white shadow-lg hover:shadow-xl hover:scale-105`}
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Subscribing...
                    </div>
                  ) : isSuccess ? (
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5" />
                      Subscribed!
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <Send className="w-5 h-5" />
                      Subscribe
                    </div>
                  )}
                </Button>
              </div>
            </form>

            {/* Benefits */}
            <div className="grid md:grid-cols-3 gap-6 text-sm text-muted-foreground">
              <div className="flex items-center justify-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full" />
                Conference announcements
              </div>
              <div className="flex items-center justify-center gap-2">
                <div className="w-2 h-2 bg-secondary rounded-full" />
                Registration updates
              </div>
              <div className="flex items-center justify-center gap-2">
                <div className="w-2 h-2 bg-chapter-green rounded-full" />
                Exclusive opportunities
              </div>
            </div>

            {/* Privacy Note */}
            <p className="text-xs text-muted-foreground mt-6">
              We respect your privacy. Unsubscribe at any time. 
              <span className="text-primary hover:underline cursor-pointer ml-1">
                Privacy Policy
              </span>
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default NewsletterSignup;