import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, MapPin, Users, Mail, Calendar, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
// Supabase client will be imported once properly configured

const ChapterDetail = () => {
  const { chapterSlug } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();

  // Mock chapter data - in real app, this would be fetched from database
  const chapters = [
    {
      id: 1,
      slug: 'university-of-nairobi',
      university: 'University of Nairobi',
      location: 'Nairobi, Kenya',
      lead: 'Sarah Mwangi',
      members: 45,
      established: '2020',
      email: 'unon@kmun.org',
      description: 'The flagship chapter of KMUN, representing the premier university in Kenya. Our members are passionate about international relations and diplomacy.',
      bannerImage: '/images/chapters/university-of-nairobi-banner.jpg',
      logo: '/images/chapters/university-of-nairobi-logo.png',
      gallery: [
        '/images/chapters/university-of-nairobi-meeting.jpg',
        '/images/chapters/university-of-nairobi-event.jpg',
        '/images/chapters/university-of-nairobi-group.jpg',
        '/images/chapters/university-of-nairobi-debate.jpg'
      ],
      achievements: [
        'Best Delegation Award 2023',
        'Outstanding Research Paper 2022',
        'Most Active Chapter 2021-2023'
      ],
      upcomingEvents: [
        { date: '2024-09-15', event: 'Chapter Meeting', location: 'Main Campus' },
        { date: '2024-10-01', event: 'Mock UN Session', location: 'Assembly Hall' }
      ]
    },
    {
      id: 2,
      slug: 'kenyatta-university',
      university: 'Kenyatta University',
      location: 'Nairobi, Kenya',
      lead: 'James Kiprotich',
      members: 32,
      established: '2021',
      email: 'ku@kmun.org',
      description: 'A vibrant chapter focused on youth leadership and international cooperation.',
      bannerImage: '/images/chapters/kenyatta-university-banner.jpg',
      logo: '/images/chapters/kenyatta-university-logo.png',
      gallery: [
        '/images/chapters/kenyatta-university-meeting.jpg',
        '/images/chapters/kenyatta-university-orientation.jpg',
        '/images/chapters/kenyatta-university-team.jpg'
      ],
      achievements: [
        'Best New Chapter 2021',
        'Community Service Award 2022'
      ],
      upcomingEvents: [
        { date: '2024-09-20', event: 'Orientation Session', location: 'Student Center' }
      ]
    }
  ];

  const chapter = chapters.find(c => c.slug === chapterSlug);

  if (!chapter) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Chapter Not Found</h1>
          <p className="text-muted-foreground mb-4">The chapter you're looking for doesn't exist.</p>
          <Button onClick={() => navigate('/chapters')}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Chapters
          </Button>
        </div>
      </div>
    );
  }

  const handleJoinChapter = async () => {
    try {
      // Simulate API call - replace with actual Supabase function call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Application Sent!",
        description: `Your request to join ${chapter.university} has been sent. You'll hear back soon!`,
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send application. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Button variant="ghost" onClick={() => navigate('/chapters')}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Chapters
          </Button>
        </div>

        {/* Hero Section */}
        <Card className="mb-8 overflow-hidden">
          <div className="h-64 bg-gradient-to-r from-primary/20 to-primary-foreground/10 flex items-center justify-center relative">
            <div className="text-center">
              <div className="flex items-center justify-center gap-4 mb-4">
                <img 
                  src={chapter.logo}
                  alt={`${chapter.university} Logo`}
                  className="w-16 h-16 rounded-full object-cover border-4 border-primary/30 shadow-lg"
                  onError={(e) => {
                    e.currentTarget.src = '/placeholder.svg';
                  }}
                />
                <h1 className="text-4xl font-bold">{chapter.university}</h1>
              </div>
              <p className="text-xl text-muted-foreground flex items-center justify-center gap-2">
                <MapPin className="w-5 h-5" />
                {chapter.location}
              </p>
            </div>
          </div>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* About */}
            <Card>
              <CardHeader>
                <CardTitle>About This Chapter</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {chapter.description}
                </p>
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card>
              <CardHeader>
                <CardTitle>Achievements</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-2">
                  {chapter.achievements.map((achievement, index) => (
                    <Badge key={index} variant="secondary" className="justify-start">
                      {achievement}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Chapter Photos */}
            <Card>
              <CardHeader>
                <CardTitle>Chapter Gallery</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {chapter.gallery.map((photo, index) => (
                    <div key={index} className="relative group overflow-hidden rounded-lg">
                      <img 
                        src={photo}
                        alt={`${chapter.university} photo ${index + 1}`}
                        className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-110"
                        onError={(e) => {
                          e.currentTarget.src = '/placeholder.svg';
                        }}
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="text-white text-sm font-medium">View Photo</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Upcoming Events */}
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Events</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {chapter.upcomingEvents.map((event, index) => (
                    <div key={index} className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg">
                      <Calendar className="w-5 h-5 text-primary" />
                      <div className="flex-1">
                        <h4 className="font-semibold">{event.event}</h4>
                        <p className="text-sm text-muted-foreground">{event.location}</p>
                      </div>
                      <Badge variant="outline">{event.date}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Stats */}
            <Card>
              <CardHeader>
                <CardTitle>Chapter Info</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-semibold">{chapter.members} Members</p>
                    <p className="text-sm text-muted-foreground">Active participants</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-semibold">Est. {chapter.established}</p>
                    <p className="text-sm text-muted-foreground">Year established</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-semibold">{chapter.lead}</p>
                    <p className="text-sm text-muted-foreground">Chapter Lead</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Join Chapter */}
            <Card>
              <CardHeader>
                <CardTitle>Join This Chapter</CardTitle>
                <CardDescription>
                  Interested in joining {chapter.university}? Send them a message!
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button 
                  onClick={handleJoinChapter}
                  className="w-full"
                  size="lg"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Register for Chapter
                </Button>
                <Button variant="outline" className="w-full" asChild>
                  <a href={`mailto:${chapter.email}`}>
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Contact Directly
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChapterDetail;