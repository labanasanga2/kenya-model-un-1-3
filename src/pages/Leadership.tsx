import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Award, Mail, Linkedin } from 'lucide-react';

const Leadership = () => {
  const pastLeaders = [
    {
      id: 1,
      name: 'Dr. Sarah Wanjiku Kimani',
      position: 'Secretary General',
      session: '24th Session',
      year: '2024-2025',
      university: 'University of Nairobi',
      image: '/images/profile-pictures/sarah-wanjiku.jpg',
      email: 'sarah.kimani@alumni.kmun.org',
      linkedin: 'sarah-kimani-diplomacy',
      achievements: [
        'Expanded KMUN to 15 new universities',
        'Introduced virtual committee sessions',
        'Established KMUN Scholarship Fund',
        'Led largest KMUN conference with 2000+ delegates'
      ],
      biography: 'Dr. Sarah Kimani led KMUN through unprecedented growth, establishing new partnerships with international organizations and expanding our reach across East Africa.',
      color: 'from-blue-600 to-blue-800'
    },
    {
      id: 2,
      name: 'James Mwangi Kiptoo',
      position: 'Deputy Secretary General',
      session: '24th Session',
      year: '2024-2025',
      university: 'Strathmore University',
      image: '/images/profile-pictures/michael-kiprotich.jpg',
      email: 'james.mwangi@alumni.kmun.org',
      linkedin: 'james-mwangi-international-relations',
      achievements: [
        'Streamlined partnership protocols',
        'Enhanced delegate training programs',
        'Developed crisis simulation frameworks',
        'Coordinated with UN Kenya office'
      ],
      biography: 'James Mwangi brought exceptional organizational skills and international perspective to the Deputy SG role, strengthening KMUN\'s operational excellence.',
      color: 'from-green-600 to-green-800'
    },
    {
      id: 3,
      name: 'Prof. Margaret Njeri Kenyatta',
      position: 'President of the General Assembly',
      session: '24th Session',
      year: '2024-2025',
      university: 'Kenyatta University',
      image: '/images/profile-pictures/default-female.jpg',
      email: 'margaret.kenyatta@alumni.kmun.org',
      linkedin: 'margaret-kenyatta-ga',
      achievements: [
        'Modernized GA procedures',
        'Introduced inclusive debate formats',
        'Enhanced resolution drafting process',
        'Improved committee efficiency by 40%'
      ],
      biography: 'Prof. Kenyatta revolutionized General Assembly operations with her academic expertise and innovative approach to diplomatic procedure.',
      color: 'from-purple-600 to-purple-800'
    },
    {
      id: 4,
      name: 'Dr. Elizabeth Wambui Macharia',
      position: 'Chair of International Law Commission',
      session: '24th Session',
      year: '2024-2025',
      university: 'USIU-Africa',
      image: '/images/profile-pictures/default-female.jpg',
      email: 'elizabeth.macharia@alumni.kmun.org',
      linkedin: 'elizabeth-macharia-international-law',
      achievements: [
        'Developed new ILC case studies',
        'Enhanced legal research methodology',
        'Established moot court program',
        'Created legal writing workshops'
      ],
      biography: 'Dr. Macharia brought her extensive legal expertise to elevate the ILC to new standards of excellence in international law simulation.',
      color: 'from-indigo-600 to-indigo-800'
    },
    {
      id: 5,
      name: 'Hon. Justice Peter Kamau',
      position: 'President of International Court of Justice',
      session: '24th Session',
      year: '2024-2025',
      university: 'Moi University',
      image: '/images/profile-pictures/default-male.jpg',
      email: 'peter.kamau@alumni.kmun.org',
      linkedin: 'peter-kamau-icj',
      achievements: [
        'Introduced landmark case simulations',
        'Enhanced judicial procedure training',
        'Established ICJ alumni network',
        'Improved case documentation system'
      ],
      biography: 'Hon. Justice Kamau transformed the ICJ experience with authentic judicial procedures and mentorship that prepared delegates for real legal careers.',
      color: 'from-teal-600 to-teal-800'
    },
    {
      id: 6,
      name: 'Dr. Peter Waweru Mbugua',
      position: 'Chief of Staff',
      session: '24th Session',
      year: '2024-2025',
      university: 'Technical University of Kenya',
      image: '/images/profile-pictures/default-male.jpg',
      email: 'peter.waweru@alumni.kmun.org',
      linkedin: 'peter-waweru-operations',
      achievements: [
        'Optimized organizational workflows',
        'Implemented digital management systems',
        'Enhanced inter-office coordination',
        'Developed leadership training programs'
      ],
      biography: 'Dr. Waweru brought operational excellence and strategic thinking that transformed KMUN\'s internal coordination and efficiency.',
      color: 'from-gray-600 to-gray-800'
    },
    {
      id: 7,
      name: 'CPA Moses Kiplagat Cheruiyot',
      position: 'Finance Director',
      session: '24th Session',
      year: '2024-2025',
      university: 'Egerton University',
      image: '/images/profile-pictures/default-male.jpg',
      email: 'moses.kiplagat@alumni.kmun.org',
      linkedin: 'moses-kiplagat-finance',
      achievements: [
        'Achieved financial sustainability',
        'Implemented transparent budgeting',
        'Secured major sponsorship deals',
        'Established financial aid programs'
      ],
      biography: 'CPA Kiplagat ensured KMUN\'s financial stability and growth through strategic financial management and innovative funding solutions.',
      color: 'from-yellow-600 to-yellow-800'
    },
    {
      id: 8,
      name: 'Alice Nyambura Muhoro',
      position: 'Communications Director',
      session: '24th Session',
      year: '2024-2025',
      university: 'Maseno University',
      image: '/images/profile-pictures/default-female.jpg',
      email: 'alice.nyambura@alumni.kmun.org',
      linkedin: 'alice-nyambura-communications',
      achievements: [
        'Revolutionized KMUN digital presence',
        'Launched multimedia content strategy',
        'Increased social media engagement by 300%',
        'Established media partnerships'
      ],
      biography: 'Alice transformed KMUN\'s communications strategy, creating engaging content that connected with audiences across Kenya and beyond.',
      color: 'from-pink-600 to-pink-800'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Background Effects */}
      <section className="py-20 bg-gradient-to-br from-primary/20 via-secondary/10 to-chapter-green/20 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-72 h-72 bg-gradient-to-br from-chapter-green/20 to-conference-blue/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-secondary/10 to-primary/10 rounded-full blur-2xl animate-pulse"></div>
          
          {/* Floating awards and diplomatic symbols */}
          <div className="absolute top-32 right-32 w-16 h-16 border-2 border-secondary/30 rotate-45 animate-bounce-in" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-32 left-32 w-12 h-12 bg-primary/20 rounded-full animate-bounce-in" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-3/4 right-1/4 w-8 h-8 bg-chapter-green/30 rotate-12 animate-wiggle" style={{ animationDelay: '4s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 font-playfair animate-fade-in-up">
            Past <span className="gradient-text">Leaders</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Honoring the exceptional leaders who have shaped KMUN's legacy. 
            Their dedication and vision continue to inspire future generations of diplomats.
          </p>
          
          {/* Session highlight */}
          <div className="flex justify-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <Badge variant="outline" className="px-6 py-3 text-lg border-2 border-primary bg-primary/10 text-primary">
              <Calendar className="h-5 w-5 mr-2" />
              24th Session Leadership (2024-2025)
            </Badge>
          </div>
        </div>
      </section>

      {/* Leadership Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pastLeaders.map((leader, index) => (
              <Card key={leader.id} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 overflow-hidden bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                {/* Header with gradient background */}
                <CardHeader className={`bg-gradient-to-r ${leader.color} text-white relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
                  <div className="relative z-10 text-center">
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-white/30 object-cover group-hover:scale-110 transition-transform duration-300"
                      onError={(e) => {
                        console.error(`Failed to load image: ${leader.image} for ${leader.name}`);
                        e.currentTarget.src = '/images/profile-pictures/default-male.jpg';
                      }}
                      onLoad={() => {
                        console.log(`Successfully loaded image: ${leader.image} for ${leader.name}`);
                      }}
                    />
                    <CardTitle className="text-xl font-bold font-playfair">{leader.name}</CardTitle>
                    <CardDescription className="text-white/90 text-sm font-medium">
                      {leader.position}
                    </CardDescription>
                    <Badge variant="secondary" className="mt-2 bg-white/20 text-white border-white/30">
                      {leader.session}
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent className="p-6 space-y-4">
                  {/* University and year */}
                  <div className="text-center space-y-1">
                    <div className="font-semibold text-primary">{leader.university}</div>
                    <div className="text-sm text-muted-foreground">{leader.year}</div>
                  </div>

                  {/* Biography */}
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {leader.biography}
                  </p>

                  {/* Key achievements */}
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground flex items-center gap-2">
                      <Award className="h-4 w-4 text-secondary" />
                      Key Achievements
                    </h4>
                    <ul className="space-y-1">
                      {leader.achievements.slice(0, 2).map((achievement, idx) => (
                        <li key={idx} className="text-xs text-muted-foreground flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0"></div>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Contact links */}
                  <div className="flex justify-center space-x-4 pt-4 border-t border-border">
                    <a 
                      href={`mailto:${leader.email}`}
                      className="text-primary hover:text-primary-dark transition-colors"
                      aria-label={`Email ${leader.name}`}
                    >
                      <Mail className="h-5 w-5" />
                    </a>
                    <a 
                      href={`https://linkedin.com/in/${leader.linkedin}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary-dark transition-colors"
                      aria-label={`LinkedIn profile of ${leader.name}`}
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Legacy Stats Section */}
      <section className="py-20 bg-gradient-to-br from-muted/30 to-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4 font-playfair">
              Leadership <span className="text-primary">Impact</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The lasting impact of exceptional leadership on KMUN's growth and success
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '24', label: 'Sessions Led', color: 'text-primary' },
              { value: '50+', label: 'Universities Reached', color: 'text-chapter-green' },
              { value: '10,000+', label: 'Delegates Mentored', color: 'text-conference-blue' },
              { value: '95%', label: 'Alumni Success Rate', color: 'text-secondary' }
            ].map((stat, index) => (
              <div key={index} className="space-y-2 animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className={`text-4xl font-bold ${stat.color}`}>{stat.value}</div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Alumni Network CTA */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-chapter-green/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="glass-card p-8">
            <h2 className="text-3xl font-bold mb-4 font-playfair">Join Our Alumni Network</h2>
            <p className="text-muted-foreground mb-6 text-lg">
              Connect with past leaders and current members to continue the legacy of diplomatic excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:alumni@kmun.org">
                <Button variant="diplomatic" size="lg">Join Alumni Network</Button>
              </a>
              <a href="/contact">
                <Button variant="outline-diplomatic" size="lg">Contact Leadership</Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Leadership;