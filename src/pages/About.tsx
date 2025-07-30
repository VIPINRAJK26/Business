import Navbar from '@/components/Navbar';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, Award, Users, Truck, Shield, Recycle } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Handcrafted with Love',
      description: 'Every piece is carefully selected and crafted with passion and attention to detail.',
    },
    {
      icon: Award,
      title: 'Premium Quality',
      description: 'We source only the finest materials and work with skilled artisans worldwide.',
    },
    {
      icon: Users,
      title: 'Community Focused',
      description: 'Supporting local artists and craftspeople while building lasting relationships.',
    },
    {
      icon: Truck,
      title: 'Fast & Secure Shipping',
      description: 'Your treasures arrive safely with our premium packaging and tracking.',
    },
    {
      icon: Shield,
      title: 'Authenticity Guaranteed',
      description: 'Every collectible is verified authentic with certificates where applicable.',
    },
    {
      icon: Recycle,
      title: 'Sustainable Practices',
      description: 'Eco-friendly packaging and supporting environmentally conscious creators.',
    },
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'Founder & Curator',
      description: 'Passionate collector with 15+ years of experience in handmade crafts.',
      emoji: '👩‍🎨',
    },
    {
      name: 'Mike Chen',
      role: 'Quality Specialist',
      description: 'Expert in collectibles authentication and quality assurance.',
      emoji: '🔍',
    },
    {
      name: 'Emma Davis',
      role: 'Community Manager',
      description: 'Building connections between artists and craft enthusiasts.',
      emoji: '🤝',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-background via-muted/20 to-background">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-4xl mx-auto animate-fade-in">
              <Badge className="mb-6 bg-accent/10 text-accent border-accent/20">
                Our Story
              </Badge>
              
              <h1 className="font-playfair text-5xl lg:text-6xl font-bold text-primary mb-6">
                Crafting Stories,
                <span className="text-accent"> One Piece</span> at a Time
              </h1>
              
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Founded in 2023, CraftCorner began as a small passion project to connect 
                unique handmade crafts with people who appreciate authentic artistry. Today, 
                we're proud to be a thriving community of creators and collectors.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">2023</div>
                  <p className="text-muted-foreground">Founded</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">1,000+</div>
                  <p className="text-muted-foreground">Happy Customers</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">500+</div>
                  <p className="text-muted-foreground">Unique Products</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="font-playfair text-4xl font-bold text-primary mb-4">
                Our Values
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                These principles guide everything we do, from selecting products 
                to serving our community.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <Card 
                  key={value.title} 
                  className="border-0 shadow-soft hover-lift bg-gradient-card group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors duration-300">
                      <value.icon className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="font-playfair font-semibold text-xl mb-3 text-primary">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        {/* <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="font-playfair text-4xl font-bold text-primary mb-4">
                Meet Our Team
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The passionate people behind CraftCorner, dedicated to bringing you 
                the finest handmade treasures.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {team.map((member, index) => (
                <Card 
                  key={member.name} 
                  className="border-0 shadow-soft hover-lift bg-card text-center"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="text-6xl mb-4">{member.emoji}</div>
                    <h3 className="font-playfair font-semibold text-xl mb-2 text-primary">
                      {member.name}
                    </h3>
                    <p className="text-accent font-medium mb-3">{member.role}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {member.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section> */}

        {/* Mission Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-playfair text-4xl font-bold text-primary mb-8">
                Our Mission
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                To create a marketplace where authentic craftsmanship meets passionate collectors, 
                fostering a community that values quality, creativity, and the stories behind 
                every handmade piece.
              </p>
              <div className="bg-gradient-card p-8 rounded-2xl shadow-soft">
                <p className="text-lg text-foreground italic">
                  "Every craft tells a story, every collector preserves a memory, 
                  and every purchase supports an artist's dream."
                </p>
                <p className="text-accent font-medium mt-4">- The CraftCorner Team</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;