export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string; // Lucide icon name
  features: string[];
  priceRange: string;
  processingTime: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  categoryLabel: string;
  image: string;
  description: string;
  client: string;
  year: string;
  techStack: string[];
  liveUrl?: string;
}

export interface Article {
  id: string;
  title: string;
  category: string;
  summary: string;
  content: string;
  date: string;
  readTime: string;
  author: string;
  image: string;
}

export interface Career {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string; // Full-time, Remote, etc.
  salaryRange: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  text: string;
  rating: number;
  avatar: string;
}
