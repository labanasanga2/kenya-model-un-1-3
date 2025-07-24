import { Award, Globe, Target, Users } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import delegatesImage from '@/assets/delegates-networking.jpg';

const About = () => {
  const values = [
    {
      icon: Globe,
      title: 'Global Perspective',
      description: 'Fostering international understanding and diplomatic relations across Africa'
    },
    {
      icon: Users,
      title: 'Youth Empowerment',
      description: 'Developing the next generation of African leaders and diplomats'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Maintaining the highest standards in Model UN education and practice'
    },
    {
      icon: Target,
      title: 'Impact',
      description: 'Creating meaningful change through diplomatic engagement and advocacy'
    }
  ];

  const timeline = [
    { year: '2001', event: 'KMUN Founded', description: 'Established to promote diplomatic education in Kenya' },
    { year: '2002', event: 'First Conference', description: 'Inaugural conference held at UNON with 100 delegates' },
    { year: '2010', event: 'Regional Expansion', description: 'Extended to 15 universities across Kenya' },
    { year: '2018', event: 'Continental Reach', description: 'Welcomed delegates from 10 African countries' },
    { year: '2024', event: '30+ Chapters', description: 'Now serving over 1000 delegates annually' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-foreground mb-6 font-playfair">
                About <span className="text-primary">KMUN</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                For over two decades, Kenya Model United Nations has been at the forefront of 
                diplomatic education in Africa, empowering young leaders to tackle global challenges 
                through simulation, debate, and collaboration.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-primary/10 px-4 py-2 rounded-full">
                  <span className="text-primary font-semibold">Founded 2001</span>
                </div>
                <div className="bg-secondary/10 px-4 py-2 rounded-full">
                  <span className="text-secondary-foreground font-semibold">30+ Chapters</span>
                </div>
                <div className="bg-chapter-green/10 px-4 py-2 rounded-full">
                  <span className="text-chapter-green font-semibold">1000+ Delegates</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src={delegatesImage} 
                alt="KMUN Delegates" 
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Card className="committee-card">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-primary font-playfair">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  To provide African university students with comprehensive diplomatic education, 
                  fostering international understanding, critical thinking, and leadership skills 
                  through authentic Model United Nations experiences.
                </p>
              </CardContent>
            </Card>

            <Card className="committee-card">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-primary font-playfair">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  To be Africa's premier platform for diplomatic education, producing confident, 
                  globally-minded leaders who will shape international relations and contribute 
                  to peaceful resolution of global challenges.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4 font-playfair">Core Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide our mission and shape our diplomatic community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="committee-card text-center">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-light rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-semibold">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center">
                      {value.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4 font-playfair">Our Journey</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Two decades of growth, impact, and diplomatic excellence
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-primary/20 h-full"></div>
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <Card className="committee-card">
                      <CardHeader>
                        <CardTitle className="text-xl font-bold text-primary">{item.event}</CardTitle>
                        <CardDescription className="text-lg font-semibold text-secondary">
                          {item.year}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">{item.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="w-4 h-4 bg-primary rounded-full border-4 border-background z-10"></div>
                  
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;