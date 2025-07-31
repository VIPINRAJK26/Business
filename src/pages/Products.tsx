import { useState } from 'react';
import Navbar from '@/components/Navbar';
import ProductCard from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Filter, Grid, List, Search } from 'lucide-react';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', name: 'All Products', count: 24 },
    { id: 'handmade', name: 'Handmade Crafts', count: 12 },
    { id: 'hotwheels', name: 'Hot Wheels', count: 8 },
    { id: 'collectibles', name: 'Collectibles', count: 4 },
  ];

  const products = [
    {
      id: "1",
      name: "Vintage Hot Wheels Redline Collection",
      price: 119,
      originalPrice: 139,
      image: "/collectibles1.jpg",
      category: "Hot Wheels",
      rating: 4.8,
      reviews: 24,
      isFeatured: true,
      isNew: false,
    },
    {
      id: "2",
      name: "Handwoven Ceramic Vase",
      price: 159,
      image: "/collectibles1.jpg",
      category: "Handmade Crafts",
      rating: 4.9,
      reviews: 18,
      isFeatured: false,
      isNew: true,
    },
    {
      id: "3",
      name: "Custom Painted Miniature Set",
      price: 249,
      originalPrice: 309,
      image: "/collectibles1.jpg",
      category: "Collectibles",
      rating: 4.7,
      reviews: 31,
      isFeatured: true,
      isNew: false,
    },
    {
      id: "4",
      name: "Wooden Toy Train Set",
      price: 459,
      image: "/collectibles1.jpg",
      category: "Handmade Crafts",
      rating: 4.6,
      reviews: 12,
      isFeatured: false,
      isNew: true,
    },
    {
      id: "5",
      name: "Limited Edition Die-Cast Collection",
      price: 125,
      image: "/collectibles1.jpg",
      category: "Collectibles",
      rating: 4.9,
      reviews: 8,
      isFeatured: true,
      isNew: false,
    },
    {
      id: "6",
      name: "Macrame Wall Hanging",
      price: 99,
      image: "/collectibles1.jpg",
      category: "Handmade Crafts",
      rating: 4.5,
      reviews: 22,
      isFeatured: false,
      isNew: false,
    },
    {
      id: "7",
      name: "Hot Wheels Track Builder Kit",
      price: 239,
      originalPrice: 74.99,
      image: "/collectibles1.jpg",
      category: "Hot Wheels",
      rating: 4.8,
      reviews: 15,
      isFeatured: false,
      isNew: true,
    },
    {
      id: "8",
      name: "Artisan Leather Journal",
      price: 129,
      image: "/collectibles1.jpg",
      category: "Handmade Crafts",
      rating: 4.7,
      reviews: 28,
      isFeatured: false,
      isNew: false,
    },
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || 
      product.category.toLowerCase().includes(selectedCategory);
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-20">
        {/* Header */}
        <section className="py-12 bg-gradient-to-br from-background via-muted/10 to-background">
          <div className="container mx-auto px-6">
            <div className="text-center animate-fade-in">
              <h1 className="font-playfair text-4xl lg:text-5xl font-bold text-primary mb-4">
                Our Products
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Discover our curated collection of handmade crafts, collectibles, and unique treasures.
              </p>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-2 py-12">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Filters */}
            <aside className="lg:w-64 space-y-6">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* Categories */}
              <div className="bg-card p-6 rounded-2xl shadow-soft border border-border/50">
                <h3 className="font-playfair font-semibold text-lg mb-4 text-primary">
                  Categories
                </h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full flex items-center justify-between p-3 rounded-lg transition-all duration-300 ${
                        selectedCategory === category.id
                          ? 'bg-primary text-primary-foreground'
                          : 'hover:bg-muted text-muted-foreground hover:text-foreground'
                      }`}
                    >
                      <span>{category.name}</span>
                      <Badge variant="secondary" className="ml-2">
                        {category.count}
                      </Badge>
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="bg-card p-6 rounded-2xl shadow-soft border border-border/50">
                <h3 className="font-playfair font-semibold text-lg mb-4 text-primary">
                  Price Range
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Input placeholder="Min" className="w-20" />
                    <span className="text-muted-foreground">-</span>
                    <Input placeholder="Max" className="w-20" />
                  </div>
                  <Button variant="outline" className="w-full">
                    Apply
                  </Button>
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1">
              {/* Toolbar */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
                <div className="flex items-center space-x-4">
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger className="w-48">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="featured">Featured</SelectItem>
                      <SelectItem value="price-low">Price: Low to High</SelectItem>
                      <SelectItem value="price-high">Price: High to Low</SelectItem>
                      <SelectItem value="rating">Highest Rated</SelectItem>
                      <SelectItem value="newest">Newest</SelectItem>
                    </SelectContent>
                  </Select>
                  
                  <span className="text-sm text-muted-foreground">
                    {filteredProducts.length} products found
                  </span>
                </div>

                <div className="flex items-center space-x-2">
                  <Button
                    variant={viewMode === 'grid' ? 'default' : 'outline'}
                    size="icon"
                    onClick={() => setViewMode('grid')}
                  >
                    <Grid className="w-4 h-4" />
                  </Button>
                  <Button
                    variant={viewMode === 'list' ? 'default' : 'outline'}
                    size="icon"
                    onClick={() => setViewMode('list')}
                  >
                    <List className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Products Grid */}
              <div className={`grid gap-2 ${
                viewMode === 'grid' 
                  ? 'grid-cols-2  lg:grid-cols-3' 
                  : 'grid-cols-1'
              }`}>
                {filteredProducts.map((product, index) => (
                  <div
                    key={product.id}
                    className="animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <ProductCard {...product} />
                  </div>
                ))}
              </div>

              {/* Load More */}
              {filteredProducts.length > 0 && (
                <div className="text-center mt-12">
                  <Button variant="outline" size="lg" className="hover-lift">
                    Load More Products
                  </Button>
                </div>
              )}

              {/* No Results */}
              {filteredProducts.length === 0 && (
                <div className="text-center py-16">
                  <div className="text-6xl mb-4 opacity-50">🔍</div>
                  <h3 className="font-playfair text-2xl font-semibold text-primary mb-2">
                    No products found
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Try adjusting your search or filter criteria
                  </p>
                  <Button onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('all');
                  }}>
                    Clear Filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Products;