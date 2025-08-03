
import { MapPin, Mail, Phone, Clock } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import ModernContactForm from '@/components/Modern/ModernContactForm';

const Contact = () => {
  return (
    <div className="min-h-screen">
      {/* Modern Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-secondary/5 to-primary/10 relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-72 h-72 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-un-gold/5 rounded-full blur-2xl animate-float"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 font-playfair animate-fade-in-up">
            Contact <span className="text-primary">KMUN</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Have questions about KMUN, want to join a chapter, or need support with registration? 
            We're here to help you navigate your diplomatic journey.
          </p>
          
          {/* Quick contact badges */}
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="bg-primary/10 px-6 py-3 rounded-full border border-primary/20">
              <span className="text-primary font-semibold">📧  info@kenyamodelun.or.ke

</span>
            </div>
            <div className="bg-secondary/10 px-6 py-3 rounded-full border border-secondary/20">
              <span className="text-secondary-foreground font-semibold">📞Phone: +254 (0) 748 802283
Phone: +254 (0) 110 564334</span>
            </div>
            <div className="bg-chapter-green/10 px-6 py-3 rounded-full border border-chapter-green/20">
              <span className="text-chapter-green font-semibold">📍 KMUN,</span>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Contact Form Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ModernContactForm />
        </div>
      </section>

      {/* Interactive Map Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4 font-playfair">
              Visit Us at <span className="text-primary">UNON</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Located at the heart of international diplomacy in Nairobi
            </p>
          </div>

          <Card className="border-0 shadow-2xl overflow-hidden">
            <CardContent className="p-0">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7935414037146!2d36.7307843!3d-1.2354556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f3d4aef1f0f9b%3A0x5c5e8b8f8f8f8f8f!2sUnited%20Nations%20Office%20at%20Nairobi!5e0!3m2!1sen!2ske!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="UNON Location"
                  className="rounded-lg"
                ></iframe>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Enhanced FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4 font-playfair">
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Quick answers to common questions about KMUN
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                question: 'How do I register for KMUN 2026?',
                answer: 'Registration opens in December 2025. You can register through our website or contact your chapter lead.',
                color: 'from-blue-500 to-cyan-500'
              },
              {
                question: 'What is the conference fee?',
                answer: 'Conference fees vary by delegation type. Student delegates pay KES 5,000, while faculty advisors pay KES 3,000.',
                color: 'from-green-500 to-emerald-500'
              },
              {
                question: 'Can I attend without prior MUN experience?',
                answer: 'Absolutely! We welcome delegates of all experience levels and provide pre-conference training sessions.',
                color: 'from-purple-500 to-pink-500'
              },
              {
                question: 'How do I start a KMUN chapter?',
                answer: 'Contact our outreach team at chapters@kmun.org for a chapter starter package and guidance.',
                color: 'from-orange-500 to-red-500'
              }
            ].map((faq, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className={`w-12 h-12 bg-gradient-to-r ${faq.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-white font-bold">?</span>
                  </div>
                  <CardTitle className="text-lg font-semibold text-primary group-hover:text-primary-dark transition-colors">
                    {faq.question}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
