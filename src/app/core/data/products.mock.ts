import { Product } from '../models/product.model';

export const MOCK_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Ghost Pepper Powder',
    price: 6.66,
    shortDescription: 'A lingering heat that will haunt you',
    longDescription: `Ghost Pepper, or Bhut Jolokia, is a true legend in the world of heat. Hailing from Northeast India, it was one of the first peppers to breach the 1 million Scoville mark, and its reputation is absolutely earned. Its burn isn't just intense—it's a slow, creeping, all-consuming fire.\n\nDon't be fooled by its initial, delicate sweetness and fruity notes. After about 30-45 seconds, the pepper's true nature is unleashed: an intense, merciless wave of fire that will make you question all of your life choices.\n\nOur powder is hermetically sealed to preserve maximum freshness and demonic potency. Use it to craft extremely hot chili, sauces, or marinades. Start with microscopic amounts. You have been warned.`,
    imageUrl: '/images/products/card1.png',
    category: 'Powders',
    stock: 18,
    specifications: {
      origin: 'Northeast India',
      scovilleHeatUnits: '855,000 – 1,041,427',
      flavorProfile: 'Deceptively sweet, fruity, then overwhelmingly fiery.',
      recommendedUses: 'Extreme sauces, chili cook-offs, dares.',
      warning: 'Use in a well-ventilated area. Keep away from children, pets, and common sense.'
    },
    reviews: []
  },
  {
    id: '2',
    name: 'Mango Habanero Mercy Sauce',
    price: 8.50,
    shortDescription: 'Lures you in with sweetness, then bites',
    longDescription: `Tropical mangoes blended with orange habaneros create a lush, tropical facade that quickly gives way to a fiery tropical punch. It's the ultimate gateway drug into high-scoville sauces—sweet enough to enjoy, hot enough to respect.`,
    imageUrl: '/images/products/card2.png',
    category: 'Sauces',
    stock: 25,
    specifications: {
      origin: 'Mexico / Caribbean',
      scovilleHeatUnits: '100,000 – 350,000',
      flavorProfile: 'Luscious mango sweetness followed by a bright habanero sting.',
      recommendedUses: 'Tacos, grilled chicken, seafood, tropical marinades.',
      warning: 'May cause unexpected sweat beads during peaceful lunches.'
    },
    reviews: []
  },
  {
    id: '3',
    name: 'Trinidad Scorpion Venom',
    price: 12.99,
    shortDescription: "A blistering sting you won't forget",
    longDescription: `Harvested directly from the Moruga region of Trinidad, this sauce hits with instantaneous, razor-sharp heat. Unlike slow-burn peppers, the Trinidad Scorpion attacks the back of the throat instantly.`,
    imageUrl: '/images/products/card3.png',
    category: 'Extreme Sauces',
    stock: 12,
    specifications: {
      origin: 'Trinidad and Tobago',
      scovilleHeatUnits: '1,200,000 – 2,000,000',
      flavorProfile: 'Floral aroma with a needle-like, agonizing heat spike.',
      recommendedUses: 'Diluting into large pots of stew, extreme wing challenges.',
      warning: 'Do not ingest near open flames or fragile pride.'
    },
    reviews: []
  },
  {
    id: '4',
    name: 'Whole Carolina Reapers (10-pack)',
    price: 9.99,
    shortDescription: 'A bag full of painful mistakes',
    longDescription: `Dehydrated whole pod Carolina Reapers, wrinkled like ancient demons. Packed with oil glands carrying record-breaking capsaicin levels. Rehydrate in hot water to unleash pure chaos in your culinary creations.`,
    imageUrl: '/images/products/card4.png',
    category: 'Whole Peppers',
    stock: 10,
    specifications: {
      origin: 'South Carolina, USA',
      scovilleHeatUnits: '1,500,000 – 2,200,000',
      flavorProfile: 'Smoky, earthy, followed by sheer oblivion.',
      recommendedUses: 'Homemade hot sauce extraction, culinary regret.',
      warning: 'Always handle with gloves and eye protection.'
    },
    reviews: []
  },
  {
    id: '5',
    name: "Crybaby's Cayenne Sauce",
    price: 5.00,
    shortDescription: 'A classic way to learn your lesson',
    longDescription: `Tangy, vinegary, and infused with aged red cayenne peppers. Designed for daily table use, offering just enough kick to make beginners cry and spice veterans smile nostalgically.`,
    imageUrl: '/images/products/card5.png',
    category: 'Sauces',
    stock: 40,
    specifications: {
      origin: 'Louisiana, USA',
      scovilleHeatUnits: '30,000 – 50,000',
      flavorProfile: 'Vinegar-forward, salty, crisp pepper heat.',
      recommendedUses: 'Eggs, pizza, fried chicken, Bloody Marys.',
      warning: 'Mild to heat lovers, but will cause tears for novices.'
    },
    reviews: []
  },
  {
    id: '6',
    name: "Satan's Lollipops (3-pack)",
    price: 7.77,
    shortDescription: 'The sweetest suffering on a stick',
    longDescription: `Handcrafted hard candy infused with pure capsaicin oil and cherry flavor. It starts as a pleasant sweet treat and slowly transforms into a endurance test as the candy dissolves.`,
    imageUrl: '/images/products/card6.png',
    category: 'Sweets',
    stock: 15,
    specifications: {
      origin: 'Infernal Confectioneries',
      scovilleHeatUnits: '500,000',
      flavorProfile: 'Synthetic cherry fading into tongue-numbing fire.',
      recommendedUses: 'Pranking friends, testing raw willpower.',
      warning: 'Keep away from children and unattended candy jars.'
    },
    reviews: []
  },
  {
    id: '7',
    name: 'Deceptively Mild Ancho Powder',
    price: 4.20,
    shortDescription: 'Smoky, gentle, and full of lies',
    longDescription: `Sun-dried poblano chilies ground into a rich mahogany powder. Deeply aromatic with raisins and cocoa notes. It claims to be mild, but add enough and the subtle heat builds up discreetly.`,
    imageUrl: '/images/products/card7.png',
    category: 'Powders',
    stock: 50,
    specifications: {
      origin: 'Puebla, Mexico',
      scovilleHeatUnits: '1,000 – 2,000',
      flavorProfile: 'Smoky, sweet raisin, earthy mild warmth.',
      recommendedUses: 'Enchilada sauce, rub for roasted meats, Mexican mole.',
      warning: 'Contains zero actual danger, only delicious flavor.'
    },
    reviews: []
  },
  {
    id: '8',
    name: 'The Unforgiving Hot Sauce',
    price: 11.99,
    shortDescription: 'Made with scorpion peppers and spite',
    longDescription: `Fermented red scorpion peppers combined with garlic, lime, and pure malice. It doesn't wash away with milk; it lingers to remind you of your hubris for hours.`,
    imageUrl: '/images/products/card8.png',
    category: 'Extreme Sauces',
    stock: 20,
    specifications: {
      origin: 'The Scoville Vaults',
      scovilleHeatUnits: '900,000 – 1,100,000',
      flavorProfile: 'Garlicky, sharp acidity followed by unrelenting burn.',
      recommendedUses: 'Barbecue glazes, terrifying dips.',
      warning: 'Will destroy your tastebuds for the next 24 hours.'
    },
    reviews: []
  },
  {
    id: '9',
    name: "Satan's Kiss Chilies",
    price: 6.20,
    shortDescription: 'Cute round peppers with a cruel punch',
    longDescription: `Whole small round chilies pickled in spiced brine. Known in Italy as "Piccante Calabrese", these spherical heat bombs pack a fiery surprise inside a crunchy bite.`,
    imageUrl: '/images/products/card9.png',
    category: 'Pickled & Fresh',
    stock: 22,
    specifications: {
      origin: 'Calabria, Italy',
      scovilleHeatUnits: '40,000 – 50,000',
      flavorProfile: 'Pickled acidity, crisp texture, punchy mid-level heat.',
      recommendedUses: 'Stuffed with anchovies/cheese, antipasto platters.',
      warning: 'Do not bite down hastily without a napkin ready.'
    },
    reviews: []
  },
  {
    id: '10',
    name: 'Five-Alarm Chili Starter Kit',
    price: 19.50,
    shortDescription: 'For questioning all your life choices',
    longDescription: `A curated kit containing whole cumin seeds, dark chili powder, crushed habaneros, and a sealed tube of Carolina Reaper powder to adjust the heat to catastrophic levels.`,
    imageUrl: '/images/products/card10.png',
    category: 'Kits',
    stock: 10,
    specifications: {
      origin: 'Curated Selection',
      scovilleHeatUnits: 'Customizable (up to 1,500,000 SHU)',
      flavorProfile: 'Earthy, savory, deeply spiced and potentially lethal.',
      recommendedUses: 'Competition chili cook-offs, party survival games.',
      warning: 'Add the Reaper powder tube last and sparingly.'
    },
    reviews: []
  },
  {
    id: '11',
    name: 'The Abyss - Pure Evil Extract',
    price: 25.00,
    shortDescription: 'One drop is a crime. Use with caution',
    longDescription: `Laboratory-grade capsaicin resin extract. This isn't food—it is an industrial hazard bottled in glass with a dropper cap. Designed solely as a food additive to raise heat without altering flavor.`,
    imageUrl: '/images/products/card11.png',
    category: 'Extracts',
    stock: 5,
    specifications: {
      origin: 'Classified Facility',
      scovilleHeatUnits: '9,000,000',
      flavorProfile: 'No flavor—only instant physical agony.',
      recommendedUses: 'Food industry heat adjustment, science experiments.',
      warning: 'DO NOT APPLY DIRECTLY TO TONGUE. Wear eye protection and gloves.'
    },
    reviews: []
  },
  {
    id: '12',
    name: '"Why Did I Do This?" Hot Salt',
    price: 16.20,
    shortDescription: 'A salty, crunchy path to pure regret',
    longDescription: `Coarse Himalayan pink salt crystals infused with Ghost Pepper and Reaper extracts. Sprinkle it over steak, french fries, or popcorn to instantly convert mundane snacks into hazardous culinary events.`,
    imageUrl: '/images/products/card12.png',
    category: 'Salts & Rubs',
    stock: 35,
    specifications: {
      origin: 'Himalayas / USA',
      scovilleHeatUnits: '300,000',
      flavorProfile: 'Savory mineral salt followed by intense fiery crunch.',
      recommendedUses: 'Finishing salt for meats, margarita rims, spicy popcorn.',
      warning: 'Avoid sneezing while applying to food.'
    },
    reviews: []
  }
];