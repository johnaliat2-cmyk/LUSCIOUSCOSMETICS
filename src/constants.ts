export interface Service {
  name: string;
  price: string;
  description?: string;
}

export interface ServiceCategory {
  title: string;
  description?: string;
  services: Service[];
  type: 'filler' | 'botox' | 'advanced-botox' | 'treatments';
}

export const SERVICES_DATA: ServiceCategory[] = [
  {
    title: 'Dermal Fillers',
    type: 'filler',
    description: 'Precision volume enhancement and structural contouring using premium hyaluronic acid.',
    services: [
      { name: '0.5ml lip filler', price: '£50' },
      { name: '1.1ml lip filler', price: '£80' },
      { name: 'Chin filler', price: '£90' },
      { name: 'Cheek filler', price: '£110' },
      { name: 'Jaw filler', price: '£90' },
    ],
  },
  {
    title: 'Botox',
    type: 'botox',
    description: 'Neuromodulators for a smooth, refreshed appearance focusing on dynamic wrinkles.',
    services: [
      { name: '1 area of botox', price: '£90', description: 'Forehead, frown lines, or crows feet' },
      { name: '2 areas of botox', price: '£120', description: 'Forehead, frown lines, and crows feet combinations' },
      { name: '3 areas of Botox', price: '£150', description: 'Full upper face rejuvenation' },
    ],
  },
  {
    title: 'Advanced Botox',
    type: 'advanced-botox',
    description: 'Specialized techniques for facial slimming, lifting, and precision corrections.',
    services: [
      { name: 'Brow lift', price: '£90' },
      { name: 'Bunny lines', price: '£100' },
      { name: 'Nose slimming', price: '£120' },
      { name: 'Jowl lift', price: '£100' },
      { name: 'Lip flip', price: '£90' },
      { name: 'DAO', price: '£90' },
      { name: 'Neck lift', price: '£150' },
      { name: 'Underarm sweating', price: '£150' },
      { name: 'Jaw slimming', price: '£90' },
      { name: 'Masseter', price: '£90' },
    ],
  },
  {
    title: 'Treatments & Wellness',
    type: 'treatments',
    description: 'Rejuvenating skin boosters and essential vitamin injections.',
    services: [
      { name: 'Lumi eyes', price: '£70', description: 'Under-eye skin booster' },
      { name: 'B12 injection', price: '£25' },
      { name: 'Fat dissolving', price: '£25' },
      { name: 'Skin boosters', price: '£55' },
      { name: 'Hayfever injection', price: '£45' },
    ],
  },
];

export const CONTACT_INFO = {
  instagram: 'Luscious_cosmeticsx',
  phone: '07474459008',
  facebook: 'https://www.facebook.com/profile.php?id=61573887310460',
  whatsapp: 'https://wa.me/447474459008',
  instagramUrl: 'https://www.instagram.com/Luscious_cosmeticsx',
};

export const TESTIMONIALS = [
  {
    name: "Sarah J.",
    text: "I was nervous about my first lip filler, but the team at Luscious Cosmetics made me feel so at ease. The results are incredibly natural and exactly what I wanted!",
    rating: 5,
    service: "Lip Filler"
  },
  {
    name: "Emma W.",
    text: "Professional, clean, and a beautiful result. Best Botox I've ever had. No frozen face, just a much more refreshed look.",
    rating: 5,
    service: "Botox"
  },
  {
    name: "Michael R.",
    text: "Highly recommend for B12 injections and skin boosters. Feel so much more energized and my skin has a healthy glow.",
    rating: 5,
    service: "B12 & Skin Boosters"
  },
  {
    name: "Olivia T.",
    text: "The cheek filler has given me such a nice lift. The consultation was thorough and I felt very well looked after.",
    rating: 5,
    service: "Cheek Filler"
  }
];
