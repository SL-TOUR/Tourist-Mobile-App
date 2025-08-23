import {
    addDoc,
    collection,
    doc,
    getDoc,
    getDocs,
    orderBy,
    query,
    updateDoc,
    where,
} from 'firebase/firestore';
import { Trip, TripDetails } from '../types/trip';
import { firestore } from './api';

export const trips = {
  async createTrip(userId: string, tripData: Partial<Trip>): Promise<Trip> {
    try {
      const tripRef = await addDoc(collection(firestore, 'trips'), {
        userId,
        ...tripData,
        createdAt: new Date(),
        status: 'planning',
      });
      return { id: tripRef.id, ...tripData } as Trip;
    } catch (error: any) {
      throw new Error('Trip creation failed: ' + (error instanceof Error ? error.message : String(error)));
    }
  },

  async updateTrip(tripId: string, updates: Partial<Trip>): Promise<void> {
    try {
      const tripDocRef = doc(firestore, 'trips', tripId);
      await updateDoc(tripDocRef, updates);
    } catch (error: any) {
      throw new Error('Trip update failed: ' + (error instanceof Error ? error.message : String(error)));
    }
  },

  async getTrip(tripId: string): Promise<Trip | null> {
    try {
      const tripDocRef = doc(firestore, 'trips', tripId);
      const tripDoc = await getDoc(tripDocRef);
      return tripDoc.exists() ? { id: tripDoc.id, ...tripDoc.data() } as Trip : null;
    } catch (error: any) {
      throw new Error('Failed to get trip: ' + (error instanceof Error ? error.message : String(error)));
    }
  },

  async getUserTrips(userId: string): Promise<Trip[]> {
    try {
      const tripsQuery = query(
        collection(firestore, 'trips'),
        where('userId', '==', userId),
        orderBy('createdAt', 'desc')
      );
      const snapshot = await getDocs(tripsQuery);
      return snapshot.docs.map((doc: any) => ({ id: doc.id, ...doc.data() } as Trip));
    } catch (error: any) {
      throw new Error('Failed to get user trips: ' + (error instanceof Error ? error.message : String(error)));
    }
  },

  async confirmTrip(tripId: string, details: TripDetails): Promise<void> {
    try {
      const tripDocRef = doc(firestore, 'trips', tripId);
      await updateDoc(tripDocRef, {
        status: 'confirmed',
        details,
        confirmedAt: new Date(),
      });
    } catch (error: any) {
      throw new Error('Trip confirmation failed: ' + (error instanceof Error ? error.message : String(error)));
    }
  },

  async cancelTrip(tripId: string): Promise<void> {
    try {
      const tripDocRef = doc(firestore, 'trips', tripId);
      await updateDoc(tripDocRef, {
        status: 'cancelled',
        cancelledAt: new Date(),
      });
    } catch (error: any) {
      throw new Error('Trip cancellation failed: ' + (error instanceof Error ? error.message : String(error)));
    }
  },
};