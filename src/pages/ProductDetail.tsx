import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, Star, Check, X, Truck, Shield, RotateCcw, Minus, Plus } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Layout from '@/components/layout/Layout';
import ProductCard from '@/components/products/ProductCard';
import { tyres } from '@/data/products';
import { useCart } from '@/contexts/CartContext';
import { toast } from 'sonner';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const tyre = tyres.find((t) => t.id === id);

  if (!tyre) {
    return (
      <Layout>
        <div className="container-custom section-padding text-center">
          <h1 className="heading-lg mb-4">Product Not Found</h1>
          <Link to="/shop">
            <Button>Back to Shop</Button>
          </Link>
        </div>
      </Layout>
    );
  }

  // Get related tyres (same category or similar size)
  const relatedTyres = tyres
    .filter(
      (t) =>
        t.id !== tyre.id &&
        (t.category === tyre.category ||
          t.rimDiameter === tyre.rimDiameter ||
          t.vehicleType === tyre.vehicleType)
    )
    .slice(0, 4);

  const handleAddToCart = () => {
    addToCart(tyre, quantity);
    toast.success(`${tyre.name} added to cart`, {
      description: `Quantity: ${quantity}`,
    });
  };

  const specifications = [
    { label: 'Size', value: tyre.size },
    { label: 'Width', value: `${tyre.width}mm` },
    { label: 'Aspect Ratio', value: `${tyre.aspectRatio}%` },
    { label: 'Rim Diameter', value: `${tyre.rimDiameter}"` },
    { label: 'Load Index', value: tyre.loadIndex.toString() },
    { label: 'Speed Rating', value: tyre.speedRating },
    { label: 'Vehicle Type', value: tyre.vehicleType.charAt(0).toUpperCase() + tyre.vehicleType.slice(1) },
    { label: 'Category', value: tyre.category.charAt(0).toUpperCase() + tyre.category.slice(1).replace('-', ' ') },
  ];

  return (
    <Layout>
      {/* Breadcrumb */}
      <div className="bg-muted border-b border-border">
        <div className="container-custom py-4">
          <div className="flex items-center gap-2 text-sm">
            <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
              Home
            </Link>
            <span className="text-muted-foreground">/</span>
            <Link to="/shop" className="text-muted-foreground hover:text-foreground transition-colors">
              Shop
            </Link>
            <span className="text-muted-foreground">/</span>
            <span className="text-foreground">{tyre.name}</span>
          </div>
        </div>
      </div>

      {/* Product Details */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Shop
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Image */}
            <div className="bg-card rounded-2xl border border-border p-8 animate-fade-in">
              <div className="aspect-square relative">
                <img
                  src={tyre.image}
                  alt={tyre.name}
                  className="w-full h-full object-contain"
                />
                {tyre.originalPrice && (
                  <Badge className="absolute top-4 left-4 bg-destructive text-destructive-foreground text-lg px-3 py-1">
                    Sale
                  </Badge>
                )}
              </div>
            </div>

            {/* Details */}
            <div className="animate-slide-up">
              {/* Brand & Name */}
              <p className="text-primary font-heading uppercase tracking-widest mb-2">{tyre.brand}</p>
              <h1 className="heading-lg text-foreground mb-4">{tyre.name}</h1>

              {/* Rating */}
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.floor(tyre.rating) ? 'fill-primary text-primary' : 'text-muted'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-lg font-medium">{tyre.rating}</span>
                <span className="text-muted-foreground">({tyre.reviewCount} reviews)</span>
              </div>

              {/* Size */}
              <div className="bg-muted rounded-lg p-4 mb-6">
                <p className="text-sm text-muted-foreground mb-1">Tyre Size</p>
                <p className="font-heading text-2xl font-bold">{tyre.size}</p>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-4 mb-6">
                <span className="font-heading text-4xl font-bold text-foreground">
                  ${tyre.price.toFixed(2)}
                </span>
                {tyre.originalPrice && (
                  <span className="text-xl text-muted-foreground line-through">
                    ${tyre.originalPrice.toFixed(2)}
                  </span>
                )}
              </div>

              {/* Stock */}
              <div className="flex items-center gap-2 mb-6">
                {tyre.inStock ? (
                  <>
                    <Check className="h-5 w-5 text-green-500" />
                    <span className="text-green-600 font-medium">In Stock</span>
                    <span className="text-muted-foreground">({tyre.stockQuantity} available)</span>
                  </>
                ) : (
                  <>
                    <X className="h-5 w-5 text-destructive" />
                    <span className="text-destructive font-medium">Out of Stock</span>
                  </>
                )}
              </div>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed mb-8">{tyre.description}</p>

              {/* Quantity & Add to Cart */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <div className="flex items-center border border-border rounded-lg">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    disabled={!tyre.inStock}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="w-12 text-center font-medium">{quantity}</span>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setQuantity(quantity + 1)}
                    disabled={!tyre.inStock || quantity >= tyre.stockQuantity}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                <Button
                  variant="hero"
                  size="xl"
                  className="flex-1"
                  onClick={handleAddToCart}
                  disabled={!tyre.inStock}
                >
                  <ShoppingCart className="h-5 w-5" />
                  Add to Cart
                </Button>
              </div>

              {/* Features */}
              <div className="grid grid-cols-3 gap-4 border-t border-border pt-8">
                <div className="text-center">
                  <Truck className="h-8 w-8 text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium">Free Shipping</p>
                </div>
                <div className="text-center">
                  <Shield className="h-8 w-8 text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium">Warranty</p>
                </div>
                <div className="text-center">
                  <RotateCcw className="h-8 w-8 text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium">Easy Returns</p>
                </div>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="mt-16">
            <Tabs defaultValue="specifications" className="w-full">
              <TabsList className="w-full justify-start border-b border-border rounded-none bg-transparent h-auto p-0 gap-8">
                <TabsTrigger
                  value="specifications"
                  className="data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none bg-transparent px-0 pb-4 font-heading uppercase tracking-wider"
                >
                  Specifications
                </TabsTrigger>
                <TabsTrigger
                  value="features"
                  className="data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none bg-transparent px-0 pb-4 font-heading uppercase tracking-wider"
                >
                  Features
                </TabsTrigger>
              </TabsList>

              <TabsContent value="specifications" className="mt-8">
                <div className="bg-card rounded-xl border border-border overflow-hidden">
                  <div className="grid grid-cols-1 md:grid-cols-2">
                    {specifications.map((spec, index) => (
                      <div
                        key={spec.label}
                        className={`flex justify-between p-4 ${
                          index % 2 === 0 ? 'bg-card' : 'bg-muted/50'
                        }`}
                      >
                        <span className="text-muted-foreground">{spec.label}</span>
                        <span className="font-medium">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="features" className="mt-8">
                <div className="bg-card rounded-xl border border-border p-6">
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {tyre.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <Check className="h-5 w-5 text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedTyres.length > 0 && (
        <section className="section-padding bg-muted">
          <div className="container-custom">
            <h2 className="heading-md text-foreground mb-8">You May Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedTyres.map((relatedTyre, index) => (
                <div
                  key={relatedTyre.id}
                  className="animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <ProductCard tyre={relatedTyre} />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
};

export default ProductDetail;
