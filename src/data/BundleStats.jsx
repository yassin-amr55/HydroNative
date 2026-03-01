import bundle1 from '../assets/bundle1.png';
import circleLoofah1 from '../assets/products/circle loofah1.jpg';
import stick1 from '../assets/products/stick1.jpg';
import cover1 from '../assets/products/cover1.jpg';
import dish1 from '../assets/products/dish1.jpg';
import hand1 from '../assets/products/hand1.jpg';
import { prices } from './Prices.jsx';
let bundleOnePrice = prices.circleLoofah + prices.stick + prices.cover + prices.dish + prices.hand;
export const bundles = [
  {
    id: 1,
    name: "Complete Loofah Bundle",
    price: (bundleOnePrice * 0.8).toFixed(2),
    originalPrice: bundleOnePrice.toFixed(2),
    image: bundle1,
    images: [bundle1],
    description: "Experience the complete HydroNative lifestyle with our Ultimate Loofah Collection! This carefully curated bundle brings together our five most popular products, creating a comprehensive natural care system for your entire home. Save 20% while transforming your daily routines into eco-friendly, spa-quality experiences.",
    longDescription: "Why buy separately when you can have it all? Our Complete Loofah Bundle is designed for those who are serious about natural living and sustainable choices. From your morning shower to evening kitchen cleanup, every product in this collection works in harmony to deliver exceptional results. This bundle makes an excellent gift for eco-conscious friends, newlyweds setting up their first home, or anyone looking to make the switch to natural products. With free shipping and our satisfaction guarantee, there's never been a better time to go all-natural.",
    benefits: [
      "Save 20% compared to buying items individually",
      "Complete home solution - bath and kitchen covered",
      "Perfect starter kit for natural living beginners",
      "Makes an impressive, thoughtful gift",
      "Free shipping on this bundle",
      "All products work together for consistent quality",
      "Reduces plastic waste across your entire home"
    ],
    whatsIncluded: [
      "Round Body Loofah Scrubber - Your daily exfoliation essential",
      "Loofah Stick Scrubber - Reach every spot with ease",
      "Natural Loofah Cover - Keep your loofahs fresh and hygienic",
      "Dish Loofah Scrubber - Eco-friendly kitchen cleaning power",
      "Loofah Glove - Versatile care for body and light cleaning"
    ],
    perfectFor: [
      "Anyone transitioning to zero-waste lifestyle",
      "New homeowners or apartment dwellers",
      "Thoughtful gifts for environmentally conscious friends",
      "Spa enthusiasts who want professional results at home",
      "Families looking to reduce plastic consumption"
    ],
    category: ["bundles"],
    delivery: 30,
    reviews: 0,
    contents: [
      {
        id: 3,
        name: "Round Body Loofah Scrubber",
        image: circleLoofah1,
        price: prices.circleLoofah
      },
      {
        id: 8,
        name: "Loofah Stick Scrubber",
        image: stick1,
        price: prices.stick
      },
      {
        id: 4,
        name: "Natural Loofah Cover",
        image: cover1,
        price: prices.cover
      },
      {
        id: 5,
        name: "Dish Loofah Scrubber",
        image: dish1,
        price: prices.dish
      },
      {
        id: 2,
        name: "Loofah Glove",
        image: hand1,
        price: prices.hand
      }
    ],
    stock: 'yes'
  }
];
