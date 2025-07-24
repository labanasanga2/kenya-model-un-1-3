import { Scale, Users, Globe } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import committeeImage from '@/assets/committee-meeting.jpg';

const Committees = () => {
  const committees = [
    {
      id: 1,
      name: 'General Assembly',
      acronym: 'GA',
      icon: Globe,
      delegates: '193 Member States',
      description: 'The main deliberative organ of the UN, addressing global issues from peace and security to sustainable development.',
      topics: [
        'Sustainable Development Goals Implementation',
        'Climate Change and Environmental Protection',
        'International Cooperation in Outer Space',
        'Promotion and Protection of Human Rights'
      ],
      experience: 'Beginner to Intermediate',
      color: 'from-primary to-primary-light'
    },
    {
      id: 2,
      name: 'International Court of Justice',
      acronym: 'ICJ',
      icon: Scale,
      delegates: '15 Judges + Legal Counsel',
      description: 'The principal judicial organ of the UN, settling legal disputes between states and providing advisory opinions.',
      topics: [
        'Maritime Boundary Disputes',
        'State Responsibility for Violations of International Law',
        'Application of International Treaties',
        'Reparations for Injuries Suffered in Service of the UN'
      ],
      experience: 'Advanced',
      color: 'from-secondary to-secondary-light'
    },
    {
      id: 3,
      name: 'International Law Commission',
      acronym: 'ILC',
      icon: Users,
      delegates: '34 Legal Experts',
      description: 'Responsible for the progressive development and codification of international law.',
      topics: [
        'Crimes Against Humanity',
        'Protection of the Environment in Armed Conflict',
        'Immunity of State Officials from Foreign Criminal Jurisdiction',
        'Succession of States in Respect of State Responsibility'
      ],
      experience: 'Advanced',
      color: 'from-chapter-green to-primary'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-foreground mb-6 font-playfair">
                KMUN <span className="text-primary">Committees</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Experience authentic UN simulations in our three specialized committees. 
                Each offers unique challenges and learning opportunities for delegates 
                at different experience levels.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-primary/10 px-4 py-2 rounded-full">
                  <span className="text-primary font-semibold">3 Committees</span>
                </div>
                <div className="bg-secondary/10 px-4 py-2 rounded-full">
                  <span className="text-secondary-foreground font-semibold">240+ Delegates</span>
                </div>
                <div className="bg-chapter-green/10 px-4 py-2 rounded-full">
                  <span className="text-chapter-green font-semibold">Authentic UN Format</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src={committeeImage} 
                alt="Committee Meeting" 
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Committees Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4 font-playfair">
              Our Committees
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose your committee based on your interests and experience level
            </p>
          </div>

          <div className="space-y-12">
            {committees.map((committee, index) => {
              const Icon = committee.icon;
              return (
                <Card key={committee.id} className={`committee-card ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8">
                    {/* Committee Info */}
                    <div className="lg:col-span-2 space-y-6">
                      <CardHeader className="p-0">
                        <div className="flex items-center space-x-4 mb-4">
                          <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${committee.color} flex items-center justify-center`}>
                            <Icon className="h-8 w-8 text-white" />
                          </div>
                          <div>
                            <CardTitle className="text-3xl font-bold text-primary font-playfair">
                              {committee.name}
                            </CardTitle>
                            <CardDescription className="text-lg font-semibold text-secondary">
                              {committee.acronym}
                            </CardDescription>
                          </div>
                        </div>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                          {committee.description}
                        </p>
                      </CardHeader>

                      <CardContent className="p-0 space-y-6">
                        {/* Committee Details */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-semibold text-foreground mb-2">Delegates</h4>
                            <p className="text-muted-foreground">{committee.delegates}</p>
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground mb-2">Experience Level</h4>
                            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                              committee.experience === 'Advanced' 
                                ? 'bg-red-100 text-red-800' 
                                : committee.experience === 'Intermediate'
                                ? 'bg-yellow-100 text-yellow-800'
                                : 'bg-green-100 text-green-800'
                            }`}>
                              {committee.experience}
                            </span>
                          </div>
                        </div>

                        {/* Topics */}
                        <div>
                          <h4 className="font-semibold text-foreground mb-3">Key Topics</h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {committee.topics.map((topic, idx) => (
                              <div key={idx} className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-primary rounded-full"></div>
                                <span className="text-sm text-muted-foreground">{topic}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </div>

                    {/* CTA Section */}
                    <div className="flex flex-col justify-center space-y-4">
                      <Button className="btn-diplomatic w-full">
                        Apply for {committee.acronym}
                      </Button>
                      <Button variant="outline" className="btn-outline-diplomatic w-full">
                        Committee Guide
                      </Button>
                      <div className="text-center text-sm text-muted-foreground">
                        Registration opens December 2025
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Preparation Resources */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4 font-playfair">
              Preparation Resources
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get ready for committee sessions with our comprehensive preparation materials
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="committee-card text-center">
              <CardHeader>
                <CardTitle className="text-xl font-semibold">Study Guides</CardTitle>
                <CardDescription>
                  Comprehensive background guides for each committee topic
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="btn-outline-diplomatic">
                  Download Guides
                </Button>
              </CardContent>
            </Card>

            <Card className="committee-card text-center">
              <CardHeader>
                <CardTitle className="text-xl font-semibold">Rules of Procedure</CardTitle>
                <CardDescription>
                  Official KMUN rules and parliamentary procedures
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="btn-outline-diplomatic">
                  View Rules
                </Button>
              </CardContent>
            </Card>

            <Card className="committee-card text-center">
              <CardHeader>
                <CardTitle className="text-xl font-semibold">Training Workshops</CardTitle>
                <CardDescription>
                  Pre-conference training sessions for new delegates
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="btn-outline-diplomatic">
                  Register for Training
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Committees;