import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
} from 'firebase/auth';
import {
    doc,
    getDoc,
    setDoc,
    updateDoc
} from 'firebase/firestore';
import { User } from '../types/auth';
import { firebaseAuth, firestore } from './api';

export const auth = {
  async login(email: string, password: string): Promise<User> {
    try {
      const userCredential = await signInWithEmailAndPassword(firebaseAuth, email, password);
      const user = userCredential.user;
      const userDocRef = doc(firestore, 'users', user.uid);
      const userDoc = await getDoc(userDocRef);
      if (!userDoc.exists()) {
        throw new Error('User data not found');
      }
      return { id: user.uid, ...userDoc.data() } as User;
    } catch (error: any) {
      throw new Error('Login failed: ' + (error instanceof Error ? error.message : String(error)));
    }
  },

  async signup(userData: any): Promise<User> {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        firebaseAuth,
        userData.email,
        userData.password
      );
      const user = userCredential.user;
      const userToSave = {
        firstName: userData.firstName,
        lastName: userData.lastName,
        email: userData.email,
        country: userData.country,
        languages: userData.languages,
        contactNumber: userData.contactNumber,
        createdAt: new Date(),
      };
      const userDocRef = doc(firestore, 'users', user.uid);
      await setDoc(userDocRef, userToSave);
      return { id: user.uid, ...userToSave };
    } catch (error: any) {
      throw new Error('Signup failed: ' + (error instanceof Error ? error.message : String(error)));
    }
  },

  async logout(): Promise<void> {
    try {
      await signOut(firebaseAuth);
    } catch (error: any) {
      throw new Error('Logout failed: ' + (error instanceof Error ? error.message : String(error)));
    }
  },

  async updateUser(userData: Partial<User>): Promise<User> {
    const user = firebaseAuth.currentUser;
    if (!user) throw new Error('No user logged in');
    try {
      const userDocRef = doc(firestore, 'users', user.uid);
      await updateDoc(userDocRef, userData);
      const userDoc = await getDoc(userDocRef);
      return { id: user.uid, ...userDoc.data() } as User;
    } catch (error: any) {
      throw new Error('Update failed: ' + (error instanceof Error ? error.message : String(error)));
    }
  },

  onAuthStateChanged(callback: (user: User | null) => void) {
    return onAuthStateChanged(firebaseAuth, async (firebaseUser: any) => {
      if (firebaseUser) {
        const userDocRef = doc(firestore, 'users', firebaseUser.uid);
        const userDoc = await getDoc(userDocRef);
        callback(userDoc.exists() ? { id: firebaseUser.uid, ...userDoc.data() } as User : null);
      } else {
        callback(null);
      }
    });
  },
};