// generamos el controlador de productos, que se encargará de manejar las solicitudes relacionadas con los productos, como obtener la lista de productos, agregar un nuevo producto, actualizar un producto existente y eliminar un producto.

import { getAllProducts, getProductById, addProduct, deleteProductById } from './service.js';
import { Product } from './model.js';

// Controlador para obtener todos los productos
export const getProductos = async (req, res) => {
    try {
        const products = await getAllProducts();
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los productos' });
    }
};

// Controlador para obtener un producto por ID
export const getProductoById = async (req, res) => {
    //obtener el ID del producto desde products/:id
    const { id } = req.params;

    try {
        const product = await getProductById(id);
        if (product) {
            res.json(product);
        } else {
            res.status(404).json({ error: 'Producto no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el producto', details: error.message });
    }
};

// Controlador para crear un nuevo producto
export const createProducto = async (req, res) => {
    const { name, price } = req.body;
    // usamos model product para crear un nuevo producto
    const product = new Product( name, price );
    if (!name || !price) {
        return res.status(400).json({ error: 'El nombre y el precio son obligatorios' });
    }
    // Validar que no sean undefined
    if (name === undefined || price === undefined) {
        return res.status(400).json({ error: "Campos requeridos faltantes" });
    }

    try {
        const newProduct = await addProduct(product);
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(500).json({ error: 'Error al crear el producto', details: error.message });
    }
};

// Controlador para eliminar un producto por ID
export const deleteProducto = async (req, res) => {
    const { id } = req.params;
    try {
        const deleted = await deleteProductById(id);
        if (deleted) {
            res.json({ message: 'Producto eliminado correctamente' });
        } else {
            res.status(404).json({ error: 'Producto no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar el producto' });
    }
};
