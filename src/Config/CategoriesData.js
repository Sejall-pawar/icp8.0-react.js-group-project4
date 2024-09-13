
// categoriesData.js
const CategoriesData = [
  {
    id: 1,
    name: "Laptops",
    description: "High-performance laptops from top brands.",
    fullDescription: "This collection includes laptops with powerful processors, ample storage, and high-resolution displays. Suitable for gaming, office work, and creative professionals.",
    priceInRupees: 90000, // Original price in INR
    discountPercent: 10, // 10% discount
    finalPrice: 90000 - (90000 * 0.10), // Final price after discount
    sizes: ["13-inch", "15-inch", "17-inch"],
    priceRange: "₹50,000 - ₹2,00,000",
    image: "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=400",
    inStock: true,
  },
  {
    id: 2,
    name: "Smartphones",
    description: "Latest smartphones with advanced technology.",
    fullDescription: "Smartphones with high-resolution cameras, 5G connectivity, and powerful batteries.",
    priceInRupees: 60000, // Original price in INR
    discountPercent: 15, // 15% discount
    finalPrice: 60000 - (60000 * 0.15), // Final price after discount
    sizes: ["6.1 inches", "6.5 inches"],
    priceRange: "₹20,000 - ₹1,50,000",
    image: "https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=400",
    inStock: false, // Out of stock
  },
  {
    id: 3,
    name: "Tablets",
    description: "Tablets for all your productivity needs.",
    fullDescription: "Tablets with stylus support, high-definition displays, and large storage options.",
    priceInRupees: 45000, // Original price in INR
    discountPercent: 20, // 20% discount
    finalPrice: 45000 - (45000 * 0.20), // Final price after discount
    sizes: ["10.5 inches", "12 inches"],
    priceRange: "₹15,000 - ₹1,00,000",
    image: "https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?auto=compress&cs=tinysrgb&w=400",
    inStock: true,
  },
  {
    id: 4,
    name: "Headphones",
    description: "Noise-cancelling, high-quality sound headphones.",
    fullDescription: "Headphones with advanced noise-cancellation, long battery life, and comfortable design for extended use.",
    priceInRupees: 15000, // Original price in INR
    discountPercent: 5, // 5% discount
    finalPrice: 15000 - (15000 * 0.05), // Final price after discount
    sizes: ["Over-ear", "On-ear"],
    priceRange: "₹5,000 - ₹50,000",
    image: "https://images.pexels.com/photos/4481252/pexels-photo-4481252.jpeg?auto=compress&cs=tinysrgb&w=400",
    inStock: true,
  },
  {
    id: 5,
    name: "Smartwatches",
    description: "Track your fitness and stay connected with smartwatches.",
    fullDescription: "Smartwatches with fitness tracking, heart rate monitoring, GPS, and customizable watch faces.",
    priceInRupees: 20000, // Original price in INR
    discountPercent: 25, // 25% discount
    finalPrice: 20000 - (20000 * 0.25), // Final price after discount
    sizes: ["40mm", "44mm"],
    priceRange: "₹10,000 - ₹40,000",
    image: "https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg?auto=compress&cs=tinysrgb&w=400",
    inStock: false,
  },
  {
    id: 6,
    name: "Gaming Consoles",
    description: "Next-gen gaming consoles for an immersive experience.",
    fullDescription: "Gaming consoles with 4K resolution, fast loading times, and expansive game libraries.",
    priceInRupees: 50000, // Original price in INR
    discountPercent: 12, // 12% discount
    finalPrice: 50000 - (50000 * 0.12), // Final price after discount
    sizes: ["Standard", "Pro"],
    priceRange: "₹30,000 - ₹60,000",
    image: "https://images.pexels.com/photos/133579/pexels-photo-133579.jpeg?auto=compress&cs=tinysrgb&w=400",
    inStock: true,
  },
  {
    id: 7,
    name: "Televisions",
    description: "Smart TVs with 4K resolution and HDR support.",
    fullDescription: "Smart TVs offering vibrant 4K displays, HDR support, and built-in streaming services.",
    priceInRupees: 75000, // Original price in INR
    discountPercent: 18, // 18% discount
    finalPrice: 75000 - (75000 * 0.18), // Final price after discount
    sizes: ["43-inch", "55-inch", "65-inch"],
    priceRange: "₹30,000 - ₹1,20,000",
    image: "https://images.pexels.com/photos/1682519/pexels-photo-1682519.jpeg?auto=compress&cs=tinysrgb&w=400",
    inStock: false,
  },
  {
    id: 8,
    name: "Cameras",
    description: "Capture every moment with high-quality cameras.",
    fullDescription: "Cameras with high-resolution sensors, optical zoom, and 4K video recording capabilities.",
    priceInRupees: 120000, // Original price in INR
    discountPercent: 22, // 22% discount
    finalPrice: 120000 - (120000 * 0.22), // Final price after discount
    sizes: ["Compact", "DSLR", "Mirrorless"],
    priceRange: "₹50,000 - ₹2,50,000",
    image: "https://images.pexels.com/photos/274973/pexels-photo-274973.jpeg?auto=compress&cs=tinysrgb&w=400",
    inStock: true,
  },
];

export default CategoriesData;
