import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ArrowLeft, CreditCard, Shield, Truck } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const BuyNow = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const { product, quantity = 1, cartItems, total: cartTotal } = location.state || {};
  
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'US',
    phone: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    nameOnCard: ''
  });

  const [shippingMethod, setShippingMethod] = useState('standard');

  // Calculate order details
  let orderItems = [];
  let subtotal = 0;

  if (product && quantity) {
    // Single product purchase
    orderItems = [{ ...product, quantity }];
    subtotal = product.price * quantity;
  } else if (cartItems) {
    // Cart purchase
    orderItems = cartItems;
    subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  }

  const shippingOptions = {
    standard: { name: 'Standard Shipping (5-7 days)', price: subtotal > 50 ? 0 : 9.99 },
    express: { name: 'Express Shipping (2-3 days)', price: 19.99 },
    overnight: { name: 'Overnight Shipping', price: 39.99 }
  };

  const shipping = shippingOptions[shippingMethod].price;
  const tax = subtotal * 0.08; // 8% tax
  const total = subtotal + shipping + tax;

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate payment processing
    toast({
      title: "Order placed successfully!",
      description: `Your order total is $${total.toFixed(2)}. You'll receive a confirmation email soon.`,
    });
    
    setTimeout(() => {
      navigate('/');
    }, 2000);
  };

  if (!orderItems.length) {
    navigate('/products');
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      
      <main className="py-20">
        <div className="container mx-auto px-4 py-6">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="flex items-center gap-4 mb-6">
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => navigate(-1)}
                className="-ml-2"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
              <h1 className="font-playfair text-2xl sm:text-3xl font-bold text-primary">
                Checkout
              </h1>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Checkout Form */}
              <div className="space-y-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Contact Information */}
                  <Card className="p-6">
                    <h2 className="font-playfair text-xl font-semibold mb-4">
                      Contact Information
                    </h2>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          required
                          className="mt-1"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="firstName">First Name</Label>
                          <Input
                            id="firstName"
                            value={formData.firstName}
                            onChange={(e) => handleInputChange('firstName', e.target.value)}
                            required
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label htmlFor="lastName">Last Name</Label>
                          <Input
                            id="lastName"
                            value={formData.lastName}
                            onChange={(e) => handleInputChange('lastName', e.target.value)}
                            required
                            className="mt-1"
                          />
                        </div>
                      </div>
                    </div>
                  </Card>

                  {/* Shipping Address */}
                  <Card className="p-6">
                    <h2 className="font-playfair text-xl font-semibold mb-4">
                      Shipping Address
                    </h2>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="address">Address</Label>
                        <Input
                          id="address"
                          value={formData.address}
                          onChange={(e) => handleInputChange('address', e.target.value)}
                          required
                          className="mt-1"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="city">City</Label>
                          <Input
                            id="city"
                            value={formData.city}
                            onChange={(e) => handleInputChange('city', e.target.value)}
                            required
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label htmlFor="state">State</Label>
                          <Input
                            id="state"
                            value={formData.state}
                            onChange={(e) => handleInputChange('state', e.target.value)}
                            required
                            className="mt-1"
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="zipCode">ZIP Code</Label>
                          <Input
                            id="zipCode"
                            value={formData.zipCode}
                            onChange={(e) => handleInputChange('zipCode', e.target.value)}
                            required
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label htmlFor="phone">Phone</Label>
                          <Input
                            id="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => handleInputChange('phone', e.target.value)}
                            required
                            className="mt-1"
                          />
                        </div>
                      </div>
                    </div>
                  </Card>

                  {/* Shipping Method */}
                  {/* <Card className="p-6">
                    <h2 className="font-playfair text-xl font-semibold mb-4">
                      Shipping Method
                    </h2>
                    <div className="space-y-3">
                      {Object.entries(shippingOptions).map(([key, option]) => (
                        <div
                          key={key}
                          className={`p-4 rounded-lg border cursor-pointer transition-colors ${
                            shippingMethod === key 
                              ? 'border-primary bg-primary/5' 
                              : 'border-border hover:border-primary/50'
                          }`}
                          onClick={() => setShippingMethod(key)}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className={`w-4 h-4 rounded-full border-2 ${
                                shippingMethod === key 
                                  ? 'border-primary bg-primary' 
                                  : 'border-muted-foreground'
                              }`}>
                                {shippingMethod === key && (
                                  <div className="w-2 h-2 bg-white rounded-full m-0.5" />
                                )}
                              </div>
                              <div>
                                <p className="font-medium">{option.name}</p>
                              </div>
                            </div>
                            <span className="font-bold text-primary">
                              {option.price === 0 ? 'Free' : `$${option.price.toFixed(2)}`}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </Card> */}

                  {/* Payment Information */}
                  <Card className="p-6">
                    <h2 className="font-playfair text-xl font-semibold mb-4">
                      Payment Information
                    </h2>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="nameOnCard">Name on Card</Label>
                        <Input
                          id="nameOnCard"
                          value={formData.nameOnCard}
                          onChange={(e) => handleInputChange('nameOnCard', e.target.value)}
                          required
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="cardNumber">Card Number</Label>
                        <Input
                          id="cardNumber"
                          placeholder="1234 5678 9012 3456"
                          value={formData.cardNumber}
                          onChange={(e) => handleInputChange('cardNumber', e.target.value)}
                          required
                          className="mt-1"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="expiryDate">Expiry Date</Label>
                          <Input
                            id="expiryDate"
                            placeholder="MM/YY"
                            value={formData.expiryDate}
                            onChange={(e) => handleInputChange('expiryDate', e.target.value)}
                            required
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label htmlFor="cvv">CVV</Label>
                          <Input
                            id="cvv"
                            placeholder="123"
                            value={formData.cvv}
                            onChange={(e) => handleInputChange('cvv', e.target.value)}
                            required
                            className="mt-1"
                          />
                        </div>
                      </div>
                    </div>
                  </Card>
                </form>
              </div>

              {/* Order Summary */}
              <div className="lg:sticky lg:top-24 lg:h-fit">
                <Card className="p-6">
                  <h2 className="font-playfair text-xl font-semibold mb-4">
                    Order Summary
                  </h2>

                  {/* Order Items */}
                  <div className="space-y-4 mb-6">
                    {orderItems.map((item) => (
                      <div key={item.id} className="flex gap-3">
                        <div className="w-12 h-12 bg-muted/20 rounded-lg flex items-center justify-center text-lg border border-border/50 flex-shrink-0">
                          {item.image}
                        </div>
                        <div className="flex-1 min-w-0">
                          <Badge variant="secondary" className="mb-1 text-xs">
                            {item.category}
                          </Badge>
                          <p className="font-medium text-sm leading-tight line-clamp-2">
                            {item.name}
                          </p>
                          <div className="flex justify-between items-center mt-1">
                            <span className="text-sm text-muted-foreground">
                              Qty: {item.quantity}
                            </span>
                            <span className="font-bold text-primary">
                              ${(item.price * item.quantity).toFixed(2)}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <Separator className="my-4" />

                  {/* Order Totals */}
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span className="font-medium">${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Shipping</span>
                      <span className="font-medium">
                        {shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Tax</span>
                      <span className="font-medium">${tax.toFixed(2)}</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between text-lg font-bold">
                      <span>Total</span>
                      <span className="text-primary">${total.toFixed(2)}</span>
                    </div>
                  </div>

                  {/* Place Order Button */}
                  <Button 
                    size="lg" 
                    className="w-full mt-6"
                    onClick={handleSubmit}
                  >
                    <CreditCard className="w-5 h-5 mr-2" />
                    Place Order - ${total.toFixed(2)}
                  </Button>

                  {/* Trust Signals */}
                  <div className="mt-6 pt-6 border-t border-border">
                    <div className="space-y-3 text-sm text-muted-foreground">
                      <div className="flex items-center gap-3">
                        <Shield className="w-4 h-4 text-green-600" />
                        <span>SSL encrypted secure checkout</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Truck className="w-4 h-4 text-green-600" />
                        <span>Free returns within 7 days</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CreditCard className="w-4 h-4 text-green-600" />
                        <span>Multiple payment methods accepted</span>
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

export default BuyNow;