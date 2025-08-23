export interface Location {
    id: string;
    name: string;
    category: string;
    image: string;
    description: string;
  }
  
  export interface Vehicle {
    id: string;
    type: string;
    model: string;
    capacity: number;
    image: string;
    pricePerDay: number;
    withDriver: boolean;
    driver?: {
      id: string;
      name: string;
      rating: number;
      languages: string[];
    };
    rating: number;
    feedbacks: Feedback[];
  }
  
  export interface Guide {
    id: string;
    name: string;
    experience: number;
    languages: string[];
    image: string;
    pricePerDay: number;
    withVehicle: boolean;
    vehicle?: Vehicle;
    rating: number;
    feedbacks: Feedback[];
  }
  
  export interface Feedback {
    id: string;
    userId: string;
    userName: string;
    rating: number;
    comment: string;
    date: Date;
  }
  
  export interface Trip {
    id: string;
    userId: string;
    categoryId: string;
    status: 'planning' | 'confirmed' | 'completed' | 'cancelled';
    createdAt: Date;
    confirmedAt?: Date;
    completedAt?: Date;
    cancelledAt?: Date;
  }
  
  export interface TripDetails {
    selectedLocations: Location[];
    memberCount: number;
    petCount: number;
    visaPeriod: {
      start: Date | null;
      end: Date | null;
    };
    vehicleType?: string;
    vehicle?: Vehicle;
    guide?: Guide;
    paymentStatus: 'pending' | 'partial' | 'complete' | 'refunded';
    totalAmount: number;
    paidAmount: number;
  }