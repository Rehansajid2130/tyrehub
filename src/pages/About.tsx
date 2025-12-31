import { Users, Award, Clock, Wrench } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const About = () => {
  const stats = [
    { number: '25+', label: 'Years Experience' },
    { number: '50K+', label: 'Happy Customers' },
    { number: '100+', label: 'Tyre Brands' },
    { number: '24/7', label: 'Support' },
  ];

  const values = [
    {
      icon: Award,
      title: 'Quality First',
      description: 'We only stock tyres from trusted manufacturers that meet our rigorous quality standards.',
    },
    {
      icon: Users,
      title: 'Customer Focus',
      description: 'Your safety and satisfaction are our top priorities. We go above and beyond to help you find the perfect tyres.',
    },
    {
      icon: Clock,
      title: 'Fast Service',
      description: 'Quick delivery and efficient service to get you back on the road as soon as possible.',
    },
    {
      icon: Wrench,
      title: 'Expert Advice',
      description: 'Our team of tyre specialists is always ready to help you make the right choice for your vehicle.',
    },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-secondary py-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <p className="text-primary font-heading uppercase tracking-widest mb-4 animate-fade-in">About Us</p>
            <h1 className="heading-xl text-secondary-foreground mb-6 animate-slide-up">
              Your Trusted Tyre Partner Since 1998
            </h1>
            <p className="text-lg text-muted-foreground animate-slide-up delay-100">
              For over 25 years, TyreZone has been the go-to destination for premium tyres and expert advice.
              We're passionate about keeping you safe on the road.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-primary">
        <div className="container-custom py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <p className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-2">
                  {stat.number}
                </p>
                <p className="text-primary-foreground/80">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-lg text-foreground mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  TyreZone was founded in 1998 by automotive enthusiasts who saw a need for a customer-focused
                  tyre retailer that prioritized quality and service above all else.
                </p>
                <p>
                  What started as a small shop has grown into one of the region's most trusted tyre retailers,
                  serving thousands of customers each year with an extensive selection of premium tyres from
                  the world's leading manufacturers.
                </p>
                <p>
                  Our commitment to excellence has never wavered. We continue to invest in our team's expertise,
                  expand our product range, and enhance our customer service to ensure every driver finds the
                  perfect tyres for their needs.
                </p>
              </div>
            </div>
            <div className="bg-muted rounded-2xl p-8 aspect-square flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-primary-foreground font-heading text-6xl font-bold">T</span>
                </div>
                <p className="font-heading text-2xl font-bold text-foreground">TyreZone</p>
                <p className="text-muted-foreground">Est. 1998</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-lg text-foreground mb-4">Our Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These core principles guide everything we do at TyreZone
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="bg-card rounded-xl p-6 card-hover border border-border animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <value.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-secondary">
        <div className="container-custom text-center">
          <h2 className="heading-lg text-secondary-foreground mb-6">Ready to Find Your Perfect Tyres?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Browse our extensive collection or speak with our experts to get personalized recommendations.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/shop">
              <Button variant="hero" size="lg">Shop Now</Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="border-secondary-foreground/20 text-secondary-foreground hover:bg-secondary-foreground/10">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
