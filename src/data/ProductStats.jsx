import { importProductImages } from '../utils/imageImporter.js';
import { prices, originalPrices } from './Prices.jsx';

export const products = [
  {
    id: 1,
    name: "Back Belt Massager Loofah",
    price: prices.backBelt,
    originalPrice: originalPrices.backBelt,
    image: importProductImages('back belt')[2], // Use the 3rd image as main
    images: importProductImages('back belt'),
    description: "Indulge in a soothing back massage with this natural loofah belt. Designed to fit comfortably around your back, it provides gentle exfoliation and massage while you shower. Perfect for relieving tension and promoting healthy skin.",
    category: ["bath", "sale", "new"],
    delivery: 25,
    reviews: 128,
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
    image: importProductImages('hand')[0], // Use the 1st image as main
    images: importProductImages('hand'),
    description: "Achieve smooth, exfoliated skin with this comfortable loofah glove. Perfect for gentle scrubbing of hands, body, or even light kitchen use. Made from natural fibers for effective yet kind exfoliation.",
    category: ["kitchen", "sale", "new"],
    delivery: 5,
    reviews: 89,
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
    image: importProductImages('circle loofah')[0], // Use the 1st image as main
    images: importProductImages('circle loofah'),
    description: "Achieve thorough body exfoliation with this round loofah scrubber. Its circular shape provides excellent grip and coverage for effective scrubbing. Made from natural fibers for a gentle yet invigorating cleanse.",
    category: ["bath", "sale"],
    delivery: 12,
    reviews: 56,
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
    image: importProductImages('cover')[0], // Use the 1st image as main
    images: importProductImages('cover'),
    description: "Protect and preserve your natural loofah with this durable cover. Made from breathable fabric, it keeps your loofah dry and hygienic between uses. Easy to clean and machine washable.",
    category: ["bath", "sale"],
    delivery: 10,
    reviews: 42,
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
    image: importProductImages('dish')[0], // Use the 1st image as main
    images: importProductImages('dish'),
    description: "Tackle tough kitchen messes with this eco-friendly dish loofah scrubber. Naturally abrasive yet gentle on surfaces, perfect for scrubbing pots, pans, and dishes without harsh chemicals.",
    category: ["kitchen", "sale"],
    delivery: 8,
    reviews: 73,
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
    image: importProductImages('raw')[0], // Use the 1st image as main
    images: importProductImages('raw'),
    description: "Get back to basics with this raw natural loofah. Unprocessed and pure, it provides a gentle exfoliation for your skin. Perfect for those seeking a natural, chemical-free bathing experience.",
    category: ["bath", "sale"],
    delivery: 15,
    reviews: 61,
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
    image: importProductImages('square loofah')[0], // Use the 1st image as main
    images: importProductImages('square loofah'),
    description: "Experience deep cleansing with this square loofah sponge. Its unique shape allows for better grip and coverage, making it ideal for thorough body scrubbing and massage.",
    category: ["bath", "sale"],
    delivery: 20,
    reviews: 95,
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
    image: importProductImages('stick')[0], // Use the 1st image as main
    images: importProductImages('stick'),
    description: "Reach those hard-to-get spots with this convenient loofah stick scrubber. Perfect for back scrubbing or cleaning tight spaces, combining natural exfoliation with ergonomic design.",
    category: ["bath", "sale", "new"],
    delivery: 18,
    reviews: 87,
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
