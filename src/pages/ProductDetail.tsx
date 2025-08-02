import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Star, Heart, ShoppingCart, ArrowLeft, Plus, Minus } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);

  // Mock product data - in real app, fetch by ID
  const product = {
    id: "1",
    name: "Vintage Hot Wheels Redline Collection",
    price: 89.99,
    originalPrice: 120.0,
    images: [
      "/collectibles1.jpg",
      "/collectibles1.jpg",
      "/collectibles1.jpg",
      "/collectibles1.jpg",
    ],
    category: "Hot Wheels",
    rating: 4.8,
    reviews: 24,
    inStock: 12,
    description:
      "A rare collection of vintage Hot Wheels Redline cars from the 1970s. These iconic die-cast vehicles feature the distinctive red stripe on the tires and are highly sought after by collectors worldwide.",
    features: [
      "Authentic 1970s Redline series",
      "Original packaging included",
      "Mint condition",
      "Certificate of authenticity",
      "Perfect for collectors",
    ],
    specifications: {
      Brand: "Hot Wheels",
      Year: "1970s",
      Scale: "1:64",
      Material: "Die-cast metal",
      Condition: "Mint",
    },
  };

  const addToCart = () => {
    // Add to cart logic
    toast({
      title: "Added to cart",
      description: `${quantity} ${product.name} added to your cart.`,
    });
  };

  const buyNow = () => {
    navigate('/buy-now', { state: { product, quantity } });
  };

  return (
    <div className="min-h-screen bg-background">
      <main className="pt-16 pb-20">
        {/* Mobile-first layout */}
        <div className="container mx-auto px-4 py-6">
          {/* Back button */}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate(-1)}
            className="mb-4 -ml-2"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="aspect-square bg-muted/20 rounded-2xl flex items-center justify-center text-8xl border border-border/50">
                <img src={product.images[0]} alt="product image" />
              </div>
              <div className="grid grid-cols-4 gap-2">
                {product.images.map((image, index) => (
                  <div
                    key={index}
                    className="aspect-square bg-muted/20 rounded-lg flex items-center justify-center text-2xl sm:text-3xl border border-border/50 cursor-pointer hover:border-primary/50 transition-colors"
                  >
                    <img src={image} alt="product image" />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <Badge variant="secondary" className="mb-2">
                  {product.category}
                </Badge>
                <h1 className="font-playfair text-xl sm:text-3xl lg:text-4xl font-bold text-primary leading-tight">
                  {product.name}
                </h1>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(product.rating)
                          ? "fill-primary text-primary"
                          : "text-muted"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm font-medium">{product.rating}</span>
                <span className="text-sm text-muted-foreground">
                  ({product.reviews} reviews)
                </span>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-3">
                <span className="text-xl sm:text-4xl font-bold text-primary">
                  ${product.price}
                </span>
                {product.originalPrice && (
                  <span className="text-lg sm:text-xl text-muted-foreground line-through">
                    ${product.originalPrice}
                  </span>
                )}
              </div>

              {/* Stock */}
              <div className="text-sm">
                <span
                  className={
                    product.inStock > 5 ? "text-green-600" : "text-orange-600"
                  }
                >
                  {product.inStock > 5
                    ? "In Stock"
                    : `Only ${product.inStock} left!`}
                </span>
              </div>

              {/* Quantity Selector */}
              <div className="flex items-center gap-4">
                <span className="font-medium">Quantity:</span>
                <div className="flex items-center border border-border rounded-lg">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="h-10 w-10 p-0"
                  >
                    <Minus className="w-4 h-4" />
                  </Button>
                  <span className="px-4 py-2 min-w-[3rem] text-center font-medium">
                    {quantity}
                  </span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() =>
                      setQuantity(Math.min(product.inStock, quantity + 1))
                    }
                    className="h-10 w-10 p-0"
                  >
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-4">
                <Button
                  size="lg"
                  className="w-full h-12 text-base font-semibold"
                  onClick={buyNow}
                >
                  Buy Now - ${(product.price * quantity).toFixed(2)}
                </Button>
                <div className="grid grid-cols-[1fr_auto] gap-3">
                  <Button
                    variant="outline"
                    size="lg"
                    className="h-12 text-base font-semibold"
                    onClick={addToCart}
                  >
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    Add to Cart
                  </Button>
                  <Button
                    variant="link"
                    size="lg"
                    className="h-12 w-12 p-0"
                    onClick={() => setIsWishlisted(!isWishlisted)}
                  >
                    <Heart
                      className={`w-full h-full transition-all duration-300 ${
                        isWishlisted ? "fill-red-500 text-red-500" : ""
                      }`}
                    />
                  </Button>
                </div>
              </div>

              {/* Description */}
              <Card className="p-6 mt-8">
                <h3 className="font-playfair text-lg font-semibold mb-3">
                  Description
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {product.description}
                </p>
              </Card>

              {/* Features */}
              <Card className="p-6">
                <h3 className="font-playfair text-lg font-semibold mb-3">
                  Features
                </h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-center text-muted-foreground"
                    >
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </Card>

              {/* Specifications */}
              <Card className="p-6">
                <h3 className="font-playfair text-lg font-semibold mb-3">
                  Specifications
                </h3>
                <div className="space-y-3">
                  {Object.entries(product.specifications).map(
                    ([key, value]) => (
                      <div key={key} className="flex justify-between py-1">
                        <span className="text-muted-foreground">{key}:</span>
                        <span className="font-medium">{value}</span>
                      </div>
                    )
                  )}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductDetail;