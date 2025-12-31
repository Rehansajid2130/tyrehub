import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Check, CreditCard, Truck, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Separator } from '@/components/ui/separator';
import Layout from '@/components/layout/Layout';
import { useCart } from '@/contexts/CartContext';
import { toast } from 'sonner';

const Checkout = () => {
  const { items, getTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);

  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    phone: '',
    cardNumber: '',
    cardName: '',
    expiry: '',
    cvv: '',
    shippingMethod: 'standard',
  });

  if (items.length === 0) {
    return (
      <Layout>
        <section className="section-padding bg-background">
          <div className="container-custom text-center">
            <h1 className="heading-lg text-foreground mb-4">Your Cart is Empty</h1>
            <p className="text-muted-foreground mb-8">Add some tyres to your cart to proceed with checkout.</p>
            <Link to="/shop">
              <Button variant="hero" size="lg">Start Shopping</Button>
            </Link>
          </div>
        </section>
      </Layout>
    );
  }

  const subtotal = getTotal();
  const shippingCost = formData.shippingMethod === 'express' ? 49.99 : subtotal >= 500 ? 0 : 29.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shippingCost + tax;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async () => {
    setIsProcessing(true);
    
    // Simulate processing
    await new Promise((resolve) => setTimeout(resolve, 2000));
    
    clearCart();
    toast.success('Order placed successfully!', {
      description: 'Thank you for your purchase. You will receive a confirmation email shortly.',
    });
    navigate('/');
    setIsProcessing(false);
  };

  const steps = [
    { number: 1, title: 'Shipping' },
    { number: 2, title: 'Payment' },
    { number: 3, title: 'Review' },
  ];

  return (
    <Layout>
      {/* Page Header */}
      <section className="bg-secondary py-8">
        <div className="container-custom">
          <Link
            to="/cart"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-secondary-foreground transition-colors mb-4"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Cart
          </Link>
          <h1 className="heading-lg text-secondary-foreground">Checkout</h1>
        </div>
      </section>

      {/* Progress Steps */}
      <div className="bg-card border-b border-border">
        <div className="container-custom py-6">
          <div className="flex items-center justify-center gap-4">
            {steps.map((s, index) => (
              <div key={s.number} className="flex items-center">
                <div
                  className={`flex items-center gap-2 ${
                    step >= s.number ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                      step > s.number
                        ? 'bg-primary text-primary-foreground'
                        : step === s.number
                        ? 'border-2 border-primary text-primary'
                        : 'border-2 border-muted-foreground text-muted-foreground'
                    }`}
                  >
                    {step > s.number ? <Check className="h-4 w-4" /> : s.number}
                  </div>
                  <span className="hidden sm:inline font-medium">{s.title}</span>
                </div>
                {index < steps.length - 1 && (
                  <div className="w-12 sm:w-24 h-0.5 bg-muted mx-2" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Form */}
            <div className="lg:col-span-2">
              {/* Step 1: Shipping */}
              {step === 1 && (
                <div className="bg-card rounded-xl border border-border p-6 animate-fade-in">
                  <div className="flex items-center gap-3 mb-6">
                    <Truck className="h-6 w-6 text-primary" />
                    <h2 className="font-heading text-xl font-bold">Shipping Information</h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your@email.com"
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="(555) 123-4567"
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        placeholder="John"
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        placeholder="Doe"
                        className="mt-1"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <Label htmlFor="address">Address</Label>
                      <Input
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        placeholder="123 Main Street"
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="city">City</Label>
                      <Input
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        placeholder="New York"
                        className="mt-1"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="state">State</Label>
                        <Input
                          id="state"
                          name="state"
                          value={formData.state}
                          onChange={handleInputChange}
                          placeholder="NY"
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="zipCode">ZIP Code</Label>
                        <Input
                          id="zipCode"
                          name="zipCode"
                          value={formData.zipCode}
                          onChange={handleInputChange}
                          placeholder="10001"
                          className="mt-1"
                        />
                      </div>
                    </div>
                  </div>

                  <Separator className="my-6" />

                  <h3 className="font-heading font-semibold mb-4">Shipping Method</h3>
                  <RadioGroup
                    value={formData.shippingMethod}
                    onValueChange={(value) => setFormData((prev) => ({ ...prev, shippingMethod: value }))}
                  >
                    <div className="flex items-center justify-between p-4 border border-border rounded-lg mb-2">
                      <div className="flex items-center gap-3">
                        <RadioGroupItem value="standard" id="standard" />
                        <Label htmlFor="standard" className="cursor-pointer">
                          <span className="font-medium">Standard Shipping</span>
                          <span className="text-sm text-muted-foreground block">5-7 business days</span>
                        </Label>
                      </div>
                      <span className="font-medium">
                        {subtotal >= 500 ? 'FREE' : '$29.99'}
                      </span>
                    </div>
                    <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                      <div className="flex items-center gap-3">
                        <RadioGroupItem value="express" id="express" />
                        <Label htmlFor="express" className="cursor-pointer">
                          <span className="font-medium">Express Shipping</span>
                          <span className="text-sm text-muted-foreground block">2-3 business days</span>
                        </Label>
                      </div>
                      <span className="font-medium">$49.99</span>
                    </div>
                  </RadioGroup>

                  <div className="mt-6 flex justify-end">
                    <Button variant="hero" size="lg" onClick={() => setStep(2)}>
                      Continue to Payment
                    </Button>
                  </div>
                </div>
              )}

              {/* Step 2: Payment */}
              {step === 2 && (
                <div className="bg-card rounded-xl border border-border p-6 animate-fade-in">
                  <div className="flex items-center gap-3 mb-6">
                    <CreditCard className="h-6 w-6 text-primary" />
                    <h2 className="font-heading text-xl font-bold">Payment Information</h2>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="cardNumber">Card Number</Label>
                      <Input
                        id="cardNumber"
                        name="cardNumber"
                        value={formData.cardNumber}
                        onChange={handleInputChange}
                        placeholder="1234 5678 9012 3456"
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="cardName">Name on Card</Label>
                      <Input
                        id="cardName"
                        name="cardName"
                        value={formData.cardName}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        className="mt-1"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="expiry">Expiry Date</Label>
                        <Input
                          id="expiry"
                          name="expiry"
                          value={formData.expiry}
                          onChange={handleInputChange}
                          placeholder="MM/YY"
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="cvv">CVV</Label>
                        <Input
                          id="cvv"
                          name="cvv"
                          value={formData.cvv}
                          onChange={handleInputChange}
                          placeholder="123"
                          className="mt-1"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
                    <Lock className="h-4 w-4" />
                    <span>Your payment information is secure and encrypted</span>
                  </div>

                  <div className="mt-6 flex justify-between">
                    <Button variant="outline" onClick={() => setStep(1)}>
                      Back
                    </Button>
                    <Button variant="hero" size="lg" onClick={() => setStep(3)}>
                      Review Order
                    </Button>
                  </div>
                </div>
              )}

              {/* Step 3: Review */}
              {step === 3 && (
                <div className="bg-card rounded-xl border border-border p-6 animate-fade-in">
                  <h2 className="font-heading text-xl font-bold mb-6">Review Your Order</h2>

                  {/* Items */}
                  <div className="space-y-4 mb-6">
                    {items.map((item) => (
                      <div key={item.tyre.id} className="flex gap-4 p-4 bg-muted rounded-lg">
                        <div className="w-20 h-20 bg-card rounded-lg">
                          <img
                            src={item.tyre.image}
                            alt={item.tyre.name}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-heading font-semibold">{item.tyre.name}</h3>
                          <p className="text-sm text-muted-foreground">{item.tyre.size}</p>
                          <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                        </div>
                        <div className="text-right">
                          <span className="font-bold">${(item.tyre.price * item.quantity).toFixed(2)}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <Separator className="my-6" />

                  {/* Shipping Info */}
                  <div className="mb-6">
                    <h3 className="font-heading font-semibold mb-3">Shipping Address</h3>
                    <p className="text-muted-foreground">
                      {formData.firstName} {formData.lastName}<br />
                      {formData.address}<br />
                      {formData.city}, {formData.state} {formData.zipCode}
                    </p>
                  </div>

                  <div className="mt-6 flex justify-between">
                    <Button variant="outline" onClick={() => setStep(2)}>
                      Back
                    </Button>
                    <Button
                      variant="hero"
                      size="lg"
                      onClick={handleSubmit}
                      disabled={isProcessing}
                    >
                      {isProcessing ? 'Processing...' : 'Place Order'}
                    </Button>
                  </div>
                </div>
              )}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-card rounded-xl border border-border p-6 sticky top-24">
                <h2 className="font-heading text-xl font-bold mb-6">Order Summary</h2>

                <div className="space-y-3 text-sm">
                  {items.map((item) => (
                    <div key={item.tyre.id} className="flex justify-between">
                      <span className="text-muted-foreground">
                        {item.tyre.name} × {item.quantity}
                      </span>
                      <span>${(item.tyre.price * item.quantity).toFixed(2)}</span>
                    </div>
                  ))}
                </div>

                <Separator className="my-4" />

                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Shipping</span>
                    <span>{shippingCost === 0 ? <span className="text-green-600">FREE</span> : `$${shippingCost.toFixed(2)}`}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Tax</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between">
                    <span className="font-heading font-bold text-lg">Total</span>
                    <span className="font-heading font-bold text-2xl">${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Checkout;
