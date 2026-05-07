// GET /api/products devuelve todos los productos.

// GET /api/products/:id devuelve el producto con el ID indicado.

// POST /api/products/create recibe en el cuerpo (body) de la petición la información sobre el nuevo producto para ser guardado en el servicio de datos en la nube.

// DELETE /api/products/:id elimina el producto con el ID indicado.

import express from 'express';
import { getProductos, getProductoById, createProducto, deleteProducto } from './controller.js';

const router = express.Router();

// Ruta para obtener todos los productos
router.get('/products', getProductos);

// Ruta para obtener un producto por ID
router.get('/products/:id', getProductoById);

// Ruta para crear un nuevo producto
router.post('/products/create', createProducto);

// Ruta para eliminar un producto
router.delete('/products/:id', deleteProducto);

// agregamos ruta no encontrada
router.use((req, res) => {
    res.status(404).json({ error: 'Ruta no encontrada' });
});

export default router;
