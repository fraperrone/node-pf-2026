// declaramos el servicio de productos para firebase
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, addDoc, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../firebase/auth.js';

export const getAllProducts = async () => {
    try {
    const snapshot = await db.collection("products").get();
    if (snapshot.empty) {
      console.log("No hay productos en la colección");
      return [];
    }
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("Error al obtener productos:", error);
    throw error;
  }
};

// Función para obtener un producto por ID
export const getProductById = async (id) => {

    throw new Error('Función no implementada');

    const docRef = doc(db, 'products', id);
    const snapshot = await getDoc(docRef);
    if (snapshot.exists()) {
        return { id: snapshot.id, ...snapshot.data() };
    }
    return null;
};

// Función para agregar un nuevo producto
export const addProduct = async (productData) => {
    throw new Error('Función no implementada');

    const docRef = await addDoc(productsCollection, productData);
    return { id: docRef.id, ...productData };
};

// Función para eliminar un producto por ID
export const deleteProductById = async (id) => {
    throw new Error('Función no implementada');

    const docRef = doc(db, 'products', id);
    await deleteDoc(docRef);
    return true;
};
