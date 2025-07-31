import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Users, Award } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const images = [
  {
    src: "/collectibles.jpg",
    title: "Hot Wheels",
    subtitle: "Collectible cars",
  },
  {
    src: "/hand-craft.jpg",
    title: "Resin Art & Crafts",
    subtitle: "Custom artwork",
  },
  {
    src: "/collectibles1.jpg",
    title: "Collectibles",
    subtitle: "Rare finds",
  },
];

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/20 to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--accent)_/_0.1),transparent_50%)]" />

      <div className="container mx-auto px-6 pt-24 pb-10 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center justify-center">
          {/* Left: Text Content (unchanged) */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6 mx-auto lg:mx-0">
              <Star className="w-4 h-4" />
              <span>Handcrafted with Love</span>
            </div>

            <h1 className="font-playfair text-4xl lg:text-7xl font-bold text-primary mb-6 leading-tight">
              Unique <span className="text-accent">Crafts</span>
              <br />
              For Every Home
            </h1>

            <p className="text-lg px-5 md:px-0 text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0">
              Discover handmade treasures, collectible Hot Wheels, and unique
              crafts that bring personality to your space. Each piece tells a
              story.
            </p>

            <div className="flex flex-col px-10 md:px-0 sm:flex-row gap-4 justify-center lg:justify-start">
              <Button asChild size="lg" className="hover-lift hover-glow">
                <Link to="/products">
                  Explore Collection
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="hover-lift"
              >
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

          {/* Right: Enhanced Carousel */}
          <div className="relative h-[400px] sm:h-[500px] flex items-center justify-center px-4">
            {/* Floating background element - smaller on mobile */}
            <div className="absolute w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] bg-gradient-to-br from-accent/20 to-primary/20 rounded-full blur-xl sm:blur-3xl opacity-60 animate-float" />

            {/* Carousel container - full width on mobile */}
            <div className="relative w-full h-[300px] sm:h-[400px] perspective-1000 mx-2 sm:mx-0">
              {images.map((item, i) => {
                const position = (i - index + images.length) % images.length;
                let transform = "";
                let zIndex = 0;
                let opacity = 0;
                let scale = 1;

                if (position === 0) {
                  // Current card - centered on mobile
                  transform = "rotateY(0deg) translateZ(0)";
                  zIndex = 10;
                  opacity = 1;
                  scale = 1;
                } else if (position === 1) {
                  // Next card - simplified on mobile
                  transform =
                    window.innerWidth < 640
                      ? "translateX(40px) scale(0.9)"
                      : "rotateY(25deg) translateZ(-100px) translateX(80px)";
                  zIndex = 5;
                  opacity = window.innerWidth < 640 ? 0.8 : 0.7;
                  scale = 0.9;
                } else {
                  // Previous card - simplified on mobile
                  transform =
                    window.innerWidth < 640
                      ? "translateX(-40px) scale(0.9)"
                      : "rotateY(-25deg) translateZ(-100px) translateX(-80px)";
                  zIndex = 5;
                  opacity = window.innerWidth < 640 ? 0.8 : 0.7;
                  scale = 0.9;
                }

                return (
                  <div
                    key={i}
                    className={`absolute top-0 left-0 w-full h-full transition-all duration-500 ease-[cubic-bezier(0.33,1,0.68,1)]`}
                    style={{
                      transform,
                      zIndex,
                      opacity,
                      scale,
                    }}
                  >
                    <div className="relative w-full h-full p-2 sm:p-0">
                      {/* Skewed image container - less skew on mobile */}
                      <div className="absolute inset-0 overflow-hidden transform -skew-x-1 -skew-y-1 sm:-skew-x-3 sm:-skew-y-2 rotate-1 sm:rotate-2 rounded-lg sm:rounded-xl shadow-lg sm:shadow-2xl border border-white/20 sm:border-2">
                        <img
                          src={item.src}
                          alt={item.title}
                          className="w-full h-full object-cover transform skew-x-1 skew-y-1 sm:skew-x-3 sm:skew-y-2 -rotate-1 sm:-rotate-2 scale-105 sm:scale-110"
                        />
                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      </div>

                      {/* Title overlay - larger text on mobile */}
                      <div className="absolute bottom-4 sm:bottom-8 left-0 right-0 text-center px-2">
                        <h3 className="text-lg sm:text-xl font-bold text-white drop-shadow-md">
                          {item.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-white/80">
                          {item.subtitle}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Carousel indicators - larger and more spaced on mobile */}
            <div className="absolute bottom-2 sm:bottom-0 left-0 right-0 flex justify-center gap-3 sm:gap-2 mt-4">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`w-4 h-4 sm:w-3 sm:h-3 rounded-full transition-all ${
                    i === index ? "bg-accent sm:w-6" : "bg-muted-foreground/30"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
