# Proyecto Final NODE 2026

## Resumen
Este proyecto corresponde al primer cuatrimestre de NODE 2026 y desarrolla una API REST con autenticación, rutas protegidas, consultas a Firebase y uso de JWT.

## Introducción
El proyecto implementa un backend en Node.js que integra Firebase como base de datos y sistema de autenticación. Se aplican buenas prácticas de seguridad y organización de rutas.

## Objetivo
- Generar una API REST con:
  - Autenticación mediante Firebase y JWT  
  - Rutas protegidas con middleware de validación  
  - CRUD de productos en Firestore  

## Autenticación
- **Endpoint:** `POST /api/auth/login`  
- **Devuelve:** Bearer Token (JWT)  
- **Credenciales de prueba:**  
  - Usuario: `admin`  
  - Contraseña: `123`  

## Rutas de Productos
- `GET /api/products` → Obtiene todos los productos  
- `GET /api/products/:id` → Obtiene producto por ID  
- `POST /api/products/create` → Crea un producto  
- `DELETE /api/products/:id` → Elimina producto por ID  

## Modelado
**Producto**
```js
{
  nombre: String,
  precio: Number
}

Notas importantes
La credencial de firebase-admin no será subida al repositorio público.

El sistema puede verificarse desplegado en Render en la siguiente URL:

Code
https://<tu-app>.onrender.com
