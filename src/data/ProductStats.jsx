import loofah from '../assets/loofah.png';
import example from '../assets/example.png';
export const products = [
    {
      id: 1,
      name: "Wireless Bluetooth Earbuds",
      price: 79.99,
      originalPrice: 99.99,
      image: loofah,
      images: [
        loofah,
        example,
        loofah
      ],
      description: "Experience premium sound quality with these wireless Bluetooth earbuds. Features include active noise cancellation, 30-hour battery life, and IPX7 water resistance. Perfect for workouts, commuting, or everyday use.",
      category: "bath",
      delivery: 25,
      reviews: 128,
      features: [
        "Active Noise Cancellation",
        "30-hour battery life",
        "IPX7 water resistance",
        "Touch controls",
        "Fast charging"
      ],
      stock: 'yes'
    },
    {
      id: 2,
      name: "Smart Fitness Watch",
      price: 199.99,
      originalPrice: 249.99,
      image: loofah,
      images: [
        loofah,
        example,
        loofah
      ],
      description: "Track your fitness goals with this advanced smartwatch. Monitor heart rate, sleep patterns, and daily activity. Features GPS tracking, water resistance, and 7-day battery life.",
      category: "kitchen",
      delivery: 5,
      reviews: 89,
      features: [
        "Heart rate monitoring",
        "GPS tracking",
        "Water resistant",
        "7-day battery life",
        "Sleep tracking"
      ],
      stock: 'no'
    },
    {
      id: 3,
      name: "Premium Coffee Mug",
      price: 24.99,
      originalPrice: 29.99,
      image: loofah,
      images: [
        loofah,
        example,
        loofah
      ],
      description: "Start your day right with this premium ceramic coffee mug. Double-wall insulation keeps drinks hot or cold longer. Microwave and dishwasher safe with a comfortable ergonomic handle.",
      category: "kitchen",
      delivery: 12,
      reviews: 56,
      features: [
        "Double-wall insulation",
        "Microwave safe",
        "Dishwasher safe",
        "Ergonomic handle",
        "12oz capacity"
      ],
      stock: 'yes'
    }
  ];