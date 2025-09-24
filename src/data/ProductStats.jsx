// Import all product images directly
import backBelt1 from '../assets/products/back belt1.jpg';
import backBelt2 from '../assets/products/back belt2.jpg';
import backBelt3 from '../assets/products/back belt3.jpg';
import backBelt4 from '../assets/products/back belt4.jpg';

import hand1 from '../assets/products/hand1.jpg';
import hand2 from '../assets/products/hand2.jpg';
import hand3 from '../assets/products/hand3.jpg';
import hand4 from '../assets/products/hand4.jpg';

import circleLoofah1 from '../assets/products/circle loofah1.jpg';
import circleLoofah2 from '../assets/products/circle loofah2.jpg';
import circleLoofah3 from '../assets/products/circle loofah3.jpg';
import circleLoofah4 from '../assets/products/circle loofah4.jpg';

import cover1 from '../assets/products/cover1.jpg';
import cover2 from '../assets/products/cover2.jpg';
import cover3 from '../assets/products/cover3.jpg';
import cover4 from '../assets/products/cover4.jpg';

import dish1 from '../assets/products/dish1.jpg';
import dish2 from '../assets/products/dish2.jpg';
import dish3 from '../assets/products/dish3.jpg';
import dish4 from '../assets/products/dish4.jpg';

import raw1 from '../assets/products/raw1.jpg';
import raw2 from '../assets/products/raw2.jpg';
import raw3 from '../assets/products/raw3.jpg';
import raw4 from '../assets/products/raw4.jpg';

import squareLoofah1 from '../assets/products/square loofah1.jpg';
import squareLoofah2 from '../assets/products/square loofah2.jpg';
import squareLoofah3 from '../assets/products/square loofah3.jpg';
import squareLoofah4 from '../assets/products/square loofah4.jpg';

import stick1 from '../assets/products/stick1.jpg';
import stick2 from '../assets/products/stick2.jpg';
import stick3 from '../assets/products/stick3.jpg';
import stick4 from '../assets/products/stick4.jpg';

import { prices, originalPrices } from './Prices.jsx';

