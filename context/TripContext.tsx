import React, { createContext, useState } from 'react';
import { Trip, TripDetails } from '../types/trip';

interface TripContextType {
  currentTrip: Trip | null;
  tripDetails: TripDetails | null;
  createTrip: (categoryId: string) => void;
  updateTripDetails: (details: Partial<TripDetails>) => void;
  confirmTrip: () => Promise<void>;
  clearTrip: () => void;
}

export const TripContext = createContext<TripContextType>({
  currentTrip: null,
  tripDetails: null,
  createTrip: () => {},
  updateTripDetails: () => {},
  confirmTrip: async () => {},
  clearTrip: () => {},
});

export const TripProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentTrip, setCurrentTrip] = useState<Trip | null>(null);
  const [tripDetails, setTripDetails] = useState<TripDetails | null>(null);

  const createTrip = (categoryId: string) => {
    setCurrentTrip({
      id: Date.now().toString(),
      userId: '', // TODO: Set actual userId if available
      categoryId,
      status: 'planning',
      createdAt: new Date(),
    });
    
    setTripDetails({
      selectedLocations: [],
      memberCount: 1,
      petCount: 0,
      visaPeriod: { start: null, end: null },
      vehicleType: undefined,
      vehicle: undefined,
      guide: undefined,
      paymentStatus: 'pending',
      totalAmount: 0,
      paidAmount: 0,
    });
  };

  const updateTripDetails = (details: Partial<TripDetails>) => {
    setTripDetails(prev => ({ ...prev, ...details } as TripDetails));
  };

  const confirmTrip = async () => {
    if (!currentTrip || !tripDetails) return;
    
    // Implement API call to confirm trip
    setCurrentTrip(prev => prev ? { ...prev, status: 'confirmed' } : null);
  };

  const clearTrip = () => {
    setCurrentTrip(null);
    setTripDetails(null);
  };

  return (
    <TripContext.Provider value={{ 
      currentTrip, 
      tripDetails, 
      createTrip, 
      updateTripDetails, 
      confirmTrip, 
      clearTrip 
    }}>
      {children}
    </TripContext.Provider>
  );
};