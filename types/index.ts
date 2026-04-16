export interface User {
  id: string;
  name: string;
  email: string;
  role: "user" | "vendor";
  savedVendors?: string[]; // Vendor IDs
}

export interface Vendor {
  id: string;
  ownerId: string;
  name: string;
  description: string;
  category: string;
  image?: string;
  location: {
    lat: number;
    lng: number;
    address: string;
  };
  isOpen: boolean;
  rating: number;
  numRatings: number;
  phone: string;
  menu?: MenuItem[];
  updatedAt: string;
}

export interface MenuItem {
  id: string;
  name: string;
  price: number;
  description?: string;
  image?: string;
  isAvailable: boolean;
  isVeg: boolean;
}

export interface Location {
  lat: number;
  lng: number;
}
