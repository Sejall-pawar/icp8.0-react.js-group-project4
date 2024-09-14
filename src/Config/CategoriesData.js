
// categoriesData.js
const CategoriesData = [
  {
    id: 1,
    name: "Laptops",
    description: "MacBook Air Intel Core i5 processor",
    fullDescription: "MacBook Air Intel Core i5 processor , 5th Gen - ( 8 GB / 128 GB SSD / Mac High Sierra OS , 13.3 inch, Silver )",
    priceInRupees: 90000, // Original price in INR
    discountPercent: 10, // 10% discount
    finalPrice: 90000 - (90000 * 0.10), // Final price after discount
    sizes: ["13-inch", "15-inch", "17-inch"],
    priceRange: "₹50,000 - ₹2,00,000",
    image: "https://p.rmjo.in/moodShot/r60nycmh-1024x512.webp",
    inStock: true,
  },
  {
    id: 2,
    name: "Fridge",
    description: "Single Door Fridge (210 Litre)",
    fullDescription: "Single Door Fridge (210 Litre) | Capacity/Size : 201-210 L | Whirlpool/Haier/Samsung",
    priceInRupees: 60000, // Original price in INR
    discountPercent: 15, // 15% discount
    finalPrice: 60000 - (60000 * 0.15), // Final price after discount
    sizes: ["6.1 inches", "6.5 inches"],
    priceRange: "₹20,000 - ₹1,50,000",
    image: "https://p.rmjo.in/moodShot/x3hc5mp7-1024x512.webp",
    inStock: false, // Out of stock
  },
  {
    id: 3,
    name: "Water Purifier",
    description: "Livpure Envy Alkaline Water Purifier",
    fullDescription: "Livpure Envy Alkaline Water Purifier | Capacity/Size : 8L | Purification Capacity: Upto 15 L/Hr | Duty Cycle (Max): Upto 75 L/Day",
    priceInRupees: 45000, // Original price in INR
    discountPercent: 20, // 20% discount
    finalPrice: 45000 - (45000 * 0.20), // Final price after discount
    sizes: ["10.5 inches", "12 inches"],
    priceRange: "₹15,000 - ₹1,00,000",
    image: "https://p.rmjo.in/productSquare/r257mxpc-500x500.webp",
    inStock: true,
  },
  {
    id: 4,
    name: "Freezer",
    description: "Deep Freezer (100L)",
    fullDescription: "Deep Freezer (100L) | Capacity/Size : 100 L | Brand : Haier | Manual defrosting | Effective for perishable foods",
    priceInRupees: 15000, // Original price in INR
    discountPercent: 5, // 5% discount
    finalPrice: 15000 - (15000 * 0.05), // Final price after discount
    sizes: ["Over-ear", "On-ear"],
    priceRange: "₹5,000 - ₹50,000",
    image: "https://p.rmjo.in/moodShot/0di4miwp-1024x512.webp",
    inStock: true,
  },
  {
    id: 5,
    name: "Microwave",
    description: "Convection Microwave 20L",
    fullDescription: "Convection Microwave 20L | Capacity/Size : 20L | Brand: Haier/Croma or Equivalent | Used for Baking, Grilling, Heating & Cooking",
    priceInRupees: 20000, // Original price in INR
    discountPercent: 25, // 25% discount
    finalPrice: 20000 - (20000 * 0.25), // Final price after discount
    sizes: ["40mm", "44mm"],
    priceRange: "₹10,000 - ₹40,000",
    image: "https://p.rmjo.in/moodShot/3065ehc7-1024x512.webp",
    inStock: false,
  },
  {
    id: 6,
    name: "Induction",
    description: "Induction Cooktop",
    fullDescription: "Induction Cooktop | Capacity/Size : 1900W | 6-8 preset cooking menus | Energy saving, quick & efficient heating",
    priceInRupees: 50000, // Original price in INR
    discountPercent: 12, // 12% discount
    finalPrice: 50000 - (50000 * 0.12), // Final price after discount
    sizes: ["Standard", "Pro"],
    priceRange: "₹30,000 - ₹60,000",
    image: "https://p.rmjo.in/moodShot/hd066j7y-1024x512.webp",
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
    name: "Washing Machine",
    description: "Semi Automatic Washing Machine",
    fullDescription: "Semi Automatic Washing Machine | Capacity/Size : 6 Kg | Haier/Godrej/Samsung",
    priceInRupees: 120000, // Original price in INR
    discountPercent: 22, // 22% discount
    finalPrice: 120000 - (120000 * 0.22), // Final price after discount
    sizes: ["Compact", "DSLR", "Mirrorless"],
    priceRange: "₹50,000 - ₹2,50,000",
    image: "https://p.rmjo.in/moodShot/av5p7vsn-1024x512.webp",
    inStock: true,
  },
];

export default CategoriesData;
