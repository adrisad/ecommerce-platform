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
import { Product } from '../types/product.interface';

@Injectable()
export class ProductService {
  private db: Firestore;

  constructor(
    @Inject('FIREBASE_APP') private readonly firebaseApp: FirebaseApp,
  ) {
    this.db = getFirestore(this.firebaseApp);
  }

  async createProduct(data: Product): Promise<string> {
    try {
      const docRef = await addDoc(collection(this.db, 'products'), data);
      return docRef.id;
    } catch (error) {
      console.error('Error al crear el producto:', error);
      throw new Error('No se pudo crear el producto. Intenta nuevamente.');
    }
  }

  async getAllProducts(): Promise<Product[]> {
    try {
      const querySnapshot = await getDocs(collection(this.db, 'products'));
      return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Product));
    } catch (error) {
      console.error('Error al obtener los productos:', error);
      throw new Error('No se pudieron obtener los productos. Intenta nuevamente.');
    }
  }

  async getProductById(id: string): Promise<Product> {
    try {
      const docRef = doc(this.db, 'products', id);
      const docSnap = await getDoc(docRef);

      if (!docSnap.exists()) {
        throw new Error(`Producto con id ${id} no encontrado`);
      }

      return { id: docSnap.id, ...docSnap.data() } as Product;
    } catch (error) {
      console.error(`Error al obtener el producto con id ${id}:`, error);
      throw new Error('No se pudo obtener el producto. Intenta nuevamente.');
    }
  }

  async updateProduct(id: string, data: Partial<Product>): Promise<void> {
    try {
      const docRef = doc(this.db, 'products', id);
      await updateDoc(docRef, data);
    } catch (error) {
      console.error(`Error al actualizar el producto con id ${id}:`, error);
      throw new Error('No se pudo actualizar el producto. Intenta nuevamente.');
    }
  }

  async deleteProduct(id: string): Promise<void> {
    try {
      const docRef = doc(this.db, 'products', id);
      await deleteDoc(docRef);
    } catch (error) {
      console.error(`Error al eliminar el producto con id ${id}:`, error);
      throw new Error('No se pudo eliminar el producto. Intenta nuevamente.');
    }
  }
}
