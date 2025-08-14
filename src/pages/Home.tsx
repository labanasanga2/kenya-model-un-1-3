
import ModernHero from '@/components/Modern/ModernHero';
import AnimatedStats from '@/components/Modern/AnimatedStats';
import ModernFeatures from '@/components/Modern/ModernFeatures';
import InteractiveTestimonials from '@/components/Modern/InteractiveTestimonials';
import NewsletterSignup from '@/components/Modern/NewsletterSignup';
import FloatingActionButton from '@/components/Modern/FloatingActionButton';

const Home = () => {
  return (
    <div className="min-h-screen">
      <ModernHero />
      <AnimatedStats />
      <ModernFeatures />
      <InteractiveTestimonials />
      <NewsletterSignup />
      <FloatingActionButton />
    </div>
  );
};

export default Home;
