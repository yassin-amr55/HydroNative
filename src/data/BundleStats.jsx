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
    description: "Get the ultimate loofah experience with our complete bundle! This collection includes all essential loofah products for bath and kitchen use, offering great value and convenience.",
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