export const products = [
  {
    id: 1,
    name: "Back Belt Massager Loofah",
    price: prices.backBelt,
    originalPrice: originalPrices.backBelt,
    image: backBelt3, // Use the 3rd image as main
    images: [backBelt1, backBelt2, backBelt3, backBelt4],
    description: "Indulge in a soothing back massage with this natural loofah belt. Designed to fit comfortably around your back, it provides gentle exfoliation and massage while you shower. Perfect for relieving tension and promoting healthy skin.",
    category: ["bath", "sale", "new"],
    delivery: 25,
    reviews: 128,
    reviewData: [
      {
        name: "Alex Johnson",
        profileImage: "https://i.pravatar.cc/100?u=alex.johnson",
        rating: 5,
        comment: "Absolutely love this back belt massager! It feels amazing on my skin and really helps with tension relief."
      },
      {
        name: "Sarah Williams",
        profileImage: "https://ui-avatars.com/api/?name=Sarah+Williams&background=random&size=100",
        rating: 4,
        comment: "Great quality and very comfortable to use. The natural exfoliation is gentle yet effective."
      },
      {
        name: "Mike Chen",
        profileImage: "https://i.pravatar.cc/100?u=mike.chen",
        rating: 5,
        comment: "Perfect for my daily shower routine. Highly recommend for anyone looking for natural skin care."
      }
    ],
    features: [
      "Natural exfoliation",
      "Gentle massage",
      "Fits comfortably",
      "Promotes healthy skin",
      "Easy to use"
    ],
    stock: 'yes'
  },
  {
    id: 2,
    name: "Loofah glove",
    price: prices.hand,
    originalPrice: originalPrices.hand,
    image: hand1,
    images: [hand1, hand2, hand3, hand4],
    description: "Achieve smooth, exfoliated skin with this comfortable loofah glove. Perfect for gentle scrubbing of hands, body, or even light kitchen use. Made from natural fibers for effective yet kind exfoliation.",
    category: ["kitchen", "sale", "new"],
    delivery: 5,
    reviews: 89,
    reviewData: [
      {
        name: "Emily Davis",
        profileImage: "https://ui-avatars.com/api/?name=Emily+Davis&background=random&size=100",
        rating: 4,
        comment: "This loofah glove is perfect for gentle exfoliation. Very comfortable and easy to use in the shower."
      },
      {
        name: "John Smith",
        profileImage: "https://i.pravatar.cc/100?u=john.smith",
        rating: 5,
        comment: "Excellent quality! The natural fibers feel great on the skin and it's very versatile."
      },
      {
        name: "Lisa Brown",
        profileImage: "https://ui-avatars.com/api/?name=Lisa+Brown&background=random&size=100",
        rating: 4,
        comment: "Love how soft yet effective this glove is. Great for daily use and easy to clean."
      }
    ],
    features: [
      "Gentle exfoliation",
      "Comfortable fit",
      "Natural fibers",
      "Versatile use",
      "Easy to clean"
    ],
    stock: 'yes'
  },
  {
    id: 3,
    name: "Round Body Loofah Scrubber",
    price: prices.circleLoofah,
    originalPrice: originalPrices.circleLoofah,
    image: circleLoofah1,
    images: [circleLoofah1, circleLoofah2, circleLoofah3, circleLoofah4],
    description: "Achieve thorough body exfoliation with this round loofah scrubber. Its circular shape provides excellent grip and coverage for effective scrubbing. Made from natural fibers for a gentle yet invigorating cleanse.",
    category: ["bath", "sale"],
    delivery: 12,
    reviews: 56,
    reviewData: [
      {
        name: "David Wilson",
        profileImage: "https://i.pravatar.cc/100?u=david.wilson",
        rating: 5,
        comment: "This round scrubber is fantastic! The grip is excellent and it provides a thorough clean."
      },
      {
        name: "Anna Taylor",
        profileImage: "https://ui-avatars.com/api/?name=Anna+Taylor&background=random&size=100",
        rating: 4,
        comment: "Love the invigorating cleanse this provides. Very durable and well-made."
      },
      {
        name: "Robert Lee",
        profileImage: "https://i.pravatar.cc/100?u=robert.lee",
        rating: 5,
        comment: "Perfect for my daily routine. The natural fibers feel great on the skin."
      }
    ],
    features: [
      "Natural fibers",
      "Excellent grip",
      "Thorough exfoliation",
      "Invigorating cleanse",
      "Durable design"
    ],
    stock: 'yes'
  },
  {
    id: 4,
    name: "Natural Loofah Cover",
    price: prices.cover,
    originalPrice: originalPrices.cover,
    image: cover1,
    images: [cover1, cover2, cover3, cover4],
    description: "Protect and preserve your natural loofah with this durable cover. Made from breathable fabric, it keeps your loofah dry and hygienic between uses. Easy to clean and machine washable.",
    category: ["bath", "sale"],
    delivery: 10,
    reviews: 42,
    reviewData: [
      {
        name: "Jennifer Martinez",
        profileImage: "https://ui-avatars.com/api/?name=Jennifer+Martinez&background=random&size=100",
        rating: 4,
        comment: "This cover is perfect for keeping my loofah dry and clean. Very breathable and machine washable."
      },
      {
        name: "Kevin Brown",
        profileImage: "https://i.pravatar.cc/100?u=kevin.brown",
        rating: 5,
        comment: "Great quality cover! It really helps preserve the loofah and is very durable."
      },
      {
        name: "Michelle Davis",
        profileImage: "https://ui-avatars.com/api/?name=Michelle+Davis&background=random&size=100",
        rating: 4,
        comment: "Love how hygienic this cover keeps everything. Easy to use and clean."
      }
    ],
    features: [
      "Breathable fabric",
      "Machine washable",
      "Durable design",
      "Keeps loofah dry",
      "Easy to use"
    ],
    stock: 'yes'
  },
  {
    id: 5,
    name: "Dish Loofah Scrubber",
    price: prices.dish,
    originalPrice: originalPrices.dish,
    image: dish1,
    images: [dish1, dish2, dish3, dish4],
    description: "Tackle tough kitchen messes with this eco-friendly dish loofah scrubber. Naturally abrasive yet gentle on surfaces, perfect for scrubbing pots, pans, and dishes without harsh chemicals.",
    category: ["kitchen", "sale"],
    delivery: 8,
    reviews: 73,
    reviewData: [
      {
        name: "Thomas Anderson",
        profileImage: "https://i.pravatar.cc/100?u=thomas.anderson",
        rating: 5,
        comment: "Excellent for tough kitchen messes! Eco-friendly and very effective without damaging surfaces."
      },
      {
        name: "Rachel Green",
        profileImage: "https://ui-avatars.com/api/?name=Rachel+Green&background=random&size=100",
        rating: 4,
        comment: "Love the natural abrasive quality. Perfect for daily dish washing."
      },
      {
        name: "Mark Johnson",
        profileImage: "https://i.pravatar.cc/100?u=mark.johnson",
        rating: 5,
        comment: "This scrubber is durable and chemical-free. Highly recommend for eco-conscious cleaning."
      }
    ],
    features: [
      "Eco-friendly material",
      "Naturally abrasive",
      "Gentle on surfaces",
      "Chemical-free cleaning",
      "Durable and long-lasting"
    ],
    stock: 'yes'
  },
  {
    id: 6,
    name: "Raw Natural Loofah",
    price: prices.raw,
    originalPrice: originalPrices.raw,
    image: raw1,
    images: [raw1, raw2, raw3, raw4],
    description: "Get back to basics with this raw natural loofah. Unprocessed and pure, it provides a gentle exfoliation for your skin. Perfect for those seeking a natural, chemical-free bathing experience.",
    category: ["bath", "sale"],
    delivery: 15,
    reviews: 61,
    reviewData: [
      {
        name: "Sophie Wilson",
        profileImage: "https://ui-avatars.com/api/?name=Sophie+Wilson&background=random&size=100",
        rating: 5,
        comment: "Absolutely love this raw natural loofah! So pure and gentle on the skin."
      },
      {
        name: "Daniel Lee",
        profileImage: "https://i.pravatar.cc/100?u=daniel.lee",
        rating: 4,
        comment: "Perfect for a chemical-free bathing experience. Very natural and effective."
      },
      {
        name: "Emma Taylor",
        profileImage: "https://ui-avatars.com/api/?name=Emma+Taylor&background=random&size=100",
        rating: 5,
        comment: "This is exactly what I was looking for - unprocessed and pure. Great quality!"
      }
    ],
    features: [
      "100% natural",
      "Unprocessed",
      "Gentle exfoliation",
      "Chemical-free",
      "Eco-friendly"
    ],
    stock: 'yes'
  },
  {
    id: 7,
    name: "Square Loofah Sponge",
    price: prices.squarLoofah,
    originalPrice: originalPrices.squarLoofah,
    image: squareLoofah1,
    images: [squareLoofah1, squareLoofah2, squareLoofah3, squareLoofah4],
    description: "Experience deep cleansing with this square loofah sponge. Its unique shape allows for better grip and coverage, making it ideal for thorough body scrubbing and massage.",
    category: ["bath", "sale"],
    delivery: 20,
    reviews: 95,
    reviewData: [
      {
        name: "Chris Martinez",
        profileImage: "https://i.pravatar.cc/100?u=chris.martinez",
        rating: 5,
        comment: "The square shape provides excellent grip and coverage. Perfect for deep cleansing!"
      },
      {
        name: "Amanda White",
        profileImage: "https://ui-avatars.com/api/?name=Amanda+White&background=random&size=100",
        rating: 4,
        comment: "Love the unique design and how well it works for massage. Very durable."
      },
      {
        name: "Ryan Chen",
        profileImage: "https://i.pravatar.cc/100?u=ryan.chen",
        rating: 5,
        comment: "This sponge is fantastic for thorough body scrubbing. Highly recommend!"
      }
    ],
    features: [
      "Unique square shape",
      "Better grip",
      "Thorough coverage",
      "Deep cleansing",
      "Massage-friendly"
    ],
    stock: 'yes'
  },
  {
    id: 8,
    name: "Loofah Stick Scrubber",
    price: prices.stick,
    originalPrice: originalPrices.stick,
    image: stick1,
    images: [stick1, stick2, stick3, stick4],
    description: "Reach those hard-to-get spots with this convenient loofah stick scrubber. Perfect for back scrubbing or cleaning tight spaces, combining natural exfoliation with ergonomic design.",
    category: ["bath", "sale", "new"],
    delivery: 18,
    reviews: 87,
    reviewData: [
      {
        name: "Jessica Brown",
        profileImage: "https://ui-avatars.com/api/?name=Jessica+Brown&background=random&size=100",
        rating: 5,
        comment: "Perfect for reaching hard-to-get spots! The ergonomic design is very convenient."
      },
      {
        name: "Andrew Davis",
        profileImage: "https://i.pravatar.cc/100?u=andrew.davis",
        rating: 4,
        comment: "Great for back scrubbing. Natural exfoliation feels wonderful."
      },
      {
        name: "Nicole Wilson",
        profileImage: "https://ui-avatars.com/api/?name=Nicole+Wilson&background=random&size=100",
        rating: 5,
        comment: "Love this stick scrubber! Versatile and very well designed."
      }
    ],
    features: [
      "Ergonomic design",
      "Reaches hard spots",
      "Natural exfoliation",
      "Convenient handle",
      "Versatile use"
    ],
    stock: 'yes'
  }
];
