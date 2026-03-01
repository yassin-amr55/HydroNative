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
    description: "Transform your daily shower into a spa experience with our Egyptian Back Belt Massager Loofah. This premium natural loofah belt is expertly crafted to reach every inch of your back, providing deep exfoliation and soothing massage therapy. The ergonomic design features sturdy handles for optimal grip and control, allowing you to adjust pressure and target specific areas with ease.",
    longDescription: "Made from 100% natural Egyptian loofah fibers, this back belt combines ancient wellness traditions with modern convenience. The natural texture gently removes dead skin cells, unclogs pores, and stimulates blood circulation, leaving your skin refreshed and rejuvenated. Perfect for relieving muscle tension after a long day or preparing your skin for moisturizer absorption.",
    benefits: [
      "Improves blood circulation and lymphatic drainage",
      "Reduces back acne and prevents breakouts",
      "Relieves muscle tension and stress",
      "Promotes smoother, healthier-looking skin",
      "Enhances absorption of body lotions and oils",
      "100% biodegradable and eco-friendly"
    ],
    careInstructions: [
      "Rinse thoroughly after each use and squeeze out excess water",
      "Hang in a well-ventilated area to air dry completely",
      "Soak in warm water for 2-3 minutes before first use to soften",
      "Replace every 3-4 weeks for optimal hygiene",
      "Machine wash on gentle cycle or hand wash with mild soap weekly",
      "Avoid leaving in standing water to prevent mildew"
    ],
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
    description: "Experience the perfect balance of convenience and effectiveness with our Natural Loofah Glove. This versatile exfoliating glove fits comfortably on your hand, giving you complete control over your cleansing routine. Whether you're scrubbing away dead skin in the shower or tackling kitchen cleanup, this multi-purpose glove delivers exceptional results.",
    longDescription: "Crafted from premium Egyptian loofah fibers, this glove provides gentle yet thorough exfoliation that reveals softer, brighter skin. The snug fit ensures the glove stays securely in place while you work, and the natural texture creates a rich lather with minimal soap. Perfect for sensitive skin, daily body care, or eco-friendly kitchen cleaning.",
    benefits: [
      "Provides precise control for targeted exfoliation",
      "Creates rich lather with less soap or cleanser",
      "Gentle enough for daily use on all skin types",
      "Versatile for both bath and light kitchen tasks",
      "Improves skin texture and reduces ingrown hairs",
      "Naturally antimicrobial and quick-drying"
    ],
    careInstructions: [
      "Rinse thoroughly after each use and wring out excess water",
      "Hang to dry in a well-ventilated area",
      "Soak in warm water before first use to soften fibers",
      "Hand wash with mild soap weekly or machine wash in a mesh bag",
      "Replace every 4-6 weeks depending on usage frequency",
      "Store in a dry place between uses"
    ],
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
    description: "Elevate your bathing ritual with our classic Round Body Loofah Scrubber. This timeless design has been perfected over generations, offering the ideal balance of exfoliation and comfort. The ergonomic circular shape fits perfectly in your palm, providing excellent grip even when wet, while the generous surface area ensures efficient full-body coverage.",
    longDescription: "Sourced from the finest Egyptian loofah plants, this round scrubber features a dense, fibrous texture that creates an invigorating cleansing experience. The natural fibers work to buff away dead skin cells, unclog pores, and stimulate circulation, revealing the radiant, healthy skin beneath. Its durable construction ensures long-lasting performance, making it an essential addition to your daily wellness routine.",
    benefits: [
      "Promotes even skin tone and texture",
      "Helps prevent and reduce keratosis pilaris (bumpy skin)",
      "Prepares skin for better tanning results",
      "Reduces the appearance of cellulite with regular use",
      "Creates luxurious lather with minimal product",
      "Naturally biodegradable and sustainable"
    ],
    careInstructions: [
      "Rinse thoroughly after each use to remove soap residue",
      "Squeeze out excess water and hang to dry",
      "Soak in warm water for 3-5 minutes before first use",
      "Sanitize weekly by soaking in diluted vinegar solution (1:3 ratio)",
      "Replace every 3-4 weeks for best hygiene",
      "Avoid storing in enclosed, damp spaces"
    ],
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
    description: "Extend the life of your natural loofah with our premium Protective Cover. This innovative accessory is designed to keep your loofah fresh, hygienic, and ready for use. Made from breathable, quick-drying fabric, it prevents moisture buildup while allowing proper air circulation, ensuring your loofah stays clean and mildew-free between uses.",
    longDescription: "Our loofah cover features a smart design with a convenient drawstring closure and hanging loop for easy storage. The breathable mesh construction promotes rapid drying while protecting your loofah from bathroom contaminants. Machine washable and durable, this cover is an essential investment in maintaining the quality and longevity of your natural loofah products.",
    benefits: [
      "Extends loofah lifespan by up to 50%",
      "Prevents mildew and bacterial growth",
      "Keeps bathroom looking tidy and organized",
      "Protects loofah from dust and contaminants",
      "Quick-drying breathable material",
      "Eco-friendly and reusable"
    ],
    careInstructions: [
      "Machine wash with regular laundry on warm cycle",
      "Air dry or tumble dry on low heat",
      "Wash weekly or as needed to maintain freshness",
      "Ensure loofah is squeezed dry before placing in cover",
      "Replace cover every 6 months for optimal hygiene",
      "Do not use fabric softener as it reduces breathability"
    ],
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
    description: "Make the switch to sustainable kitchen cleaning with our Natural Dish Loofah Scrubber. This eco-friendly alternative to synthetic sponges delivers powerful cleaning performance without the environmental guilt. The naturally abrasive texture cuts through grease and grime effortlessly, while remaining gentle enough for non-stick cookware and delicate dishes.",
    longDescription: "Grown and harvested from Egyptian loofah plants, this kitchen scrubber is 100% biodegradable and compostable. Unlike plastic sponges that shed microplastics and harbor bacteria, our natural loofah is naturally antimicrobial and can be sanitized easily. It creates excellent lather with dish soap, making your cleaning routine more efficient and environmentally responsible.",
    benefits: [
      "100% plastic-free and biodegradable",
      "Naturally antimicrobial properties resist odors",
      "Tough on grease, gentle on surfaces",
      "Safe for non-stick cookware and fine china",
      "Lasts longer than traditional sponges",
      "Compostable at end of life - zero waste"
    ],
    careInstructions: [
      "Rinse thoroughly after each use and squeeze out water",
      "Store in a dry dish rack or hang to air dry",
      "Sanitize daily by microwaving damp loofah for 1 minute",
      "Alternatively, run through dishwasher top rack weekly",
      "Replace every 2-3 weeks for optimal hygiene",
      "Compost old scrubbers or use in garden as plant support"
    ],
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
    description: "Experience loofah in its purest form with our Raw Natural Loofah. This unprocessed, whole loofah is exactly as nature intended - no chemicals, no treatments, just pure Egyptian loofah plant. Perfect for purists and DIY enthusiasts who want complete control over their skincare routine. Cut it to your preferred size and shape for a truly customized bathing experience.",
    longDescription: "Harvested at peak maturity and sun-dried using traditional methods, our raw loofahs retain all their natural properties and benefits. Each loofah is unique in size and texture, offering an authentic connection to ancient Egyptian wellness traditions. Whether you use it whole for full-body exfoliation or cut it into smaller pieces for targeted care, this versatile product adapts to your needs.",
    benefits: [
      "Completely unprocessed and chemical-free",
      "Customizable - cut to any size or shape you need",
      "Most economical option - one loofah lasts months",
      "Ideal for sensitive skin and natural living enthusiasts",
      "Can be used for body care, crafts, or gardening",
      "Maximum sustainability with minimal processing"
    ],
    careInstructions: [
      "Soak in warm water for 5-10 minutes before first use to soften",
      "Cut to desired size using sharp scissors or knife",
      "Rinse thoroughly after each use and hang to dry",
      "Boil in water for 5 minutes monthly to deep clean and sanitize",
      "Replace pieces every 4-6 weeks depending on usage",
      "Store unused portions in a cool, dry place"
    ],
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
    description: "Discover superior exfoliation with our innovative Square Loofah Sponge. The geometric design isn't just aesthetically pleasing - it's engineered for optimal performance. The flat surfaces provide maximum contact with your skin, while the defined edges allow for precise exfoliation of problem areas like elbows, knees, and heels.",
    longDescription: "This premium square loofah combines traditional Egyptian craftsmanship with modern design thinking. The unique shape offers multiple grip options, ensuring comfort and control whether you're doing gentle daily cleansing or intensive exfoliation. The dense, uniform texture provides consistent results across your entire body, making it a favorite among skincare enthusiasts.",
    benefits: [
      "Flat surfaces maximize skin contact for efficient exfoliation",
      "Corners and edges perfect for targeting rough patches",
      "Multiple grip positions for comfortable handling",
      "Ideal for pre-shave exfoliation and ingrown hair prevention",
      "Excellent for massage and lymphatic drainage techniques",
      "Professional spa-quality results at home"
    ],
    careInstructions: [
      "Rinse thoroughly after use and squeeze out all water",
      "Hang or lay flat in well-ventilated area to dry",
      "Soak in warm water for 2-3 minutes before first use",
      "Deep clean weekly by soaking in baking soda solution",
      "Replace every 3-4 weeks for optimal performance",
      "Avoid twisting or wringing to maintain shape"
    ],
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
    description: "Say goodbye to unreachable spots with our ingenious Loofah Stick Scrubber. This extended-reach tool brings professional spa-quality exfoliation to every inch of your body. The ergonomic wooden handle provides comfortable grip and precise control, while the natural loofah head delivers thorough cleansing and massage to your back, shoulders, and other hard-to-reach areas.",
    longDescription: "Designed for independence and convenience, this stick scrubber eliminates the need for assistance with back care. The sturdy construction ensures stability during use, while the natural loofah head can be replaced when needed (replacement heads sold separately). Perfect for those with limited mobility, athletes needing post-workout cleansing, or anyone who values thorough, all-over body care.",
    benefits: [
      "Reaches entire back without assistance",
      "Reduces back acne and improves skin clarity",
      "Ergonomic handle prevents hand and wrist strain",
      "Ideal for elderly or those with limited mobility",
      "Provides gentle massage to relieve muscle tension",
      "Replaceable loofah head for long-term use"
    ],
    careInstructions: [
      "Rinse loofah head thoroughly after each use",
      "Hang by loop to air dry completely",
      "Keep wooden handle dry to prevent warping",
      "Soak loofah head in warm water before first use",
      "Replace loofah head every 4-6 weeks",
      "Treat wooden handle with mineral oil quarterly to maintain finish"
    ],
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
