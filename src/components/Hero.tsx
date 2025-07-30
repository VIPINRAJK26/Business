import { Button } from '@/components/ui/button';
import { ArrowRight, Star, Users, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with subtle pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/20 to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--accent)_/_0.1),transparent_50%)]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left animate-fade-in pt-24">
            <div className="inline-flex items-center space-x-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Star className="w-4 h-4" />
              <span>Handcrafted with Love</span>
            </div>
            
            <h1 className="font-playfair text-4xl lg:text-7xl font-bold text-primary mb-6 leading-tight">
              Unique 
              <span className="text-accent"> Crafts</span>
              <br />
              For Every Home
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0">
              Discover handmade treasures, collectible Hot Wheels, and unique crafts 
              that bring personality to your space. Each piece tells a story.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button asChild size="lg" className="hover-lift hover-glow">
                <Link to="/products">
                  Explore Collection
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              
              <Button asChild variant="outline" size="lg" className="hover-lift">
                <Link to="/about">Learn Our Story</Link>
              </Button>
            </div>
            
            {/* Stats */}
            <div className="flex items-center justify-center lg:justify-start space-x-8 mt-12">
              <div className="text-center">
                <div className="flex items-center justify-center space-x-1 text-accent mb-1">
                  <Star className="w-4 h-4 fill-current" />
                  <span className="font-bold">4.9</span>
                </div>
                <p className="text-sm text-muted-foreground">Rating</p>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center space-x-1 text-primary mb-1">
                  <Users className="w-4 h-4" />
                  <span className="font-bold">2K+</span>
                </div>
                <p className="text-sm text-muted-foreground">Happy Customers</p>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center space-x-1 text-primary mb-1">
                  <Award className="w-4 h-4" />
                  <span className="font-bold">500+</span>
                </div>
                <p className="text-sm text-muted-foreground">Unique Items</p>
              </div>
            </div>
          </div>
          
          {/* Visual Element */}
          <div className="relative animate-slide-up">
            <div className="relative w-full max-w-lg mx-auto">
              {/* Main Circle */}
              <div className="w-96 h-96 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full blur-3xl opacity-60 animate-float" />
              
              {/* Floating Cards */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="grid grid-cols-2 gap-4 w-96">
                  {/* <div className="bg-card p-4 rounded-2xl shadow-soft hover-lift border border-border/50">
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-3">
                      <span className="text-2xl">🏺</span>
                    </div>
                    <h3 className="font-semibold text-sm">Handmade Pottery</h3>
                    <p className="text-xs text-muted-foreground">Unique ceramic pieces</p>
                  </div> */}
                  
                  <div className="bg-card p-4 rounded-2xl shadow-soft hover-lift border border-border/50 mt-8">
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-3">
                      <span className="text-2xl">🏎️</span>
                    </div>
                    <h3 className="font-semibold text-sm">Hot Wheels</h3>
                    <p className="text-xs text-muted-foreground">Collectible cars</p>
                  </div>
                  
                  <div className="relative top-28  bg-card p-4 rounded-2xl shadow-soft hover-lift border border-border/50 -mt-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-3">
                      <span className="text-2xl">🎨</span>
                    </div>
                    <h3 className="font-semibold text-sm">Resin Art & Crafts</h3>
                    <p className="text-xs text-muted-foreground">Custom artwork</p>
                  </div>
                  
                  <div className="bg-card p-4 rounded-2xl shadow-soft hover-lift border border-border/50 mt-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-3">
                      <span className="text-2xl">🧸</span>
                    </div>
                    <h3 className="font-semibold text-sm">Collectibles</h3>
                    <p className="text-xs text-muted-foreground">Rare finds</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;