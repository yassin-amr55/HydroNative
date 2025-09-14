import bundle1 from '../assets/bundle1.png';
import circleLoofah1 from '../assets/circle loofah1.jpg';
import stick1 from '../assets/stick1.jpg';
import cover1 from '../assets/cover1.jpg';
import dish1 from '../assets/dish1.jpg';
import hand1 from '../assets/hand1.jpg';

export const bundles = [
  {
    id: 9,
    name: "Complete Loofah Bundle",
    price: 25.99,
    originalPrice: 41.95,
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
        price: 5.99,
        originalPrice: 7.99
      },
      {
        id: 8,
        name: "Loofah Stick Scrubber",
        image: stick1,
        price: 7.49,
        originalPrice: 9.49
      },
      {
        id: 4,
        name: "Natural Loofah Cover",
        image: cover1,
        price: 4.99,
        originalPrice: 6.99
      },
      {
        id: 5,
        name: "Dish Loofah Scrubber",
        image: dish1,
        price: 6.49,
        originalPrice: 8.49
      },
      {
        id: 2,
        name: "Loofah Glove",
        image: hand1,
        price: 6.99,
        originalPrice: 8.99
      }
    ],
    stock: 'yes'
  }
];
