import { useState } from 'react';
import { Users, Mail, Phone, MapPin, Briefcase, Search } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// Import profile pictures
import michaelKiprotichImage from '@/assets/images/profile-pictures/michael-kiprotich.jpg';
import sarahWanjikuImage from '@/assets/images/profile-pictures/sarah-wanjiku.jpg';
import defaultMaleImage from '@/assets/images/profile-pictures/default-male.jpg';
import defaultFemaleImage from '@/assets/images/profile-pictures/default-female.jpg';

const Offices = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Function to get profile picture
  const getProfilePicture = (person: string, gender: 'male' | 'female' = 'male') => {
    switch (person) {
      case 'Michael Kiprotich':
        return michaelKiprotichImage;
      case 'Sarah Wanjiku':
        return sarahWanjikuImage;
      default:
        return gender === 'female' ? defaultFemaleImage : defaultMaleImage;
    }
  };

  const offices = [
    {
      id: 'sg',
      name: 'Secretary General\'s Office',
      description: 'The highest executive office overseeing all KMUN operations and strategic direction.',
      color: 'from-blue-600 to-blue-800',
      subOffices: [
        {
          name: 'Secretary General',
          role: 'Chief Executive Officer',
          person: 'Michael Kiprotich',
          email: 'sg@kmun.org',
          image: 'photo-1581092795360-fd1ca04f0952',
          description: 'Provides overall leadership and strategic direction for KMUN.'
        },
        {
          name: 'Office of the Executive Assistant',
          role: 'Executive Support',
          person: 'Sarah Wanjiku',
          email: 'executive.assistant@kmun.org',
          image: 'photo-1581091226825-a6a2a5aee158',
          description: 'Manages executive schedules and high-level administrative tasks.'
        },
        {
          name: 'MUNKenya Foundation',
          role: 'Foundation Director',
          person: 'James Mwangi',
          email: 'foundation@kmun.org',
          image: 'photo-1488590528505-98d2b5aba04b',
          description: 'Oversees the foundation activities and community outreach programs.'
        },
        {
          name: 'Alumni Relations Office',
          role: 'Alumni Director',
          person: 'Grace Cheptoo',
          email: 'alumni@kmun.org',
          image: 'photo-1581091226825-a6a2a5aee158',
          description: 'Maintains relationships with KMUN alumni and organizes alumni events.'
        },
        {
          name: 'Membership Office',
          role: 'Membership Director',
          person: 'David Kiprotich',
          email: 'membership@kmun.org',
          image: 'photo-1581092795360-fd1ca04f0952',
          description: 'Manages membership registration and chapter coordination.'
        },
        {
          name: 'Projects Office',
          role: 'Projects Director',
          person: 'Amina Hassan',
          email: 'projects@kmun.org',
          image: 'photo-1581091226825-a6a2a5aee158',
          description: 'Coordinates special projects and initiatives across all chapters.'
        },
        {
          name: 'Strategy Office',
          role: 'Strategy Director',
          person: 'Peter Kamau',
          email: 'strategy@kmun.org',
          image: 'photo-1488590528505-98d2b5aba04b',
          description: 'Develops long-term strategic plans and organizational development.'
        },
        {
          name: 'International Relations',
          role: 'International Relations Director',
          person: 'Mary Atieno',
          email: 'international@kmun.org',
          image: 'photo-1581091226825-a6a2a5aee158',
          description: 'Manages partnerships with international MUN organizations.'
        }
      ]
    },
    {
      id: 'general-assembly',
      name: 'General Assembly',
      description: 'Simulates the United Nations General Assembly, addressing global issues and resolutions.',
      color: 'from-green-600 to-green-800',
      subOffices: [
        {
          name: 'President of General Assembly',
          role: 'Presiding Officer',
          person: 'John Mutua',
          email: 'ga.president@kmun.org',
          image: 'photo-1581092795360-fd1ca04f0952',
          description: 'Presides over General Assembly sessions and maintains order.'
        },
        {
          name: 'Vice President',
          role: 'Deputy Presiding Officer',
          person: 'Grace Wanjiru',
          email: 'ga.vp@kmun.org',
          image: 'photo-1581091226825-a6a2a5aee158',
          description: 'Assists the President and handles special assignments.'
        },
        {
          name: 'GA Secretariat',
          role: 'Administrative Support',
          person: 'Samuel Kiprotich',
          email: 'ga.secretariat@kmun.org',
          image: 'photo-1488590528505-98d2b5aba04b',
          description: 'Provides administrative and logistical support for GA sessions.'
        }
      ]
    },
    {
      id: 'communications',
      name: 'Communications Office',
      description: 'Manages all communications, media, and digital presence for KMUN.',
      color: 'from-purple-600 to-purple-800',
      subOffices: [
        {
          name: 'Communications Director',
          role: 'Head of Communications',
          person: 'Alice Nyambura',
          email: 'communications@kmun.org',
          image: 'photo-1581091226825-a6a2a5aee158',
          description: 'Oversees all communication strategies and public relations.'
        },
        {
          name: 'Web Developers',
          role: 'Technical Team',
          person: 'Kevin Ochieng',
          email: 'web@kmun.org',
          image: 'photo-1487058792275-0ad442f0af775',
          description: 'Develops and maintains KMUN websites and digital platforms.'
        },
        {
          name: 'Graphic Designers',
          role: 'Visual Design Team',
          person: 'Diana Muthoni',
          email: 'graphics@kmun.org',
          image: 'photo-1473091534298-04dcbce3278c',
          description: 'Creates visual content and branding materials for KMUN.'
        },
        {
          name: 'Photographers',
          role: 'Visual Documentation',
          person: 'Brian Kipchoge',
          email: 'photo@kmun.org',
          image: 'photo-1581092795360-fd1ca04f0952',
          description: 'Documents KMUN events and activities through photography.'
        },
        {
          name: 'Writers',
          role: 'Content Creation',
          person: 'Faith Wanjiku',
          email: 'writers@kmun.org',
          image: 'photo-1581091226825-a6a2a5aee158',
          description: 'Creates written content for publications and digital media.'
        },
        {
          name: 'Social Media Managers',
          role: 'Digital Engagement',
          person: 'Daniel Kimani',
          email: 'social@kmun.org',
          image: 'photo-1488590528505-98d2b5aba04b',
          description: 'Manages KMUN social media presence and online engagement.'
        },
        {
          name: 'Local Communications Directors',
          role: 'Regional Coordinators',
          person: 'Rebecca Cheptoo',
          email: 'local.comms@kmun.org',
          image: 'photo-1581091226825-a6a2a5aee158',
          description: 'Coordinates communications activities at chapter level.'
        }
      ]
    },
    {
      id: 'deputy-sg',
      name: 'Deputy Secretary General\'s Office',
      description: 'Supports the Secretary General and manages strategic partnerships.',
      color: 'from-red-600 to-red-800',
      subOffices: [
        {
          name: 'Deputy Secretary General',
          role: 'Deputy Chief Executive',
          person: 'Catherine Njeri',
          email: 'deputy.sg@kmun.org',
          image: 'photo-1581091226825-a6a2a5aee158',
          description: 'Assists the SG and oversees partnership development.'
        },
        {
          name: 'Partnership Office',
          role: 'Partnership Director',
          person: 'Mark Kiptoo',
          email: 'partnerships@kmun.org',
          image: 'photo-1581092795360-fd1ca04f0952',
          description: 'Develops and maintains strategic partnerships with organizations.'
        }
      ]
    },
    {
      id: 'icj',
      name: 'International Court of Justice',
      description: 'Simulates the principal judicial organ of the United Nations.',
      color: 'from-indigo-600 to-indigo-800',
      subOffices: [
        {
          name: 'President of ICJ',
          role: 'Chief Justice',
          person: 'Prof. Margaret Kenyatta',
          email: 'icj.president@kmun.org',
          image: 'photo-1581091226825-a6a2a5aee158',
          description: 'Presides over ICJ proceedings and ensures legal procedures.'
        },
        {
          name: 'Vice President of ICJ',
          role: 'Deputy Chief Justice',
          person: 'Dr. Joseph Kimutai',
          email: 'icj.vp@kmun.org',
          image: 'photo-1581092795360-fd1ca04f0952',
          description: 'Assists the President and handles case assignments.'
        },
        {
          name: 'Registrar',
          role: 'Court Administrator',
          person: 'Lawyer Susan Wairimu',
          email: 'icj.registrar@kmun.org',
          image: 'photo-1581091226825-a6a2a5aee158',
          description: 'Manages court administration and legal documentation.'
        }
      ]
    },
    {
      id: 'conference',
      name: 'Conference Office',
      description: 'Plans and executes the annual KMUN conference and related events.',
      color: 'from-teal-600 to-teal-800',
      subOffices: [
        {
          name: 'Conference Director',
          role: 'Head of Conference',
          person: 'Anthony Mwangi',
          email: 'conference@kmun.org',
          image: 'photo-1581092795360-fd1ca04f0952',
          description: 'Oversees all aspects of conference planning and execution.'
        },
        {
          name: 'Deputy Conference Director',
          role: 'Assistant Director',
          person: 'Patricia Akinyi',
          email: 'deputy.conference@kmun.org',
          image: 'photo-1581091226825-a6a2a5aee158',
          description: 'Supports the Director and manages specific conference areas.'
        },
        {
          name: 'Head of Logistics',
          role: 'Logistics Coordinator',
          person: 'Robert Kigali',
          email: 'logistics@kmun.org',
          image: 'photo-1488590528505-98d2b5aba04b',
          description: 'Manages venue, catering, and logistical arrangements.'
        },
        {
          name: 'Deputy Head of Logistics',
          role: 'Assistant Logistics',
          person: 'Mercy Wanjiku',
          email: 'deputy.logistics@kmun.org',
          image: 'photo-1581091226825-a6a2a5aee158',
          description: 'Assists with logistics coordination and implementation.'
        },
        {
          name: 'Head of Protocol',
          role: 'Protocol Manager',
          person: 'Charles Kiptanui',
          email: 'protocol@kmun.org',
          image: 'photo-1581092795360-fd1ca04f0952',
          description: 'Manages diplomatic protocol and ceremonial events.'
        },
        {
          name: 'Deputy Head of Protocol',
          role: 'Assistant Protocol',
          person: 'Esther Njeri',
          email: 'deputy.protocol@kmun.org',
          image: 'photo-1581091226825-a6a2a5aee158',
          description: 'Supports protocol activities and guest relations.'
        }
      ]
    },
    {
      id: 'finance',
      name: 'Finance Office',
      description: 'Manages all financial operations, budgeting, and fiscal responsibility.',
      color: 'from-yellow-600 to-yellow-800',
      subOffices: [
        {
          name: 'Finance Director',
          role: 'Chief Financial Officer',
          person: 'CPA Moses Kiplagat',
          email: 'finance@kmun.org',
          image: 'photo-1581092795360-fd1ca04f0952',
          description: 'Oversees all financial operations and fiscal management.'
        },
        {
          name: 'Deputy Finance Director',
          role: 'Assistant CFO',
          person: 'Agnes Wanjiru',
          email: 'deputy.finance@kmun.org',
          image: 'photo-1581091226825-a6a2a5aee158',
          description: 'Assists with financial planning and budget management.'
        },
        {
          name: 'Finance Bureau Team',
          role: 'Financial Analysts',
          person: 'Multiple Team Members',
          email: 'finance.bureau@kmun.org',
          image: 'photo-1518770660439-4636190af475',
          description: 'Handles day-to-day financial operations and reporting.'
        }
      ]
    },
    {
      id: 'ilc',
      name: 'International Law Commission',
      description: 'Focuses on the development and codification of international law.',
      color: 'from-cyan-600 to-cyan-800',
      subOffices: [
        {
          name: 'Chairperson of ILC',
          role: 'Commission Chair',
          person: 'Prof. Elizabeth Wambui',
          email: 'ilc.chair@kmun.org',
          image: 'photo-1581091226825-a6a2a5aee158',
          description: 'Chairs ILC sessions and guides legal discussions.'
        },
        {
          name: 'Vice Chairperson',
          role: 'Deputy Chair',
          person: 'Dr. Francis Macharia',
          email: 'ilc.vicechair@kmun.org',
          image: 'photo-1581092795360-fd1ca04f0952',
          description: 'Supports the Chair and leads working groups.'
        },
        {
          name: 'Rapporteur',
          role: 'Legal Reporter',
          person: 'Advocate Jane Mutindi',
          email: 'ilc.rapporteur@kmun.org',
          image: 'photo-1581091226825-a6a2a5aee158',
          description: 'Documents proceedings and prepares legal reports.'
        }
      ]
    },
    {
      id: 'cos',
      name: 'Chief of Staff Office',
      description: 'Coordinates high-level operations and strategic communications.',
      color: 'from-gray-600 to-gray-800',
      subOffices: [
        {
          name: 'Chief of Staff',
          role: 'Operations Coordinator',
          person: 'Dr. Peter Waweru',
          email: 'chief.of.staff@kmun.org',
          image: 'photo-1581092795360-fd1ca04f0952',
          description: 'Coordinates executive operations and strategic initiatives.'
        },
        {
          name: 'Deputy Chief of Staff',
          role: 'Assistant Coordinator',
          person: 'Linda Chepkemoi',
          email: 'deputy.cos@kmun.org',
          image: 'photo-1581091226825-a6a2a5aee158',
          description: 'Supports the Chief of Staff and manages special projects.'
        }
      ]
    }
  ];

  const filteredOffices = offices.filter(office =>
    office.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    office.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    office.subOffices.some(sub => 
      sub.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      sub.person.toLowerCase().includes(searchTerm.toLowerCase()) ||
      sub.role.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div className="min-h-screen">
      {/* Modern Hero Section with Background Effects */}
      <section className="py-20 bg-gradient-to-br from-primary/20 via-chapter-green/10 to-conference-blue/20 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-primary/20 to-chapter-green/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-72 h-72 bg-gradient-to-br from-conference-blue/20 to-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-chapter-green/10 to-primary/10 rounded-full blur-2xl animate-pulse"></div>
          
          {/* Geometric shapes */}
          <div className="absolute top-32 right-32 w-16 h-16 border-2 border-primary/30 rotate-45 animate-bounce-in" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-32 left-32 w-12 h-12 bg-chapter-green/20 rounded-full animate-bounce-in" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-3/4 right-1/4 w-8 h-8 bg-conference-blue/30 rotate-12 animate-wiggle" style={{ animationDelay: '4s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 font-playfair animate-fade-in-up">
            KMUN <span className="gradient-text">Offices</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Discover the dedicated teams and leadership that make KMUN a premier Model UN organization. 
            Each office plays a vital role in our diplomatic mission.
          </p>
          
          {/* Enhanced Search Bar */}
          <div className="max-w-md mx-auto relative animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
            <Input
              type="text"
              placeholder="Search offices, roles, or team members..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-12 py-4 text-lg border-2 border-primary/20 focus:border-primary/50 rounded-xl shadow-lg backdrop-blur-sm bg-white/80"
            />
          </div>
        </div>
      </section>

      {/* Offices Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredOffices.map((office) => (
              <Card key={office.id} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 overflow-hidden bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 animate-fade-in-up">
                <CardHeader className={`bg-gradient-to-r ${office.color} text-white relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
                  <div className="relative z-10">
                    <CardTitle className="text-2xl font-bold font-playfair flex items-center gap-3">
                      <Briefcase className="h-8 w-8" />
                      {office.name}
                    </CardTitle>
                    <CardDescription className="text-white/90 text-base">
                      {office.description}
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <Tabs defaultValue="overview" className="w-full">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="overview">Overview</TabsTrigger>
                      <TabsTrigger value="team">Team</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="overview" className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center p-4 bg-primary/5 rounded-lg">
                          <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                          <div className="text-2xl font-bold text-primary">{office.subOffices.length}</div>
                          <div className="text-sm text-muted-foreground">Team Members</div>
                        </div>
                        <div className="text-center p-4 bg-chapter-green/5 rounded-lg">
                          <Mail className="h-8 w-8 text-chapter-green mx-auto mb-2" />
                          <div className="text-2xl font-bold text-chapter-green">Active</div>
                          <div className="text-sm text-muted-foreground">Status</div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-semibold text-foreground">Key Responsibilities:</h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {office.description}
                        </p>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="team" className="space-y-4">
                      <div className="grid gap-4 max-h-96 overflow-y-auto">
                        {office.subOffices.map((member, index) => (
                          <div key={index} className="flex items-center space-x-4 p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                            <img
                              src={getProfilePicture(member.person, member.person.includes('Grace') || member.person.includes('Sarah') || member.person.includes('Diana') || member.person.includes('Faith') || member.person.includes('Rebecca') || member.person.includes('Catherine') || member.person.includes('Patricia') || member.person.includes('Mercy') || member.person.includes('Esther') || member.person.includes('Agnes') || member.person.includes('Alice') || member.person.includes('Amina') || member.person.includes('Mary') || member.person.includes('Margaret') || member.person.includes('Susan') || member.person.includes('Elizabeth') || member.person.includes('Jane') || member.person.includes('Linda') ? 'female' : 'male')}
                              alt={member.person}
                              className="w-12 h-12 rounded-full object-cover border-2 border-primary/20"
                            />
                            <div className="flex-1 min-w-0">
                              <div className="font-semibold text-foreground truncate">{member.person}</div>
                              <div className="text-sm text-primary font-medium">{member.role}</div>
                              <div className="text-xs text-muted-foreground">{member.name}</div>
                            </div>
                            <div className="flex space-x-2">
                              <a href={`mailto:${member.email}`} className="text-primary hover:text-primary-dark">
                                <Mail className="h-4 w-4" />
                              </a>
                            </div>
                          </div>
                        ))}
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredOffices.length === 0 && (
            <div className="text-center py-12">
              <div className="max-w-md mx-auto">
                <Briefcase className="h-16 w-16 text-muted-foreground mx-auto mb-4 opacity-50" />
                <p className="text-muted-foreground text-lg mb-2">No offices found</p>
                <p className="text-sm text-muted-foreground">
                  Try adjusting your search criteria or browse all offices.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-chapter-green/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="glass-card p-8">
            <h2 className="text-3xl font-bold mb-4 font-playfair">Join Our Team</h2>
            <p className="text-muted-foreground mb-6 text-lg">
              Are you passionate about diplomacy and international relations? 
              Join one of our offices and contribute to Kenya's leading Model UN organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="diplomatic">
                Apply Now
              </Button>
              <Button variant="outline-diplomatic">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Offices;