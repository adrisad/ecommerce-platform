import { Inject, Injectable } from '@nestjs/common';
import { FirebaseApp } from 'firebase/app';
import {
  getFirestore,
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  Firestore
} from 'firebase/firestore';

@Injectable()
export class ProductService {
  private db: Firestore;

  constructor(
    @Inject('FIREBASE_APP') private readonly firebaseApp: FirebaseApp,
  ) {
    this.db = getFirestore(this.firebaseApp);
  }

  async createProduct(data: any): Promise<string> {
    const docRef = await addDoc(collection(this.db, 'products'), data);
    return docRef.id;
  }

  async getAllProducts(): Promise<any[]> {
    const querySnapshot = await getDocs(collection(this.db, 'products'));
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  }

  async getProductById(id: string): Promise<any> {
    const docRef = doc(this.db, 'products', id);
    const docSnap = await getDoc(docRef);
    if (!docSnap.exists()) {
      throw new Error(`Product with id ${id} not found`);
    }
    return { id: docSnap.id, ...docSnap.data() };
  }

  async updateProduct(id: string, data: any): Promise<void> {
    const docRef = doc(this.db, 'products', id);
    await updateDoc(docRef, data);
  }

  async deleteProduct(id: string): Promise<void> {
    const docRef = doc(this.db, 'products', id);
    await deleteDoc(docRef);
  }
}
