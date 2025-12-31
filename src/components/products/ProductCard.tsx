import { Link } from 'react-router-dom';
import { ShoppingCart, Star, Check, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tyre } from '@/data/products';
import { useCart } from '@/contexts/CartContext';
import { toast } from 'sonner';

interface ProductCardProps {
  tyre: Tyre;
}

const ProductCard = ({ tyre }: ProductCardProps) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(tyre);
    toast.success(`${tyre.name} added to cart`, {
      description: `Size: ${tyre.size}`,
    });
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'winter':
        return 'bg-blue-500/10 text-blue-600 border-blue-500/20';
      case 'summer':
        return 'bg-yellow-500/10 text-yellow-600 border-yellow-500/20';
      case 'performance':
        return 'bg-red-500/10 text-red-600 border-red-500/20';
      case 'off-road':
        return 'bg-green-500/10 text-green-600 border-green-500/20';
      default:
        return 'bg-primary/10 text-primary border-primary/20';
    }
  };

  return (
    <Link to={`/product/${tyre.id}`} className="group">
      <article className="bg-card rounded-xl overflow-hidden card-hover border border-border">
        {/* Image */}
        <div className="relative aspect-square bg-muted p-6 overflow-hidden">
          <img
            src={tyre.image}
            alt={tyre.name}
            className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
          />
          
          {/* Badges */}
          <div className="absolute top-4 left-4 flex flex-col gap-2">
            {tyre.originalPrice && (
              <Badge className="bg-destructive text-destructive-foreground">
                Sale
              </Badge>
            )}
            <Badge className={`${getCategoryColor(tyre.category)} border`}>
              {tyre.category.charAt(0).toUpperCase() + tyre.category.slice(1)}
            </Badge>
          </div>

          {/* Stock badge */}
          <div className="absolute top-4 right-4">
            {tyre.inStock ? (
              <div className="flex items-center gap-1 bg-green-500/10 text-green-600 px-2 py-1 rounded-full text-xs font-medium">
                <Check className="h-3 w-3" />
                In Stock
              </div>
            ) : (
              <div className="flex items-center gap-1 bg-destructive/10 text-destructive px-2 py-1 rounded-full text-xs font-medium">
                <X className="h-3 w-3" />
                Out of Stock
              </div>
            )}
          </div>

          {/* Quick add button */}
          <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Button
              size="icon"
              onClick={handleAddToCart}
              disabled={!tyre.inStock}
              className="rounded-full shadow-lg"
            >
              <ShoppingCart className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          {/* Brand */}
          <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
            {tyre.brand}
          </p>

          {/* Name */}
          <h3 className="font-heading text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
            {tyre.name}
          </h3>

          {/* Size */}
          <p className="text-sm text-muted-foreground mb-3">{tyre.size}</p>

          {/* Rating */}
          <div className="flex items-center gap-2 mb-4">
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-primary text-primary" />
              <span className="text-sm font-medium">{tyre.rating}</span>
            </div>
            <span className="text-sm text-muted-foreground">
              ({tyre.reviewCount} reviews)
            </span>
          </div>

          {/* Price */}
          <div className="flex items-center gap-3">
            <span className="font-heading text-2xl font-bold text-foreground">
              ${tyre.price.toFixed(2)}
            </span>
            {tyre.originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                ${tyre.originalPrice.toFixed(2)}
              </span>
            )}
          </div>
        </div>
      </article>
    </Link>
  );
};

export default ProductCard;
