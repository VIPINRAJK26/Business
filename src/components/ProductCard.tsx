import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Heart, Star, ShoppingCart } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  rating: number;
  reviews: number;
  isFeatured?: boolean;
  isNew?: boolean;
}

const ProductCard = ({
  id,
  name,
  price,
  originalPrice,
  image,
  category,
  rating,
  reviews,
  isFeatured,
  isNew,
}: ProductCardProps) => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isLiked, setIsLiked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleAddToCart = () => {
    toast({
      title: "Added to cart",
      description: `${name} has been added to your cart.`,
    });
  };

  const handleViewProduct = () => {
    navigate(`/product/${id}`);
  };

  const discount = originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0;

  return (
    <Card
      className="group overflow-hidden border-0 shadow-soft hover-lift transition-all duration-500 bg-gradient-card cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden">
        {/* Product Image */}
        <div
          className="aspect-square bg-muted/30 relative overflow-hidden"
          onClick={handleViewProduct}
        >
          <div className="w-full h-full bg-gradient-to-br from-muted/20 to-muted/40 flex items-center justify-center">
            <img src={image} alt="" />
          </div>

          {/* Badges */}
          {/* <div className="absolute top-3 left-3 flex flex-col gap-2">
            {isNew && (
              <Badge className="bg-accent text-xs text-accent-foreground">New</Badge>
            )}
            {isFeatured && (
              <Badge className="bg-primary text-xs text-primary-foreground">
                Featured
              </Badge>
            )}
            {discount > 0 && <Badge variant="destructive">-{discount}%</Badge>}
          </div> */}

          {/* Wishlist Button */}
          <Button
            variant="ghost"
            size="icon"
            className={`absolute top-3 right-3 bg-white/90 hover:bg-white transition-all duration-300 ${
              isHovered ? "opacity-100 scale-100" : "opacity-0 scale-75"
            }`}
            onClick={(e) => {
              e.stopPropagation();
              setIsLiked(!isLiked);
              toast({
                title: isLiked ? "Removed from wishlist" : "Added to wishlist",
                description: `${name} has been ${
                  isLiked ? "removed from" : "added to"
                } your wishlist.`,
              });
            }}
          >
            <Heart
              className={`w-4 h-4 transition-all duration-300 ${
                isLiked ? "fill-red-500 text-red-500" : "text-muted-foreground"
              }`}
            />
          </Button>

          {/* Quick Actions */}
          <div
            className={`absolute bottom-3 left-3 right-3 transition-all duration-300 ${
              isHovered
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            <Button
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 text-sm"
              onClick={(e) => {
                e.stopPropagation();
                handleAddToCart();
              }}
            >
              <ShoppingCart className="w-4 h-4 mr-2" />
              Add to Cart
            </Button>
          </div>
        </div>

        <CardContent className="p-3 sm:p-4" onClick={handleViewProduct}>
          {/* Category */}
          <p className="text-xs text-accent font-medium mb-2 uppercase tracking-wide">
            {category}
          </p>

          {/* Product Name */}
          <h3 className="font-playfair font-semibold text-xs sm:text-lg mb-2 line-clamp-2 group-hover:text-primary transition-colors duration-300">
            {name}
          </h3>

          {/* Rating */}
          <div className="flex items-center space-x-1 mb-3">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-3 h-3 ${
                    i < Math.floor(rating)
                      ? "fill-accent text-accent"
                      : "text-muted-foreground"
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">({reviews})</span>
          </div>

          {/* Price */}
          <div className="flex items-center space-x-2">
            <span className="font-bold  text-xs sm:text-lg text-primary">
              ₹{price}
            </span>
            {originalPrice && (
              <span className="text-xs sm:text-sm text-muted-foreground line-through">
                ₹{originalPrice}
              </span>
            )}
          </div>
        </CardContent>
      </div>
    </Card>
  );
};

export default ProductCard;