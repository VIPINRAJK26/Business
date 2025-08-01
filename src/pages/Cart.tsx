import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Cart = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [cartItems, setCartItems] = useState([
    {
      id: '1',
      name: 'Vintage Hot Wheels Redline Collection',
      price: 89.99,
      image: '🏎️',
      category: 'Hot Wheels',
      quantity: 2,
      inStock: 12
    },
    {
      id: '2',
      name: 'Handwoven Ceramic Vase',
      price: 45.99,
      image: '🏺',
      category: 'Handmade Crafts',
      quantity: 1,
      inStock: 5
    },
    {
      id: '3',
      name: 'Custom Painted Miniature Set',
      price: 67.50,
      image: '🎨',
      category: 'Collectibles',
      quantity: 1,
      inStock: 3
    }
  ]);

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity === 0) {
      removeItem(id);
      return;
    }
    
    setCartItems(items =>
      items.map(item =>
        item.id === id 
          ? { ...item, quantity: Math.min(newQuantity, item.inStock) }
          : item
      )
    );
  };

  const removeItem = (id: string) => {
    setCartItems(items => items.filter(item => item.id !== id));
    toast({
      title: "Item removed",
      description: "Item has been removed from your cart.",
    });
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > 50 ? 0 : 9.99;
  const total = subtotal + shipping;

  const proceedToCheckout = () => {
    navigate('/buy-now', { state: { cartItems, total } });
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <main className="pt-20">
          <div className="container mx-auto px-4 py-12">
            <div className="text-center max-w-md mx-auto">
              <div className="text-6xl mb-6 opacity-50">🛒</div>
              <h1 className="font-playfair text-2xl sm:text-3xl font-bold text-primary mb-4">
                Your cart is empty
              </h1>
              <p className="text-muted-foreground mb-8">
                Looks like you haven't added any items to your cart yet.
              </p>
              <Button 
                size="lg"
                onClick={() => navigate('/products')}
                className="w-full sm:w-auto"
              >
                <ShoppingBag className="w-5 h-5 mr-2" />
                Start Shopping
              </Button>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      
      <main className="py-20">
        <div className="container mx-auto px-4 py-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-playfair text-2xl sm:text-3xl font-bold text-primary mb-6">
              Shopping Cart ({cartItems.length} items)
            </h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-4">
                {cartItems.map((item) => (
                  <Card key={item.id} className="p-4 sm:p-6">
                    <div className="flex gap-4">
                      {/* Product Image */}
                      <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 bg-muted/20 rounded-lg flex items-center justify-center text-2xl sm:text-3xl border border-border/50">
                        {item.image}
                      </div>

                      {/* Product Details */}
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                          <div className="flex-1 min-w-0">
                            <Badge variant="secondary" className="mb-2 text-xs">
                              {item.category}
                            </Badge>
                            <h3 className="font-semibold text-sm sm:text-base leading-tight mb-2 line-clamp-2">
                              {item.name}
                            </h3>
                            <p className="text-lg font-bold text-primary">
                              ${item.price}
                            </p>
                          </div>

                          {/* Remove Button */}
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => removeItem(item.id)}
                            className="text-destructive hover:text-destructive p-2"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>

                        {/* Quantity Controls */}
                        <div className="flex items-center justify-between mt-4">
                          <div className="flex items-center border border-border rounded-lg">
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="h-8 w-8 p-0"
                            >
                              <Minus className="w-3 h-3" />
                            </Button>
                            <span className="px-3 py-1 text-sm font-medium min-w-[2rem] text-center">
                              {item.quantity}
                            </span>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="h-8 w-8 p-0"
                              disabled={item.quantity >= item.inStock}
                            >
                              <Plus className="w-3 h-3" />
                            </Button>
                          </div>
                          
                          <div className="text-right">
                            <p className="text-sm text-muted-foreground">Total</p>
                            <p className="font-bold text-primary">
                              ${(item.price * item.quantity).toFixed(2)}
                            </p>
                          </div>
                        </div>

                        {item.quantity >= item.inStock && (
                          <p className="text-xs text-orange-600 mt-2">
                            Maximum quantity reached
                          </p>
                        )}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <Card className="p-6 sticky top-24">
                  <h2 className="font-playfair text-lg font-semibold mb-4">
                    Order Summary
                  </h2>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span className="font-medium">${subtotal.toFixed(2)}</span>
                    </div>
                    
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Shipping</span>
                      <span className={`font-medium ${shipping === 0 ? 'text-green-600' : ''}`}>
                        {shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}
                      </span>
                    </div>
                    
                    {subtotal < 50 && (
                      <p className="text-xs text-muted-foreground">
                        Add ${(50 - subtotal).toFixed(2)} more for free shipping
                      </p>
                    )}
                    
                    <Separator />
                    
                    <div className="flex justify-between text-lg font-bold">
                      <span>Total</span>
                      <span className="text-primary">${total.toFixed(2)}</span>
                    </div>
                  </div>

                  <div className="mt-6 space-y-3">
                    <Button 
                      size="lg" 
                      className="w-full"
                      onClick={proceedToCheckout}
                    >
                      Proceed to Checkout
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="w-full"
                      onClick={() => navigate('/products')}
                    >
                      Continue Shopping
                    </Button>
                  </div>

                  {/* Trust Signals */}
                  <div className="mt-6 pt-6 border-t border-border">
                    <div className="space-y-2 text-xs text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full" />
                        <span>Secure checkout</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full" />
                        <span>Free returns within 30 days</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full" />
                        <span>Fast shipping</span>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Cart;