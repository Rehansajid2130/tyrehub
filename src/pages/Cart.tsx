import { Link } from 'react-router-dom';
import { Trash2, Minus, Plus, ArrowLeft, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Layout from '@/components/layout/Layout';
import { useCart } from '@/contexts/CartContext';

const Cart = () => {
  const { items, updateQuantity, removeFromCart, getTotal, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <Layout>
        <section className="section-padding bg-background">
          <div className="container-custom text-center">
            <div className="max-w-md mx-auto">
              <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
                <ShoppingBag className="h-12 w-12 text-muted-foreground" />
              </div>
              <h1 className="heading-lg text-foreground mb-4">Your Cart is Empty</h1>
              <p className="text-muted-foreground mb-8">
                Looks like you haven't added any tyres to your cart yet.
              </p>
              <Link to="/shop">
                <Button variant="hero" size="lg">
                  Start Shopping
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  const subtotal = getTotal();
  const shipping = subtotal >= 500 ? 0 : 29.99;
  const total = subtotal + shipping;

  return (
    <Layout>
      {/* Page Header */}
      <section className="bg-secondary py-16">
        <div className="container-custom">
          <h1 className="heading-lg text-secondary-foreground mb-4">Shopping Cart</h1>
          <p className="text-muted-foreground">
            {items.length} {items.length === 1 ? 'item' : 'items'} in your cart
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-custom">
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Continue Shopping
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="bg-card rounded-xl border border-border overflow-hidden">
                {/* Header */}
                <div className="hidden md:grid grid-cols-12 gap-4 p-4 bg-muted border-b border-border text-sm font-medium text-muted-foreground">
                  <div className="col-span-6">Product</div>
                  <div className="col-span-2 text-center">Price</div>
                  <div className="col-span-2 text-center">Quantity</div>
                  <div className="col-span-2 text-right">Total</div>
                </div>

                {/* Items */}
                <div className="divide-y divide-border">
                  {items.map((item) => (
                    <div key={item.tyre.id} className="p-4 md:grid md:grid-cols-12 md:gap-4 md:items-center">
                      {/* Product */}
                      <div className="col-span-6 flex gap-4 mb-4 md:mb-0">
                        <div className="w-24 h-24 bg-muted rounded-lg shrink-0">
                          <img
                            src={item.tyre.image}
                            alt={item.tyre.name}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <div>
                          <Link
                            to={`/product/${item.tyre.id}`}
                            className="font-heading font-semibold text-foreground hover:text-primary transition-colors"
                          >
                            {item.tyre.name}
                          </Link>
                          <p className="text-sm text-muted-foreground">{item.tyre.brand}</p>
                          <p className="text-sm text-muted-foreground">{item.tyre.size}</p>
                        </div>
                      </div>

                      {/* Price */}
                      <div className="col-span-2 text-center mb-4 md:mb-0">
                        <span className="md:hidden text-sm text-muted-foreground mr-2">Price:</span>
                        <span className="font-medium">${item.tyre.price.toFixed(2)}</span>
                      </div>

                      {/* Quantity */}
                      <div className="col-span-2 flex justify-center mb-4 md:mb-0">
                        <div className="flex items-center border border-border rounded-lg">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => updateQuantity(item.tyre.id, item.quantity - 1)}
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="w-10 text-center text-sm font-medium">{item.quantity}</span>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => updateQuantity(item.tyre.id, item.quantity + 1)}
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>

                      {/* Total */}
                      <div className="col-span-2 flex justify-between md:justify-end items-center gap-4">
                        <span className="font-heading font-bold text-lg">
                          ${(item.tyre.price * item.quantity).toFixed(2)}
                        </span>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="text-muted-foreground hover:text-destructive"
                          onClick={() => removeFromCart(item.tyre.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Actions */}
                <div className="p-4 bg-muted border-t border-border flex justify-between">
                  <Button variant="outline" onClick={clearCart}>
                    Clear Cart
                  </Button>
                  <Link to="/shop">
                    <Button variant="outline">
                      Continue Shopping
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-card rounded-xl border border-border p-6 sticky top-24">
                <h2 className="font-heading text-xl font-bold mb-6">Order Summary</h2>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="font-medium">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Shipping</span>
                    <span className="font-medium">
                      {shipping === 0 ? (
                        <span className="text-green-600">FREE</span>
                      ) : (
                        `$${shipping.toFixed(2)}`
                      )}
                    </span>
                  </div>
                  {shipping > 0 && (
                    <p className="text-sm text-muted-foreground">
                      Free shipping on orders over $500
                    </p>
                  )}
                  <div className="border-t border-border pt-4">
                    <div className="flex justify-between">
                      <span className="font-heading font-bold text-lg">Total</span>
                      <span className="font-heading font-bold text-2xl">${total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                <Link to="/checkout" className="block">
                  <Button variant="hero" size="lg" className="w-full">
                    Proceed to Checkout
                  </Button>
                </Link>

                <div className="mt-6 text-center">
                  <p className="text-sm text-muted-foreground">
                    Secure checkout powered by industry-standard encryption
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Cart;
