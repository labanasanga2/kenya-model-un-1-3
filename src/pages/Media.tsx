import { useState } from 'react';
import { Camera, Video, FileText, ExternalLink, Download, Search, Images, FolderOpen } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Media = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const mediaCategories = [
    {
      id: 'photos',
      title: 'Photo Gallery',
      description: 'High-quality photos from KMUN events, conferences, and chapter activities',
      icon: Images,
      color: 'from-blue-600 to-blue-800',
      items: [
        {
          name: 'KMUN 2024 Conference Highlights',
          type: 'Google Photos Album',
          link: 'https://photos.google.com/share/kmun-2024-conference',
          description: 'Official photos from the 24th KMUN Annual Conference',
          count: '500+ photos',
          date: '2024'
        },
        {
          name: 'Chapter Activities Collection',
          type: 'Google Photos Album',
          link: 'https://photos.google.com/share/kmun-chapters',
          description: 'Photos from various chapter events and activities',
          count: '1000+ photos',
          date: '2024'
        },
        {
          name: 'Leadership Training Sessions',
          type: 'Google Photos Album',
          link: 'https://photos.google.com/share/kmun-leadership',
          description: 'Training sessions and leadership development programs',
          count: '200+ photos',
          date: '2024'
        }
      ]
    },
    {
      id: 'videos',
      title: 'Video Archive',
      description: 'Conference sessions, training videos, and promotional content',
      icon: Video,
      color: 'from-red-600 to-red-800',
      items: [
        {
          name: 'KMUN 2024 Opening Ceremony',
          type: 'Google Drive Video',
          link: 'https://drive.google.com/drive/folders/kmun-videos-2024',
          description: 'Complete recording of the 24th session opening ceremony',
          count: '2 hours',
          date: '2024'
        },
        {
          name: 'Committee Session Recordings',
          type: 'Google Drive Folder',
          link: 'https://drive.google.com/drive/folders/kmun-committee-sessions',
          description: 'Recorded committee sessions for educational purposes',
          count: '50+ videos',
          date: '2024'
        },
        {
          name: 'Training Workshops',
          type: 'Google Drive Folder',
          link: 'https://drive.google.com/drive/folders/kmun-training',
          description: 'MUN procedure training and skill development videos',
          count: '30+ videos',
          date: '2024'
        }
      ]
    },
    {
      id: 'documents',
      title: 'Documents & Resources',
      description: 'Official documents, reports, guides, and educational materials',
      icon: FileText,
      color: 'from-green-600 to-green-800',
      items: [
        {
          name: 'KMUN 2024 Study Guides',
          type: 'Google Drive Folder',
          link: 'https://drive.google.com/drive/folders/kmun-study-guides',
          description: 'Committee-specific study guides and background materials',
          count: '25+ documents',
          date: '2024'
        },
        {
          name: 'Conference Reports',
          type: 'Google Drive Folder',
          link: 'https://drive.google.com/drive/folders/kmun-reports',
          description: 'Annual conference reports and statistical summaries',
          count: '10+ reports',
          date: '2024'
        },
        {
          name: 'Rules and Procedures',
          type: 'Google Drive Folder',
          link: 'https://drive.google.com/drive/folders/kmun-procedures',
          description: 'Official KMUN rules, procedures, and handbooks',
          count: '15+ documents',
          date: '2024'
        }
      ]
    },
    {
      id: 'graphics',
      title: 'Graphics & Design',
      description: 'Logos, posters, banners, and promotional materials',
      icon: Camera,
      color: 'from-purple-600 to-purple-800',
      items: [
        {
          name: 'KMUN Brand Assets',
          type: 'Google Drive Folder',
          link: 'https://drive.google.com/drive/folders/kmun-brand-assets',
          description: 'Official logos, brand guidelines, and design templates',
          count: '50+ assets',
          date: '2024'
        },
        {
          name: 'Event Posters',
          type: 'Google Drive Folder',
          link: 'https://drive.google.com/drive/folders/kmun-posters',
          description: 'Conference posters, promotional materials, and announcements',
          count: '100+ designs',
          date: '2024'
        },
        {
          name: 'Social Media Graphics',
          type: 'Google Drive Folder',
          link: 'https://drive.google.com/drive/folders/kmun-social-media',
          description: 'Graphics for social media campaigns and digital promotion',
          count: '300+ graphics',
          date: '2024'
        }
      ]
    }
  ];

  const filteredCategories = mediaCategories.map(category => ({
    ...category,
    items: category.items.filter(item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.items.length > 0 || searchTerm === '');

  return (
    <div className="min-h-screen">
      {/* Hero Section with Background Effects */}
      <section className="py-20 bg-gradient-to-br from-primary/20 via-secondary/10 to-chapter-green/20 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-72 h-72 bg-gradient-to-br from-chapter-green/20 to-conference-blue/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-secondary/10 to-primary/10 rounded-full blur-2xl animate-pulse"></div>
          
          {/* Floating media icons */}
          <div className="absolute top-32 right-32 w-16 h-16 border-2 border-secondary/30 rotate-45 animate-bounce-in" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-32 left-32 w-12 h-12 bg-primary/20 rounded-full animate-bounce-in" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-3/4 right-1/4 w-8 h-8 bg-chapter-green/30 rotate-12 animate-wiggle" style={{ animationDelay: '4s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 font-playfair animate-fade-in-up">
            Media <span className="gradient-text">Center</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Access our comprehensive collection of photos, videos, documents, and resources from KMUN events and activities.
            All materials are hosted on Google Drive for easy access and sharing.
          </p>
          
          {/* Enhanced Search Bar */}
          <div className="max-w-md mx-auto relative animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
            <Input
              type="text"
              placeholder="Search media, documents, or resources..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-12 py-4 text-lg border-2 border-primary/20 focus:border-primary/50 rounded-xl shadow-lg backdrop-blur-sm bg-white/80"
            />
          </div>

          {/* Quick access badges */}
          <div className="flex flex-wrap justify-center gap-4 mt-8 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <Badge variant="outline" className="px-4 py-2 text-sm border-2 border-primary bg-primary/10 text-primary">
              <Images className="h-4 w-4 mr-2" />
              Google Photos
            </Badge>
            <Badge variant="outline" className="px-4 py-2 text-sm border-2 border-chapter-green bg-chapter-green/10 text-chapter-green">
              <FolderOpen className="h-4 w-4 mr-2" />
              Google Drive
            </Badge>
          </div>
        </div>
      </section>

      {/* Media Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredCategories.map((category, categoryIndex) => (
              <Card key={category.id} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 overflow-hidden bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 animate-fade-in-up" style={{ animationDelay: `${categoryIndex * 0.1}s` }}>
                <CardHeader className={`bg-gradient-to-r ${category.color} text-white relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
                  <div className="relative z-10">
                    <CardTitle className="text-2xl font-bold font-playfair flex items-center gap-3">
                      <category.icon className="h-8 w-8" />
                      {category.title}
                    </CardTitle>
                    <CardDescription className="text-white/90 text-base">
                      {category.description}
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="border border-border rounded-lg p-4 hover:bg-muted/30 transition-colors">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h4 className="font-semibold text-foreground mb-1">{item.name}</h4>
                          <p className="text-sm text-muted-foreground mb-2">{item.description}</p>
                          <div className="flex items-center gap-4 text-xs text-muted-foreground">
                            <span>{item.type}</span>
                            <span>{item.count}</span>
                            <span>{item.date}</span>
                          </div>
                        </div>
                        <div className="flex flex-col gap-2 ml-4">
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Button variant="diplomatic" size="sm">
                              <ExternalLink className="h-4 w-4 mr-2" />
                              Open
                            </Button>
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredCategories.length === 0 && (
            <div className="text-center py-12">
              <div className="max-w-md mx-auto">
                <Camera className="h-16 w-16 text-muted-foreground mx-auto mb-4 opacity-50" />
                <p className="text-muted-foreground text-lg mb-2">No media found</p>
                <p className="text-sm text-muted-foreground">
                  Try adjusting your search criteria or browse all categories.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-muted/30 to-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4 font-playfair">
              Media <span className="text-primary">Archives</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our comprehensive media collection documenting KMUN's journey and achievements
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '2000+', label: 'Photos Archived', color: 'text-primary' },
              { value: '100+', label: 'Video Hours', color: 'text-chapter-green' },
              { value: '500+', label: 'Documents', color: 'text-conference-blue' },
              { value: '50+', label: 'Design Assets', color: 'text-secondary' }
            ].map((stat, index) => (
              <div key={index} className="space-y-2 animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className={`text-4xl font-bold ${stat.color}`}>{stat.value}</div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Access Guidelines */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-chapter-green/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="glass-card p-8">
            <h2 className="text-3xl font-bold mb-4 font-playfair">Media Usage Guidelines</h2>
            <p className="text-muted-foreground mb-6 text-lg">
              All media content is available for educational and promotional purposes. 
              Please contact our communications team for commercial usage permissions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:media@kmun.org">
                <Button variant="diplomatic" size="lg">Contact Media Team</Button>
              </a>
              <a href="/contact">
                <Button variant="outline-diplomatic" size="lg">Usage Guidelines</Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Media;