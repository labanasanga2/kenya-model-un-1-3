
import { useState } from 'react';
import { Send, Mail, Phone, MapPin, Clock, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

const ModernContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    type: 'general'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate sending email to KMUN official
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setIsSuccess(true);
      setIsSubmitting(false);
      
      toast({
        title: "Message Sent Successfully!",
        description: "Your message has been sent to KMUN. Please await official communication within 24-48 hours.",
      });
      
      // Reset form after success animation
      setTimeout(() => {
        setFormData({ name: '', email: '', subject: '', message: '', type: 'general' });
        setIsSuccess(false);
      }, 3000);
    } catch (error) {
      setIsSubmitting(false);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      primary: 'info@kmun.org',
      secondary: 'registration@kmun.org',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Phone,
      title: 'Call Us',
      primary: '+254 700 000 000',
      secondary: '+254 733 000 000',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      primary: 'UNON Gigiri Complex',
      secondary: 'Nairobi, Kenya',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Clock,
      title: 'Office Hours',
      primary: 'Mon-Fri: 9AM-5PM',
      secondary: 'Sat: 10AM-2PM',
      color: 'from-orange-500 to-red-500'
    }
  ];

  if (isSuccess) {
    return (
      <div className="flex items-center justify-center min-h-96">
        <div className="text-center animate-scale-in">
          <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4 animate-pulse" />
          <h3 className="text-2xl font-bold text-primary mb-2">Message Sent!</h3>
          <p className="text-muted-foreground">Thank you for contacting KMUN. We'll be in touch soon.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Contact Info Cards */}
      <div className="space-y-6">
        {contactInfo.map((info, index) => {
          const Icon = info.icon;
          return (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in-up border-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${info.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-foreground">{info.title}</h3>
                    <p className="text-sm text-primary font-medium">{info.primary}</p>
                    <p className="text-sm text-muted-foreground">{info.secondary}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Enhanced Contact Form */}
      <div className="lg:col-span-2">
        <Card className="border-0 shadow-2xl bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
          <CardHeader className="text-center pb-2">
            <CardTitle className="text-3xl font-bold text-primary font-playfair mb-2">
              Get In Touch
            </CardTitle>
            <CardDescription className="text-lg">
              Send us a message and we'll respond within 24 hours
            </CardDescription>
          </CardHeader>
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Contact Type Selector */}
              <div className="grid grid-cols-3 gap-2 p-1 bg-muted rounded-lg">
                {['general', 'registration', 'chapter'].map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setFormData({ ...formData, type })}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                      formData.type === type
                        ? 'bg-primary text-primary-foreground shadow-md'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-semibold">Full Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="border-2 focus:border-primary transition-colors duration-200"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-semibold">Email Address *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="border-2 focus:border-primary transition-colors duration-200"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="subject" className="text-sm font-semibold">Subject *</Label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="What is this regarding?"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="border-2 focus:border-primary transition-colors duration-200"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message" className="text-sm font-semibold">Message *</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell us how we can help you..."
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="border-2 focus:border-primary transition-colors duration-200 resize-none"
                />
              </div>
              
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-primary to-primary-light text-primary-foreground font-semibold py-3 text-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Sending Message...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ModernContactForm;
