import saree1 from '../assets/sarees/saree1.png';
import saree2 from '../assets/sarees/saree2.png';
import saree3 from '../assets/sarees/saree3.png';
import saree4 from '../assets/sarees/saree4.png';
import dress1 from '../assets/dresses/dress1.png';
import dress2 from '../assets/dresses/dress2.png';
import material1 from '../assets/dress_materials/material1.png';
import material2 from '../assets/dress_materials/material2.png';
import lehenga1 from '../assets/lehengas/lehenga1.png';
import lehenga2 from '../assets/lehengas/lehenga2.png';

export const products = [
  // ── SAREES: SEMI BANARASI ──
  {
    id: 1,
    category: 'sarees',
    name: "Midnight Bloom Silk Saree",
    price: 3499,
    fabric: "semi Banarasi Silk",
    detailLabel: "Length",
    detailValue: "6.5 m (with blouse)",
    color: "Deep Maroon & Gold",
    description: "A stunning semi Banarasi silk saree with intricate zari work, perfect for weddings and grand festive occasions.",
    image: saree1,
  },
  {
    id: 13,
    category: 'sarees',
    name: "Royal Crimson Banarasi Saree",
    price: 3799,
    fabric: "semi Banarasi Silk",
    detailLabel: "Length",
    detailValue: "6.5 m (with blouse)",
    color: "Crimson & Gold",
    description: "Luxurious red Banarasi silk saree featuring grand golden pallu patterns and elegant border weaves.",
    image: saree2,
  },

  // ── SAREES: SEMI TUSSAR ──
  {
    id: 2,
    category: 'sarees',
    name: "Royal Emerald Tussar",
    price: 4599,
    fabric: "semi Tussar Silk",
    detailLabel: "Length",
    detailValue: "6.2 m (with blouse)",
    color: "Emerald Green",
    description: "Authentic semi Tussar silk saree featuring traditional borders and a rich textured weave.",
    image: saree2,
  },
  {
    id: 14,
    category: 'sarees',
    name: "Golden Honey Tussar Saree",
    price: 4299,
    fabric: "semi Tussar Silk",
    detailLabel: "Length",
    detailValue: "6.2 m (with blouse)",
    color: "Honey Gold",
    description: "Warm honey gold semi Tussar silk saree with sleek copper borders and detailed matching weaves.",
    image: saree1,
  },

  // ── SAREES: ORGANZA ──
  {
    id: 3,
    category: 'sarees',
    name: "Pastel Rose Organza Saree",
    price: 2199,
    fabric: "Organza",
    detailLabel: "Length",
    detailValue: "5.5 m",
    color: "Pastel Pink",
    description: "Lightweight and ethereal organza saree with delicate floral embroidery for modern elegance.",
    image: saree3,
  },
  {
    id: 15,
    category: 'sarees',
    name: "Lilac Dream Organza Saree",
    price: 2399,
    fabric: "Organza",
    detailLabel: "Length",
    detailValue: "5.5 m",
    color: "Lilac Lavender",
    description: "Exquisite lavender-colored organza saree featuring beautiful thread-embroidered border designs.",
    image: saree4,
  },

  // ── SAREES: MUL COTTON ──
  {
    id: 4,
    category: 'sarees',
    name: "Golden Dawn Mul Cotton",
    price: 2899,
    fabric: "mul cotton",
    detailLabel: "Length",
    detailValue: "6.0 m",
    color: "Metallic Gold",
    description: "A glowing and comfortable mul cotton saree that beautifully catches the light, ideal for evening receptions.",
    image: saree4,
  },
  {
    id: 16,
    category: 'sarees',
    name: "Indigo Block Print Mul Cotton",
    price: 2599,
    fabric: "mul cotton",
    detailLabel: "Length",
    detailValue: "6.0 m",
    color: "Indigo Blue",
    description: "Traditional indigo block print mul cotton saree, extremely soft and breathable for daily luxury.",
    image: saree3,
  },

  // ── SAREES: CHINON SILK ──
  {
    id: 11,
    category: 'sarees',
    name: "Crimson Bloom Chinon Saree",
    price: 2999,
    fabric: "chinon silk",
    detailLabel: "Length",
    detailValue: "6.3 m (with blouse)",
    color: "Crimson Red",
    description: "Elegant chinon silk saree with delicate borders and digital prints, perfect for festive wear.",
    image: saree1,
  },
  {
    id: 17,
    category: 'sarees',
    name: "Emerald Floral Chinon Saree",
    price: 3199,
    fabric: "chinon silk",
    detailLabel: "Length",
    detailValue: "6.3 m (with blouse)",
    color: "Emerald Green",
    description: "Vibrant emerald chinon silk saree with luxurious floral motifs and gold lace outlines.",
    image: saree2,
  },

  // ── SAREES: DOLA SILK ──
  {
    id: 12,
    category: 'sarees',
    name: "Amber Glaze Dola Saree",
    price: 3299,
    fabric: "dola silk",
    detailLabel: "Length",
    detailValue: "6.2 m (with blouse)",
    color: "Amber Yellow",
    description: "Rich dola silk saree featuring traditional zari weaving and an elegant designer pallu.",
    image: saree2,
  },
  {
    id: 18,
    category: 'sarees',
    name: "Ruby Red Weaving Dola Saree",
    price: 3499,
    fabric: "dola silk",
    detailLabel: "Length",
    detailValue: "6.2 m (with blouse)",
    color: "Ruby Red",
    description: "Grand ruby red dola silk saree featuring heavy jacquard weaving patterns and gold detailing.",
    image: saree3,
  },

  // ── DRESSES ──
  {
    id: 5,
    category: 'dresses',
    name: "Lilac Bliss Anarkali Gown",
    price: 3899,
    fabric: "Georgette & Silk",
    detailLabel: "Size",
    detailValue: "M, L, XL, XXL",
    color: "Lilac Pink",
    description: "An exquisite lilac pink Anarkali gown with gorgeous hand-embroidered details and an elegant dupatta.",
    image: dress1,
  },
  {
    id: 6,
    category: 'dresses',
    name: "Emerald Queen Ethnic Gown",
    price: 4299,
    fabric: "Premium Silk Blend",
    detailLabel: "Size",
    detailValue: "S, M, L, XL",
    color: "Emerald Green",
    description: "Make a statement with this premium emerald green ethnic gown with gold embellishments and a matching dupatta.",
    image: dress2,
  },

  // ── DRESS MATERIALS ──
  {
    id: 7,
    category: 'dress_materials',
    name: "Lavender Heritage Suit Material",
    price: 2499,
    fabric: "Chanderi Silk",
    detailLabel: "Cut",
    detailValue: "2.5m Top, 2m Bottom, 2.25m Dupatta",
    color: "Lavender & Gold",
    description: "Unstitched luxury Chanderi silk suit material with intricate handloom motifs and a matching border.",
    image: material1,
  },
  {
    id: 8,
    category: 'dress_materials',
    name: "Indigo Harmony Cotton Material",
    price: 1899,
    fabric: "100% Handblock Cotton",
    detailLabel: "Cut",
    detailValue: "2.5m Top, 2.5m Bottom, 2.4m Dupatta",
    color: "Indigo Blue",
    description: "Beautifully printed unstitched cotton suit material using traditional handblock print techniques, perfect for daily wear.",
    image: material2,
  },

  // ── LEHENGAS ──
  {
    id: 9,
    category: 'lehengas',
    name: "Royal Crimson Zardozi Lehenga",
    price: 9899,
    fabric: "Velvet & Net Dupatta",
    detailLabel: "Type",
    detailValue: "Semi-Stitched",
    color: "Crimson Red",
    description: "A showstopping bridal red lehenga choli featuring heavy Zardozi hand embroidery and a delicate net dupatta.",
    image: lehenga1,
  },
  {
    id: 10,
    category: 'lehengas',
    name: "Mint Whisper Mirror Lehenga",
    price: 7499,
    fabric: "Georgette with Mirror",
    detailLabel: "Type",
    detailValue: "Semi-Stitched",
    color: "Mint Green",
    description: "A contemporary mint green lehenga with dazzling mirror-work accents, ideal for sangeet and wedding ceremonies.",
    image: lehenga2,
  }
];
