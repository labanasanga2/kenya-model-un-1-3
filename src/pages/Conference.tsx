import { Calendar, MapPin, Clock, Users, Download, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/images/hero/hero-unon.jpg';

const Conference = () => {
  const schedule = [
    {
      day: 'Day 1 - March 15, 2026',
      events: [
        { time: '8:00 AM', event: 'Registration & Check-in', location: 'UNON Lobby' },
        { time: '9:30 AM', event: 'Opening Ceremony', location: 'Assembly Hall' },
        { time: '11:00 AM', event: 'Committee Session I', location: 'Various Rooms' },
        { time: '1:00 PM', event: 'Lunch Break', location: 'UNON Cafeteria' },
        { time: '2:30 PM', event: 'Committee Session II', location: 'Various Rooms' },
        { time: '5:00 PM', event: 'Cultural Evening', location: 'Main Courtyard' }
      ]
    },
    {
      day: 'Day 2 - March 16, 2026',
      events: [
        { time: '9:00 AM', event: 'Committee Session III', location: 'Various Rooms' },
        { time: '11:30 AM', event: 'Crisis Committee Updates', location: 'Assembly Hall' },
        { time: '1:00 PM', event: 'Lunch Break', location: 'UNON Cafeteria' },
        { time: '2:30 PM', event: 'Committee Session IV', location: 'Various Rooms' },
        { time: '4:30 PM', event: 'Delegate Social', location: 'Garden Area' },
        { time: '7:00 PM', event: 'Gala Dinner', location: 'Grand Ballroom' }
      ]
    },
    {
      day: 'Day 3 - March 17, 2026',
      events: [
        { time: '9:00 AM', event: 'Final Committee Sessions', location: 'Various Rooms' },
        { time: '11:00 AM', event: 'Resolutions Presentation', location: 'Assembly Hall' },
        { time: '1:00 PM', event: 'Lunch Break', location: 'UNON Cafeteria' },
        { time: '2:30 PM', event: 'Awards Ceremony', location: 'Assembly Hall' },
        { time: '4:00 PM', event: 'Closing Ceremony', location: 'Assembly Hall' },
        { time: '5:00 PM', event: 'Farewell Reception', location: 'Main Courtyard' }
      ]
    }
  ];

  const venues = [
    {
      name: 'Assembly Hall',
      description: 'Main conference venue for plenary sessions',
      capacity: '500 delegates',
      features: ['Simultaneous interpretation', 'Live streaming', 'Professional lighting']
    },
    {
      name: 'Committee Rooms',
      description: 'Specialized rooms for committee sessions',
      capacity: '50-100 delegates each',
      features: ['Interactive whiteboards', 'Audio-visual equipment', 'Climate control']
    },
    {
      name: 'UNON Cafeteria',
      description: 'International cuisine and networking space',
      capacity: '300 people',
      features: ['Halal options', 'Vegetarian menu', 'Local Kenyan dishes']
    }
  ];

  const downloads = [
    { title: 'Conference Schedule', description: 'Complete 3-day agenda', type: 'PDF' },
    { title: 'Venue Map', description: 'UNON campus layout', type: 'PDF' },
    { title: 'Delegate Handbook', description: 'Rules and procedures', type: 'PDF' },
    { title: 'Travel Guide', description: 'Nairobi accommodation and transport', type: 'PDF' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="UNON Conference"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/80"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl font-bold mb-6 font-playfair">
            KMUN Annual Conference 2026
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join us at the United Nations Office at Nairobi for three days of 
            diplomatic excellence, networking, and global problem-solving.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="glass-card p-6 text-center">
              <Calendar className="h-8 w-8 text-secondary mx-auto mb-3" />
              <div className="font-semibold">March 15-17, 2026</div>
              <div className="text-sm text-white/80">3 Days</div>
            </div>
            <div className="glass-card p-6 text-center">
              <MapPin className="h-8 w-8 text-secondary mx-auto mb-3" />
              <div className="font-semibold">UNON Gigiri</div>
              <div className="text-sm text-white/80">Nairobi, Kenya</div>
            </div>
            <div className="glass-card p-6 text-center">
              <Users className="h-8 w-8 text-secondary mx-auto mb-3" />
              <div className="font-semibold">500+ Delegates</div>
              <div className="text-sm text-white/80">30+ Universities</div>
            </div>
          </div>
          
          <div className="mt-8">
            <Link to="/registration">
              <Button size="lg" variant="secondary-diplomatic" className="mr-4">
                Register Now
              </Button>
            </Link>
            <Button size="lg" variant="outline-diplomatic" className="border-white text-white hover:bg-white hover:text-primary">
              Download Brochure
            </Button>
          </div>
        </div>
      </section>

      {/* Conference Schedule */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4 font-playfair">
              Conference Schedule
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Three days of intensive committee sessions, networking, and diplomatic learning
            </p>
          </div>

          <div className="space-y-12">
            {schedule.map((day, index) => (
              <div key={index}>
                <h3 className="text-2xl font-bold text-primary mb-6 font-playfair">
                  {day.day}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {day.events.map((event, idx) => (
                    <Card key={idx} className="committee-card">
                      <CardHeader className="pb-3">
                        <div className="flex items-center space-x-2">
                          <Clock className="h-4 w-4 text-primary" />
                          <span className="font-semibold text-primary">{event.time}</span>
                        </div>
                        <CardTitle className="text-lg">{event.event}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <MapPin className="h-4 w-4 mr-1" />
                          {event.location}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Venue Information */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4 font-playfair">
              Conference Venues
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              World-class facilities at the United Nations Office at Nairobi
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {venues.map((venue, index) => (
              <Card key={index} className="committee-card">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-primary">
                    {venue.name}
                  </CardTitle>
                  <CardDescription>
                    {venue.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm font-medium">{venue.capacity}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Features:</h4>
                    <ul className="space-y-1">
                      {venue.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-center">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Map Section */}
          <div className="mt-16">
            <Card className="committee-card">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-primary font-playfair">
                  UNON Campus Map
                </CardTitle>
                <CardDescription>
                  Navigate the United Nations Office at Nairobi campus
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground">Interactive campus map coming soon</p>
                    <Button variant="outline-diplomatic" className="mt-4">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View on Google Maps
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Downloads Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4 font-playfair">
              Conference Resources
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Download essential documents and preparation materials
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {downloads.map((download, index) => (
              <Card key={index} className="committee-card text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-light rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Download className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">{download.title}</CardTitle>
                  <CardDescription>{download.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline-diplomatic" className="w-full">
                    Download {download.type}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Registration CTA */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass-card p-8">
            <h2 className="text-3xl font-bold mb-4 font-playfair">Ready to Join KMUN 2026?</h2>
            <p className="text-muted-foreground mb-6 text-lg">
              Secure your spot at Kenya's premier Model UN conference. 
              Early bird registration ends December 31, 2025.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/registration">
                <Button size="lg" variant="diplomatic">
                  Register as Delegate
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline-diplomatic">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Conference;