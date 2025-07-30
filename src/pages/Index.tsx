import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProductCard from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Star, Truck, Shield, Award, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  const featuredProducts = [
    {
      id: "1",
      name: "Vintage Hot Wheels Redline Collection",
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
      title: 'Free Shipping',
      description: 'On orders over $50',
    },
    {
      icon: Shield,
      title: 'Authenticity Guaranteed',
      description: 'Verified collectibles',
    },
    {
      icon: Award,
      title: 'Premium Quality',
      description: 'Handpicked items',
    },
    {
      icon: Users,
      title: 'Expert Support',
      description: '24/7 customer care',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main>
        {/* Hero Section */}
        <Hero />

        {/* Features Section */}
        <section className="py-20 bg-muted/30 ">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="text-center group animate-fade-in"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-all duration-300 hover-lift">
                    <feature.icon className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="font-playfair font-semibold text-lg mb-2 text-primary">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <Badge className="mb-6 bg-accent/10 text-accent border-accent/20">
                Featured Collection
              </Badge>
              <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-primary mb-4">
                Handpicked
                <span className="text-accent"> Treasures</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Discover our most loved items, carefully curated for their
                exceptional quality and unique character.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
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
        <section className="py-20 bg-gradient-to-br from-background via-muted/10 to-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-primary mb-4">
                Shop by Category
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                From vintage collectibles to contemporary crafts, find exactly
                what speaks to you.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Link to="/products" className="group block">
                <Card className="border-0 shadow-soft hover-lift overflow-hidden bg-gradient-card">
                  <CardContent className="p-0">
                    <div className="aspect-[4/3] bg-gradient-to-br from-accent/20 to-accent/30 flex items-center justify-center">
                      <img
                        src="/handmade.jpg"
                        alt=""
                        className="aspect-[4/3]"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="font-playfair font-bold text-2xl mb-2 text-primary group-hover:text-accent transition-colors duration-300">
                        Handmade Crafts
                      </h3>
                      <p className="text-muted-foreground">
                        Unique pottery, textiles, and artisan creations
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </Link>

              <Link to="/products" className="group block">
                <Card className="border-0 shadow-soft hover-lift overflow-hidden bg-gradient-card">
                  <CardContent className="p-0">
                    <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 to-primary/30 flex items-center justify-center">
                      <img
                        src="/hot-wheels.jpg"
                        alt=""
                        className="aspect-[4/3]"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="font-playfair font-bold text-2xl mb-2 text-primary group-hover:text-accent transition-colors duration-300">
                        Hot Wheels
                      </h3>
                      <p className="text-muted-foreground">
                        Vintage and modern die-cast car collections
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </Link>

              <Link to="/products" className="group block">
                <Card className="border-0 shadow-soft hover-lift overflow-hidden bg-gradient-card">
                  <CardContent className="p-0">
                    <div className="aspect-[4/3] bg-gradient-to-br from-muted/40 to-muted/60 flex items-center justify-center">
                      <img
                        src="/collectibles.jpg"
                        alt=""
                        className="aspect-[4/3]"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="font-playfair font-bold text-2xl mb-2 text-primary group-hover:text-accent transition-colors duration-300">
                        Collectibles
                      </h3>
                      <p className="text-muted-foreground">
                        Rare finds and limited edition treasures
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </section>

        {/* Customer Reviews */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-primary mb-4">
                What Our Customers Say
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Join thousands of happy customers who've found their perfect
                treasures with us.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-accent text-accent"
                        />
                      ))}
                    </div>
                    <p className="text-muted-foreground italic mb-4">
                      "{review.comment}"
                    </p>
                    <p className="font-semibold text-primary">{review.name}</p>
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
