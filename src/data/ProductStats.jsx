import backBelt1 from '../assets/back belt1.jpg';
import backBelt2 from '../assets/back belt2.jpg';
import backBelt3 from '../assets/back belt3.jpg';
import circleLoofah1 from '../assets/circle loofah1.jpg';
import circleLoofah2 from '../assets/circle loofah2.jpg';
import circleLoofah3 from '../assets/circle loofah3.jpg';
import cover1 from '../assets/cover1.jpg';
import cover2 from '../assets/cover2.jpg';
import cover3 from '../assets/cover3.jpg';
import dish1 from '../assets/dish1.jpg';
import dish2 from '../assets/dish2.jpg';
import dish3 from '../assets/dish3.jpg';
import hand1 from '../assets/hand1.jpg';
import hand2 from '../assets/hand2.jpg';
import hand3 from '../assets/hand3.jpg';
import raw1 from '../assets/raw1.jpg';
import raw2 from '../assets/raw2.jpg';
import raw3 from '../assets/raw3.jpg';
import squareLoofah1 from '../assets/square loofah1.jpg';
import squareLoofah2 from '../assets/square loofah2.jpg';
import squareLoofah3 from '../assets/square loofah3.jpg';
import stick1 from '../assets/stick1.jpg';
import stick2 from '../assets/stick2.jpg';
import stick3 from '../assets/stick3.jpg';
export const products = [
    {
      id: 1,
      name: "Back Belt Massager Loofah",
      price: 7.99,
      originalPrice: 9.99,
      image: backBelt3,
      images: [
        backBelt1,
        backBelt2,
        backBelt3
      ],
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
      price: 6.99,
      originalPrice: 8.99,
      image: hand1,
      images: [
        hand1,
        hand2,
        hand3
      ],
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
      price: 5.99,
      originalPrice: 7.99,
      image: circleLoofah1,
      images: [
        circleLoofah1,
        circleLoofah2,
        circleLoofah3
      ],
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
      price: 4.99,
      originalPrice: 6.99,
      image: cover1,
      images: [
        cover1,
        cover2,
        cover3
      ],
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
      price: 6.49,
      originalPrice: 8.49,
      image: dish1,
      images: [
        dish1,
        dish2,
        dish3
      ],
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
      price: 3.99,
      originalPrice: 5.99,
      image: raw1,
      images: [
        raw1,
        raw2,
        raw3
      ],
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
      price: 5.49,
      originalPrice: 7.49,
      image: squareLoofah1,
      images: [
        squareLoofah1,
        squareLoofah2,
        squareLoofah3
      ],
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
      price: 7.49,
      originalPrice: 9.49,
      image: stick1,
      images: [
        stick1,
        stick2,
        stick3
      ],
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