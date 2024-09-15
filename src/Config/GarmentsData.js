import lehengaImage from '../Views/Garments/GarmentsImages/lehenga.jpg';
import lehengaImage2 from '../Views/Garments/GarmentsImages/lehenga2.jpg';
import lehengaImage3 from '../Views/Garments/GarmentsImages/lehenga3.jpeg';
import formalWearImage from '../Views/Garments/GarmentsImages/formalwere.jpg';
import formalWearImage2 from '../Views/Garments/GarmentsImages/formalwere2.jpeg';
import formalWearImage3 from '../Views/Garments/GarmentsImages/formalwere3.jpeg';
import bridalGownImage from '../Views/Garments/GarmentsImages/bridalgown.jpeg';
import bridalGownImage2 from '../Views/Garments/GarmentsImages/bridalgown2.jpeg';
import bridalGownImage3 from '../Views/Garments/GarmentsImages/bridalgown3.jpeg';
import sherwaniImage from '../Views/Garments/GarmentsImages/sherwani.jpeg';
import sherwaniImage2 from '../Views/Garments/GarmentsImages/sherwani2.jpg';
import sherwaniImage3 from '../Views/Garments/GarmentsImages/sherwani3.jpeg';
import suitImage from '../Views/Garments/GarmentsImages/suit.jpg';
import suitImage2 from '../Views/Garments/GarmentsImages/suit2.jpeg';
import suitImage3 from '../Views/Garments/GarmentsImages/suit3.jpeg';
import kurtaImage from '../Views/Garments/GarmentsImages/kurta.jpeg';
import kurtaImage2 from '../Views/Garments/GarmentsImages/kurta2.jpeg';
import kurtaImage3 from '../Views/Garments/GarmentsImages/kurta3.jpeg';

