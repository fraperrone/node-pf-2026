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

    const docRef = db.collection('products').doc(id);
    const docSnap = await docRef.get();
    if (docSnap.exists) {
        return { id: docSnap.id, ...docSnap.data() };
    } else {
        return null;
    }
};

// Función para agregar un nuevo producto
export const addProduct = async (productData) => {
    console.log("Agregando producto:", productData.toJSON());
    const docRef = await db.collection('products').add(productData.toJSON());
    return { id: docRef.id, ...productData.toJSON() };
};

// Función para eliminar un producto por ID
export const deleteProductById = async (id) => {

    const docRef = db.collection('products').doc(id);
    await docRef.delete();
    return true;
   
};
