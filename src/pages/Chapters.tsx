import { useState } from 'react';
import { Search, MapPin, Users, Mail } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const Chapters = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const chapters = [
    {
      id: 1,
      university: 'University of Nairobi',
      location: 'Nairobi',
      lead: 'Sarah Wanjiku',
      email: 'uon@kmun.org',
      members: 120,
      established: 2002,
      description: 'The founding chapter of KMUN, known for excellence in General Assembly simulations.'
    },
    {
      id: 2,
      university: 'Kenyatta University',
      location: 'Nairobi',
      lead: 'James Mwangi',
      email: 'ku@kmun.org',
      members: 95,
      established: 2003,
      description: 'Specializes in Security Council debates and crisis simulations.'
    },
    {
      id: 3,
      university: 'Strathmore University',
      location: 'Nairobi',
      lead: 'Amina Hassan',
      email: 'strathmore@kmun.org',
      members: 80,
      established: 2005,
      description: 'Renowned for their International Court of Justice expertise.'
    },
    {
      id: 4,
      university: 'USIU-Africa',
      location: 'Nairobi',
      lead: 'David Kiprotich',
      email: 'usiu@kmun.org',
      members: 75,
      established: 2006,
      description: 'Focus on international law and human rights advocacy.'
    },
    {
      id: 5,
      university: 'Moi University',
      location: 'Eldoret',
      lead: 'Grace Cheptoo',
      email: 'moi@kmun.org',
      members: 65,
      established: 2008,
      description: 'Leading chapter in Western Kenya with strong community outreach.'
    },
    {
      id: 6,
      university: 'Egerton University',
      location: 'Nakuru',
      lead: 'Peter Kamau',
      email: 'egerton@kmun.org',
      members: 55,
      established: 2010,
      description: 'Environmental and agricultural policy specialization.'
    },
    {
      id: 7,
      university: 'Maseno University',
      location: 'Kisumu',
      lead: 'Mary Atieno',
      email: 'maseno@kmun.org',
      members: 50,
      established: 2012,
      description: 'Lake region chapter with focus on sustainable development.'
    },
    {
      id: 8,
      university: 'Technical University of Kenya',
      location: 'Nairobi',
      lead: 'John Mutua',
      email: 'tuk@kmun.org',
      members: 45,
      established: 2015,
      description: 'Technology and innovation in diplomatic solutions.'
    }
  ];

  const filteredChapters = chapters.filter(chapter =>
    chapter.university.toLowerCase().includes(searchTerm.toLowerCase()) ||
    chapter.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
    chapter.lead.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-foreground mb-6 font-playfair">
            KMUN <span className="text-primary">Chapters</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Discover our network of university chapters across Kenya and East Africa. 
            Each chapter brings unique perspectives and expertise to our diplomatic community.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
            <Input
              type="text"
              placeholder="Search universities, locations, or chapter leads..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 py-3 text-lg"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">30+</div>
              <div className="text-muted-foreground">Active Chapters</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-secondary">1000+</div>
              <div className="text-muted-foreground">Total Members</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-chapter-green">8</div>
              <div className="text-muted-foreground">Counties Represented</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-conference-blue">23</div>
              <div className="text-muted-foreground">Years of Growth</div>
            </div>
          </div>
        </div>
      </section>

      {/* Chapters Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredChapters.map((chapter) => (
              <Card key={chapter.id} className="chapter-card">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <img 
                      src="/placeholder.svg" 
                      alt={`${chapter.university} Logo`}
                      className="w-12 h-12 rounded-lg object-cover border-2 border-primary/20"
                    />
                    <div>
                      <CardTitle className="text-xl font-bold text-primary">
                        {chapter.university}
                      </CardTitle>
                      <CardDescription className="flex items-center text-muted-foreground">
                        <MapPin className="h-4 w-4 mr-1" />
                        {chapter.location}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    {chapter.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Users className="h-4 w-4 mr-1" />
                        {chapter.members} members
                      </div>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Est. {chapter.established}
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <div className="text-sm font-medium text-foreground mb-1">Chapter Lead</div>
                    <div className="text-sm text-muted-foreground">{chapter.lead}</div>
                    <div className="flex items-center mt-2">
                      <Mail className="h-4 w-4 mr-2 text-muted-foreground" />
                      <a 
                        href={`mailto:${chapter.email}`}
                        className="text-sm text-primary hover:underline"
                      >
                        {chapter.email}
                      </a>
                    </div>
                  </div>

                  <Button className="w-full btn-outline-diplomatic">
                    Join Chapter
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredChapters.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                No chapters found matching your search criteria.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass-card p-8">
            <h2 className="text-3xl font-bold mb-4 font-playfair">Start a New Chapter</h2>
            <p className="text-muted-foreground mb-6 text-lg">
              Is your university not listed? Help us expand KMUN's reach by establishing 
              a new chapter at your institution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-diplomatic">
                Start a Chapter
              </Button>
              <Button variant="outline" className="btn-outline-diplomatic">
                Chapter Resources
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Chapters;