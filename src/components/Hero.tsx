import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Users, Award } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
  {
    src: "/case.jpg",
    title: "Cases",
    subtitle: "Smart Phones",
  },
];

const Hero = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0); // 0: none, 1: right, -1: left

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  const navigate = (newDirection: number) => {
    setDirection(newDirection);
    setIndex((prev) => (prev + newDirection + images.length) % images.length);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 0.9,
    }),
  };


  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/20 to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--accent)_/_0.1),transparent_50%)]" />

      <div className="container mx-auto px-4 pt-24 pb-10 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center justify-center">
          {/* Left: Text Content (unchanged) */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-xs font-medium mb-6 mx-auto lg:mx-0">
              <Star className="w-4 h-4" />
              <span>Handcrafted with Love</span>
            </div>

            <h1 className="font-playfair text-2xl lg:text-7xl font-bold text-primary mb-6 leading-tight">
              Unique <span className="text-accent">Crafts</span>
              <br />
              For Every Home
            </h1>

            <p className="text-sm px-5 md:px-0 text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0">
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
          <div className="relative h-[500px] w-full overflow-hidden rounded-3xl">
            {/* Floating gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-primary/10 to-accent/20 rounded-3xl" />

            {/* Animated carousel */}
            <AnimatePresence custom={direction} initial={false}>
              <motion.div
                key={index}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="absolute inset-0 flex items-center justify-center p-2"
              >
                <div className="relative h-full w-full max-w-4xl">
                  {/* Image with creative frame */}
                  <motion.div
                    className="h-full w-full p-[1px] overflow-hidden rounded-2xl shadow-2xl"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="relative h-full w-full overflow-hidden rounded-2xl">
                      <img
                        src={images[index].src}
                        alt={images[index].title}
                        className="h-full w-full object-cover rounded-2xl"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-2xl" />
                    </div>
                  </motion.div>

                  {/* Text overlay */}
                  <div className="absolute bottom-8 left-8 right-8 text-left">
                    <motion.h3
                      className="text-3xl font-bold text-white drop-shadow-lg"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      {images[index].title}
                    </motion.h3>
                    <motion.p
                      className="text-lg text-white/90 mt-2"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.4 }}
                    >
                      {images[index].subtitle}
                    </motion.p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation arrows */}
            <button
              onClick={() => navigate(-1)}
              className="absolute left-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition-all hover:bg-white/30"
              aria-label="Previous"
            >
              <ChevronLeft className="h-6 w-6 text-white" />
            </button>
            <button
              onClick={() => navigate(1)}
              className="absolute right-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition-all hover:bg-white/30"
              aria-label="Next"
            >
              <ChevronRight className="h-6 w-6 text-white" />
            </button>

            {/* Creative indicators */}
            <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 gap-2">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > index ? 1 : -1);
                    setIndex(i);
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === index ? "w-8 bg-white" : "w-4 bg-white/40"
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
