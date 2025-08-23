export interface User {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    country?: string;
    languages?: string[];
    contactNumber?: string;
    profileImage?: string;
    createdAt: Date;
  }
  
  export interface AuthState {
    user: User | null;
    loading: boolean;
    error: string | null;
  }