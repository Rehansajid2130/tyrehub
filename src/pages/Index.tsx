import { Link } from 'react-router-dom';
import { ArrowRight, Truck, Shield, Award, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Layout from '@/components/layout/Layout';
import ProductCard from '@/components/products/ProductCard';
import { tyres, categories } from '@/data/products';
import heroImage from '@/assets/hero-tyre.jpg';

const Index = () => {
  const featuredTyres = tyres.slice(0, 4);

  const features = [
    {
      icon: Truck,
      title: 'Free Shipping',
      description: 'On orders over $500',
    },
    {
      icon: Shield,
      title: 'Warranty',
      description: 'Full manufacturer warranty',
    },
    {
      icon: Award,
      title: 'Quality Guaranteed',
      description: 'Premium brands only',
    },
    {
      icon: Clock,
      title: 'Fast Delivery',
      description: '2-5 business days',
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/80 to-transparent" />
        </div>

        {/* Content */}
        <div className="container-custom relative z-10 py-20">
          <div className="max-w-2xl">
            <p className="text-primary font-heading uppercase tracking-widest mb-4 animate-fade-in">
              Premium Tyre Solutions
            </p>
            <h1 className="heading-xl text-secondary-foreground mb-6 animate-slide-up">
              Drive With{' '}
              <span className="text-primary">Confidence</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 animate-slide-up delay-100">
              Discover our extensive collection of premium tyres from world-leading brands.
              Quality, performance, and safety for every journey.
            </p>
            <div className="flex flex-wrap gap-4 animate-slide-up delay-200">
              <Link to="/shop">
                <Button variant="hero" size="xl">
                  Shop Now
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="dark" size="xl">
                  Get Expert Advice
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-card border-y border-border">
        <div className="container-custom py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="flex items-center gap-4 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-foreground">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-lg text-foreground mb-4">Shop by Category</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Find the perfect tyres for your vehicle and driving conditions
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {categories.map((category, index) => (
              <Link
                key={category.id}
                to={`/shop?category=${category.id}`}
                className="group relative bg-card rounded-xl p-6 text-center card-hover border border-border animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <div className="w-10 h-10 bg-primary rounded-full" />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
                  {category.name}
                </h3>
                <p className="text-sm text-muted-foreground">{category.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <h2 className="heading-lg text-foreground mb-4">Featured Tyres</h2>
              <p className="text-muted-foreground max-w-2xl">
                Our most popular tyres, trusted by thousands of drivers
              </p>
            </div>
            <Link to="/shop" className="mt-4 md:mt-0">
              <Button variant="outline">
                View All Products
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredTyres.map((tyre, index) => (
              <div
                key={tyre.id}
                className="animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <ProductCard tyre={tyre} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-secondary" />
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>
        
        <div className="container-custom relative z-10 text-center">
          <h2 className="heading-lg text-secondary-foreground mb-6">
            Need Help Choosing the Right Tyres?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Our experts are here to help you find the perfect tyres for your vehicle.
            Get personalized recommendations based on your driving needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact">
              <Button variant="hero" size="lg">
                Contact Our Experts
              </Button>
            </Link>
            <a href="tel:5551234567">
              <Button variant="outline" size="lg" className="border-secondary-foreground/20 text-secondary-foreground hover:bg-secondary-foreground/10">
                Call (555) 123-4567
              </Button>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