const WearItems = [
  {
    id: 1,
    name: 'Gorgeous Red Lehenga',
    image: lehengaImage,
    description: 'Traditional Lehenga for weddings and special occasions.',
    fullDescription: 'Stunning red lehenga with intricate embroidery, perfect for weddings and festive celebrations.',
    finalPrice: 1500 - (1500 * 0.10),
    inStock: true,
  },
  {
    id: 2,
    name: 'Refined Walima Outfit',
    image: lehengaImage2,
    description: 'Perfect for making a statement on your special day.',
    fullDescription: 'Elegant Walima outfit featuring delicate work and high-end fabric for a classy look.',
    finalPrice: 1500 - (1500 * 0.15),
    inStock: true,
  },
  {
    id: 3,
    name: 'Classic Lehenga',
    image: lehengaImage3,
    description: 'Traditional Lehenga for weddings and special occasions.',
    fullDescription: 'Classic lehenga with traditional embellishments, ideal for weddings or festive wear.',
    finalPrice: 1500 - (1500 * 0.20),
    inStock: false,
  },
  {
    id: 4,
    name: 'Elegant Formal Wear',
    image: formalWearImage,
    description: 'Elegant formal wear for business events.',
    fullDescription: 'Sleek and professional formal wear, ideal for corporate meetings and business events.',
    finalPrice: 1000 - (1000 * 0.12),
    inStock: true,
  },
  {
    id: 5,
    name: 'Stylish Formal Wear',
    image: formalWearImage2,
    description: 'Elegant formal wear for business events.',
    fullDescription: 'Stylish and modern formal wear that enhances your professional appearance.',
    finalPrice: 1000 - (1000 * 0.10),
    inStock: true,
  },
  {
    id: 6,
    name: 'Formal Wear',
    image: formalWearImage3,
    description: 'Elegant formal wear for business events.',
    fullDescription: 'Sophisticated formal wear for important business meetings and formal occasions.',
    finalPrice: 1000 - (1000 * 0.15),
    inStock: false,
  },
  {
    id: 7,
    name: 'Stunning Bridal Gown',
    image: bridalGownImage,
    description: 'Stunning bridal gown for your special day.',
    fullDescription: 'Beautiful bridal gown with elegant detailing, perfect for your wedding day.',
    finalPrice: 5000 - (5000 * 0.20),
    inStock: true,
  },
  {
    id: 8,
    name: 'Elegant Bridal Gown',
    image: bridalGownImage2,
    description: 'Stunning bridal gown for your special day.',
    fullDescription: 'Elegant and refined bridal gown with intricate lace and detailing.',
    finalPrice: 5000 - (5000 * 0.25),
    inStock: false,
  },
  {
    id: 9,
    name: 'Classic Bridal Gown',
    image: bridalGownImage3,
    description: 'Stunning bridal gown for your special day.',
    fullDescription: 'Classic bridal gown with timeless design, perfect for traditional weddings.',
    finalPrice: 5000 - (5000 * 0.30),
    inStock: false,
  },
  {
    id: 10,
    name: 'Royal Sherwani',
    image: sherwaniImage,
    description: 'Royal sherwani for weddings and ceremonies.',
    fullDescription: 'Luxurious sherwani with royal embellishments, perfect for weddings and cultural ceremonies.',
    finalPrice: 2000 - (2000 * 0.18),
    inStock: true,
  },
  {
    id: 11,
    name: 'Classic Sherwani',
    image: sherwaniImage2,
    description: 'Royal sherwani for weddings and ceremonies.',
    fullDescription: 'Classic sherwani with elegant design and rich fabric for traditional ceremonies.',
    finalPrice: 2000 - (2000 * 0.20),
    inStock: true,
  },
  {
    id: 12,
    name: 'Elegant Sherwani',
    image: sherwaniImage3,
    description: 'Royal sherwani for weddings and ceremonies.',
    fullDescription: 'Elegant sherwani with intricate embroidery and rich fabrics, ideal for special events.',
    finalPrice: 2000 - (2000 * 0.15),
    inStock: false,
  },
  {
    id: 13,
    name: 'Classic Suit',
    image: suitImage,
    description: 'Classic suit for formal and business events.',
    fullDescription: 'Sharp and tailored suit, perfect for business meetings and formal events.',
    finalPrice: 1200 - (1200 * 0.10),
    inStock: true,
  },
  {
    id: 14,
    name: 'Elegant Suit',
    image: suitImage2,
    description: 'Classic suit for formal and business events.',
    fullDescription: 'Elegant and professional suit, ideal for office wear and important meetings.',
    finalPrice: 1200 - (1200 * 0.20),
    inStock: false,
  },
  {
    id: 15,
    name: 'Refined Suit',
    image: suitImage3,
    description: 'Classic suit for formal and business events.',
    fullDescription: 'Refined suit with modern design, suitable for high-end corporate occasions.',
    finalPrice: 1200 - (1200 * 0.15),
    inStock: false,
  },
  {
    id: 16,
    name: 'Kurta Pajama',
    image: kurtaImage,
    description: 'Comfortable and stylish kurta pajama for casual occasions.',
    fullDescription: 'Light and comfortable kurta pajama set for casual and semi-formal events.',
    finalPrice: 800 - (800 * 0.12),
    inStock: true,
  },
  {
    id: 17,
    name: 'Classic Kurta Pajama',
    image: kurtaImage2,
    description: 'Comfortable and stylish kurta pajama for casual occasions.',
    fullDescription: 'Classic kurta pajama with stylish design, perfect for casual occasions and festive wear.',
    finalPrice: 800 - (800 * 0.15),
    inStock: true,
  },
  {
    id: 18,
    name: 'Stylish Kurta Pajama',
    image: kurtaImage3,
    description: 'Comfortable and stylish kurta pajama for casual occasions.',
    fullDescription: 'Stylish and modern kurta pajama, suitable for semi-formal events and casual wear.',
    finalPrice: 800 - (800 * 0.10),
    inStock: false,
  },
];

export default WearItems;
