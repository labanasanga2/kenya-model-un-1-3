
import ModernHero from '@/components/Modern/ModernHero';
import AnimatedStats from '@/components/Modern/AnimatedStats';
import ModernFeatures from '@/components/Modern/ModernFeatures';

const Home = () => {
  return (
    <div className="min-h-screen">
      <ModernHero />
      <AnimatedStats />
      <ModernFeatures />
    </div>
  );
};

export default Home;
