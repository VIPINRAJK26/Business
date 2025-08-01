import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Star, Truck, Shield, Award, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Index = () => {
  const featuredProducts = [
    {
      id: "1",
      name: "Vintage Hot Wheels  ",
      price: 89.99,
      originalPrice: 120.0,
      image: "/car.jpg",
      category: "Hot Wheels",
      rating: 4.8,
      reviews: 24,
      isFeatured: true,
    },
    {
      id: "2",
      name: "Handwoven Ceramic Vase",
      price: 45.99,
      image: "/hand-craft.jpg",
      category: "Handmade Crafts",
      rating: 4.9,
      reviews: 18,
      isNew: true,
    },
    {
      id: "3",
      name: "Custom Painted Miniature Set",
      price: 67.5,
      originalPrice: 85.0,
      image: "/resin1.jpg",
      category: "Collectibles",
      rating: 4.7,
      reviews: 31,
      isFeatured: true,
    },
    {
      id: "4",
      name: "Custom Painted Miniature Set",
      price: 67.5,
      originalPrice: 85.0,
      image: "/collectibles1.jpg",
      category: "Collectibles",
      rating: 4.7,
      reviews: 31,
      isFeatured: true,
    },
  ];

  const features = [
    {
      icon: Truck,
      title: "Free Shipping",
      description: "On orders over $50",
    },
    {
      icon: Shield,
      title: "Authenticity Guaranteed",
      description: "Verified collectibles",
    },
    {
      icon: Award,
      title: "Premium Quality",
      description: "Handpicked items",
    },
    {
      icon: Users,
      title: "Expert Support",
      description: "24/7 customer care",
    },
  ];

  const categories = [
    {
      id: 1,
      title: "Handmade Crafts",
      description: "Unique pottery, textiles, and artisan creations",
      image: "/handmade.jpg",
      bgGradient: "from-accent/20 to-accent/30",
      href: "/products",
    },
    {
      id: 2,
      title: "Hot Wheels",
      description: "Vintage and modern die-cast car collections",
      image: "/hot-wheels.jpg",
      bgGradient: "from-primary/20 to-primary/30",
      href: "/products",
    },
    {
      id: 3,
      title: "Collectibles",
      description: "Rare finds and limited edition treasures",
      image: "/collectibles.jpg",
      bgGradient: "from-muted/40 to-muted/60",
      href: "/products",
    },
    // Add more categories as needed
  ];

  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!carouselRef.current) return;

    const container = carouselRef.current;
    const itemWidth = container.firstElementChild?.clientWidth || 0;
    const scrollAmount = direction === "left" ? -itemWidth : itemWidth;

    container.scrollBy({
      left: scrollAmount * 0.9, // Scroll 90% of card width
      behavior: "smooth",
    });
  };
  return (
    <div className="min-h-screen bg-background">
      <main>
        {/* Hero Section */}
        <Hero />

        {/* Features Section */}

        {/* Featured Products */}
        <section className="md:py-20 py-6">
          <div className="container mx-auto px-2 ">
            <div className="text-center md:mb-16 mb-8">
              <Badge className="mb-6 bg-accent/10 text-accent border-accent/20">
                Featured Collection
              </Badge>
              <h2 className="font-playfair text-2xl lg:text-5xl font-bold text-primary mb-4">
                Handpicked
                <span className="text-accent"> Treasures</span>
              </h2>
              <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
                Discover our most loved items, carefully curated for their
                exceptional quality and unique character.
              </p>
            </div>

            <div className="grid grid-cols-2  lg:grid-cols-4 gap-2 mb-12">
              {featuredProducts.map((product, index) => (
                <div
                  key={product.id}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <ProductCard {...product} />
                </div>
              ))}
            </div>

            <div className="text-center">
              <Button asChild size="lg" className="hover-lift hover-glow">
                <Link to="/products">
                  View All Products
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Categories Showcase */}
        <section className="pb-5 bg-gradient-to-br from-background via-muted/10 to-background">
          <div className="container mx-auto px-0">
            <div className="text-center md:mb-16 mb-8">
              <h2 className="font-playfair text-2xl lg:text-5xl font-bold text-primary mb-4">
                Shop by Category
              </h2>
              <p className="text-sm px-3 text-muted-foreground max-w-2xl mx-auto">
                From vintage collectibles to contemporary crafts, find exactly
                what speaks to you.
              </p>
            </div>
            <div className="relative">
              {/* Updated Carousel Container */}
              <div
                ref={carouselRef}
                className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide"
                style={{
                  scrollSnapType: "x mandatory",
                  paddingLeft: "5%", // Creates initial left gap
                  paddingRight: "30%", // Shows 10% of next card
                }}
              >
                {categories.map((category) => (
                  <Link
                    to={category.href}
                    key={category.id}
                    className="flex-shrink-0 w-[85%] sm:w-[45%] md:w-[30%] lg:w-[22%] scroll-snap-start"
                    style={{ minWidth: "280px" }}
                  >
                    <Card className="border-0 shadow-soft hover-lift overflow-hidden bg-gradient-card h-full transition-transform duration-300">
                      <CardContent className="p-0 h-full flex flex-col">
                        <div
                          className={`aspect-[4/3] bg-gradient-to-br ${category.bgGradient} flex items-center justify-center`}
                        >
                          <img
                            src={category.image}
                            alt={category.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-3 flex-grow">
                          <h3 className="font-playfair font-bold text-sm mb-2 text-primary group-hover:text-accent transition-colors duration-300">
                            {category.title}
                          </h3>
                          <p className="text-muted-foreground text-xs">
                            {category.description}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="md:py-20 py-8 bg-muted/30 ">
          <div className="container mx-auto px-1 ">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="text-center group animate-fade-in"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-all duration-300 hover-lift">
                    <feature.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-playfair font-semibold text-md mb-2 text-primary">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-xs">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Customer Reviews */}
        <section className="md:py-20 pt-9 pb-28">
          <div className="container mx-auto px-3">
            <div className="text-center md:mb-16 mb-8">
              <h2 className="font-playfair text-2xl lg:text-5xl font-bold text-primary mb-4">
                What Our Customers Say
              </h2>
              <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
                Join thousands of happy customers who've found their perfect
                treasures with us.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                {
                  name: "Vipin",
                  comment:
                    "Amazing quality and unique pieces! The Hot Wheels collection is authentic and beautifully packaged.",
                  rating: 5,
                },
                {
                  name: "Navya",
                  comment:
                    "Love the handmade crafts. Each piece has so much character and the craftsmanship is exceptional.",
                  rating: 5,
                },
                {
                  name: "Nidhin",
                  comment:
                    "Fast shipping and excellent customer service. Found some rare collectibles I've been searching for!",
                  rating: 5,
                },
              ].map((review, index) => (
                <Card
                  key={review.name}
                  className="border-0 shadow-soft hover-lift bg-gradient-card"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <CardContent className="p-3">
                    <div className="flex items-center mb-2">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-3 h-3 fill-accent text-accent"
                        />
                      ))}
                    </div>
                    <p className="text-muted-foreground text-xs italic mb-1">
                      "{review.comment}"
                    </p>
                    <div className="flex justify-end">
                      <p className="font-medium pr-3 text-sm text-primary">
                        {review.name}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
