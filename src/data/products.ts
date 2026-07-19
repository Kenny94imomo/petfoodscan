import type { Product } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: 'vb',
    name: 'Value Bites Beef Flavor Kibble',
    brand: 'Value Bites Co.',
    species: 'Dog',
    upc: '041220 876432',
    grade: 'D',
    score: 38,
    date: 'Today',
    verdict: 'Not recommended',
    summary:
      'This recipe contains BHA, a synthetic preservative classified as a possible carcinogen, and Red 40, an artificial dye with no nutritional purpose. Protein comes mostly from unnamed meat meals and corn gluten rather than named animal sources.',
    ingredients: [
      { name: 'Ground yellow corn', risk: 'caution', note: 'Low-cost filler and a common allergen for dogs' },
      { name: 'Meat & bone meal', risk: 'caution', note: 'Unnamed animal source; quality varies widely between batches' },
      { name: 'Corn gluten meal', risk: 'caution', note: 'Plant protein used to inflate the protein percentage' },
      { name: 'Animal fat (BHA preserved)', risk: 'avoid', note: 'BHA is a suspected carcinogen (IARC group 2B)' },
      { name: 'Soybean meal', risk: 'safe', note: 'Digestible plant protein at this position' },
      { name: 'Red 40', risk: 'avoid', note: 'Artificial dye linked to hypersensitivity; purely cosmetic' },
      { name: 'Salt', risk: 'safe', note: 'Normal at listed inclusion level' },
      { name: 'Vitamin E supplement', risk: 'safe', note: 'Natural antioxidant and nutrient' },
    ],
    nutrition: [
      { label: 'Crude protein', value: '21% min' },
      { label: 'Crude fat', value: '10% min' },
      { label: 'Crude fiber', value: '4.5% max' },
      { label: 'Moisture', value: '12% max' },
    ],
  },
  {
    id: 'mf',
    name: 'Chicken & Brown Rice Adult',
    brand: 'Meadow Farms',
    species: 'Dog',
    upc: '038100 170231',
    grade: 'A',
    score: 92,
    date: 'Yesterday',
    verdict: 'Excellent choice',
    summary:
      'Named animal protein leads the recipe, preserved naturally with mixed tocopherols. No artificial colors, flavors, or controversial preservatives detected.',
    ingredients: [
      { name: 'Deboned chicken', risk: 'safe', note: 'Named animal protein as first ingredient' },
      { name: 'Chicken meal', risk: 'safe', note: 'Concentrated named protein source' },
      { name: 'Brown rice', risk: 'safe', note: 'Digestible whole grain' },
      { name: 'Chicken fat (mixed tocopherols)', risk: 'safe', note: 'Named fat, naturally preserved' },
      { name: 'Dried beet pulp', risk: 'safe', note: 'Fiber source supporting digestion' },
      { name: 'Fish oil', risk: 'safe', note: 'Omega-3 source for skin and coat' },
    ],
    nutrition: [
      { label: 'Crude protein', value: '26% min' },
      { label: 'Crude fat', value: '15% min' },
      { label: 'Crude fiber', value: '4% max' },
      { label: 'Moisture', value: '10% max' },
    ],
  },
  {
    id: 'wc',
    name: 'Salmon Pâté Grain-Free',
    brand: "Whisker's Choice",
    species: 'Cat',
    upc: '058200 991245',
    grade: 'B',
    score: 78,
    date: 'Jul 14',
    verdict: 'Good with caveats',
    summary:
      'Strong named-fish protein base, but contains carrageenan, a thickener some studies associate with gut inflammation in cats.',
    ingredients: [
      { name: 'Salmon', risk: 'safe', note: 'Named animal protein as first ingredient' },
      { name: 'Fish broth', risk: 'safe', note: 'Moisture and palatability' },
      { name: 'Salmon oil', risk: 'safe', note: 'Omega-3 fatty acids' },
      { name: 'Carrageenan', risk: 'caution', note: 'Thickener associated with gut inflammation in some studies' },
      { name: 'Guar gum', risk: 'safe', note: 'Generally well tolerated at low levels' },
      { name: 'Taurine', risk: 'safe', note: 'Essential amino acid for cats' },
    ],
    nutrition: [
      { label: 'Crude protein', value: '10% min' },
      { label: 'Crude fat', value: '6% min' },
      { label: 'Crude fiber', value: '1% max' },
      { label: 'Moisture', value: '78% max' },
    ],
  },
  {
    id: 'kb',
    name: 'Crunchy Ocean Mix',
    brand: 'KittyBistro',
    species: 'Cat',
    upc: '072693 445118',
    grade: 'C',
    score: 61,
    date: 'Jul 9',
    verdict: 'Average — check flags',
    summary:
      'Acceptable protein levels but relies on generic "ocean fish meal" and includes added menadione, a synthetic vitamin K form with debated safety margins.',
    ingredients: [
      { name: 'Ocean fish meal', risk: 'caution', note: 'Unnamed fish species; sourcing unclear' },
      { name: 'Ground rice', risk: 'safe', note: 'Digestible carbohydrate' },
      { name: 'Poultry by-product meal', risk: 'caution', note: 'Variable-quality protein source' },
      { name: 'Menadione sodium bisulfite', risk: 'caution', note: 'Synthetic vitamin K3; debated safety margin' },
      { name: 'Taurine', risk: 'safe', note: 'Essential amino acid for cats' },
      { name: 'Mixed tocopherols', risk: 'safe', note: 'Natural preservative' },
    ],
    nutrition: [
      { label: 'Crude protein', value: '30% min' },
      { label: 'Crude fat', value: '11% min' },
      { label: 'Crude fiber', value: '3% max' },
      { label: 'Moisture', value: '10% max' },
    ],
  },
];

export function findProduct(id: string): Product {
  return PRODUCTS.find((p) => p.id === id) ?? PRODUCTS[0];
}

// Matches a scanned barcode value against the catalog, tolerating separators
// and the leading zero that turns a UPC-A into its EAN-13 form.
export function findProductByUpc(code: string): Product | undefined {
  const digits = code.replace(/\D/g, '').replace(/^0+/, '');
  return PRODUCTS.find((p) => p.upc.replace(/\D/g, '').replace(/^0+/, '') === digits);
}
