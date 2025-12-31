import tyre1 from '@/assets/tyre-1.jpg';
import tyre2 from '@/assets/tyre-2.jpg';
import tyre3 from '@/assets/tyre-3.jpg';
import tyre4 from '@/assets/tyre-4.jpg';

export interface Tyre {
  id: string;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: 'all-season' | 'summer' | 'winter' | 'off-road' | 'performance';
  size: string;
  width: number;
  aspectRatio: number;
  rimDiameter: number;
  loadIndex: number;
  speedRating: string;
  inStock: boolean;
  stockQuantity: number;
  rating: number;
  reviewCount: number;
  features: string[];
  description: string;
  vehicleType: 'sedan' | 'suv' | 'truck' | 'sports' | 'all';
}

export const tyres: Tyre[] = [
  {
    id: '1',
    name: 'RoadMaster Pro AS',
    brand: 'TyreMax',
    price: 149.99,
    originalPrice: 179.99,
    image: tyre1,
    category: 'all-season',
    size: '225/45R17',
    width: 225,
    aspectRatio: 45,
    rimDiameter: 17,
    loadIndex: 94,
    speedRating: 'V',
    inStock: true,
    stockQuantity: 24,
    rating: 4.8,
    reviewCount: 342,
    features: ['All-Weather Compound', 'Low Rolling Resistance', 'Enhanced Wet Grip', '60,000 Mile Warranty'],
    description: 'The RoadMaster Pro AS delivers exceptional year-round performance with advanced silica compound technology. Engineered for sedans and coupes, it provides outstanding wet and dry traction while maintaining fuel efficiency.',
    vehicleType: 'sedan',
  },
  {
    id: '2',
    name: 'TerrainForce AT',
    brand: 'RoadKing',
    price: 219.99,
    image: tyre2,
    category: 'off-road',
    size: '265/70R17',
    width: 265,
    aspectRatio: 70,
    rimDiameter: 17,
    loadIndex: 115,
    speedRating: 'T',
    inStock: true,
    stockQuantity: 16,
    rating: 4.7,
    reviewCount: 218,
    features: ['Aggressive Tread Pattern', 'Reinforced Sidewalls', 'Stone Ejectors', 'Mud & Snow Rated'],
    description: 'Built for adventure, the TerrainForce AT conquers any terrain with confidence. Its aggressive tread design provides exceptional off-road capability while maintaining comfortable highway performance.',
    vehicleType: 'suv',
  },
  {
    id: '3',
    name: 'IceGrip Pro Winter',
    brand: 'Nordic Tyres',
    price: 189.99,
    originalPrice: 209.99,
    image: tyre3,
    category: 'winter',
    size: '205/55R16',
    width: 205,
    aspectRatio: 55,
    rimDiameter: 16,
    loadIndex: 91,
    speedRating: 'H',
    inStock: true,
    stockQuantity: 32,
    rating: 4.9,
    reviewCount: 156,
    features: ['3D Sipes Technology', 'Ice Traction Compound', 'Snowflake Certified', 'Quiet Ride'],
    description: 'Experience unmatched winter performance with the IceGrip Pro. Featuring advanced 3D sipe technology and a specialized winter compound, it delivers superior traction on ice and snow.',
    vehicleType: 'sedan',
  },
  {
    id: '4',
    name: 'SpeedMax Ultra',
    brand: 'TyreMax',
    price: 279.99,
    image: tyre4,
    category: 'performance',
    size: '245/40R18',
    width: 245,
    aspectRatio: 40,
    rimDiameter: 18,
    loadIndex: 97,
    speedRating: 'Y',
    inStock: true,
    stockQuantity: 12,
    rating: 4.6,
    reviewCount: 89,
    features: ['High-Speed Stability', 'Track-Ready Compound', 'Enhanced Cornering', 'Reinforced Construction'],
    description: 'Designed for driving enthusiasts, the SpeedMax Ultra delivers exhilarating performance with maximum grip. Perfect for sports cars and high-performance sedans.',
    vehicleType: 'sports',
  },
  {
    id: '5',
    name: 'ComfortRide Touring',
    brand: 'SilentDrive',
    price: 129.99,
    image: tyre1,
    category: 'all-season',
    size: '215/60R16',
    width: 215,
    aspectRatio: 60,
    rimDiameter: 16,
    loadIndex: 95,
    speedRating: 'H',
    inStock: true,
    stockQuantity: 48,
    rating: 4.5,
    reviewCount: 412,
    features: ['Noise Reduction Technology', 'Comfort Optimized', 'Long Tread Life', 'Fuel Efficient'],
    description: 'The ComfortRide Touring prioritizes a smooth, quiet ride without compromising performance. Ideal for daily commuters seeking comfort and reliability.',
    vehicleType: 'sedan',
  },
  {
    id: '6',
    name: 'TruckForce HT',
    brand: 'HeavyHaul',
    price: 259.99,
    image: tyre2,
    category: 'all-season',
    size: '275/65R18',
    width: 275,
    aspectRatio: 65,
    rimDiameter: 18,
    loadIndex: 123,
    speedRating: 'T',
    inStock: false,
    stockQuantity: 0,
    rating: 4.7,
    reviewCount: 167,
    features: ['Heavy Load Capacity', 'Durable Construction', 'Highway Optimized', 'Towing Ready'],
    description: 'Engineered for trucks and heavy-duty vehicles, the TruckForce HT handles heavy loads with ease while providing stable highway performance.',
    vehicleType: 'truck',
  },
  {
    id: '7',
    name: 'SummerSport SS',
    brand: 'TrackMaster',
    price: 199.99,
    originalPrice: 229.99,
    image: tyre4,
    category: 'summer',
    size: '235/45R18',
    width: 235,
    aspectRatio: 45,
    rimDiameter: 18,
    loadIndex: 94,
    speedRating: 'W',
    inStock: true,
    stockQuantity: 20,
    rating: 4.8,
    reviewCount: 203,
    features: ['Summer Compound', 'Precision Handling', 'Short Braking Distance', 'Sport Tuned'],
    description: 'Maximize your summer driving experience with the SummerSport SS. Optimized for warm weather, it delivers exceptional dry and wet grip.',
    vehicleType: 'sports',
  },
  {
    id: '8',
    name: 'ExplorerMax MT',
    brand: 'WildTrail',
    price: 289.99,
    image: tyre2,
    category: 'off-road',
    size: '285/75R16',
    width: 285,
    aspectRatio: 75,
    rimDiameter: 16,
    loadIndex: 126,
    speedRating: 'Q',
    inStock: true,
    stockQuantity: 8,
    rating: 4.9,
    reviewCount: 94,
    features: ['Extreme Off-Road', 'Self-Cleaning Tread', 'Rock Crawling Ready', 'Puncture Resistant'],
    description: 'For serious off-roaders, the ExplorerMax MT is the ultimate mud-terrain tyre. Conquer rocks, mud, and sand with confidence.',
    vehicleType: 'truck',
  },
];

export const categories = [
  { id: 'all-season', name: 'All-Season', description: 'Year-round performance' },
  { id: 'summer', name: 'Summer', description: 'Optimal warm weather grip' },
  { id: 'winter', name: 'Winter', description: 'Ice and snow traction' },
  { id: 'off-road', name: 'Off-Road', description: 'Adventure ready' },
  { id: 'performance', name: 'Performance', description: 'Maximum grip and speed' },
];

export const brands = ['TyreMax', 'RoadKing', 'Nordic Tyres', 'SilentDrive', 'HeavyHaul', 'TrackMaster', 'WildTrail'];
